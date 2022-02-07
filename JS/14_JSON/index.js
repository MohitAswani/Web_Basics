// JSON(JavaScript Object Notation) object is a special type of data structure which is used to mainly transfer data. It is used in various platforms.


obj={name:'Mohit',roll_no:133,obj1:{exp1:"exp1"}}; // JSON object only consider double inverted commas for strings and hence also convert '' single inverted commas to double.

jso=JSON.stringify(obj);   // this will convert the JSON object to a string

console.log(jso);
console.log(typeof jso);

parsed=JSON.parse(jso)  // this will convert the string of JSON object back to JSON
console.log(parsed)
