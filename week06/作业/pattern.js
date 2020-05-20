// 未知情况下 

function match(pattern, string) {

}



// 难度逐步上升 最终上升为正则 不需要用到高级技巧 需要很长时间

// 希望完成 KMP等效的 状态机  一个自由的  pattern   不允许使用for 循环  

// 算法的时间复杂度 om+n

// 不要使用原始的kmp 做 因为  

// 状态是生成的 使用闭包 

console.log(match('ababx  I am ababx  haha'))