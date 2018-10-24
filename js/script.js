// SWITCH
/*var day='wednesday';
switch (day) {
	case 'monday':
		document.write('Today is monday');
		break;
	case 'tuesday':
		document.write('Today is tuesday');
		break;
	default:
		document.write('Today is best day!');
}*/

// ELSE IF
/*var day='wednesday';
if (day=='monday') {
	document.write('Today is monday');
} else if (day=='tuesday') {
	document.write('Today is tuesday');
} else 
	document.write('Today is best day');
*/

// FOR
/*
for (var i=1; i<=7; i++) {
	document.write(i + ' Hello, world! <br>');
}

var i=0;
for (;i < 5;) {
	document.write(i  + '<br>');
	i++;
}
for (var i = 0; i <= 5; i++) {
	if (i == 3) {
		continue;
	}
	document.write(i);
}
*/

// WHILE
/*var day=0;
var i=0;
while (i < day) {
	document.write('Good day: ' + i + '<br>');
	i++;
}*/

// DO WHILE
/*var i=5;

do {
	document.write(i + '<br>');
	i++;
}
while (i <=6);
*/

// FUNCTION

/*function calcSum(x, y) {
	document.write(x + y);
}
calcSum(5, 6);

function myFunction(a, b) {
	return a*b;
}

var x = myFunction(1, 2);
document.write(x);
*/

//alert('Hello\nworld!');
/*var x = prompt('Please, insert your age: ', '18');
document.write(x);*/

/*var result = confirm('Do you really want to leave this page');
if (result == true) {
	alert('Thanks for visiting');
} else alert('Thanks for staying with me');
*/

// OBJECT

var person = {
	name: 'John', age: '31', favColor: 'green', height: '198'
};

var x = person.name;
document.write(x);





