## Инструкция по проекту

1) Перенести на локальную машину репозиторий, создав клон проекта. Проект находится по ссылке https://github.com/NikitaBaranov1992/homework9.
2) Скачать на локальную машину фреймворк Jest, введя команду "npm install - -save-dev jest" в командную строку.
3) Убедиться, что в файле ".gitignor" есть строка "/node_modules" 
4) Проверки находятся в файле homework.test.
5) Для запуска проверок необходимо ввести команду "npm run test" в терминале.
6) При необходимости "сломать" тесты, чтобы проверить негативные сценарии, можно менять значения в методе toBe в проверках.


## Измерение покрытия
Для запуска измерения покрытия необходимо ввести команду "npx jest --coverage" в терминале.

## Отличие функций/веток/строк
Покрытие функции - проверка на то, покрывают ли наши тесты функцию, вне зависимости от того, покрывают ли всю "внутренность" этой функции.

Покрытие веток - проверка на то, покрывают ли наши тесты все ветки в функции/методе и т.д. Может быть ситуация, когда тесты покрывают функцию, но не покрывают все ветки в этой функции.

Покрытие строк - проверка на то, покрывают ли наши тесты все строки кода

В идеале тесты должны покрывать 100 функций, веток, строк.

## Функция выявления лучшего студента
В файле homework10.2.js находится функция по вычислению лучшего студента. 
#### В расчет берется сумма баллов и даты сдачи домашних заданий.
Тест данной функции находится в файле homework10.2.test.js
#### Для запуска проверок необходимо ввести команду "npm run test" в терминале.

#### Если требуется изменить тестовые данные, нужно в файле homework10.2.js в переменную students добавить новый массив или изменить текущий.

