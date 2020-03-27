// 914. 卡牌分组
// https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/






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


