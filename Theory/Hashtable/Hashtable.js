const Hashtable = function (max) {

    const hashtable = new Array(max);;

    const hashCode = function (key) {
        return key.length % hashtable.length;
    }

    const isOccupied = function (hashedKey) {
        return !!hashtable[hashedKey];
    }

    const getFreeIndexWithLinearProbing = function (hashedKey) {
        if (isOccupied(hashedKey)) {
            const stopIndex = hashedKey;

            if (hashedKey === hashtable.length - 1) {
                hashedKey = 0;
            } else {
                hashedKey++;
            }

            while (isOccupied(hashedKey) && hashedKey != stopIndex) {
                hashedKey = (hashedKey + 1) % hashtable.length;
            }
        }

        return hashedKey;
    }

    const findKey = function (key, hashedKey) {

        if (hashtable[hashedKey] && hashtable[hashedKey].key === key) {
            return hashedKey;
        }

        const stopIndex = hashedKey;
        if (hashedKey === hashtable.length - 1) {
            hashedKey = 0;
        } else {
            hashedKey++;
        }

        while (hashedKey != stopIndex && !hashtable[hashedKey] && !hashtable[hashedKey].key === key) {
            hashedKey = (hashedKey + 1) % hashtable.length;
        }

        if (hashedKey !== stopIndex) {
            hashedKey = -1;
        }

        return hashedKey;
    }

    this.put = function (key, value) {
        let hashedKey = hashCode(key);

        hashedKey = getFreeIndexWithLinearProbing(hashedKey);

        if (isOccupied(hashedKey)) {
            console.log('Provided key is occupied!');
        } else {
            hashtable[hashedKey] = { key, value };
        }
    }

    this.get = function (key) {
        let hashedKey = hashCode(key);
        hashedKey = findKey(key, hashedKey);
        return hashtable[hashedKey];
    }

    this.print = function (value) {
        if (!value) {
            hashtable.map(i => console.log(i.value));
            console.log('------');
        } else {
            console.log(this.get(value));
        }
    }
}

const hashtable = new Hashtable(5);
hashtable.put('Mike', 'Mike Object');
hashtable.put('John', 'John Object');
hashtable.put('Jen', 'Jane Object');

hashtable.print();

// hashtable.print('Mike');