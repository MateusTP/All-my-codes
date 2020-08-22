function plus1(number){
    if(number >= 0 || number <= 0){
        return number + 1 // to return the param + 1
    } // a simple way to verify if the param is an integer
    else{
        return 'none'
    }
}

console.log(plus1(1));

/* 
The feedback will be:
2 => if the value passed to the function  is an integer 
or 
'none' => if the value passe to the function is not an integer
*/