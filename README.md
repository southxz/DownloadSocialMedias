# DownloadMedias <img align="right" src="https://i.postimg.cc/KzkxrvH9/south.png" />

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

- **Do download [Termux] from PlayStore**

[Termux]: https://play.google.com/store/apps/details?id=com.termux

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

## 📄 License

This project is licensed under the **Mozilla Public License 2.0**.  
See the [LICENSE](./LICENSE) file for more details.

</details>
<details>

---

<summary> 🇧🇷 Portuguese</summary>

## Visão geral 

**DownloadMedias** é uma ferramenta de linha de comando para baixar vídeos ou áudio de plataformas populares de mídia social. Suporta: 

- **YouTube** 
- **TikTok** 
- **Instagram** 
- **Facebook** 
- **X (Twitter)** 

Você pode receber o conteúdo (MP3/MP4) como: 

- Um arquivo salvo em um diretório específico 
- Um **Link de Download Direto** 
- Um **QR Code** para acesso rápido 

--- 

## Instalação 

> **Plataformas Suportadas** 

| Platforma              | Suporte          |
|------------------------|------------------|
| Termux (Android)        | ✅ Suporte Total  |
| Windows 10 / 11         | ✅ Suporte Total (manualmente) |
| Linux (Debian/Ubuntu)   | ✅ Suporte Total  |
<br/>

> **Dependências Obrigatórias** 

- **[Python]** – Usado para instalar dependências.
- **[Node.js (LTS)]** – Necessário para executar o script.
- **[Git]** – Para clonar o repositório.
- **[FFmpeg para Windows]** – Essencial para processamento de mídia.

> **Como configurar o FFmpeg no Windows**

1. Baixe e extraia o zip do FFmpeg 
2. Copie o caminho para a pasta `bin` 
3. Adicione esse caminho em **Variáveis de Ambiente > Caminho** 

[Python]: https://www.python.org/downloads/ 
[Node.js (LTS)]: https://nodejs.org/en/download 
[Git]: https://git-scm.com/downloads 
[FFmpeg para Windows]: https://www.gyan.dev/ffmpeg/builds/ 

--- 

### Dependências 

| Dependências | Termux | Windows | Linux |
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

**ou via parâmetros:** 

```bash 
node south.js [opções] <link> 

Opções: 

-mp4 <link> baixar no formato mp4 
-mp3 <link> baixar no formato mp3
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

**ou via parâmetros:**

```bash 
node south.js [opções] <link> 

Opções: 

-mp4 <link> baixar em formato mp4 
-mp3 <link> baixar em formato mp3
``` 
- `C:/Usuários/<Usuário>/por South` (Windows) 
- `~/Downloads/por South` (Linux) 

### `Android (Termux)`
- **Faça o download do [Termux] na PlayStore**

[Termux]: https://play.google.com/store/apps/details?id=com.termux

```bash 
termux-setup-storage
```

```bash 
pkg update && pkg upgrade
```

```bash 
pkg instalar git -y
```

```bash 
pkg instalar nodejs -y
```

```bash 
pkg instalar python -y
```

```bash 
git clone https://github.com/southxz/DownloadSocialMedia.git
```

```bash 
cd BaixarSocialMedia 
```

```bash 
node south.js
```

**ou via parâmetros:**

```bash 
node south.js [opções] <link> 

Opções: 

-mp4 <link> baixar no formato mp4 
-mp3 <link> baixar no formato mp3
```

> Arquivos de mídia salvos em: 

- `/sdcard/Download/by South` 

--- 

## 📄 Licença
Este projeto está licenciado sob a **Licença Pública Mozilla 2.0**. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.
</details>
