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



// 区间反转     结果导向    仔细分析需要 保存到外部的变量
function reverseBrtween( head, start, end ){
    let pre = null
    let next = null
    let cur = head
    let startNode = null
    let startNextNode = null
    for( let i = 1; i <= end; i ++ ){
        if( i < start ){
            startNode = pre = cur
            startNextNode = cur = cur.next
            continue
        } else {
            // 保存下一个节点
            next = cur.next
            // 交换
            cur.next = pre
            pre = cur
            cur = next
            startNextNode.next = next
        }
    }
    startNode.next = pre
    return head
}

// console.log( "区间反转" )
// console.log( reverseBrtween( node, 2, 4 ) )





