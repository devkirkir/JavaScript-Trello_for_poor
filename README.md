# ⚡️ JavaScript | Trello For Poor v0.1.0

Никогда не пользовался Trello, но всё же решил написать такой проект.
Решил попробовать использовать что-то похожее на MVC-паттерн.

🔗 [GitHub Pages](https://www.google.com)

## Технологии

-   HTML
-   SCSS
-   JS

## Дерево проекта

    ┣ js/
    ┃ ┣ utils/                        # вспомогательные функции
    ┃ ┃ ┗ handleBoardContent.js       # функция по навешиванию событий DnD
                                        для досок
    ┃ ┣ views/
    ┃ ┃ ┣ boardsView.js               # рендер досок
    ┃ ┃ ┗ tasksView.js                # рендер задач
    ┃ ┣ controller.js                 # контроллер
    ┃ ┗ model.js                      # модель, местный стейт
    ┣ styles/
    ┃ ┣ style.css
    ┃ ┣ style.css.map
    ┃ ┗ style.scss
    ┣ index.html
    ┗ README.md

## Версии

Здесь буду публиковать какие изменения произошли, не знаю зачем... 🤔

### v0.1.0

-   Базовая структура досок и задач
-   Базовый стейт
-   Рендер досок и задач
-   Базовый Drag-and-Drop
