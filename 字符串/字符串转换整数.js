

// 8. 字符串转换整数 (atoi)
// https://leetcode-cn.com/problems/string-to-integer-atoi/


// 注意正则使用 match 匹配的结果是数组，如果使用 g 模式符，返回整个匹配结果的数组


var myAtoi = function(str) {
    str = str.trim()
    let reg = /^(-|\+)?\d+/
    let res = str.match( reg )
    if( res === null ) return 0
    let num = parseInt( res[0] )
    if( num < Math.pow( -2, 31 ) ) return Math.pow( -2, 31 )
    if( num >= Math.pow( 2, 31 ) ) return Math.pow( 2, 31 ) - 1
    return num
};


myAtoi( " +91283472332 7879" )





