var currentDt = new Date();
// console.log(currentDt);
var currenttimeunix = currentDt.getTime();
var cufrrentullyear=currentDt.getFullYear();
var currentday=currentDt.getDay();
var currentmonth=currentDt.getMonth();
var currentdatestring=currentDt.toDateString();
var mili=currentDt.getMilliseconds();
var timezone=currentDt.getTimezoneOffset();
var utcdate=currentDt.setUTCDate();
var locstr=currentDt.toLocaleString();


// console.log(currenttimeunix);
// console.log(cufrrentullyear);
// console.log(currentday);
// console.log(currentmonth);
// console.log(currentdatestring);
// conole.log(mili);
// console.log(timezone);
// console.log(utcdate);
// console.log(locstr);s
var  someRandomDate= 20/20/2020 ;
var someDateTime= 178799959939 ;
var converteddatetime= new Date(178799959939);
var convertrandom= new Date(someRandomDate).getTime();
// console.log(converteddatetime.getDate());
console.log( convertrandom);