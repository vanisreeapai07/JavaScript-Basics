var person = { fname: 'vani', lname: 'sree' , age : 22}

var text;
var values;
var data = '';

for(var key in person)
{
    text = key
    values = person[text]
    data += values
}
console.log(data)