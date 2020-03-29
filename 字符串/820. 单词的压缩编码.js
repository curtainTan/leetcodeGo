// 820. 单词的压缩编码
// https://leetcode-cn.com/problems/short-encoding-of-words/




var minimumLengthEncoding = function(words=[]) {
    words.sort( ( a, b ) => b.length - a.length )
    console.log( words )
    let res = words[0] + "#"
    for( let i = 1; i < words.length; i ++ ){
        if( !res.includes( words[i] ) ){
            res = res + words[i] + "#"
        }
    }
    return res.length
};



console.log( minimumLengthEncoding( ["me", "time", "bell"] ) )




