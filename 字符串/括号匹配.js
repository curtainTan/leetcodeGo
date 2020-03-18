

function pick( str = "" ){
    if( str.length < 1 ){
        return false
    }
    let stack = []
    for( let i = 0; i < str.length; i ++ ){
        if( str.charAt(i) === ")" && stack[ stack.length - 1 ] === "(" ){
            stack.pop()
            continue
        }

        if( str.charAt(i) === "]" && stack[ stack.length - 1 ] === "[" ){
            stack.pop()
            continue
        }

        if( str.charAt(i) === "}" && stack[ stack.length - 1 ] === "{" ){
            stack.pop()
            continue
        }
        stack.push( str.charAt(i) )

    }
    return stack.length > 0 ? false : true
}

console.log( pick( "" ) )
console.log( "正确的---" )
console.log( pick( "[({})]" ) )
console.log( pick( "([)]" ) )
console.log( pick( "[" ) )
console.log( pick( "[]" ) )





