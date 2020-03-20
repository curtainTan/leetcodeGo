


// 300. 最长上升子序列
// https://leetcode-cn.com/problems/longest-increasing-subsequence/


// 状态方程：dp[i] = 1
// 状态转移方程：dp[i] = max( dp[i-1], dp[i-2]...., dp[i] )


function LIS( nums = [] ){
    if( nums.length === 0 ) return 0
    let dp = [ 1 ]
    let res = 1
    for( let i = 1; i < nums.length; i ++ ){
        dp[i] = 1
        for( let j = i - 1; j >= 0; j -- ){
            if( nums[j] < nums[i] ){
                dp[i] = Math.max( dp[i], dp[j] + 1 )
            }
        }
        res = Math.max( res, dp[i] )
    }
    return res
}




