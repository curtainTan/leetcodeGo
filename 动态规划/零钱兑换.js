

// 322. 零钱兑换
// https://leetcode-cn.com/problems/coin-change/submissions/


// 动态规划
// 使用一个数组  --  将前面的结果存起来，比较取最小值

var coinChange = function(coins, amount) {
    let arr = Array( amount+1 ).fill( amount + 1 )
    arr[0] = 0
    for( let i = 1; i <= amount; i ++ ){
        for( let j = 0; j < coins.length; j ++ ){
            if( coins[j] <= i ){
                arr[i] = Math.min( arr[i], arr[ i - coins[j] ] + 1 )
            }
        }
    }
    return arr[ amount ] > amount ? -1 : arr[amount]
};


// 递归      自上而下递归
function digui( coins = [], amount ){
    let res = amount
    let a = ( data = 0, num = 0 ) => {
        if( data === 0 ){
            res = Math.min( res, num )
            return
        }
        if( data < 0 ){
            return
        }
        for( let i = 0; i < coins.length; i ++ ){
            a( data - coins[i], num + 1 )
        }
    }
    a( amount, 0 )
    console.log( "结果是：", res )
}

// console.log( digui( [1,2,5], 11 ) )




