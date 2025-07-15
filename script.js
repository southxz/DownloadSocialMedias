#!/usr/bin/env node

const os = require("os");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

function log(tag, message) {
  const colors = {
    INSTALL: "\x1b[33m",
    ERROR: "\x1b[31m",
    WARNING: "\x1b[33m",
    SUCCESS: "\x1b[32m",
    QRCODE: "\x1b[33m",
    LINK: "\x1b[34m",
    INPUT: "\x1b[35m",
    OPEN: "\x1b[35m",
    INFO: "\x1b[36m"
  };
  const color = colors[tag] || "\x1b[37m";
  console.log(`\n${color}[ SOUTH | ${tag} ]\x1b[0m ${message}`);
}

function checkDependencies() {
  try {
    execSync("bash install.sh", { stdio: "inherit" });
  } catch {
    log("ERROR", "Failed to install dependencies.");
    process.exit(1);
  }
}

checkDependencies();

function clear() {
  try {
    const platform = os.platform();
    const isTermux = (process.env.PREFIX || "").includes("/data/data/com.termux");
    execSync(isTermux || platform !== "win32" ? "clear" : "cls", { stdio: "inherit" });
  } catch {
    process.stdout.write("\x1Bc");
  }
}

function banner() {
  clear();
  const cfonts = require("cfonts");
  const banners = [
    () =>
      cfonts.say("by south", {
        font: "block",
        align: "center",
        colors: ["red", "cyan"],
        background: "transparent",
      }),
    () =>
      console.log(
        cfonts.render("by | south", {
          font: "block",
          color: "system",
          align: "center",
          gradient: ["red", "cyan"],
          lineHeight: 2,
        }).string
      ),
  ];
  banners[Math.floor(Math.random() * banners.length)]();
}

const inquirer = require("inquirer");
const axios = require("axios");
const yts = require("yt-search");
const terminalImage = require('terminal-image');
const qrcode = require("qrcode-terminal");
const ytdl = require("@distube/ytdl-core");
const Tiktok = require("@tobyg74/tiktok-api-dl");
const { instagramGetUrl } = require("instagram-url-direct");
const { getFbVideoInfo } = require("fb-downloader-scrapper");
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath('/data/data/com.termux/files/usr/bin/ffmpeg');
const ffmpegPath = require("ffmpeg-static");

async function getYouTubeMedia(text) {
  const isURL = ytdl.validateURL(text);
  let videoId;
  if (isURL) videoId = ytdl.getVideoID(text);
  else {
    const { videos } = await yts(text);
    if (!videos.length) return null;
    videoId = videos[0].videoId;
  }
  const info = await ytdl.getInfo(videoId);
  const format = ytdl.chooseFormat(info.formats, { quality: "highest" });
  return {
    platform: "YouTube",
    title: info.videoDetails.title,
    url: format.url,
  };
}

async function getTikTokMedia(url) {
  const res = await Tiktok.Downloader(url, { version: "v1" });
  if (res.status === "error") return null;
  return {
    platform: "TikTok",
    title: res.result?.desc || "tiktok",
    url: res.result?.video?.playAddr?.[0],
  };
}

async function getFacebookMedia(url) {
  const res = await getFbVideoInfo(url);
  return {
    platform: "Facebook",
    title: res.title || "facebook",
    url: res.hd || res.sd,
  };
}

async function getInstagramMedia(url) {
  const res = await instagramGetUrl(url);
  const mediaUrl = res.url_list.find((u) => u.includes(".mp4"));
  return {
    platform: "Instagram",
    title: res.post_info.caption || "instagram",
    url: mediaUrl,
  };
}

async function getTwitterMedia(url) {
  const { data } = await axios.get(url.replace(/twitter\.com|x\.com/, "api.vxtwitter.com"));
  const video = data.media_extended.find((m) => m.type === "video");
  return {
    platform: "Twitter/X",
    title: data.text || "twitter",
    url: video?.url,
  };
}

async function extractMedia(url) {
  if (url.includes("tiktok.com")) return await getTikTokMedia(url);
  if (url.includes("instagram.com")) return await getInstagramMedia(url);
  if (url.includes("facebook.com") || url.includes("fb.watch")) return await getFacebookMedia(url);
  if (url.includes("twitter.com") || url.includes("x.com")) return await getTwitterMedia(url);
  if (url.includes("youtube.com") || url.includes("youtu.be")) return await getYouTubeMedia(url);
  log("ERROR", "Platform not supported.");
  return null;
}

