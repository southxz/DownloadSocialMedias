# DownloadMedias <img align="right" src="https://i.imgur.com/GMhpOXw.png" />

[![License](https://img.shields.io/badge/License-MPL_2.0-blue.svg)](https://opensource.org/licenses/MPL-2.0)
[![Build](https://img.shields.io/github/workflow/status/southxz/DownloadSocialMedias/CI/main)](https://github.com/southxz/DownloadSocialMedias/actions)
![Platform](https://img.shields.io/badge/platform-Termux%20|%20Windows%20|%20Linux-success)
[![Visitors](https://visitor-badge.laobi.icu/badge?page_id=southxz.DownloadSocialMedias)](https://github.com/southxz/DownloadSocialMedias)

---

<details>
<summary><strong>📘 English Documentation</strong> (click to expand)</summary>

## 🌐 Overview

**DownloadMedias** is a command-line tool for downloading videos or audio from popular social media platforms. It supports:

- **YouTube**
- **TikTok**
- **Instagram**
- **Facebook**
- **X (Twitter)**

You can receive the content (MP3/MP4) as:

- A saved file in a specific directory  
- A **Direct Download Link**  
- A **QR Code** for quick access  

---

## 📦 Installation

> **Supported Platforms**

| Platform              | Support          |
|------------------------|------------------|
| Termux (Android)        | ✅ Full Support  |
| Windows 10 / 11         | ✅ Full Support (manual setup required) |
| Linux (Debian/Ubuntu)   | ✅ Full Support  |

---

### 🔧 Windows / Linux

> **Required Dependencies**

- **[Python]** – used to install dependencies
- **[Node.js (LTS)]** – required to run the script
- **[Git]** – to clone the repository
- **[FFmpeg]** – essential for media processing

> **How to set up FFmpeg on Windows**

1. Download and extract the FFmpeg zip  
2. Copy the path to the `bin` folder  
3. Add that path to **Environment Variables > Path**  

[Python]: https://www.python.org/downloads/  
[Node.js (LTS)]: https://nodejs.org/en/download  
[Git]: https://git-scm.com/downloads  
[FFmpeg for Windows]: https://www.gyan.dev/ffmpeg/builds/  

---

### ✅ Dependency Summary

| Dependency | Termux | Windows | Linux |
|-------------|--------|---------|--------|
| Node.js     | ✅     | ✅       | ✅     |
| Python      | ✅     | ✅       | ✅     |
| FFmpeg      | ✅     | ✅ (manual) | ✅  |
| Git         | ✅     | ✅       | ✅     |

---

### 🐧 Linux (Ubuntu/Debian) Setup

```bash
sudo apt update
sudo apt install git nodejs ffmpeg yarn python3 -y
git clone https://github.com/southxz/DownloadSocialMedias.git
cd DownloadSocialMedias
```

---

### 🪟 Windows (CMD/PowerShell) Setup

```bash
git clone https://github.com/southxz/DownloadSocialMedias.git
cd DownloadSocialMedias
node south.js
```

Or run with parameters:

```bash
node south.js -mp3 <link>   # Download as MP3
node south.js -mp4 <link>   # Download as MP4
```

Downloaded files will be saved to:

- `C:/Users/<YourUser>/by South` (Windows)
- `~/Downloads/by South` (Linux)

---

### 🤖 Android (Termux) Setup

```bash
termux-setup-storage
pkg update && pkg upgrade
pkg install git nodejs python -y
git clone https://github.com/southxz/DownloadSocialMedia.git
cd DownloadSocialMedia
node south.js
```

Or run with parameters:

```bash
node south.js -mp3 <link>   # Download as MP3
node south.js -mp4 <link>   # Download as MP4
```

Files will be saved to:

- `/sdcard/Download/by South`

---

## 🙌 Acknowledgements

Coming soon: list of contributors, libraries, and APIs used...

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

This project is licensed under the **Mozilla Public License 2.0**.  
See the [LICENSE](./LICENSE) file for more details.

</details>
