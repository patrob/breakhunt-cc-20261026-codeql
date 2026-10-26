const fs = require('fs');
const os = require('os');
const path = require('path');
/** Classic insecure temp: predictable name under os.tmpdir(). */
function writeTemp(name, content) {
  const p = path.join(os.tmpdir(), name || 'breakhunt.tmp');
  fs.writeFileSync(p, content || '');
  return p;
}
module.exports = { writeTemp };
