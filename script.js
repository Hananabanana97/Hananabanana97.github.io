/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
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

var num = 1;

function change(indexNum) {
  //two lines below identify the number of pictures
  var slides = document.getElementById("picContainer").childElementCount;
  
  if(indexNum === 1) {
    
    num++;

    if(num > slides) {
      num=1;
      //document.getElementById("active").id="";
      var currentImg = document.getElementsByClassName("pic")[0].id="active";
      var lastImg = document.getElementById("picContainer").lastElementChild;
      lastImg.id="";
    }
    else {
      // the 4 lines below switch the image to next in the list
      var currentImg = document.getElementById("active").nextElementSibling;
      currentImg.id="active";
      var lastImg = currentImg.previousElementSibling;
      lastImg.id="";
    }
  }

  if(indexNum === 0) {

    num--;

    if(num < 1) {
      num = slides;
       //document.getElementById("active").id="";  still need to edit this
       var lastImg = document.getElementsByClassName("pic")[0].id="";
       var currentImg = document.getElementById("picContainer").lastElementChild;
       currentImg.id="active";
       //lastImg.id="";
    }
    else {
      // the 4 lines below switch the image to previous in the list
      var currentImg = document.getElementById("active").previousElementSibling;
      currentImg.id="active";
      var lastImg = currentImg.nextElementSibling;
      lastImg.id="";
    }
  }

}