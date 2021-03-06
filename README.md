mock-dom-storage
================

[![Build Status](https://travis-ci.org/ArtskydJ/mock-dom-storage.svg)](https://travis-ci.org/ArtskydJ/mock-dom-storage)
[![Dependency Status](https://david-dm.org/artskydj/mock-dom-storage.svg)](https://david-dm.org/artskydj/mock-dom-storage)
[![devDependency Status](https://david-dm.org/artskydj/mock-dom-storage/dev-status.svg)](https://david-dm.org/artskydj/mock-dom-storage#info=devDependencies)

An in-memory implementation of the [Storage API](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage), for testing!

```js
var localStorage = MockDomStorage()

localStorage.setItem('thing', 'value')
localStorage.getItem('thing') // => 'value'
localStorage.getItem('unknown') // => null
localStorage.length // => 1
localStorage.setItem('hello', 'world')
localStorage.setItem('name', 'person')
localStorage.length // => 3
```

# api

```js
var mockStorage = require('mock-dom-storage')
```

# `var storage = mockStorage()`

The resulting object should, on the surface, be identical to sessionStorage or localStorage.

## `storage`

- `storage.getItem(key)`
- `storage.setItem(key, val)`
- `storage.removeItem(key)`
- `storage.clear()`
- `storage.key(index)`
- `storage.length`

# install

Install using [npm](https://nodejs.org/download)

	npm install mock-dom-storage

# license

[VOL](http://veryopenlicense.com/)
