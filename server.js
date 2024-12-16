const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('ربات در حال اجرا است...');
});

app.listen(3000, () => {
    console.log('سرور فعال است!');
});
