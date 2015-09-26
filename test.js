
'use strict';
'use strong';

const test = require('tap').test;
const programcard = require('./index.js');

test('programcard from main page', function (t) {
  programcard('https://www.dr.dk/tv/se/detektor-tv/detektor-2015-09-24', function (err, urn) {
    t.ifError(err);
    t.equal(urn, 'urn:dr:mu:programcard:55f8aaa7a11f9f17c87b7254');
    t.end();
  });
});

test('programcard from popup', function (t) {
  programcard('https://www.dr.dk/tv/se/detektor-tv/detektor-2015-09-24/popup/', function (err, urn) {
    t.ifError(err);
    t.equal(urn, 'urn:dr:mu:programcard:55f8aaa7a11f9f17c87b7254');
    t.end();
  });
});

test('programcard from old video', function (t) {
  programcard('https://www.dr.dk/tv/se/afslutningsdebat/danmarks-valg-partilederrunde/', function (err, urn) {
    t.ifError(err);
    t.equal(urn, 'urn:dr:mu:programcard:558363a4a11f9f11f85e8dac');
    t.end();
  });
});
