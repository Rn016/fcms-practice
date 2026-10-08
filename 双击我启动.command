#!/bin/bash
# macOS：双击此文件即可在浏览器打开题库练习
cd "$(dirname "$0")"
PORT=8899
while lsof -nP -iTCP:$PORT -sTCP:LISTEN >/dev/null 2>&1; do PORT=$((PORT+1)); done
python3 -m http.server $PORT --bind 127.0.0.1 >/dev/null 2>&1 &
SRV=$!
sleep 1
open "http://127.0.0.1:$PORT/"
echo "════════════════════════════════════════════════════"
echo "  FCMS 题库练习已启动"
echo "  http://127.0.0.1:$PORT/"
echo ""
echo "  浏览器已打开。关掉这个终端窗口即停止服务。"
echo "════════════════════════════════════════════════════"
trap "kill $SRV 2>/dev/null; exit 0" INT TERM
wait $SRV
