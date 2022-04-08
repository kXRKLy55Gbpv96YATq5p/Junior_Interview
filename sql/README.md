# Задания «SQL»

Для решения задач вам потребуется перейти по ссылке https://sql-academy.org/ru/sandbox. 
Там вы будете выполнять все запросы для теста. По ссылке будет доступна схема `Air travels`, в которой есть
4 таблицы: `TRIP`, `PASS_IN_TRIP`, `PASSENGER`, `COMPANY`. Ответы (SQL запросы) будет необходимо сохранить в этом файле `README`
после каждого задания.

### Задание 1.

C помощью SELECT выведите всех пассажиров, которые летят на самолете `Boeing` от компании `air_France`.
Обязательные поля для вывода: ID пассажира, Имя пассажира как `PASSENGER_NAME`, Название самолета и название компании
как `COMPANY_NAME`.

<!-- ЗАКРЕПИТЕ ВАШ SELECT ОТ 1 ЗАДАНИЯ ЗДЕСЬ -->
```sql
SELECT p.id AS ID, p.name AS PASSENGER_NAME, 'Boeing' AS PLANE_NAME , 'air_France' AS COMPANY_NAME
FROM Passenger p
JOIN (
    SELECT DISTINCT pit.passenger AS id FROM Trip t
    JOIN Company c ON t.company = c.id
    JOIN Pass_in_trip pit ON t.id = pit.trip
    WHERE
    t.plane = 'Boeing' AND
    c.name = 'air_France'
) t ON p.id = t.id
```

### Задание 2.

C помощью SELECT выведите количество пассажиров относительно каждого полета(`Pass_in_trip.trip`).
Отсортируйте записи относительно количество пассажиров в порядке убывания(от большего к меньшему).
Обязательные поля для вывода: Номер полета и Количество пассажиров.

<!-- ЗАКРЕПИТЕ ВАШ SELECT ОТ 2 ЗАДАНИЯ ЗДЕСЬ -->
```sql
SELECT trip, COUNT(trip) AS count FROM (
    SELECT DISTINCT trip, passenger FROM Pass_in_trip
) t
GROUP BY trip
ORDER BY count DESC
```

### Задание 3.

С помощью SELECT выведите количество всех пассажиров из таблицы PASSENGER, имена которых начинаются с одной и той же буквы.
Отсортируйте записи по убыванию(от большего к меньшему) относительно количества пассажиров. Показывать только те записи,
где количество больше 1. Обязательные поля для вывода: `FIRST_CHAR`(Первая буква имени) 
и `COUNT` (Количество пассажиров, имена которых начинаются с этой буквы).

<!-- ЗАКРЕПИТЕ ВАШ SELECT ОТ 3 ЗАДАНИЯ ЗДЕСЬ -->
```sql
SELECT FIRST_CHAR, COUNT(FIRST_CHAR) AS COUNT FROM (
    SELECT name, SUBSTRING(name, 1, 1) AS FIRST_CHAR
    FROM Passenger
) t
GROUP BY FIRST_CHAR
ORDER BY COUNT DESC
```

<!-- После выполнения всех заданий, необходимо сделать push в репозиторий и отправить ссылку на него -->
