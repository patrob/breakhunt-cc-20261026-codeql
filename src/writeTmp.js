const fs = require('fs');
const os = require('os');
const path = require('path');
/** Sink: writes content to a predictable temp path (js/insecure-temporary-file). */
function writeTemp(content) {
  const p = path.join(os.tmpdir(), 'breakhunt-fixed.tmp');
  fs.writeFileSync(p, content);
  return p;
}
module.exports = { writeTemp };
