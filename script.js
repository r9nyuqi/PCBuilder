const tabs = documnet.querySelectALl('[data-tab-target]')

tabs.foreEach( tab => { 
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        target.classList.add('active')
    })
})