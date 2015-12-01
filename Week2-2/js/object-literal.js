var hotel={
	name: "Stamford Hotel",
	rooms: 40,
	booked: 25,
	checkAvailability: function(){
			return this.rooms - this.booked;
		}
	};
	
var hotelname =document.getElementById("hotelname");
hotelname.textContent = hotel.name;

var roomsleft =document.getElementById("roomsleft");
roomsleft.innerHTML = hotel.checkAvailability();