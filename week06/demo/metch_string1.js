//  处理字符串 


const match = (string) => {
    for (let c of string) {
        if (c === 'a') {
            return true;
        }
    }
    return false;
}

console.log(match('I am groom'))
