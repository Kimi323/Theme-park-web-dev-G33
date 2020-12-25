function openTab(e, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Hide all elements with class="tabcontent" by default
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove class "active" from tablinks by default
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Add "active" class when tablink pressed and display its contents
    e.currentTarget.className += " active";
    document.getElementById(tabName).style.display = "block";
  }