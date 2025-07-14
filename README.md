# ℹ️ Info Project

> A powerful script to extract and download audio (MP3) or video (MP4) from platforms like YouTube, TikTok, Instagram, Facebook, and Twitter. You can choose how you want to receive your media: Direct Link, QR Code, or Local Download.

--- 

## 🚀 Features - ✅ Extract/Download audio (MP3) or video (MP4). - ✅ YouTube, TikTok, Instagram, Facebook, and Twitter platforms. - ✅ Output via Direct Link, QR Code, or Save to Root. - ✅ Works on Windows, Linux, and Termux (Android). - ✅ Elegant CLI with customizable and straightforward logging.

---

## 📦 Requirements

- [Node.js](https://nodejs.org) (v16+)
- Git
- FFmpeg (already included via `ffmpeg-static`)
- .[Python](https://www.python.org/downloads/) (for Termux compatibility)

---

## 🛠️ Installation

> Termux (Android)

```bash
termux-setup-storage
pkg update && pkg upgrade
pkg install git -y
pkg install nodejs -y
pkg install python -y
git clone https://github.com/southxz/DownloadSocialMedia
cd DownloadSocialMedia
node script.js
