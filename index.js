function MockDomStorage() {
	var storage = {}
	var len = 0
	function key(index) { return storage[index] }
	function getItem(key) { return storage[key]? storage[key] : null }
	function setItem(key, val) { storage[key] = val; len++ }
	function removeItem(key) { delete storage[key]; len-- }
	function clear() { storage = {}; len=0 }
	return {
		//len: len,
		key: key,
		getItem: getItem,
		setItem: setItem,
		removeItem: removeItem,
		clear: clear
	}
}

module.exports = MockDomStorage