@echo off
setlocal enabledelayedexpansion

REM Създай папки, ако не съществуват
mkdir hero\mobile
mkdir hero\tablet
mkdir hero\desktop

REM За всеки .jpg файл
for %%f in (*.jpg *.jpeg) do (
    set "filename=%%~nf"

    REM 480x320 (mobile)
    magick "%%f" -resize 480x320^ -gravity center -extent 480x320 "hero\mobile\!filename!-480x320.jpg"

    REM 768x400 (tablet)
    magick "%%f" -resize 768x400^ -gravity center -extent 768x400 "hero\tablet\!filename!-768x400.jpg"

    REM 1200x600 (desktop)
    magick "%%f" -resize 1200x600^ -gravity center -extent 1200x600 "hero\desktop\!filename!-1200x600.jpg"
)

echo ---
echo Готово! Файловете за hero секцията са готови.
pause
