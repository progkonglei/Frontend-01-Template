

    const objects = [
        'eval',
        'isFinite',
        'isNaN',
        'parseFloat',
        'parseInt',
        'decodeURI',
        'decodeURIComponent',
        'encodeURI',
        'encodeURIComponent',
        // Constructor Properties
        'Array',
        'ArrayBuffer',
        'Boolean',
        'DataView',
        'Date',
        'Error',
        'EvalError',
        'Float32Array',
        'Float64Array',
        'Function',
        'Int8Array',
        'Int16Array',
        'Int32Array',
        'Map',
        'Number',
        'Object',
        'Promise',
        'Proxy',
        'RangeError',
        'ReferenceError',
        'RegExp',
        'Set',
        'SharedArrayBuffer',
        'String',
        'Symbol',
        'SyntaxError',
        'TypeError',
        'Uint8Array',
        'Uint8ClampedArray',
        'Uint16Array',
        'Uint32Array',
        'URIError',
        'WeakMap',
        'WeakSet',
        // Other Properties
        'Atomics',
        'JSON',
        'Math',
        'Reflect',
    ];


    let set = new Set();

    let queue = [];

    for (var p of objects) {
        queue.push({
            path: [p],
            object: this[p]
        })
    }

    // console.log(queue);

    let current;


    while (queue.length) {
        current = queue.shift();
        console.log(current.path.join('.'))
        if (set.has(current.object)) continue;

        set.add(current.object);
        // 
        // console.log(current);

        for (let p of Object.getOwnPropertyNames(current.object)) {

            const property = Object.getOwnPropertyDescriptor(current.object, p);

            if (property.hasOwnProperty('value') && ((property.value !== null) && (typeof property.value == 'object') || (typeof property.value == 'object')
            ) && property.value instanceof Object) {
                queue.push({
                    object: property.value,
                    path: current.path.concat([p])
                })
            }

            if (property.hasOwnProperty('get') && typeof property.get == 'function') {
                queue.push({
                    object: property.get,
                    path: current.path.concat([p])
                })
            }

            if (property.hasOwnProperty('set') && typeof property.set == 'function') {
                queue.push({
                    object: property.set,
                    path: current.path.concat([p])
                })
            }

        }
    }