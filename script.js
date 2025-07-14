const { execSync } = require("child_process");
const os = require("os");
const ms = require('ms');
const path = require("path");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// === CLEAR TERMINAL ===
function clear() {
  try {
    const platform = os.platform();
    const isTermux = (process.env.PREFIX || '').includes('/data/data/com.termux');
    execSync(isTermux || platform !== 'win32' ? 'clear' : 'cls', { stdio: 'inherit' });
  } catch {
    process.stdout.write('\x1Bc');
  }
}

// === INSTALL DEPENDENCIES AT START ===
try {
  clear();
  console.log("\n\x1b[33m⚠️ [ SOUTH | INSTALL ]\x1b[0m Installing packages...");
  execSync('npm install axios @distube/ytdl-core yt-search instagram-url-direct fb-downloader-scrapper @tobyg74/tiktok-api-dl fluent-ffmpeg ffmpeg-static cfonts inquirer qrcode-terminal', { stdio: 'ignore' });
  clear();
  console.log("\n\x1b[32m [ SOUTH | SUCCESS ]\x1b[0m Packages installed successfully!");
  await sleep(100);
  clear();
} catch (err) {
  clear();
  console.log("\n\x1b[31m [ SOUTH | ERROR ]\x1b[0m Failed to install dependencies.");
  process.exit(1);
}

const fs = require("fs");
const axios = require("axios");
const yts = require("yt-search");
const cfonts = require("cfonts");
const inquirer = require("inquirer");
const ffmpeg = require("fluent-ffmpeg");
const qrcode = require("qrcode-terminal");
const ytdl = require("@distube/ytdl-core");
const ffmpegPath = require("ffmpeg-static");
const Tiktok = require("@tobyg74/tiktok-api-dl");
const { instagramGetUrl } = require("instagram-url-direct");
const { getFbVideoInfo } = require("fb-downloader-scrapper");

ffmpeg.setFfmpegPath(ffmpegPath);

// === SHOW BANNER ===
function banner() {
  cfonts.render('by|south', {
    font: 'block',
    color: 'system',
    align: 'center',
    gradient: ["red", "cyan"],
    lineHeight: 2
  });
}

// === FORMAT LOGS ===
function log(tag, message) {
  const colors = {
    INSTALL: '\x1b[33m',
    ERROR: '\x1b[31m',
    WARNING: '\x1b[33m',
    SUCCESS: '\x1b[32m',
    QRCODE: '\x1b[33m',
    LINK: '\x1b[34m',
    INPUT: '\x1b[35m'
  };
  const color = colors[tag] || '\x1b[37m';
  console.log(`\n${color} [ SOUTH | ${tag} ]\x1b[0m ${message}`);
}

// === MEDIA DOWNLOAD FUNCTIONS ===
function downloadMp3(videoUrl, fileName = "audio") {
  return new Promise((resolve, reject) => {
    const output = `${fileName}.mp3`;
    ffmpeg(videoUrl)
      .format('mp3')
      .audioCodec('libmp3lame')
      .on('end', () => resolve(output))
      .on('error', reject)
      .save(output);
  });
}

function downloadMp4(videoUrl, fileName = "video") {
  return new Promise((resolve, reject) => {
    const output = `${fileName}.mp4`;
    ffmpeg(videoUrl)
      .format('mp4')
      .on('end', () => resolve(output))
      .on('error', reject)
      .save(output);
  });
}

// === MEDIA EXTRACTION FUNCTIONS ===
async function youtubeMedia(text) {
  const isURL = ytdl.validateURL(text);
  let videoId;
  if (isURL) videoId = ytdl.getVideoID(text);
  else {
    const { videos } = await yts(text);
    if (!videos.length) return null;
    videoId = videos[0].videoId;
  }
  const info = await ytdl.getInfo(videoId);
  const format = ytdl.chooseFormat(info.formats, { quality: 'highest' });
  return { platform: 'YouTube', title: info.videoDetails.title, url: format.url };
}

async function tiktokMedia(url) {
  const res = await Tiktok.Downloader(url, { version: "v1" });
  if (res.status === 'error') return null;
  return { platform: 'TikTok', title: res.result?.desc || "tiktok", url: res.result?.video?.playAddr?.[0] };
}

async function facebookMedia(url) {
  const res = await getFbVideoInfo(url);
  return { platform: 'Facebook', title: res.title || "facebook", url: res.hd || res.sd };
}

async function instagramMedia(url) {
  const res = await instagramGetUrl(url);
  const mediaUrl = res.url_list.find(u => u.includes('.mp4'));
  return { platform: 'Instagram', title: res.post_info.caption || "instagram", url: mediaUrl };
}

async function xMedia(url) {
  const { data } = await axios.get(url.replace(/twitter\.com|x\.com/, 'api.vxtwitter.com'));
  const video = data.media_extended.find(m => m.type === 'video');
  return { platform: 'Twitter/X', title: data.text || "twitter", url: video?.url };
}

async function getMedia(url) {
  if (url.includes("tiktok.com")) return await tiktokMedia(url);
  if (url.includes("instagram.com")) return await instagramMedia(url);
  if (url.includes("facebook.com") || url.includes("fb.watch")) return await facebookMedia(url);
  if (url.includes("twitter.com") || url.includes("x.com")) return await xMedia(url);
  if (url.includes("youtube.com") || url.includes("youtu.be")) return await youtubeMedia(url);
  return null;
}

// === MAIN LOOP ===
async function start() {
  while (true) {
    clear();
    banner();

    const { link } = await inquirer.prompt([
      {
        name: "link",
        type: "input",
        message: "\x1b[35m[ SOUTH | INPUT ]\x1b[0m Enter the media link:"
      }
    ]);

    clear();
    banner();

    const { format } = await inquirer.prompt([
      {
        name: "format",
        type: "list",
        message: "\x1b[35m[ SOUTH | INPUT ]\x1b[0m Choose format:",
        choices: ["MP3", "MP4"]
      }
    ]);

    const { method } = await inquirer.prompt([
      {
        name: "method",
        type: "list",
        message: "\x1b[35m[ SOUTH | INPUT ]\x1b[0m Choose delivery method:",
        choices: ["Link", "QRCode", "Download"]
      }
    ]);

    log("SUCCESS", "Fetching media...");
    const media = await getMedia(link);
    if (!media || !media.url) {
      log("ERROR", "Failed to extract media.");
      continue;
    }

    const filename = media.title.replace(/[^a-z0-9]/gi, "_").toLowerCase().substring(0, 30) + "_" + Date.now();

    if (method === "Link") {
      log("LINK", `Media link: ${media.url}`);
    } else if (method === "QRCode") {
      log("QRCODE", `Displaying QR Code...`);
      qrcode.generate(media.url, { small: true });
    } else if (method === "Download") {
      try {
        log("SUCCESS", `Downloading media as ${format}...`);
        const file = format === "MP3" ? await downloadMp3(media.url, filename) : await downloadMp4(media.url, filename);
        const saveDir = os.platform() === 'win32' ? 'C:/' : '/sdcard/';
        fs.renameSync(file, path.join(saveDir, file));
        log("SUCCESS", `File saved to: ${saveDir}${file}`);
      } catch (err) {
        log("ERROR", err.message);
      }
    }

    await new Promise(res => setTimeout(res, 4000));
  }
}

start();
