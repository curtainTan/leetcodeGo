
# 其他类型的题



## [914. 卡牌分组](https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/)

解题思路：

将所有 值 与 对应的个数 存入对象内，后取最大公约数


```js
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck=[]) {
    let map = {}
    function gcd( x, y ){
        return x === 0 ? y : gcd( y % x, x )
    }
    let minLen = -1
    for( let i = 0; i < deck.length; i ++ ){
        if( map[ deck[i] ] === undefined ){
            map[ deck[i] ] = 1
        } else {
            map[ deck[i] ] ++
        }
    }
    for( let key in map ){
        if( minLen === -1 ){
            minLen = map[key]
        } else {
            minLen = gcd( minLen, map[key] )
        }
    }
    return minLen >= 2
};
console.log( hasGroupsSizeX( [1,2,3,4,4,3,2,1,4,3,2,1] ) )
```

### 求最大公约数：

```js
/**
 * 递归
 * x, y 的顺序无关大小
 * 3 % 9 ----- 3    3 % 3 ----- 0
 * 9 % 3 ----- 0
 * 故：无关大小，结果都是一样的  ---  可能会多做几次运算
 */
function gcb( x, y ){
    return x === 0 ? y : gcb( y % x, x )
}
```








