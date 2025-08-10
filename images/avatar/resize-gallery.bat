@echo off
setlocal enabledelayedexpansion

REM Създай папки, ако не съществуват
mkdir gallery\thumbs
mkdir gallery\medium
mkdir gallery\large

REM За всеки .jpg файл
for %%f in (*.jpg *.jpeg) do (
    set "filename=%%~nf"

    REM 300x200 (thumbnails)
    magick "%%f" -resize 300x200^ -gravity center -extent 300x200 "gallery\thumbs\!filename!-300x200.jpg"

    REM 600x400 (tablets)
    magick "%%f" -resize 600x400^ -gravity center -extent 600x400 "gallery\medium\!filename!-600x400.jpg"

    REM 1200x800 (modal)
    magick "%%f" -resize 1200x800^ -gravity center -extent 1200x800 "gallery\large\!filename!-1200x800.jpg"
)

echo ---
echo Готово! Файловете за gallery са готови.
pause
