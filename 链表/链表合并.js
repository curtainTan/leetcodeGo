// 21. 合并两个有序链表
// https://leetcode-cn.com/problems/merge-two-sorted-lists/submissions/




function mergeChain( l1, l2 ){
    let merge = ( node1, node2 ) => {
        if( node1 === null ) return node2
        if( node2 === null ) return node1
        if( node1.val < node2.val ){
            node1.next = merge( node2, node1.next )
            return node1
        } else {
            node2.next = merge( node2, node2.next )
            return node2
        }
    }
    return merge( node1, node2 )
}



// 递归实现
function mergeChain( l1, l2 ){
    // 主要一个头结点保存开始的位置
    let head = p = {}
    while( l1 && l2 ){
        if( l1.val < l2.val ){
            p.next = l1
            p = p.next
            l1 = l1.next
        } else {
            p.next = l2
            p = p.next
            l2 = l2.next
        }
    }
    if( l1 ){
        p.next = l1 
    } else {
        p.next = l2
    }
    return head.next
}








