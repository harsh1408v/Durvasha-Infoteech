const openAccordion = (index) => {
    const accordion = document.getElementsByClassName("accordion-item");
  
    for (let i = 0; i < accordion.length; i++) {
      const content = accordion[i].querySelector(".accordion-content");
      const heading = accordion[i].querySelector("div");
  
      if (index === i) {
        const isOpen = accordion[index].classList.toggle("open");
        accordion[index].classList.toggle("rotate");
        heading.setAttribute("aria-expanded", isOpen);
        if (isOpen) {
          content.style.minHeight = content.scrollY + "px";
        } else {
          content.style.minHeight = "0px";
        }
      } else {
        accordion[i].classList.remove("open");
        accordion[i].classList.remove("rotate");
        heading.setAttribute("aria-expanded", "false");
        content.style.minHeight = "0px";
      }
    }
  };
  
  document.querySelectorAll('.accordion-item div').forEach((heading, index) => {
    heading.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        openAccordion(index);
      }
    });
  });