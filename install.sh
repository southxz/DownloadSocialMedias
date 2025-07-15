#!/bin/bash
clear

echo -e "\033[1;38m[ SOUTH | DETECT ] Detecting system..."
sleep 1

OS="unknown"
if [[ "$OSTYPE" == "linux-android"* ]]; then
  OS="termux"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
  OS="linux"
elif [[ "$OSTYPE" == "msys" ]]; then
  OS="windows"
fi

sleep 1
echo -e "\033[1;34m[ SOUTH | OS ] Detected: $OS"
sleep 4
clear

SCRIPT_NAME="south"
SCRIPT_SOURCE="south.js"

install_ffmpeg() {
  echo -e "\033[1;38m[ SOUTH | DETECT ] Checking for FFmpeg..."
  sleep 1

  if ! command -v ffmpeg &>/dev/null; then
    echo -e "\033[1;31m[ SOUTH | INSTALLER ] FFmpeg not found. Installing...\033[0m"
    sleep 2

    if [[ "$OS" == "termux" ]]; then
      pkg update -y && pkg install ffmpeg -y
    elif [[ "$OS" == "linux" ]]; then
      sudo apt update && sudo apt install ffmpeg -y
    elif [[ "$OS" == "windows" ]]; then
      echo -e "\033[1;36m[ SOUTH | INSTALLER ] Windows detected. Downloading FFmpeg...\033[0m"
      mkdir -p "$HOME/ffmpeg"
      curl -L -o "$HOME/ffmpeg/ffmpeg.zip" https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-essentials.zip
      unzip "$HOME/ffmpeg/ffmpeg.zip" -d "$HOME/ffmpeg/"
      FF_DIR=$(find "$HOME/ffmpeg/" -type d -name "ffmpeg*" | head -n 1)
      export PATH="$FF_DIR/bin:$PATH"
      echo "export PATH=\"$FF_DIR/bin:\$PATH\"" >> ~/.bashrc
      echo -e "\033[1;32m[ SOUTH | INSTALLER ] FFmpeg path added to .bashrc\033[0m"
    fi
  else
    echo -e "\033[1;32m[ SOUTH | INSTALLER ] FFmpeg already installed.\033[0m"
  fi

  sleep 4
  clear
}

setup_south_command() {
  echo -e "\033[1;38m[ SOUTH | INSTALLER ] Configuring command: south"
  sleep 1

  if ! grep -q "#!/usr/bin/env node" "$SCRIPT_SOURCE"; then
    sed -i '1i #!/usr/bin/env node' "$SCRIPT_SOURCE"
  fi

  chmod +x "$SCRIPT_SOURCE"

  BIN_DIR="$HOME/bin"
  mkdir -p "$BIN_DIR"
  cp "$SCRIPT_SOURCE" "$BIN_DIR/$SCRIPT_NAME"

  if ! echo "$PATH" | grep -q "$BIN_DIR"; then
    echo "export PATH=\"$BIN_DIR:\$PATH\"" >> ~/.bashrc
    export PATH="$BIN_DIR:$PATH"
  fi

  echo -e "\033[1;32m[ SOUTH | INSTALLER ] Comando 'south' instalado com sucesso!\033[0m"
  sleep 4
  clear
}

install_ffmpeg
setup_south_command

echo -e "\033[1;32m[ SOUTH | DONE ] Você pode usar: \033[1;36msouth -mp3 <link>\033[0m"
sleep 4
clear

echo -e "\033[1;33m[ SOUTH | CHECK ] Verificando dependências...\033[0m"
sleep 1

if yarn check --verify-tree --silent &>/dev/null; then
  echo -e "\033[0;32m[ SOUTH | SUCCESS ] Todas as dependências já estão instaladas.\033[0m"
  sleep 4
  clear
  exit 0
fi

echo -e "\033[1;33m[ SOUTH | INSTALL ] Instalando dependências ausentes...\033[0m"
sleep 1

yarn install --silent 2>/dev/null | while read -r line; do
  if echo "$line" | grep -q "Installing"; then
    pkg=$(echo "$line" | sed -n 's/.*Installing \([^ ]*\).*/\1/p')
    if [[ -n "$pkg" ]]; then
      echo -e "\033[1;33m[ SOUTH | INSTALL ] Instalando: \033[0;32m$pkg\033[0m"
    fi
  fi
done

sleep 4
clear
echo -e "\033[0;32m[ SOUTH | DONE ] Todas as dependências foram instaladas com sucesso!\033[0m"
sleep 2
exit 0
