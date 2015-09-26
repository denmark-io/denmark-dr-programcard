
'use strict';
'use strong';

const jsonic = require('jsonic');
const request = require('request');

function findInfoObject(content) {
  let lastOffset = 0;
  while (true) {
    const scriptStart = content.indexOf('<script type="text/javascript">', lastOffset);
    if (scriptStart === -1) return null;

    const scriptEnd = content.indexOf('</script>', scriptStart);
    const scriptContent = content.slice(scriptStart + 31, scriptEnd);
    if (scriptContent.indexOf('window.DR') !== -1) {
      return jsonic(scriptContent.slice(12, -1));
    }
    lastOffset = scriptEnd;
  }
}

function videosource(href, callback) {
  request(href, function (err, res, content) {
    if (err) return callback(err, null);

    const info = findInfoObject(content.toString());
    callback(null, info.TV.ProgramCard.Urn);
  });
}
module.exports = videosource;
