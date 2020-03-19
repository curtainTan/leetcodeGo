

//  股票
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/yi-ge-fang-fa-tuan-mie-6-dao-gu-piao-wen-ti-by-l-3/


// 两个状态   ----   0 未持有 ---  1 持有
function getMax( prices =[] ){
    let arr = []
    for( let i = 0; i < prices.length; i ++ ){
        let item = [ 0, 0 ]
        if( i === 0 ){
            item[0] = 0
            item[1] = -prices[0]
            arr.push( item )
            continue
        }
        item[0] = Math.max( arr[i - 1 ][1] + prices[i], arr[i-1][0] )
        item[1] = Math.max( arr[i-1][1], -prices[i] )
        arr.push( item )
    }
    console.log( arr )
    return arr[prices.length - 1][0]
}

// console.log( getMax( [ 5,1,4,3,7 ] ) )


function getMax1( prices = [] ){
    if( prices.length < 2 ) return 0
    let min = prices[0]
    let maxRes = 0
    for( let i = 1; i < prices.length; i ++ ){
        min = Math.min( min, prices[i] )
        maxRes = Math.max( maxRes, prices[i] - min )
    }
    return maxRes
}


function fibo( n ){
    let dp = [ 1, 1 ]
    for( let i = 2; i < n; i ++ ){
        dp[i] = dp[ i - 1 ] + dp[ i - 2 ]
    }
    console.log( dp )
    return dp[ n - 1 ]
}

// console.log( fibo( 6 ) )


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

// console.log( getIp( "19216801" ) )



// 全排列   dfs
// dfs 重点  1. 截止条件  2. 遍历候选节点
function fullArr( arr = [] ){
    let res = []
    for( let i = 0; i < arr.length; i ++ ){
        for( let j = 0; j < arr.length; j ++ ){
            for( let k = 0; k < arr.length; k ++ ){
                if( i !== j && j !== k && i !== k ){
                    res.push([ arr[i], arr[j], arr[k] ])
                }
            }
        }
    }
    return res
}

function fullArrBfs( arr = [] ){
    let res = []
    // 传入 原数组，bool数组表示状态，传入层，传入 当前为止的结果
    let bfs = ( arr=[],picked=[], nowRes=[] ) => {
        // 结束条件
        if( nowRes.length === arr.length ){
            // 此处是引用--故需要解构-浅拷贝就行了
            res.push([ ...nowRes ])
            return
        }
        // 遍历节点
        for( let i = 0; i < arr.length; i ++ ){
            if( !picked[i] ){
                picked[i] = true
                nowRes.push( arr[i] )
                bfs( arr, picked, nowRes )
                picked[i] = false
                nowRes.pop()
            }
        }
    }
    let picked = new Array( arr.length ).fill( false )
    bfs( arr, picked, [] )
    return res
}

// console.log( fullArrBfs([ "a", "b", "c" ]) )


// 567. 字符串的排列
// https://leetcode-cn.com/problems/permutation-in-string/

// 使用 hash 表，存储字母出现的个数，然后使用滑动窗口 比较

var checkInclusion = function(s1, s2) {
    if( s1.length > s2.length ) return false
    let checked = new Array( s1.length ).fill( false )
    // 找出所有的组合方式
    let bfs = ( str = "", check=[], nowRes = [] ) => {
        if( nowRes.length === s1.length ){
            console.log( "----",nowRes.join("") )
            return s2.includes( nowRes.join("") )
        }
        for( let i = 0; i < str.length; i ++ ){
            if( !check[i] ){
                nowRes.push( str[i] )
                checked[i] = true
                if( bfs( str, checked, nowRes ) ){
                    return true
                }
                checked[i] = false
                nowRes.pop()
            }
        }
        return false
    }
    return bfs( s1, checked, [] )
};

// console.log( checkInclusion( "ab", "eidboaoo" ) )


function phone( digits = "" ){
    if( !digits ) return []
    let arr = [
        [],
        [],
        ["a", "b", "c"],["d", "e", "f"],["g", "h", "i"],
        ["j", "k", "l"],["m", "n", "o"],["p", "q", "r", "s"],
        [ "t", "u", "v" ], ["w", "x", "y", "z"]
    ]
    let res = []
    var dfs = ( str, nowArr = [], res = [] ) => {
        // 结束条件
        if( nowArr.length === str.length ){
            return res.push( nowArr.join("") )
        }

        // 候选操作
        let getArr = arr[ parseInt( str[ nowArr.length ] ) ]
        for( let i = 0; i < getArr.length; i ++ ){
            nowArr.push( getArr[i] )
            dfs( str, nowArr, res )
            nowArr.pop()
        }
    }
    dfs( digits, [], res )
    return res
}

// console.log( phone( "234" ) )

// 不重复序列
function fullpailie( nums = [] ){
    let res = []
    let map = {}
    for( let i = 0; i < nums.length; i ++ ){
        if( map[nums[i]] ){
            map[nums[i]] ++
        } else {
            map[nums[i]]  = 1
        }
    }
    let bfs = ( arr, map, nowArr = [] ) => {
        // 结束条件
        if( nowArr.length === arr.length ){
            res.push( [ ...nowArr ] )
            return
        }

        // 候选条件
        let once = []
        for( let i = 0; i < arr.length; i ++ ){
            if( map[arr[i]] > 0 && once.indexOf( arr[i] ) < 0 ){
                once.push( arr[i] )
                nowArr.push( arr[i] )
                map[arr[i]] --
                bfs( arr, map, nowArr )
                map[arr[i]] ++
                nowArr.pop()
            }
        }
    }
    bfs( nums, map, [] )
    return res
}


// console.log( fullpailie( [ 1, 2, 1 ] ) )






