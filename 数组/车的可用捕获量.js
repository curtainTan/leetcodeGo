
// https://leetcode-cn.com/problems/available-captures-for-rook/
// 999. 车的可用捕获量




/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let address = null
    for( let i = 0; i < 8; i ++ ){
        for( let j = 0; j < 8; j ++ ){
            if( board[i][j] === "R" ){
                address = [ i, j ]
                break
            }
        }
        if( address !== null ) break
    }
    let res = 0
    // 上下左右
    for( let i = address[1]; i >= 0; i -- ){
        if( board[ address[0] ][i] === "B" ){
            break
        }
        if( board[ address[0] ][i] === "p" ){
            res ++
            break
        }
    }
    // 下
    for( let i = address[1]; i < 8; i ++ ){
        if( board[ address[0] ][i] === "B" ){
            break
        }
        if( board[ address[0] ][i] === "p" ){
            res ++
            break
        }
    }
    for( let i = address[0]; i >= 0; i -- ){
        if( board[i][ address[1] ] === "B" ){
            break
        }
        if( board[ i ][address[1]] === "p" ){
            res ++
            break
        }
    }
    for( let i = address[0]; i < 8; i ++ ){
        if( board[ i ][address[1]] === "B" ){
            break
        }
        if( board[ i ][address[1]] === "p" ){
            res ++
            break
        }
    }
    return res
};








