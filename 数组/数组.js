
// 数组扁平化
function flat( arr = [] ){
    let res = []
    for( let i = 0; i < arr.length; i ++ ){
        if( Array.isArray( arr[i] ) ){
            res.push( ...flat( arr[i] ) )
        } else {
            res.push( arr[i] )
        }
    }
    return res
}

// let arr = [ 1, 2, 3, [ 4, 5, [ 6, 7 ,8 ] ] ]


// console.log( flat( arr ) )


// 数组去重       1. 使用 filter
function unique( arr = [] ){
    return arr.filter( ( item, index ) => {
        return index === arr.indexOf( item )
    })
}
var arr = [ 1, 2,  3, 4 ,3, 3 ,2 ,2 ,5 ,6 ]
// console.log( unique( arr ) )


// 快排序    原数组的方式
function quickSort( arr, start = 0, end = arr.length - 1 ){
    if( end - start < 1 ){
        return arr
    }
    function getMidIndex( arr = [], start = 0, end ){
        let target = arr[end]
        let index = start     // 记录替换的下标
        for( let i = start; i <= end; i ++ ){
            if( arr[ i ] <= target ){
                [ arr[i], arr[index] ] = [ arr[index], arr[i] ]
                index ++
            }
        }
        return index - 1
    }
    let midIndex = getMidIndex( arr, start, end )
    quickSort( arr, start, midIndex - 1 )
    quickSort( arr, midIndex + 1, end )
    return arr
}



// console.log( "快速排序：", quickSort( arr ) )



// 合并两个有序数组


// 括号匹配   在自身上操作   用正则
function isVaile( str = "" ){
    var reg = /(\(\))|(\[\])|(\{\})/
    while( reg.test( str ) ){
        str = str.replace( reg, "" )
    }
    return str ? false : true
}

// console.log( isVaile( "[()]" ) )
// console.log( isVaile( "([)]" ) )
// console.log( isVaile( "[" ) )
// console.log( isVaile( "[({})]" ) )


// 括号匹配   栈
function stackMatch( str = "" ){
    var stack = []
    let ch = ""
    for( let i = 0; i < str.length; i ++ ){
        ch = str.charAt( i )
        if( ch === "(" || ch === "[" || ch === "{" ){
            stack.push( ch )
            continue
        }
        if( ch === ")" && stack.pop() !== "(" ){
            return false
        }
        if( ch === "]" && stack.pop() !== "[" ){
            return false
        }
        if( ch === "}" && stack.pop() !== "{" ){
            return false
        }
    }
    return stack.length === 0
}

// console.log( stackMatch( "[()]" ) )
// console.log( stackMatch( "([)]" ) )
// console.log( stackMatch( "[" ) )
// console.log( stackMatch( "[({})]" ) )



// 数组扁平化
function flatArr( arr = [] ){
    let resArr = []
    if( Array.isArray( arr ) ){
        for( let i = 0; i < arr.length; i ++ ){
            resArr.push( ...flatArr( arr[i] ) )
        }
        return resArr
    } else {
        return [ arr ]
    }
}

// var arr = [ 1, 2, 3, [ 4, 5, [ 6, 7 ,8 ] ] ]
// console.log( "数组扁平化" )
// console.log( flatArr( arr ) )



// 二叉树 层序遍历        队列
// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
function levelOrder( root = {} ){
    if( !root ) return []
    let res = []        // 结果
    let level = 0       // 记录数组下标
    let queue = [ root ]  // 使用队列 保存 当前层的节点
    while( queue.length ){
        res.push([])
        let size = queue.length
        while( size -- ){       // 每操作一次  队列移出一个节点
            let node = queue.shift()
            res[level].push( node.val )
            // 入队
            if( node.left ) queue.push( node.left )
            if( node.right ) queue.push( node.right )
        }
        level ++
    }
    return res
}

// 二叉树的锯齿形层次遍历
// https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/
function zigzagLevelOrder( root ){
    if( !root ) return []
    let res = []
    let level = 0
    let queue = [ root ]
    // 队列不为空
    while( queue.length ){
        res.push( [] )      // 用来存放当前层 数据
        let size = queue.length
        while( size -- ){
            // 取出队列 第一个 节点
            let node = queue.shift()
            // 存值
            res[level].push( node.val )
            // 将 左右子节点 存入队列
            if( node.left ) queue.push( node.left )
            if( node.right ) queue.push( node.right )
        }
        // 把结果翻转一下
        if( level % 2 ) res[level].reverse()
        level ++
    }
    return res
}

// 二叉树的右视图
// https://leetcode-cn.com/problems/binary-tree-right-side-view/
function rightLook( root = {} ){
    if( !root ) return []
    let res = []
    let queue = [ root ]
    while( queue.length ){
        // 暂存当前层的 节点个数
        let size = queue.length
        while( size -- ){
            let node = queue.shift()
            if( size === 0 ){
                res.push( node.val )
            }
            if( node.left ) queue.push( node.left )
            if( node.right ) queue.push( node.right )
        }
    }
    return res
}


// 用栈 实现 队列
class queueFromStack {
    // 两个栈  使用 stack1 存，使用 stack2 出
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }
    push( item ){
        this.stack1.push( item )
    }
    pop(){
        if( this.stack2.length ){
            return this.stack2.pop()
        } else {
            while( this.stack1.length ){
                this.stack2.push( this.stack1.pop() )
            }
        }
    }
    // 获取 队列 的第一个元素
    peek(){
        if( !this.stack2.length ){
            while( this.stack1.length ){
                this.stack2.push( this.stack1.pop() )
            }
        }
        return this.stack2[ this.stack2.length - 1 ]
    }
    empty(){
        return !this.stack1.length && !this.stack2.length
    }
}


// 用 队列 实现 栈
class stackFromQueue {
    constructor(){
        this.queue1 = []
        this.queue2 = []
    }
    push( item ){
        this.queue1.push( item )
    }
    pop(){
        if( this.queue2.length ){
            while( this.queue1.length ){
                 this.queue2.push( this.queue1.pop() )
            }
        }
        return this.queue2.shift()
    }
    peek(){
        if( !this.queue2.length ){
            while( this.queue1.length ){
                this.queue2.push( this.queue1.pop() )
            }
        }
        return this.queue2[ this.queue2.length - 1 ]
    }
    empty(){
        return !this.queue1.length && !this.queue2.length
    }
}







// 乱序

function luanxu( arr = [] ){
    let len = arr.length
    while( len -- ){
        let index = Math.floor( Math.random() * len );
        [ arr[index], arr[len] ] = [ arr[len], arr[index] ]
    }
    return arr
}

var arr = [ 1, 2, 3, 4, 5, 6, 7 ,8 ]
console.log( luanxu( arr ) )













