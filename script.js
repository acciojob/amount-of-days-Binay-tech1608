//your JS code here. If required.
function daysOfAYear(year){
	let num = parseInt(year);
	//First we check if the mentioned year is a leap year.
	if(num%400==0 && num%4==0 && num>=400){
		return 366;
	}
	else{
		return 365;
	}
}