

// 前序遍历
function preMap( root ){
    if( !root ) return []
    let res = []
    let map = ( node ) => {
        res.push( node.val )
        if( node.left ){
            map( node.left )
        }
        if( node.right ){
            map( node.right )
        }
        return res
    }
    return map( root )
}


//  前序遍历    非 递归
function preMapStack( root ){
    if( !root ) return []
    let stack = [ root ]
    let res = []
    let node
    while( stack.length ){
        node = stack.pop()
        res.push( node.val )
        if( node.right ) stack.push( node.right )
        if( node.left ) stack.push( node.left )
    }
    return res
}


// 中序遍历   递归
// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/submissions/
function midMap( root = {} ){
    if( !root ) return []
    let res = []
    let map = ( node ) => {
        if( node.left ) map( node.left )
        res.push( node.val )
        if( node.right ) map( node.right )
        return res
    }
    return map( root )
}

// 非递归
function midMapStack( root ){
    let stack = []
    let res = []
    let p = root
    while( stack.length || p ){
        // 取出左节点
        while( p ){
            stack.push( p )
            p = p.left
        }
        let node = stack.pop()
        res.push( node.val )
        p = node.right
    }
    return res
}



// 后序遍历
// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/submissions/
function lastMap( root ){
    if( !root ) return []
    let res = []
    let map = ( node ) => {
        if( node.left ) map( node.left )
        if( node.right ) map( node.right )
        res.push( node.val )
    }
    map( root )
    return res
}


// 后序遍历     -----   循环
function lastStack( root ){
}



// 最大深度     递归
// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
function maxDeep( root ){
    if( !root ) return 0
    return Math.max( maxDeep(root.left) + 1, maxDeep(root.right) + 1 )
}


// 最大深度     非递归
function maxDepthStack( root ){
    if( !root ) return 0
    let queue = [ root ]
    let level = 0
    while( queue.length ){
        // 一层一层的遍历
        let size = queue.length
        while( size -- ){
            let node = queue.shift()
            if( node.left ) queue.push( node.left )
            if( node.right ) queue.push( node.right )
        }
        level ++
    }
    return level
}

// 最小深度
// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/


function minDepthD( root ){
    if( !root ) return 0
    return Math.min( minDepthD( root.left ) + 1, minDepthD( root.right ) + 1 )
}


function minDepth(){
    if( !root ) return 0
    let queue = [ root ]
    let level = 0
    while( queue.length ){
        let size = queue.length
        while( size -- ){
            let node = queue.shift()
            if( !node.left && !node.right ) return level + 1
            if( node.left ){
                queue.push( node.left )
            }
            if( node.right ){
                queue.push( node.right )
            }
        }
        level ++
    }
    return level
}



// 对称 二叉树   递归
function duicheng( root ){
    if( !root ) return false
    let digui = ( left, right ) => {
        if( !left && !right ) return true
        if( !left || !right || left.val !== right.val ) return false
        return digui( left.left,  )
    }
}





















