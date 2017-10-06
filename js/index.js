
Date.prototype.addHours = function(h) {    
   this.setTime(this.getTime() + (h*60*60*1000)); 
   return this;   
}

var hours = prompt("Please enter the hours", "240");
//var hours = 210;

var nowTemp = new Date();
      var endTime = nowTemp.setHours(nowTemp.getHours()+parseInt(hours)) / 1000;

function makeTimer() {
      

			var nowDate = new Date();
			var now = nowDate.getTime() / 1000;

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft) / 3600);
      var realHours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (realHours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (realHours * 3600) - (minutes * 60)));

			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days);
			$("#hours").html(hours + " : ");
			$("#minutes").html(minutes  + " : ");
			$("#seconds").html(seconds);		

	}

	setInterval(function() { makeTimer(); }, 1000);