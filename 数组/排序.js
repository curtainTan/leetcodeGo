
// 912. 排序数组
// https://leetcode-cn.com/problems/sort-an-array/


// 快排     ----   注意判定越界


var sortArray = function(nums) {
    // 快排序
    let midIndex = ( arr=[], start, end ) => {
        let index = start
        let cur = arr[end]
        for( let i = start; i <= end; i ++ ){
            if( arr[i] <= cur ){
                [ arr[i], arr[index] ] = [ arr[index], arr[i] ]
                index ++
            }
        }
        return index - 1
    }
    let quickSort = ( arr=[], start, end=arr.length - 1 ) => {
        if( end - start < 0 ) return arr
        let mid = midIndex( arr, start, end )
        quickSort( arr, start, mid - 1 )
        quickSort( arr, mid + 1, end )
    }
    quickSort( nums, 0, nums.length - 1 )
    return nums
};


console.log( sortArray([5,2,3,1]) )










