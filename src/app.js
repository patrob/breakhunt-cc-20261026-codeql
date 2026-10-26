const { writeTemp } = require('./writeTmp');
function handle(input) {
  // PR introduces user-controlled flow into sink in unchanged writeTmp.js
  return writeTemp(String(input));
}
module.exports = { handle };
