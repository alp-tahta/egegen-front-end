var acc = document.getElementsByClassName("accordion");
var i;

/* Open the first accordion and its panel by default */
if (acc.length > 0) {
  acc[0].classList.add("active");
  var firstPanel = acc[0].nextElementSibling;
  if (firstPanel) {
    firstPanel.style.display = "block";
  }
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}