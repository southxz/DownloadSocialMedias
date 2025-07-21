# DownloadMedias <img align="right" src="https://i.imgur.com/GMhpOXw.png" />
[![License: MPL-2.0](https://img.shields.io/badge/License-MPL2.0-8af7ff.svg)](https://opensource.org/license/mpl-2-0)
[![Visitors](https://visitor-badge.laobi.icu/badge?page_id=southxz.DownloadSocialMedias)](https://github.com/southxz/DownloadSocialMedias)

---

<details>
<summary> 🇱🇷 English</summary>

## Overview

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

## Installation

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
- **[FFmpeg for Windows]** – essential for media processing

> **How to set up FFmpeg on Windows**

1. Download and extract the FFmpeg zip  
2. Copy the path to the `bin` folder  
3. Add that path to **Environment Variables > Path**  

[Python]: https://www.python.org/downloads/  
[Node.js (LTS)]: https://nodejs.org/en/download  
[Git]: https://git-scm.com/downloads  
[FFmpeg for Windows]: https://www.gyan.dev/ffmpeg/builds/  

---

### Dependency Summary

| Dependency | Termux | Windows | Linux |
|-------------|--------|---------|--------|
| Node.js     | ✅     | ✅       | ✅     |
| Python      | ✅     | ✅       | ✅     |
| FFmpeg      | ✅     | ✅ (manual) | ✅  |
| Git         | ✅     | ✅       | ✅     |

---

### `Linux (Ubuntu/Debian)`

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

```bash
node south.js
```

**or via parameter:**

```bash
node south.js [options] <link>

Options:
   -mp4 <link>     download in format mp4
   -mp3 <link>     download in format mp3
```

### `Windows (CMD/PowerShell)`

```bash
git clone https://github.com/southxz/DownloadSocialMedias.git
```

```bash
cd DownloadSocialMedias
```

```bash
node south.js
```

**or via parameter:**

```bash
node south.js [options] <link>

Options:
   -mp4 <link>     download in format mp4
   -mp3 <link>     download in format mp3
```

- `C:/Users/<User>/by South` (Windows)
- `~/Downloads/by South` (Linux)

### `Android (Termux)`

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
git clone https://github.com/southxz/DownloadSocialMedia.git
```

```bash
cd DownloadSocialMedia
```

```bash
node south.js
```

**or via parameter:**

```bash
node south.js [options] <link>

Options:
   -mp4 <link>     download in format mp4
   -mp3 <link>     download in format mp3
```

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

</details>
<details>

<summary> 🇧🇷 Portuguese</summary>
</details>
