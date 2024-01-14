const splash = document.querySelector(".splash");
document.addEventListener('DOMContentLoaded',(e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    },2000);
    tabs.forEach(tab => {
        tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
        })
      })
      
        document.getElementById("home").classList.add('active')

    
})