function downloadMedia(url, filename, format, savePath) {
  return new Promise((resolve, reject) => {
    const extension = format === "MP4" ? "mp4" : "mp3";
    const output = path.resolve(savePath, `${filename}.${extension}`);
    const command = ffmpeg(url)
      .format(extension)
      .on("end", () => {
        log("SUCCESS", `File saved at: ${output}`);
        resolve(output);
      })
      .on("error", (err) => {
        log("ERROR", err.message);
        reject(err);
      });

    if (format === "MP3") command.audioCodec("libmp3lame");
    command.save(output);
  });
}

function openInBrowser(url) {
  const platform = os.platform();
  const isTermux = (process.env.PREFIX || '').includes('/data/data/com.termux');
  try {
    if (isTermux || platform === 'linux') {
      execSync(`xdg-open "${url}"`);
    } else if (platform === 'darwin') {
      execSync(`open "${url}"`);
    } else {
      execSync(`start "" "${url}"`);
    }
  } catch (err) {
    log("ERROR", `Failed to open link in browser: ${err.message}`);
  }
}

async function handleMedia(link, format) {
  banner();

  const { method } = await inquirer.prompt([
    {
      name: "method",
      type: "list",
      message: "\x1b[35m[ SOUTH | INPUT ]\x1b[0m Choose delivery method:",
      choices: ["Link", "QRCode", "Download"],
    },
  ]);

  banner();

  log("SUCCESS", "Fetching media info...");
  const media = await extractMedia(link);
  if (!media || !media.url) return log("ERROR", "Could not extract media.");
  
  banner();

  const fileName = media.title.replace(/[^a-z0-9]/gi, "").toLowerCase().substring(0, 30) + Date.now();
  const platform = os.platform();
  const home = os.homedir();
  const isTermux = (process.env.PREFIX || "").includes("/data/data/com.termux");
  const savePath =
    platform === "win32"
      ? path.join("C:/Users", os.userInfo().username, "by South")
      : isTermux
      ? "/sdcard/Download/by South"
      : path.join(home, "Downloads", "by South");

  if (!fs.existsSync(savePath)) fs.mkdirSync(savePath, { recursive: true });

  if (method === "QRCode") {
    log("QRCODE", "Generating QR Code...");
    qrcode.generate(media.url, { small: true });
    await new Promise((r) => setTimeout(r, 50000));
  } else if (method === "Link") {

  log("INFO", `Platform: ${media.platform}`);
  log("INFO", `Title: ${media.title}`);
  log("INFO", `Author: ${media.author || "Unknown"}`);
  log("INFO", `Duration: ${media.duration || "Unknown"}`);
  log("INFO", `Format: ${format}`);

    log("LINK", `Copy URL: ${media.url}`);
    await new Promise((r) => setTimeout(r, 25000));
    log("OPEN", "Opening link in browser...");
    openInBrowser(media.url);
} else if (method === "Download") {
    await downloadMedia(media.url, fileName, format, savePath);
  }
}

(async () => {
  const args = process.argv.slice(2);
  const formatFlag = args.includes("-mp3") ? "MP3" : args.includes("-mp4") ? "MP4" : null;
  const directLink = args.find((arg) => arg.startsWith("http"));

  while (true) {
    banner();

    let link, format;
    if (formatFlag && directLink) {
      link = directLink;
      format = formatFlag;
    } else {
      const input = await inquirer.prompt([
        {
          name: "link",
          type: "input",
          message: "\x1b[35m[ SOUTH | INPUT ]\x1b[0m Enter the media link:",
        }]);
        banner();
        const inputt = await inquirer.prompt([
        {
          name: "format",
          type: "list",
          message: "\x1b[35m[ SOUTH | INPUT ]\x1b[0m Choose format:",
          choices: ["MP3", "MP4"],
        },
      ]);
      link = input.link;
      format = inputt.format;
    }

    await handleMedia(link, format);
    await new Promise((r) => setTimeout(r, 3000));
  }
})();
