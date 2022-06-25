const uploadFile = require("./uploadFile");
const fetch = require("node-fetch");

async function getBrowser(opts = {}) {
    const chromeOptions = {
        headless: true,
       defaultViewport: {
            width: 1920,
            height: 1080
        },
       args: [
      "--no-sandbox"
     ],
        timeout: 120000,
       ...opts
    }
    return await require('puppeteer').launch(chromeOptions)
}


async function ssweb(url, fpage = false, darkmode = false) {
const browser = await getBrowser();
const page = await browser.newPage();
try {
await page.goto(url, {
waitUntil: 'networkidle0',
timeout: 300000
})
const screenshot = await page.screenshot({
type: 'png',
fullPage: fpage
})
await browser.close()
return screenshot 
    } catch (e) {
        await browser.close()
        throw e
    }
}

module.exports = async function(opts) {
let { url, fullpage } = opts || {};
if (!url) throw { status: 400, creator: 'Caliph', message: 'parameter url tidak boleh kosong!' };
let buffer = await ssweb(url, fullpage)
let { url: result } = await uploadFile(buffer)
const fetching = await fetch(url)
return { status: fetching.status, creator: 'Caliph', result }
}
