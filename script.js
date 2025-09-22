      // Mobile menu toggle
      const menuToggle = document.getElementById("menuToggle");
      const navMenu = document.getElementById("navMenu");

      menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
      });

      // Close mobile menu when clicking on links
      const navLinks = document.querySelectorAll(".nav-menu a");
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("active");
        });
      });