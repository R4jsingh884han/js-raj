const accountId = 14427345
let accountEmail = "roshanrajsingh990@gmail.com"
var accountPssword = "546786780356"
accountCity = "jaipur"
let accountState;

// accountId = 3 // not allowed

accountEmail = "rrs@gmail.com"
accountPssword = "7835685768"
accountCity = "Saharsa"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope 
*/



console.table([accountId, accountEmail, accountPssword, accountCity, accountState])