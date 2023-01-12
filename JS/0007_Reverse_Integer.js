/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let r = Math.abs(x).toString().split('').reverse().join('');

    if (r >= 2**31-1) {
        return 0;
    }
    return Math.sign(x) * r;
    
};