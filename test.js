var MockStorage = require('./')
var test = require('tape')

test('basic api', function (t) {
	var storage = MockStorage()

	t.equal(typeof storage.key, 'function', 'key is a function')
	t.equal(typeof storage.getItem, 'function', 'getItem is a function')
	t.equal(typeof storage.setItem, 'function', 'setItem is a function')
	t.equal(typeof storage.removeItem, 'function', 'removeItem is a function')
	t.equal(typeof storage.length, 'number', 'length is a number')
	t.equal(typeof storage.clear, 'function', 'getItem is a function')

	t.end()
})

test('setItem, getItem, removeItem, length', function (t) {
	var storage = MockStorage()

	function assertKeyValLen(testKey, testVal, len, msg) {
		if (!msg) msg = '"' + testKey + '" = ' + testVal
		t.equal(storage.getItem(testKey), testVal, msg)
		t.equal(storage.length, len, 'length is ' + len)
	}

	assertKeyValLen('oh yes', null, 0)
	assertKeyValLen('hey', null, 0, 'getting non-key returns null')
	storage.setItem('hey', 'sup')
	assertKeyValLen('hey', 'sup', 1, 'keys can be added')
	storage.removeItem('hey')
	assertKeyValLen('hey', null, 0, 'getting non-key returns null')
	storage.setItem('', 'wat')
	assertKeyValLen('', 'wat', 1, 'empty string allowed as key')
	storage.setItem('um', 'yo')
	assertKeyValLen('um', 'yo', 2)
	storage.clear()
	assertKeyValLen('um', null, 0, 'clearing removes items')
	storage.setItem('um', 'yo')
	assertKeyValLen('um', 'yo', 1)

	t.end()
})

test('key', function (t) {
	var storage = MockStorage()
	var range = [0, 1, 2, 3, 4]

	storage.clear()
	storage.setItem('a', 0)
	storage.setItem('b', 1)
	storage.setItem('c', 2)
	var keymap1 = range.map(storage.key)
	storage.setItem('b', 13)
	storage.setItem('a', 'hello!!!')
	var keymap2 = range.map(storage.key)
	t.deepEqual(keymap1, keymap2)

	t.end()
})
