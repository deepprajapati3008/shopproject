//JAva /script for j_shop.html


/*
// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}

 for onmouse event
function bigImg()
{
            document.write("Hello World!");
 
}
function normalImg()
{

}
*/

function validate()
{
	var result=true;
	var e=document.getElementsByName("email")[0].value;
	
	var atindex=e.indexOf('@');
	var dotindex=e.lastIndexOf('.');
	if(atindex<1 || dotindex>=e.length-2 || dotindex-atindex<3)
	{
		result=false;
		alert("invalid format for email");
	}
	else
	{
  alert("Thank for Subscribing");
}
	return(result);
}


function msg(){  
 alert("Hello Javatpoint");  
}





/*Dropdown*/
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction2() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

