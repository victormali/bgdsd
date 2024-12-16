const fs = require('fs');

// خواندن سورس کد کدگذاری‌شده
const encodedSource = fs.readFileSync('encoded_source.txt', 'utf-8');

// رمزگشایی سورس کد
const decodedSource = Buffer.from(encodedSource, 'base64').toString('utf-8');

// اجرای سورس کد رمزگشایی‌شده
eval(decodedSource);

// سرور برای نگه داشتن پروژه آنلاین
require('./server');
