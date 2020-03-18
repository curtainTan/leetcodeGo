
let a = "77777777777777777777"
let b = "8888888888888888888888888"

// 1 分成数组
// 2 倒序相加
// 3 进位 标记符 = 1
// 4 执行完相加 标记符 = 0
// 5 将剩余的 数 放入 数组3 前

function add( a, b ){
    let arr1 = a.split("")
    let arr2 = b.split("")
    let arr3 = []

    let flag = 0
    while( arr1.length && arr2.length ){
        let addRes = parseInt( arr1.pop() ) + parseInt( arr2.pop() ) + flag
        flag = 0
        if( addRes >= 10 ){
            flag = 1
            addRes = String(addRes).split("")[1]
        }
        arr3.unshift( addRes )
    }

    if( arr1.length ){
        arr3 = [ ...arr1, ...arr3 ]
    }
    if( arr2.length ){
        arr3 = [ ...arr2, ...arr3 ]
    }
    return arr3.join("")
}

let s = add( a, b )

console.log( s )

