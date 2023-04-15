export const storage = {
    set: function (location, value) {
        if (typeof window =="undefined") return
        // 
        localStorage[location] = value
    },
    get: function (location) {
		if (typeof window =="undefined") return
        // 
		return localStorage[location]
	},
    exists: function (location) {
		if (typeof window =="undefined") return
        // 
        if (localStorage[location]) return true
		else return false
	},
    search: function (query) {
        if (typeof window =="undefined") return
        // 
        let keys = Object.keys(localStorage)
        let set = []
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].includes(query)) set.push(keys[i])
        }
        return set
    },
    reset: function() {
        if (typeof window =="undefined") return
        // 
        localStorage.clear()
    },
    delete: function (location) {
        if (typeof window =="undefined") return
        // 
        if (this.exists(location)) localStorage.removeItem(location)
    },
    clear: function() {
        if (typeof window =="undefined") return
        // 
        localStorage.clear()
    }
}