// 今天的状态是取最大值：昨天和前天的
// 与前两天相关：
var massage = function(nums) {
    let len = nums.length
    if( len === 0 ) return 0
    if( len === 1 ) return nums[1]
    let arr = Array( len )
    arr[0] = nums[0]
    arr[1] = Math.max( nums[1], nums[0] )
    for( let i = 2; i < len; i++ ){
        arr[i] = Math.max( arr[i-1], arr[i -2] + nums[i] )
    }
    console.log( arr )
    return arr[ len - 1 ]
}

// console.log( massage([2,1,4,5,3,1,2,3]) )



// 使用状态方程解决
// 两个状态：做了，没做
// 今天的状态与昨天相关：
//          今天没做：max( 昨天没做，昨天做了 )
//          今天做了：昨天没做 + 今天的值

// 题解
// https://leetcode-cn.com/problems/the-masseuse-lcci/solution/dong-tai-gui-hua-by-liweiwei1419-8/

var massage = function(nums) {
    let len = nums.length
    if( len === 0 ) return 0
    if( len === 1 ) return nums[0]
    let arr = [ [ 0, nums[0] ] ]

    for( let i = 1; i < len; i++ ){
        let item = []
        item[0] = Math.max( arr[ i-1 ][0], arr[ i-1 ][1] )
        item[1] = arr[ i-1 ][0] + nums[i]
        arr.push( item )
    }

    return Math.max( arr[ len -1 ][0], arr[ len -1 ][1] )
}

// console.log( massage([2,1,4,5,3,1,2,3]) )


// 多添加一行
var massage11 = function(nums) {
    let len = nums.length
    let arr = Array.from( { length: len + 1 }, () => [] )
    arr[0][0] = 0
    arr[0][1] = nums[0]

    for( let i = 1; i < len; i++ ){
        arr[i][0] = Math.max( arr[ i-1 ][0], arr[ i-1 ][1] )
        arr[i][1] = arr[ i-1 ][0] + nums[i]
    }

    return Math.max( arr[ len -1 ][0], arr[ len -1 ][1] )
}

console.log( massage11([2,1,4,5,3,1,2,3]) )


// 一维数组的解决方式
// 以接受邀约为状态
// 接受邀约：昨天一定休息
// 不接受邀约：今天的收入就是昨天的状态
// 这样--需要前面两天有状态

var massage = function(nums) {
    let len = nums.length
    if( len === 0 ) return 0
    if( len === 1 ) return nums[0]
    let arr = Array( len )
    arr[0] = nums[0]
    arr[1] = Math.max( nums[0], nums[1] )

    for( let i = 2; i < len; i++ ){
        arr[i] = Math.max( arr[ i-1 ], arr[ i-2 ] + nums[i] )
    }

    return arr[ len-1 ]
}

// console.log( massage([2,1,4,5,3,1,2,3]) )








