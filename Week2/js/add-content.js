var products=["Stamford T-Shirt", "Stamford Notebook", "Stamford Wristband"];
var price=[10,5,1];
var total = 0;

var userName = document.getElementById("userName");
userName.innerHTML += "Alvin";

var productList = document.getElementById("productList");
productList.innerHTML += "<li>" +products[0] + ": $" + price[0] +"</li>" + "<li>" + products[1] + ": $" + price[1] + "</li>" + "<li>" + products[2]+ ": $" + price[2] + "</li>";

var d = new Date();
var n = d.getHours();

var greet = document.getElementById("greet");

if(n > 4 && n < 12){
	greet.innerHTML += "Good Morning, ";
	} else if(n > 12 && n < 18){
		greet.innerHTML += "Good Afternoon, ";
		} else{
			greet.innerHTML += "Good Evening, "; 
			}
			


total = (price[0] + price[1] + price[2])*0.8;

//document.write("Total is " + total);
var totalPriceEle = document.getElementById("totalPrice");
totalPriceEle.textContent = "$" + total;