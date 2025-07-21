# DownloadMedias <img align="right" src="https://i.imgur.com/GMhpOXw.png" />
[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-8af7ff.svg)](https://opensource.org/licenses/Unlicense)
[![Build Status](https://github.com/Theldus/tinyflex/actions/workflows/c-cpp.yml/badge.svg)](https://github.com/Theldus/tinyflex/actions/workflows/c-cpp.yml)
<br/>
<br/>

## 🌐 Overview

**DownloadMedias** is a command-line utility for downloading videos or audio from popular social media platforms. It supports:

- **YouTube**
- **TikTok**
- **Instagram**
- **Facebook**
- **X / Twitter**

You can receive the content as (MP3/MP4):

- Save to the specified directory
- As a **Direct Link**
- As a **QR Code** for quick access

## Installation

> `Supported Platforms`

| Platform | Status |
|----------|--------|
| Termux (Android) | ✅ Full Support |
| Windows 10/11    | ✅ Full Support (with manual setup) |
| Linux (Debian/Ubuntu-based) | ✅ Full Support |


### `Windows / Linux`

> **Requirements (mandatory)**

- **[Python]**: To install all necessary dependencies.
- **[Node.js (LTS)]**: To initialize the script.
- **[Git]**: import the script.
- **[FFmpeg for Windows]**: Library mandatory to manipulate media

> `FFmpeg:`

- Extract FFmpeg zip
- Copy the path to `bin` folder
- Add it to your system's **Environment Variables > Path**

[Python]: https://www.python.org/downloads/
[Node.js (LTS)]: https://nodejs.org/en/download
[Git]: https://git-scm.com/downloads
[FFmpeg for Windows]: https://www.gyan.dev/ffmpeg/builds/

**Requirements Summary**

| Dependency | Termux | Windows | Linux |
|------------|--------|---------|-------|
| Node.js    | ✅     | ✅       | ✅    |
| Python     | ✅     | ✅       | ✅    |
| FFmpeg     | ✅     | ✅ (manual) | ✅ |
| Git        | ✅     | ✅       | ✅    |


After downloading and correctly configuring the necessary programs, commands to initialize the script:
<br/>
<br/>
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

> CMD

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

## Acknowledgements

## Contributing

## License

This project is licensed under the **Mozilla Public License 2.0**.  
See [LICENSE](./LICENSE) for more details.
