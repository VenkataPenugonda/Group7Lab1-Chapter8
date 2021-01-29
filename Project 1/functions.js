/* define functions here */


        

var calculateTotal=(quantity,price)= {return quantity*price};
console.log(calculateTotal());
var outputCartRow = (file,title,quantity,price,total) {};
var outputCartRow = (file,title,quantity,price,total) = {doc.write('<tr>')
doc.write('<td>' + '<img src='+file+ />' + '</td'>);
doc.write('<td>' + title+ '</td/>');
doc.write('<td>' + quantity+ '</td/>');
doc.write('<td>' + price.toFixed(2)+ '</td/>');
// toFixed(2) to display 2 decimal places //
doc.write('<td>' + total.toFixed(2)+ '</td/>');
doc.write('<tr>')};