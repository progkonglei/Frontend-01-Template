//  处理字符串 

const match = (string) => {
    let foundA = false;
    let foundB = false;
    let foundC = false;
    let foundD = false;
    let foundE = false;
    for (let c of string) {
        if (c === 'a') {
            foundA = true;
        } else if (c === 'b' && foundA) {
            foundB = true;
        } else if (c === 'c' && foundB) {
            foundC = true;
        } else if (c === 'd' && foundC) {
            foundD = true;
        } else if (c === 'e' && foundD) {
            foundE = true;
        } else if (c === 'f' && foundE) {
            return true;
        } else {
            foundA = false;
            foundB = false;
            foundC = false;
            foundD = false;
            foundE = false;
        }
    }
    return false;
}

console.log(match('I am groom'))
