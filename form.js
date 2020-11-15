let email = document.getElementById("email");
let error = document.getElementById("error");
function validation() {
  let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}s)?$/;
  if (regexp.test(email.value)) {
    error.innerHTML = "valid email id";
    error.style.color = "white";
    return true;
  }
  else {
    error.innerHTML = "invalid email id";
    
    error.style.color = "white";
    return false;
  }
}

