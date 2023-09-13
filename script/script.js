const things = document.getElementById('newthing')

things.addEventListener('submit', (e) => {
  e.preventDefault()
  const thingToDo = document.getElementById('thingstodo')

  const newThing = {
    thing: thingToDo.value,
  }

  console.log('Saved thing', newThing)

  const newToDoCard = document.createElement('div')
  newToDoCard.classList.add('todo-card')

  newToDoCard.innerHTML = `
  <p>${newThing.thing}</p>
  `
  newToDoCard.addEventListener('mouseover', function () {
    newToDoCard.style.backgroundColor = '#abf7b1'
    newToDoCard.innerHTML = `<del>${newThing.thing}</del>`
  })

  newToDoCard.addEventListener('mouseout', function () {
    newToDoCard.style.backgroundColor = ''
    newToDoCard.innerHTML = `<p>${newThing.thing}</p>`
  })

  newToDoCard.addEventListener('click', function () {
    newToDoCard.remove()
  })

  const cardSection = document.getElementById('savedthingstodo')
  cardSection.appendChild(newToDoCard)

  thingToDo.value = ''
})
