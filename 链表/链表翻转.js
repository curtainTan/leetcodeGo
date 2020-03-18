var node = {
    num: 0,
    next: null
}
var node1 = {
    num: 1,
    next: null
}
node.next = node1
var node2 = {
    num: 2,
    next: null
}
node1.next = node2
var node3 = {
    num: 3,
    next: null
}
node2.next = node3
var node4 = {
    num: 4,
    next: null
}
node3.next = node4
var node5 = {
    num: 5,
    next: null
}
node4.next = node5
console.log( node )



var twoNode = {
    num: 0,
    next: null
}
var twoNode1 = {
    num: 1,
    next: null
}
var twoNode2 = {
    num: 2,
    next: null
}
var twoNode3 = {
    num: 3,
    next: null
}
var twoNode5 = {
    num: 5,
    next: null
}
twoNode.next = twoNode1
twoNode1.next = twoNode3
twoNode3.next = twoNode5



// 链表翻转
function reverseTrain( head ){
    if( head === null || head.next === null ){
        return head
    }
    let nowNode = head.next
    let preNode = head
    preNode.next = null
    // 处理头结点为 null
    let nextNode = null
    // 结果导向：最后一个节点的 next 指向 null
    while( nowNode !== null ){
        // 取出第 下一个 节点
        nextNode = nowNode.next
        // 指向 上一个 节点
        nowNode.next = preNode
        // 后移节点   三个节点都 后移
        preNode = nowNode
        nowNode = nextNode
        nextNode = nextNode && nextNode.next
    }
    return preNode
}


// https://www.cnblogs.com/yepei/p/7120634.html


// console.log( "转置过后" )
// var res = reverseTrain( node )
// console.log( res )




// 使用递归解决
// function digui( head ){
//     let reverse = ( pre, cur ) => {
//         if( cur === null ) return pre
//         let next = cur.next
//         cur.next = pre
//         return reverse( cur, next )
//     }
//     return reverse( null, head )
// }


// 翻转链表  遍历
function reverseChain( head ){
    let cur = head
    let pre = null
    let nextNode = null
    while( cur !== null ){
        // 保存下一个节点
        nextNode = cur.next
        // 转置前两个节点
        cur.next = pre
        pre = cur
        cur = nextNode
    }
    return pre
}
