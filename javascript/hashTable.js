// There are two implementation of hashtable in JS
// Object class and Map class.
// Map has adventage over map. Map track the size and key value pairs can be assigned
// only by setter function. Also resolves the potential side effect of overriding 
// prototype methods. 

// The main idea of hash table is that hash function converts keys into index and 
// and stores value under that index in the memory. Hash tables are time efficient.
// It's fast in search, insertion and in deletion. Mainly it's time complexity upn these
// functionalities are O(n)

class Hashtable {
    constructor() {
        this.table = new Array(256);
        this.size = 0;
    }

    _hash(key) {
        let hash;
        for (let i in key) {
            hash =+ key.charCodeAt(i);
        };

        return hash % this.table.length;
    }

    set(key, value) {
        const index = this._hash(key);
        this.table[index] = [key, value];
        this.size++;
    };

    get(key) {
        const index = this._hash(key);
        return this.table[index];
    };

    remove(key) {
        const index = this._hash(key);

        if(this.table[index] && this.table[index].length) {
            this.table[index] = undefined;
            this.size--;
            return true;
        } else {
            return false;
        };
    };
};
