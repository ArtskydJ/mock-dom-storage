module.exports = function MockDomStorage() {
	var items = {}

	var storage = {
		getItem: function getItem(key) { return (items[key] == null) ? null : items[key] },
		setItem: function setItem(key, val) { items[key] = val; },
		removeItem: function removeItem(key) { delete items[key] },
		clear: function clear() { items = {} },
		key: function key(index) { return Object.keys(items)[index] }
	}

	Object.defineProperty(storage, 'length', {
		get: function () { return Object.keys(items).length }
	})

	return storage
}
