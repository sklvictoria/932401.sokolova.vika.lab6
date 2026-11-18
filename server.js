const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Раздача статических файлов из папки public
app.use(express.static(path.join(__dirname, 'public')));

// Маршрут: главная страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Маршрут: о себе
app.get('/about', (req, res) => {
    res.send(`
        <h1>О себе</h1>
        <p>Соколова Виктория — путешественник.</p>
        <p>Посещено стран: 12, городов: 47, сделано фото: 1250.</p>
        <a href="/">← На главную</a>
    `);
});

// Маршрут: API времени (вариант 2)
app.get('/api/time', (req, res) => {
    try {
        const now = new Date();
        const format = req.query.format === '12' ? '12h' : '24h';
        
        const timeString = now.toLocaleTimeString(
            format === '12h' ? 'en-US' : 'ru-RU',
            {
                hour12: format === '12h',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }
        );
        
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        
        res.json({
            time: timeString,
            timezone: timezone,
            format: format
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});