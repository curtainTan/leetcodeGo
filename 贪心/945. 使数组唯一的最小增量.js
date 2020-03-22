
// 945. 使数组唯一的最小增量
// https://leetcode-cn.com/problems/minimum-increment-to-make-array-unique/


var minIncrementForUnique = function(A) {
    A = A.sort( (a, b) => a - b )
    let res = 0
    for( let i = 1; i < A.length; i ++ ){
        while( A[i] <= A[ i-1 ] ){
            A[i] ++
            res ++
        }
    }
    return res
};