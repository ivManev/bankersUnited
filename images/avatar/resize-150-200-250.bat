@echo off
setlocal enabledelayedexpansion

REM Създай папките (ако не съществуват)
mkdir small
mkdir medium
mkdir large

REM За всеки JPG файл в текущата папка
for %%f in (*.jpg *.jpeg) do (
    echo Обработка на %%f...

    REM Премахване на разширението за именуване
    set "filename=%%~nf"

    REM 150x150
    magick "%%f" -resize 150x150^ -gravity center -extent 150x150 "small\!filename!-150x150.jpg"

    REM 200x200
    magick "%%f" -resize 200x200^ -gravity center -extent 200x200 "medium\!filename!-200x200.jpg"

    REM 250x250
    magick "%%f" -resize 250x250^ -gravity center -extent 250x250 "large\!filename!-250x250.jpg"
)

echo ---
echo Всички изображения са обработени!
pause
