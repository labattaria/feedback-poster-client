**Читати іншою мовою: [Українська](README.ukr.md), [English](README.md).**

# Feedback Poster

---

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](#)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](#)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](#)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](#)
[![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)](#)

Це клієнтська частина React, створена та налаштована для додатку **Feedback Poster**

Це лише частина всього додатку, друга частина (сервер) знаходиться в цьому репо: [Feedback Poster Server](https://github.com/labattaria/feedback-poster-server)

Додаток у цьому репозиторії розгорнуто на сайтi [![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](#), за цією URL-адресою: [https://feedback-poster-client.vercel.app/](https://feedback-poster-client.vercel.app/)

Але ви можете використовувати цей додаток вручну на своєму локальному комп’ютері

## Залежностi, якi використовуються:

- **Vite** - Швидкий і сучасний інструмент збірки, який забезпечує дуже швидку та гарячу заміну модулів (HMR) для розробки, оптимізований для фреймворків
- **React** - Бібліотека, що використовується для створення користувацьких інтерфейсів, особливо для односторінкових застосунків, де потрібен швидкий та інтерактивний досвід
- **React Router DOM** - Бібліотека маршрутизації для керування навігацією в React-додатках
- **TypeScript** – статична типізація для безпечнішого та зручнішого в підтримці коду
- **SASS** - CSS-препроцесор з розширеними можливостями, такими як змінні, вкладеність та модулi

Повний список залежностей можна знайти у файлі **package.json**.

---

## Можливостi React, якi були використані:

- **Components** - Основні компоненти React-застосунків, повторно використовувані та інкапсульовані елементи інтерфейсу
- **useState, useEffect** - Основні хуки для керування станом і життєвим циклом компонентів
- **Props** - Механізм передачі даних та обробників подій від батьківських до дочірніх компонентів
- **Rendering Lists** - Динамічне відображення списку елементів шляхом ітерації по масивах
- **Conditional Rendering** - Відображення різних елементів інтерфейсу залежно від стану застосунку, пропсів або умов
- **useRef** - Зберігає посилання на DOM-елемент або значення без виклику повторних рендерів

---

## Вміст

- [Встановлення](#Встановлення)
- [Використання](#Використання)

### Встановлення

1. Склонуйте репозиторій:

```shell
git clone https://github.com/labattaria/feedback-poster-client.git
```

2. Встановіть залежності проекту:

```shell
cd feedback-poster-client
npm install
```

### Використання

Запустіть реакт-дев-сервер за допомогою наступної команди:

```shell
npm run dev
```

Сервер буде доступний за адресою **http://localhost:5173/**
