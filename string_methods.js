var str = "Please locate where 'locate' occurs!";
//string methods
var sln = str.length;//string length
console.log("Length of string    "+str+"   is "+sln);
var pos = str.indexOf("locate");//location
console.log("position of 'locate' in the given string is:"+pos);
var lastpos = str.lastIndexOf("locate");
console.log("last occurence 'locate' in given string"+lastpos);
var res = str.slice(7, 13);
console.log("Slice:"+res);
var substring = str.substr(7, 6);
console.log("substring"+substring);
var n = str.replace("locate", "locate replaced");
console.log("replace():"+n);
var uppercasetext = str.toUpperCase();
console.log("string in Uppercase:"+uppercasetext);
var lowercasetext=str.toLowerCase();
console.log("string in lowercase:"+lowercasetext);
var str2="concatenation";
var str3 = str.concat(" ", str2);
console.log("concatenated string:"+str3);
var str4 = "       Hello World!        ";
console.log(str4.trim());
console.log("charcter at 0th position is:"+str.charAt(0));
var txt = "Hello";
console.log("text split:"+txt.split("")); 

