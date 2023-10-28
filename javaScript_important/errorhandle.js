var x = '16'

try {
    if (x == '')
        throw 'Empty'
    if (isNaN(x))
        throw 'not a num'
    x = Number(x)
    if (x < 5)
        throw 'too low'
    if (x > 5 && x <= 10)
        throw 'perfect'
    if (x > 5)
        throw 'too high'
}
catch (output) {
    console.log(output)
}