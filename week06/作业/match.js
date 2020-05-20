


function match(string) {
    let state = start;
    for (let c of string) {
        state = state(c);
    }
    return state === end;
}

function end() {
    return end;
}

function start(c) {
    if (c === 'a') {
        return foundA
    } else {
        return start;
    }
}

function foundA(c) {
    if (c === 'b') {
        return foundB;
    } else {
        return start;
    }
}


function foundB(c) {
    if (c === 'a') {
        return start
    } else if (c === 'x') {
        return end;
    } else {
        return start;
    }
}

console.log(match('abababx'))