const div1 = document.getElementById("div1");

function loadInitial () {
    for (let i of favsO) {
        //console.info(i)
        //console.info('Head', i.head)
        //console.info('Type' , typeof(i.links), 'Links', i.links)
        let ul = document.createElement('ul')
        ul.textContent = i.head
        ul.setAttribute("id",i.head)
        div1.appendChild(ul)
        const ulId = document.getElementById(i.head)
        ulId.addEventListener("mouseenter", (evt) => loadChild(evt, i.links))
        ulId.addEventListener("mouseleave", (evt) => removeChilds(evt))
        ulId.addEventListener("contextmenu", (evt) => displayMenu(evt))
    }
}

displayMenu = (evt) => {
    //console.log('Right Clicked')
    evt.preventDefault()
    
}

function loadChild (evt, links) {
    //console.info('Adding Child...', evt.target.id)
    for (let j in links) {
        const li = document.createElement('li')
        document.getElementById(evt.target.id).appendChild(li)
        li.textContent = j
    }
}

function removeChilds (evt) {
    //console.info('Removing Child...')
    let ul = document.getElementById(evt.target.id)
    while(ul.firstElementChild) {
        ul.removeChild(ul.firstElementChild)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    //console.log('%O', favsO)
    loadInitial ()
})
