let phone = document.getElementById("phone");
let mango = document.getElementById("wrong");
function phonevalidation(){
   let reg = /^([0-9]{3})([\-.""])?([0-9]{3})({\.-" "})?([0-9]{4})$/;
   if(reg.test(phone.value)){
    mango.innerHTML = "valid phone no";
    mango.style.color = "yellow";
    return true;
  }
  else {
    mango.innerHTML = "invalid phone no";
    
    mango.style.color = "yellow";
    return false;
  }
}









   // let regexp =/^([0-9]{10})$/;
    //let pnum =/^([0-9]{3}).([0-9]{3}).([0-9]{3})$/;
    //let pnum1 =/^([0-9]{3})-([0-9]{3})-([0-9]{3})$/;
    //let pnum2 =/^([0-9]{3})" "([0-9]{3})" "([0-9]{3})$/;
    //if((phone.value)==(regexp&&(pnum||pnum1||pnum2))){
    //mango.innerHTML = "valid phone number";
    //mango.style.color = "white";
   // return true;
// }
  //else {
    //mango.innerHTML = "invalid email id";
    
    //mango.style.color = "white";
    //return false;
  //} 


//}
