
/* -- 1 bhk--*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

/* -- 2 bhk--*/
var slideIndex1 = 1;
showDivs1(slideIndex1);

function plusDivs1(n) {
  showDivs1(slideIndex1 += n);
}

function showDivs1(n) {
  var j;
  var y = document.getElementsByClassName("mySlides1");
  if (n > y.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = y.length}
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";  
  }
  y[slideIndex1-1].style.display = "block";  
}

/* -- 3  bhk--*/
var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  var k;
  var z = document.getElementsByClassName("mySlides2");
  if (n > z.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = z.length}
  for (k = 0; k < z.length; k++) {
    z[k].style.display = "none";  
  }
  z[slideIndex2-1].style.display = "block";  
}

/* -- 4  bhk--*/
var slideIndex3 = 1;
showDivs3(slideIndex3);

function plusDivs3(n) {
  showDivs3(slideIndex3 += n);
}

function showDivs3(n) {
  var l;
  var w = document.getElementsByClassName("mySlides3");
  if (n > w.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = z.length}
  for (l = 0; l < w.length; l++) {
    w[l].style.display = "none";  
  }
  w[slideIndex3-1].style.display = "block";  
}



/* --- enquiry form ---*/
function enquiry() {
    var fname = document.forms["EnqForm"]["FirstName"];
    var lname = document.forms["EnqForm"]["LastName"];
    var address = document.forms["EnqForm"]["Address"];
    var email = document.forms["EnqForm"]["Email"];
    var phone = document.forms["EnqForm"]["Phone"];
    var location = document.forms["EnqForm"]["Location"];
    var project = document.forms["EnqForm"]["Project"];
    var flat = document.forms["EnqForm"]["Flat"];
    var query = document.forms["EnqForm"]["query"];



    if (fname.value == "" && fname.value =="^[A-Za-z]$" ) {
        window.alert("Please enter the frist name in mentioned format");
        fname.focus();
        return false;
    }

    if (lname.value == "" && lname.value =="^[A-Za-z]$") {
        window.alert("Please enter the last name in mentioned format");
        lname.focus();
        return false;
    }

    if (address.value == "" && address.value =="^[A-Za-z][A-Za-z0-9_]{7,29}$") {
        window.alert("Please enter the address in mentioned format");
        address.focus();
        return false;
    }

    if (email.value == "" && email.value =="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$") {
        window.alert("Please enter a valid e-mail id");
        email.focus();
        return false;
    }

    if (phone.value == "" && phone.value =="(0|91)?[7-9][0-9]{9}") {
        window.alert("The length of phone number should be 10");
        phone.focus();
        return false;
    }

    if (location.value == "" && location.value =="^[A-Za-z][A-Za-z0-9_]{7,29}$") {
        window.alert("Please select the location");
        password.focus();
        return false;
    }

    if (project.value == "" && project.value =="^[A-Za-z][A-Za-z0-9_]{7,29}$") {
        window.alert("Please enter the  project name in mentioned format");
        password.focus();
        return false;
    }

    // if (query.value == "" && query.value =="^[A-Za-z][A-Za-z0-9_]{7,29}$") {
    //     window.alert("Please enter query in mentioned format or query not entered");
    //     password.focus();
    //     return false;
    // }

    if (flat.selectedIndex < 1) {
        alert("Please select the type of flat");
        flat.focus();
        return false;
    }

    return true;

}  

function Submit()
{
  alert("Data sent successfully !")
}

/* ---- nested dropdown --*/
