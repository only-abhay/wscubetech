var upperCase="ABCDEFGHIJKLMNOPQURSTUVWXYZ";
var lowerCase="abcdefghijklmnopqurstuvwxyz";
var numbers="0123456789";
var specialCharc="!@#$%^&*?/";
var combined=upperCase+lowerCase+numbers+specialCharc;
var len=50;
var password=""
for(var i=1;i<=len;i++){
    var index=Math.floor(Math.random()*combined.length)
    password+=combined[index]  
}
console.log(password);



