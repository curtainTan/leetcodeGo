// 1162. 地图分析
// https://leetcode-cn.com/problems/as-far-from-land-as-possible/




var maxDistance = function( grid = [] ) {
    let queue = []
    let len = grid.length
    // 保存所有的陆地
    for( let i = 0; i < len; i ++ ){
        for( let j = 0; j < len; j ++ ){
            if( grid[i][j] === 1 ){
                queue.push([ i, j ])
            }
        }
    }
    // 判空
    if( queue.length === 0 || queue.length === len * len ){
        return -1
    }
    // 开始广度遍历  一层 +1
    // 遍历过的节点  +2
    let res = -1
    while( queue.length > 0 ){
        res ++
        // 一层一层遍历完
        let floor = queue.length
        for( let i = 0; i < floor; i ++ ){
            // 取出一个节点
            let [ r, c ] = queue.shift()
            // 上下左右
            if( c - 1 >= 0 && grid[r][c-1] === 0  ){
                queue.push([ r, c-1 ])
                grid[r][c-1] = 2
            }
            // 下
            if( c + 1 < len && grid[r][c+1] === 0  ){
                queue.push([ r, c+1 ])
                grid[r][c+1] = 2
            }
            // 左
            if( r - 1 >= 0 && grid[r-1][c] === 0  ){
                queue.push([ r-1, c ])
                grid[r-1][c] = 2
            }
            // 右
            if( r + 1 < len && grid[r+1][c] === 0  ){
                queue.push([ r+1, c ])
                grid[r+1][c] = 2
            }
        }
    }
    return res
};




