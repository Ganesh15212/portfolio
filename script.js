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
    if (projectName === 'Yummy Restaurant') {
       
        window.open('https://github.com/Ganesh15212/Yummy_Restaruant_Project', '_blank');
    }
   
    else if(projectName === 'Finbuzz Project')
    {
        
        window.open('https://github.com/Ganesh15212/Finbuzz_Website_Project', '_blank');
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





   
   