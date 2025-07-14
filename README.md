# ℹ️ Info Project

> A powerful script to extract and download audio (MP3) or video (MP4) from platforms like YouTube, TikTok, Instagram, Facebook, and Twitter. You can choose how you want to receive your media: Direct Link, QR Code, or Local Download.

--- 

## 🚀 Features 
- ✅ Extract/Download audio (MP3) or video (MP4). 
- ✅ YouTube, TikTok, Instagram, Facebook, and Twitter platforms. 
- ✅ Output via Direct Link, QR Code, or Save to Root. 
- ✅ Works on Windows, Linux, and Termux (Android). 
- ✅ Elegant CLI with customizable and straightforward logging.

---

## 📦 Requirements

- [Node.js](https://nodejs.org) (v16+)
- Git
- FFmpeg (already included via `ffmpeg-static`)
- .[Python](https://www.python.org/downloads/) (for Termux compatibility)

---

## 🛠️ Installation

> `📱 Termux (Android)`

```bash
termux-setup-storage
```

```bash
pkg update && pkg upgrade
```

```bash
pkg install git -y
```

```bash
pkg install nodejs -y
```

```bash
pkg install python -y
```

```bash
git clone https://github.com/southxz/DownloadSocialMedia
```
```bash
cd DownloadSocialMedia
```

> `💻 PC (Windows/Linux)`
- Node.js [Download Latest version.](https://nodejs.org)
- Python [Download Latest version.](https://www.python.org/downloads/)

```bash
git clone https://github.com/southxz/DownloadSocialMedia
```

```bash
cd DownloadSocialMedia
```

---

## 🎮 How to use
> Before starting the script do:
`1. Set the parameter`
`2. Set the link`
### 🎵 Exemple MP3
```bash
node script.js -mp3 https://youtu.be/frfd45...
```
### ▶️ Exemple MP4
```bash
node script.js -mp4 https://youtu.be/frfd45...
```

---

## 🧪 Example Output

```bash
[SOUTH | INPUT ] Enter the media link:
> https://youtu.be/dQw4w9WgXcQ

[SOUTH | INPUT ] Choose format:
> MP3

[SOUTH | INPUT ] Choose delivery method:
> QRCode

[SOUTH | QRCODE ] Displaying QR Code...

[SOUTH | SUCCESS ] Media extracted successfully!
[SOUTH | SUCCESS ] Ready for the next task.
```

---

## 👤 Author

**Created and maintained by [@southxz](https://github.com/southxz)**  
Feel free to fork, improve or integrate this project. You are allowed to modify this file,  
but **please keep the credits** to support the original author. ❤️

---

## 📊 GitHub Stats

![Visitors](https://komarev.com/ghpvc/?username=southxz&color=blue&style=flat)  
![Commits](https://img.shields.io/github/commit-activity/m/southxz/DownloadSocialMedia?label=Commits)

---

## 📄 License

This project is licensed under the **Mozilla Public License 2.0 (MPL 2.0)**  
See the [LICENSE](LICENSE) file for more information.
