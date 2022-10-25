# ⚡️ JavaScript | Trello For Poor v0.1.5

Никогда не пользовался Trello, но всё же решил написать такой проект.
Решил попробовать использовать что-то похожее на MVC-паттерн.

🔗 [GitHub Pages](https://devkirkir.github.io/JavaScript-Trello_for_poor/)

## Технологии

-   HTML
-   SCSS
-   JS

## Дерево проекта

    ┣ js/
    ┃ ┣ utils/                     # вспомогательные функции
    ┃ ┃ ┃ handleBoardContent.js    # навешиване событий DnD для досок
    ┃ ┃ ┗ updateModel.js           # кастомное событие updateModel
    ┃ ┣ views/
    ┃ ┃ ┣ boardsView.js            # рендер досок
    ┃ ┃ ┗ tasksView.js             # рендер задач
    ┃ ┣ controller.js              # контроллер
    ┃ ┗ model.js                   # модель, местный стейт
    ┣ styles/
    ┃ ┣ style.css
    ┃ ┣ style.css.map
    ┃ ┗ style.scss
    ┣ index.html
    ┗ README.md

## Версии

Здесь буду публиковать какие изменения произошли, не знаю зачем... 🤔

### v0.1.5

-   Добавлено: кастомное событие updateModel
-   Улучшено: изменение стейта для события drop
-   Улучшено: изменение рендера досок и задач
-   Улучшено: изменение общего CSS

### v0.1.0

-   Добавлено: Базовая структура досок и задач
-   Добавлено: Базовый стейт
-   Добавлено: Рендер досок и задач
-   Добавлено: Базовый Drag-and-Drop
