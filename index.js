const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
        if (Array.isArray(collection)) {
            collection.forEach(element => callback(element));
        } else if (typeof collection === 'object') {
            for (const key in collection) {
                callback(collection[key], key, collection);
            }
        }
        return collection;
    },

    map: function(collection, callback) {
        if (!Array.isArray(collection)) {
            collection = Object.values(collection);
        }
        
        let newCollection =[];
        for (let i = 0; i < collection.length; i++) {
            newCollection.push(callback(collection[i]));
        }

        return newCollection;
    },

    reduce: function(collection, callback, acc) {
        let newCollection = [...collection];
        
        if (!acc) {
            acc = newCollection[0];
            newCollection = newCollection.slice(1);
        }

        for (let i = 0; i < newCollection.length; i++) {
            acc = callback(acc, newCollection[i], newCollection);
        }

        return acc;

    },

    find: function(collection, predicate) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                return collection[i];
            }
        }
    },

    filter: function(collection, predicate) {
        let newCollection = [];
        
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                newCollection.push(collection[i]);
            }
        }

        return newCollection;
    },

    size: function(collection) {
        if (!Array.isArray(collection)) {
            return Object.keys(collection).length;
        } else {
            return collection.length;
        }
    },

    first: function(array, n) {
        if (!n) {
            return array[0]
        } else {
            return array.slice(0, n);
        }
    },

    last: function(array, n) {
        if (!n) {
            return array[array.length - 1];
        } else {
            return array.slice(-n)
        }
    },

    compact: function(array) {
        let newArray = [];

        for (let i = 0; i < array.length; i++) {
            if (array[i]) {
                newArray.push(array[i]);
            }
        }

        return newArray;
    },

    sortBy: function(array, callback) {
        const newArray = [...array];
        return newArray.sort((a, b) => callback(a) - callback(b));
    },

    flatten: function(array, shallow, newArray=[]) {
        for (let i = 0; i < array.length; i++) {
            if (!Array.isArray(array[i])) {
                newArray.push(array[i]);
            } else if (shallow) {
                newArray = [...newArray, ...array[i]];
            } else {
                this.flatten(array[i], shallow, newArray);
            }
        }

        return newArray;
    },

    uniq: function(array, isSorted, callback) {

    },

    keys: function(object) {
        let keys = [];
        for (const key in object) {
            keys.push(key);
        }

        return keys;
    },

    values: function(object) {
        let values = [];
        for (const key in object) {
            values.push(object[key]);
        }

        return values;
    },

    functions: function(object) {
        let functionNames = [];

        for (const key in object) {
            if (typeof object[key] === 'function') {
                functionNames.push(key)
            }
        }

        return functionNames.sort();
    },


  }
})()

fi.libraryMethod()
// console.log(fi.each([1, 2, 3]), alert);
// console.log(fi.each({ dog: 'sophie', cat: 'abe', fish: 'nemo'}, alert));
