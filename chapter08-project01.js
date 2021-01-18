/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

var filenames = ["106020.jpg", "116010.jpg", "120010.jpg"];
for(row=0;row<3;row++)
total = calculateTotal(quantity[row]*prices[row]);
outputCartRow(filenames[row],titles[row],quantities[row],prices[row],total[row]);
subTotal=total+price;
taxamount=subtotal*0.10;
//10% as tax amount//
shipping price=0;subTotal<=1000;shipping price=40;
grandTotal=subTotal+shipping price+taxamount;
<td>$+finalPrice.toFixed(2)+"</td>