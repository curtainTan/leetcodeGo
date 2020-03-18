
// 解析 ip 地址
function getIp( path = "" ){
    let res = []
    // index 下标
    // level 第几个
    // nowRes 当前截取的结果
    let dfs = ( path = "", index, level, nowRes=[] ) => {
        // 截止条件
        if( level === 5 || index === path.length - 1 ){
            if( level === 5 && index === path.length - 1 ){
                console.log( "----", nowRes )
                res.push([ ...nowRes ])
            }
            return
        }
        // 候选
        // 最长三个
        for( let i = 0; i < 4; i ++ ){
            var x = path.substr( index + 1, i )
            console.log( "----", x )
            if( parseInt(x) < 256 && ( x === "0" || !x.startsWith("0")) ){
                nowRes.push( x )
                dfs( path, index + i, level + 1, nowRes )
                nowRes.pop()
            }
        }
    }
    dfs( path, -1, 1, [] )
    return res
}

console.log( getIp( "19216801" ) )