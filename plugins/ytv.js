let limit = 50
const ytdl = require("ytdl-core")
const yts = require("yt-search")
let fetch = require('node-fetch')
const axios = require("axios")
const { servers, ytv } = require('../lib/y2mate')

let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) return conn.reply(m.chat, 'Uhm... urlnya mana?', m)
  let chat = global.db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF } = await ytv(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  conn.reply(isLimit ? `Ukuran File: ${filesizeF}\nUkuran file diatas ${limit} MB, download sendiri: ${dl_link}` : global.wait, m)
  let _thumb = {}
  try {
    _thumb = { thumbnail: await (await fetch(thumb)).buffer() }
  } catch (e) {}
  m.reply(wait)
  if (!isLimit) await conn.sendButtonVid(m.chat, dl_link, `*Title:* ${title}\n*Filesize:* ${filesizeF}`.trim(), wm, 'menu', '.?', m)
  //await conn.sendMessage(m.chat, { document: { url: dl_link }, mimetype: 'video/mp4', fileName: title + `.mp4`}, {quoted: m})
  //conn.sendFile(m.chat, dl_link, title + '.mp4', `
  //*Title:* ${title}
  //*Filesize:* ${filesizeF}
  //   `.trim(), m, false, { thumbnail: Buffer.alloc(0), mimetype: 'video/mp4' })
}
handler.help = ['ytmp4 <query>']
handler.tags = ['downloader']
handler.command = /^yt(v(idi?e?o)?|mp4)?$/i
handler.limit = true
module.exports = handler

function ytMp4(url) {
  return new Promise(async (resolve, reject) => {
    ytdl
      .getInfo(url)
      .then(async (getUrl) => {
        let result = [];
        for (let i = 0; i < getUrl.formats.length; i++) {
          let item = getUrl.formats[i];
          if (
            item.container == "mp4" &&
            item.hasVideo == true &&
            item.hasAudio == true
          ) {
            let { qualityLabel, contentLength, approxDurationMs } = item;
            let bytes = await bytesToSize(contentLength);
            result[i] = {
              video: item.url,
              quality: qualityLabel,
              size: bytes,
              duration: formated(parseInt(approxDurationMs)),
            };
          }
        }
        let resultFix = result.filter(
          (x) =>
            x.video != undefined &&
            x.size != undefined &&
            x.quality != undefined
        );
        let tinyUrl = resultFix[0].video;
        let title = getUrl.videoDetails.title;
        let desc = getUrl.videoDetails.description;
        let views = parseInt(getUrl.videoDetails.viewCount || 0);
        let likes = getUrl.videoDetails.likes;
        let dislike = getUrl.videoDetails.dislikes;
        let channel = getUrl.videoDetails.ownerChannelName;
        let uploadDate = getUrl.videoDetails.uploadDate;
        let thumb =
          getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail
            .thumbnails[0].url;
        resolve({
          creator: "Caliph",
          title,
          result: tinyUrl,
          quality: resultFix[0].quality,
          size: resultFix[0].size,
          duration: resultFix[0].duration,
          thumb,
          views,
          likes,
          dislike,
          channel,
          uploadDate,
          desc,
        });
      })
      .catch(reject);
  });
}

function ytPlayVid(query) {
  return new Promise((resolve, reject) => {
    yts(query)
      .then(async (getData) => {
        let result = getData.videos.slice(0, 5);
        let url = [];
        for (let i = 0; i < result.length; i++) {
          url.push(result[i].url);
        }
        let random = url[0];
        let getVideo = await ytMp4(random);
        resolve(getVideo);
      })
      .catch(reject);
  });
}

function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "n/a";
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) resolve(`${bytes} ${sizes[i]}`);
    resolve(`${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`);
  });
}

function formated(ms) {
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
