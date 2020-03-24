

// 5. 最长回文子串
// https://leetcode-cn.com/problems/longest-palindromic-substring/


// 中心法则：取一个点为中心，左右扩散
// 两种情况：
//          中间为单字符的
//          字符为偶数时：i 与 i-1 比较


var longestPalindrome = function(s) {
    let len = s.length
    let str = s[0]
    if( len < 2 ) return s
    let l = 0, r = 0
    for( let i = 1; i < len; i ++ ){
        l = i - 1
        r = i + 1
        while( l >= 0 && r < len ){
            if( s[l] === s[r] ){
                if( r - l >= str.length ) str = s.slice( l, r+1 )
                l --
                r ++
            } else {
                break
            }
        }
        l = i - 1
        r = i
        while( l >= 0 && r < len ){
            if( s[l] === s[r] ){
                if( r - l >= str.length ) str = s.substring( l, r+1 )
                l --
                r ++
            } else {
                break
            }
        }
    }
    return str
};