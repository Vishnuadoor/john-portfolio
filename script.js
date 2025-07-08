document.addEventListener("DOMContentLoaded", () => {
  // --- Typing animation for Main Section Quote ---
  // Ensure the quote animation only runs if its container exists and is visible.
  // We're now targeting the blockquote itself, not just a generic ID "quote"
  // since the HTML structure has changed.
  const mainQuoteEl = document.querySelector(".Main #quote"); // Select the specific quote in Main section
  const fullMainQuote = `"Design isn't just how it looks—\nit's how it makes you feel before you even notice it."\n— John Philip`;
  let mainQuoteIndex = 0;

  if (mainQuoteEl) { // Check if the element exists before trying to animate
    mainQuoteEl.textContent = ""; // Clear content initially
    mainQuoteEl.classList.add("typing-cursor"); // Add cursor class

    function typeMainQuote() {
      if (mainQuoteIndex < fullMainQuote.length) {
        mainQuoteEl.textContent += fullMainQuote.charAt(mainQuoteIndex);
        mainQuoteIndex++;
        setTimeout(typeMainQuote, 40); // Typing speed
      } else {
        mainQuoteEl.classList.remove("typing-cursor"); // Remove cursor when done
      }
    }
    typeMainQuote(); // Start typing
  }


  // --- Typing animation for About Section Intro Text ---
  const abtIntroEl = document.getElementById("abt"); // This ID is correct from your HTML
  const fullAboutIntro = `Hi, I’m John Philip — a passionate and creative multimedia professional with a strong foundation in graphic design, UI/UX, web development, video editing, and 3D modeling. With a Bachelor's degree in Multimedia from Adobe School of Multimedia, I’ve cultivated a diverse skill set that spans across the digital creative spectrum.`;
  let abtIntroIndex = 0;

  if (abtIntroEl) { // Check if the element exists
    abtIntroEl.textContent = ""; // Clear content initially
    abtIntroEl.classList.add("typing-cursor"); // Add cursor class

    function typeAboutIntro() {
      if (abtIntroIndex < fullAboutIntro.length) {
        abtIntroEl.textContent += fullAboutIntro.charAt(abtIntroIndex);
        abtIntroIndex++;
        setTimeout(typeAboutIntro, 60); // Typing speed
      } else {
        abtIntroEl.classList.remove("typing-cursor"); // Remove cursor when done
      }
    }
    typeAboutIntro(); // Start typing
  }
});

   function toggleContentById(id) {
 const allContents = document.querySelectorAll('[id^="content-"]');

  const current = document.getElementById(id);



  allContents.forEach(el => {

    if (el !== current) {

      el.classList.remove('show'); // hide all others

    }

  });



  current.classList.toggle('show'); // toggle current

}