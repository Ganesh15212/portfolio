 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function () { scrollFunction() };

 function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         document.getElementById("myBtn").style.display = "block";
     } else {
         document.getElementById("myBtn").style.display = "none";
     }
 }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




function showProject(projectName) {
    if (projectName === 'Bookstore Website') {
       
        window.open('https://github.com/Ganesh15212/Bookstore_App', '_blank');
    }
   
    else if(projectName === 'SpeedUp InfoTech')
    {
        
        window.open('https://github.com/Ganesh15212/SpeedUp_InfoTech_Website.', '_blank');
    }
    else if(projectName === 'All Project')
    {
        window.open('https://github.com/Ganesh15212', '_blank');
    }
}



      //  *********************Active button**********************
      function isActive(curr){
        let navLink=document.querySelectorAll('.nav-link');
        // console.log(navLink)
        navLink.forEach(val=>{
            if(val.href.includes(curr)){
                let res=document.querySelector('.active').classList.remove('active');
                // console.log(res);
                val.classList.add('active');
            }
        })
       
    }




    const texts = ["React Developer", "MERN Stack Developer"];
    let currentTextIndex = 0;
    let currentCharIndex = 0;

    const typedTextElement = document.getElementById("typed-text");

    function type() {
      if (currentCharIndex < texts[currentTextIndex].length) {
        // Add one character to the display
        typedTextElement.textContent += texts[currentTextIndex][currentCharIndex];
        currentCharIndex++;
        setTimeout(type, 100); // Adjust typing speed
      } else {
        // Pause before deleting
        setTimeout(erase, 1000);
      }
    }

    function erase() {
      if (currentCharIndex > 0) {
        // Remove one character from the display
        typedTextElement.textContent = texts[currentTextIndex].slice(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(erase, 50); // Adjust deleting speed
      } else {
        // Move to the next text
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        setTimeout(type, 500); // Pause before typing next word
      }
    }

    // Start the typing effect
    type();





   
   