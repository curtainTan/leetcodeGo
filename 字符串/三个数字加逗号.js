


var num = 12345678.90


// 正则
function addCommas( num = 12 ){
    num += ""
    console.log( typeof num )
    var arr = num.split( "." )
    var leftNum = arr[0]
    var rightNum = arr[1]
    var reg = /(\d+)(\d{3})/g
    while( reg.test( leftNum ) ){
        leftNum = leftNum.replace( reg, "$1,$2" )
    }
    // console.log( leftNum )
    return leftNum + "." + rightNum
}

// console.log( addCommas( num ) )

// 用数组的方式
function addCommasByArr( num ){
    num += ""
    let nums = num.split( "." )
    let arr = nums[0].split("")
    let index = 1
    for( let i = arr.length - 1; i > 0; i -- ){
        if( index % 3 ){} else {
            arr.splice( i, 0, "," )
        }
        index ++
    }
    return arr.join("") + "." + nums[1]
}


console.log( addCommasByArr( num ) )
