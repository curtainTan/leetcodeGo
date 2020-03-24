// 876. 链表的中间结点
// https://leetcode-cn.com/problems/middle-of-the-linked-list/


// 数组法
var middleNode = function(head) {
    let queue = []
    let next = head
    while( next !== null ){
        queue.push( next )
        next = next.next
    }
    next = queue[ Math.floor( queue.length / 2 ) ]
    return next
};


// 快慢指针法

var middleNode = function(head) {
    let slow = head
    let fast = head.next
    while( fast !== null ){
        fast = fast.next && fast.next.next
        slow = slow.next
    }
    return slow
};


// 快慢指针的要点
// 快指针一定要提前前置一位  ------  防止双数个节点

