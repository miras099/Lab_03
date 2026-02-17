# Lab 03 — React Components и Hooks

## Lab 3.1 — StepCounter

Реализован компонент StepCounter с использованием useState.

Функциональность:
- Принимает props: initialValue и step
- Управляет состоянием: count, history, operationCount
- Кнопки Increment / Decrement / Reset
- Отображает последние 5 значений
- Два независимых счетчика через родительский компонент

Props — это данные от родителя (read-only).
State — внутренние данные компонента, которые изменяются через useState.

---

## Lab 3.2 — UserProfile

Реализован компонент с использованием useEffect для загрузки данных.

Функциональность:
- Загрузка данных пользователя через fetch
- Состояния: loading, error, user
- Используется AbortController для отмены запроса
- userId передается через props
- useEffect зависит от userId

Dependency array [userId] нужен, чтобы повторно выполнять fetch при изменении userId.
Cleanup предотвращает memory leak.

---

## Запуск проекта

В каждой папке:

```bash
npm install
npm run dev
