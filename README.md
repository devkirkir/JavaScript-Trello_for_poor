# ⚡️ JavaScript | Trello For Poor v0.7.5

Никогда не пользовался Trello, но всё же решил написать такой проект.
Решил попробовать использовать что-то похожее на MVC-паттерн.

🔗 [GitHub Pages](https://devkirkir.github.io/JavaScript-Trello_for_poor/)

## Технологии

-   HTML
-   SCSS
-   JS

## Дерево проекта

    ┣ js/
    ┃ ┣ img/
    ┃ ┣ ┃ cross.svg
    ┃ ┣ ┃ plus.svg
    ┃ ┣ utils/                     # вспомогательные функции
    ┃ ┃ ┣ handlers/
    ┃ ┃ ┃ ┃ addBoard.js            # добавление досок
    ┃ ┃ ┃ ┃ addTask.js             # добавление задач
    ┃ ┃ ┃ ┃ changeBoardTitle.js    # изменение заголовка досок
    ┃ ┃ ┃ ┃ changeTag.js           # изменение тегов задач
    ┃ ┃ ┃ ┃ changeTaskTitle.js     # изменение заголовка задач
    ┃ ┃ ┃ ┃ deleteBoard.js         # удаление досок
    ┃ ┃ ┃ ┃ deleteTask.js          # удаление задач
    ┃ ┃ ┃ ┗ dragBoardContent.js    # навешиване событий DnD для досок
    ┃ ┃ ┃ renderComponents.js      # рендер задач
    ┃ ┃ ┗ updateModel.js           # кастомное событие updateModel
    ┃ ┣ views/                     # представления
    ┃ ┃ ┣ boardsView.js            # вид и рендер досок
    ┃ ┃ ┗ tasksView.js             # вид задач
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

### v0.7.5

-   Добавлено: удаление досок
-   Улучшено: id's и data's атрибуты у компонентов для получения идентификации
-   Изменено: общий CSS

### v0.6.0

-   Добавлено: добавление досок
-   Изменено: CSS кнопки для длбавления доски

### v0.5.5

-   Добавлено: изменение заголовка доски

### v0.5.2

-   Изменено: структура новой задачи
-   Изменено: input на textarea в changeTaskTitle

### v0.5.0

-   Добавлено: изменение тегов
-   Добавлено: стейт содержит цвета тегов
-   Улучшено: ререндер при изменении тегов
-   Улучшено: CSS для тегов

### v0.4.0

-   Добавлено: изменение заголовка задачи
-   Улучшено: CSS для инпута и заголовка

### v0.3.5

-   Добавлено: генерация ID задач

### v0.3.0

-   Изменено: при изменении стейта происходит ререндер (что-то типа)

### v0.2.5

-   Добавлено: добавление задач в стейт
-   Добавлено: новое событие
-   В работе: ререндер компонент, чтобы полностью зависили от стейта

### v0.2.3

-   Улучшено: CSS

### v0.2.2

-   Добавлено: скелетон рендера досок
-   Улучшено: рендер досок и задач
-   Улучшено: дерево проекта

### v0.2.0

-   Добавлено: удаление задач
-   Улучшено: HTML структура задачи
-   Изменено: ренейм функции DnD для досок

### v0.1.8

-   Добавлено: статические теги для задач
-   Добавлено: скелетон рендера задач
-   Улучшено: изменение рендера задач
-   Улучшено: изменение общего CSS

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
