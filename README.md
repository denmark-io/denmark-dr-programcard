#denmark-dr-programcard [![Build Status](https://travis-ci.org/denmark-io/denmark-dr-programcard.svg?branch=master)](https://travis-ci.org/denmark-io/denmark-dr-programcard)

> Extracts the programcard URN from a dr.dk url

## Installation

```sheel
npm install denmark-dr-programcard
```

## Documentation

```javascript
const programcard = require('denmark-dr-programcard');
```

Given a popup url, this module will extract the programcard URN. This is an
id you can use to get more information about the specific program.

First step is usually to make a REST request to `http://www.dr.dk/mu-online/api/1.3/programcard/${programcard}`.
See http://www.dr.dk/mu-online/Help/1.3 for the full documentation.


```javascript
const href = 'https://www.dr.dk/tv/se/detektor-tv/detektor-2015-09-24';
programcard(href, function (err, urn) {
  if (err) throw err;

  assert(urn === 'urn:dr:mu:programcard:55f8aaa7a11f9f17c87b7254');
});
```

## Source

DR.dk provides a poorly documented but public API at http://www.dr.dk/mu-online/Help/1.3 .
_ProTip: there is a version 1.3 of the API, but you will be redirected to version 1.2. Unless you explicitly set it in the URL._

Much of this API is based on specific IDs, and these IDs are hard to obtain form
a friendly url. But in the HTML source code of the popup url (and possibly other urls),
there is a `<script>` tag that sets a `window.DR` object. From this `window.DR` object
programcard URN can be extracted. Using the programcard URN many of the other related
IDs can be obtained.
