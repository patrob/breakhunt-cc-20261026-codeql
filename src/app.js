const { writeTemp } = require('./writeTmp');
function handle() {
  return writeTemp('fixed.tmp', 'ok');
}
module.exports = { handle };
