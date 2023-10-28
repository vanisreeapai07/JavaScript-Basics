var a = { a: 1, b: 2, c: 3 }

var data = '';
var val = '';
var c = '';
var b;

for (var key1 in a) {
    var value = a[key1];
    data += key1 + ': ' + value + '\n\n';
}

for (var key2 in a) {
    b = key2
    c = a[b]
    val += c + '\n';
}

console.log(data + 'and \n\n' + val);






