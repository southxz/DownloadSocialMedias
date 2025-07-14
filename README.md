# 📥 DownloadSocialMedia

> A powerful script to extract and download audio (MP3) or video (MP4) from platforms like **YouTube**, **TikTok**, **Instagram**, **Facebook**, and **X (Twitter)**. Choose how you want to receive your media: **direct link**, **QR Code**, or **local download**.

---

## 🚀 Features

- ✅ Extract audio (MP3) or video (MP4)
- ✅ Supports YouTube, TikTok, Instagram, Facebook, and Twitter/X
- ✅ Output via direct link, QR Code, or saved file
- ✅ Works on **Windows, Linux, and Termux (Android)**
- ✅ Stylish CLI with clear logs and animations

---

## 📦 Requirements

- [Node.js](https://nodejs.org) (v16+)
- Git
- FFmpeg (already included via `ffmpeg-static`)
- Python (for Termux compatibility)

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
