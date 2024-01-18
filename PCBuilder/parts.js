function parts()
{
  tabs.forEach(tab => {
  tabContents.forEach(tabContent => {
  tabContent.classList.remove('active')
  })
})

  document.getElementById("data").classList.add('active')
}