function MockDomStorage() {
	var storage = {}
	return {
		key: function key(index) { return storage[index] },
		getItem: function getItem(key) { return storage[key]? storage[key] : null },
		setItem: function setItem(key, val) { storage[key] = val; len++ },
		removeItem: function removeItem(key) { delete storage[key]; len-- },
		clear: function clear() { storage = {}; len=0 }
	}
}

module.exports = MockDomStorage