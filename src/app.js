const http = require('http');
const { writeTemp } = require('./writeTmp');
function handle(req) {
  // Source in PR-changed file → sink in unchanged writeTmp.js
  const name = (req && req.url && req.url.slice(1)) || 'x.tmp';
  return writeTemp(name, 'body');
}
http.createServer((req, res) => {
  handle(req);
  res.end('ok');
}).listen(0);
module.exports = { handle };
