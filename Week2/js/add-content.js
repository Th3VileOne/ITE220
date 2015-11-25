var products=["Stamford T-Shirt", "Stamford Notebook", "Stamford Wristband"];
var price=[10,5,1];
var total = 0;

var productList = document.getElementById("productList");
productList.innerHTML += "<li>" +products[0] + ": $" + price[0] +"</li>" + "<li>" + products[1] + ": $" + price[1] + "</li>" + "<li>" + products[2]+ ": $" + price[2] + "</li>";



total = price[0];

//document.write("Total is " + total);
var totalPriceEle = document.getElementById("totalPrice");
totalPriceEle.textContent = "$" + total;