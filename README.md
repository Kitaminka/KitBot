# KitBot
Discord бот для моего сервера.
___
### Установка и запуск
- Установите **[node.js](https://nodejs.org/)** на ваш компьютер.
- Скопируйте репозиторий на ваш компьютер.
- Откройте консоль в скопированном репозитории.
- Для завершения установки пропишите в консоли следующую команду:
```console
npm install
```
- После установки вам нужно будет **[настроить бота](#настройка-бота)**. 
- Для запуска бота пропишите следующую команду:
```console
node .
```
___
### Настройка бота
- Создайте на приложение на сайте **[Discord Developer Portal](https://discord.com/developers/)**.
- Перейдя во вкладку **Bot**, создайте бота и скопируйте его токен.
- Откройте файл **index.js**, используя любой текстовый редактор, и найдите следующие строчки:
```js
client.login(process.env.TOKEN);
```
- Замените текст **process.env.TOKEN** на токен вашего бота в кавычках. Должно получится примерно так:
```js
client.login("Njc2MTY0NDQwNTg4MDI1ODY2.XkFyMg.cMKBXh5AJ-u0SQt501OoAdgF34f");
```
- Откройте файл **config.json**, используя любой текстовый редактор.
-  В этом файле записаны общие настройки бота в следующем формате:

|  Название поля |    Пример значения   |                             Описание                            |
|:--------------:|:--------------------:|:---------------------------------------------------------------:|
|     prefix     |          "!"         |         Префикс, который нужно писать в начале команды.         |
|   embedColor   |       "ff6940"       |                       Цвет сообщений бота.                      |
| welcomeChannel | "759521716241825873" | ID канала, в котором бот будет приветствовать новых участников. |
|    adminRole   | "759683325065166878" |     ID роли, которая является ролью администраторов сервера.    |
___
### Discord сервер
Если у вас есть желание посмотреть функционал бота, не устанавливая и не запуская его, вы можете зайти на мой **[сервер](https://discord.gg/G3Dudc3)**.
___
