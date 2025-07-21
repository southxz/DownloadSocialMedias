# ℹ️ DownloadMedias <img align="right" src="https://i.imgur.com/GMhpOXw.png" />
[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-8af7ff.svg)](https://opensource.org/licenses/Unlicense)  
[![Build Status](https://github.com/Theldus/tinyflex/actions/workflows/c-cpp.yml/badge.svg)](https://github.com/Theldus/tinyflex/actions/workflows/c-cpp.yml)

<br/>

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
<br/>

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

### 🐧 Linux (Ubuntu/Debian)

> Linux (Ubuntu/Debian)

```bash
sudo apt update
```

```bash
sudo apt install git -y
```

```bash
sudo apt install nodejs -y
```

```bash
sudo apt install ffmpeg -y
```

```bash
sudo apt install yarn -y
```

```bash
sudo apt install python3 -y
```

```bash
git clone https://github.com/southxz/DownloadSocialMedias.git
```

```bash
cd DownloadSocialMedias
```
<br/>
<br/>

---

### 🪟 Windows (CMD/PowerShell)

```node
git clone https://github.com/southxz/DownloadSocialMedias.git
```
<br/>
```node
cd DownloadSocialMedias
```
<br/>
```node
node south.js
```
<br/>
**or via parameter:**
<br/>
```node
node south.js [options] <link>

Options:
   -mp4 <link>     download in format mp4
   -mp3 <link>     download in format mp3
```
<br/>
- `C:/Users/<User>/by South` (Windows)
- `~/Downloads/by South` (Linux)

### `Android (Termux)`

```bash
termux-setup-storage
```
<br/>
```bash
pkg update && pkg upgrade
```
<br/>
```bash
pkg install git -y
```
<br/>
```bash
pkg install nodejs -y
```
<br/>
```bash
pkg install python -y
```
<br/>
```bash
git clone https://github.com/southxz/DownloadSocialMedia.git
```
<br/>
```bash
cd DownloadSocialMedia
```
<br/>
```bash
node south.js
```
<br/>
**or via parameter:**
<br/>
```node
node south.js [options] <link>

Options:
   -mp4 <link>     download in format mp4
   -mp3 <link>     download in format mp3
```
<br/>
> Medias save files to:
- `/sdcard/Download/by South`

---

## 🙌 Acknowledgements


---

## 🤝 Contributing



---

## 📄 License

This project is licensed under the **Mozilla Public License 2.0**.  
See the [LICENSE](./LICENSE) file for more details.
