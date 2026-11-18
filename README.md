# Структура проекта
```text
932401.sokolova.vika.lab6/
├── server.js
├── package.json
├── .gitignore
├── README.md
└── public/
    ├── index.html
    ├── style.css
    ├── script.js
    ├── dom.js
    ├── manifest.json
    ├── sw.js
    └── assets/
        └── avatar.png
```

Маршруты
GET / — главная страница
GET /about — о себе
GET /api/time — JSON с временем (24h)
GET /api/time?format=12 — JSON с временем (12h)

PWA
Манифест подключён (manifest.json)
Service Worker кеширует статику (sw.js)
Работает офлайн после первого визита