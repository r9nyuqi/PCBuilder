// function loadprofile()
// {
//     tabs.forEach(tab => {
//         tabContents.forEach(tabContent => {
//         tabContent.classList.remove('active')
//         })
//       })
//     document.getElementById("userprofile").classList.add('active')

    
//     // document.addEventaListener('DOMContentLoaded',(e)=>{
//     //     setTimeout(()=>{
//     //     },2000);
//     //     tabs.forEach(tab => {
//     //         tabContents.forEach(tabContent => {
//     //         tabContent.classList.remove('active')
//     //         })
//     //       })
//     //     document.getElementById("userprofile").classList.add('active')
    
        
//     // })

//     // setTimeout(()=>
//     // {
       
//     // },2000)
    

// }
function profile()
{
  
    tabs.forEach(tab => {
        tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
        })
      })
      
      document.getElementById("profile").classList.add('active')
}


