/* define functions here */
function CalcTotal(price,qty)
{
    return price * qty;
}
 function OutputCartRow(filename,title,qty,price,total)
 {
     console.log(filename);
     document.write('<tr>');
     document.write('<td><img src="../images/' + filename + '"></td>');
     document.write('<td>' + title + '</td>');
     document.write('<td>' + qty + '</td>');
     document.write('<td>' + price + '</td>');
     document.write('<td>' + total + '</td>');
     document.write('</tr>');

 }

document.getElementById('subtotal').innerHTML="$" + subtotal.toFixed(2);

var tax=(subtotal * 0.10);
document.getElementById('tax'),innerHTML="$" + tax.toFixed(2);

var shipping=0;
if(subtotal > 1000)
{
    shipping=40;
}
else
{
    shipping=0;
}
document.getElementById('Shipping').innerHTML="$" + shipping.toFixed(2);

var TotalAmount= subtotal -tax-shipping;
document.getElementById('GrandTotal').innerHTML="$" + TotalAmount.toFixed(2);