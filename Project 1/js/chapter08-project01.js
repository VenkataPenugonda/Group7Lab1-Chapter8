/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */
class Book{
   constructor(fileName,title,quantity,price,total){
      this.fileName=fileName;
      this.title=title;
      this.quantity=quantity;
      this.price=price;
      this.total=total;
   }
}
var filenames = ["106020.jpg", "116010.jpg", "120010.jpg"];
var titles = ["Girl with a Pearl Earring", "Artist Holding a Thistle", "Portrait of Eleanor of Toledo"];
var quantities = [3, 1, 2];
var prices = [80, 125, 75];

var doms=[];
for(var i=0;i<filenames.length;i++){
doms.push(new Book(filenames[i],titles[i],quantities[i],prices[i],quantities[i]*prices[i]));
}
var Subtotal=0;
for(var j=0;j<doms.length;j++){
   document.write('<tr>'); 
   document.write('<td>' + '<img src=images/' + doms[j].fileName + ' />' + '</td>');
   document.write('<td>' + doms[j].title + '</td>');
   document.write('<td>' + doms[j].quantity + '</td>');
   document.write('<td>' +"$"+ doms[j].price + '</td>');
   document.write('<td>' +"$"+doms[j].total + '</td>');
   document.write('</tr>');
   subTotal+=doms[j].total;
}
/*
var tax=subTotal*0.10;
var shippingPrice=0;
if(subTotal>1000){
   shippingPrice=40;
}
var finalPrice = subTotal + tax + shippingPrice;

document.write("<tr class='totals'><td colspan='4'>Subtotal</td><td>$"+subTotal+"</td></tr>");
document.write("<tr class='totals'><td colspan='4'>Tax</td><td>$"+tax+"</td></tr>");
document.write("<tr class='totals'><td colspan='4'>Shipping</td><td>$"+shippingPrice+"</td></tr>");
document.write("<tr class='totals focus'><td colspan='4'>Grand Total</td><td>$"+finalPrice+"</td></tr>")
*/
var subtotal=0;

for (i=0; i < filename.length; i++)
{
   let amt=CalcTotal(quantity[i],price[i]);
   let qty=quantity[i].toFixed(2);
   let prices=price[i].toFixed(2);
   OutputCartRow(filename[i],title[i],qty,prices,amt.toFixed(2));
   subtotal += parseFloat(amount.toFixed(2));
}