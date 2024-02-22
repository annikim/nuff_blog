// scroll event to show/hide the back to top button dynamically -------
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("backToTopBtn");
   // backToTopBtn.addEventListener("click", goToTop);
  
    window.onscroll = function() {
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    };
  
    button.onclick = function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    const goToTop = () => {
      document.body.scrollIntoView({
        behavior: "smooth"
      });
    };
    
  });
