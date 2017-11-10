
/**
*
* @annotation annotation for testfunction1
* @returnType String
* @param1 Number
* @param2 String
*
*/
exports.testfunction1 = function(n, s){
    return s + n;
}

/**
*
* @annotation annotation for testfunction2
* @returnType Number
* @param1 Number
* @param2 Number
*
*/
exports.testfunction2 = function(n1, n2){
    var s = n1+n2;
    return s;
} 