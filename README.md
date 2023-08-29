# FreeToPlay Api Search

Проект "FreeToPlay Api Search" разработан при помощию ReactJS, Redux и Redux ToolKit, react-router-dom v6 и UI Framework - Bootstrap.

# Запуск проекта

Для того, чтобы запустить проект, в корне директории проекта введите `npm i`, после того, как все зависимости будут установлены, введите `npm start` и приложение откроется в браузере на локальном хосте http://localhost:3001/

# Функционал сайта

На сайте есть такой функционал, как:

1. Сортировка игр по платформе (PC, Web Browser), по жанру (Shooter, Strategy, Racing и др) и по доп. фильтрам (по названию, по популярности и по дате релиза)
2. Подробный просмотр информации по любой игре. Нажатие на кнопку "Подробнее" в карточке игры откроет страницу с информацией о выбранной игре. На этой странице есть:
   название, дата релиза (в российском формате), издатель, разработчик, жанр, картинка/постер, карусель скриншотов, системные требования (если есть), кнопка для возврата к списку игр.

# P.S.

Сортировка по популярности делается запросом к API (потому что изначально поле popularity не предусмотрено по запросу getAllGames), поэтому сочетать ее с другими сортировками не получается.

# Пример работы

(позже будет скриншот)
