const http = require('http');
const fs = require('fs');

const SERVER = http.createServer((req, res) => {
  const BODY = verifyUrl(req.url);
  res.end(BODY);
});

function verifyUrl(url) {
  try {
    let urlDirectory = './public';
    let urlIndex = 'index.html';
    let urlAddress = '';
    if (url === '/') {
      urlAddress = `${urlDirectory + url + urlIndex}`;
      return fs.readFileSync(urlAddress);
    } else {
      urlAddress = `${urlDirectory + url}`;
      return fs.readFileSync(urlAddress);
    };
  } catch (e) {
    console.log(`Ошибка ${e.name}:${e.message}\n${e.stack}\n`);
    return
  };
  
};

const PORT = process.env.PORT || 3000;

SERVER.listen(PORT);

console.log(`Server started on port ${PORT}!\n`);