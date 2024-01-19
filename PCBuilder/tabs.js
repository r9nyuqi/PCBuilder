const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })

})

function signup()
{
  tabs.forEach(tab =>
    {
      const target = document.querySelector(tab.dataset.tabTarget)
      tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
      })
      tabs.forEach(tab => {
        tab.classList.remove('active')
      })
      target.classList.add('active')
    })
    const singup = document.querySelector('.signup'.dataset.tabTarget)
    signup.add('active');

}




function signup(int)
{
    tabs.forEach(tab => {
      tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
      })
  })

  if(int == 1)
  {
    document.getElementById("user").classList.add('active')
  }
  else if(int == 2)
  {
    document.getElementById("signup").classList.add('active')
  }
}


function login()
{
  tabs.forEach(tab => {
  tabContents.forEach(tabContent => {
  tabContent.classList.remove('active')
  })
})

  document.getElementById("welcome").classList.add('active')
}

function algoTab()
{
    tabs.forEach(tab => {
        tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
        })
      })
      
    document.getElementById("algorithm").classList.add('active')
}

