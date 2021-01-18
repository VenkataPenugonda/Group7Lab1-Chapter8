/* define functions here */
/*window.addEventListener("load",function()
{
    var filenames = ["106020.jpg", "116010.jpg", "120010.jpg"];

    var html="<table><tr>";
    var perrow = 3; //3 cells per row

    for (var i=0; i<filenames.length; i++)
    {
        html +="<td>" + filenames[i] + "</td>";
        var next = i +1;
    }
});*/

function calculateTotal(price,qty)
{
    var subtotal=price*qty;
    return subtotal;

}

function outputCartRow(file,title,quantity,price,total)
{
    var num1=80.00;
    var num2=240.00;
    document.write("Girl with a Pearl Earring",3,"$"+num1.tofixed(2),"$"+num2.tofixed());

    var num3=125.00;
    document.write("Girl with a Pearl Earring",3,"$"+num3.tofixed(2),"$"+num3.tofixed());

    var num4=75.00;
    var num5=150.00;
    document.write("Girl with a Pearl Earring",3,"$"+num4.tofixed(2),"$"+num5.tofixed());

}

function outputCartRow()
{
    
}