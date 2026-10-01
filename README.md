# Playable ads — примеры

Статичный сайт, сборка не нужна. Локально — просто открыть index.html в браузере.

- `index.html` — страница со списком игр (список и тексты — прямо в файле, массив `GAMES`)
- `assets/covers/<slug>.webp` — обложки
- `games/<slug>/` — собранные игры (копии папок dist)

## Добавить игру
1. Скопировать `dist` игры в `games/<slug>/`.
2. Положить обложку в `assets/covers/<slug>.webp`.
3. Добавить строку в `GAMES` в `index.html`.

## Vercel
1. Создать пустой репозиторий на GitHub, затем в этой папке:
   `git remote add origin https://github.com/<user>/<repo>.git` и `git push -u origin main`
2. vercel.com → Add New → Project → импортировать репозиторий.
   Framework Preset: Other, Build Command и Output Directory — пустые. Deploy.
