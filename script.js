const gridContainer = document.querySelector('.grid-container')
let count = 0

for (let col = 0; col < 53; col++){
  const gridWeek = document.createElement('div')
  for (let row = 0; row < 7; row++) {
    count++
    const div = document.createElement('div')
    div.className = 'grid-item'
    const now = new Date()
    const dayOffset = new Date(
      now.setDate(now.getDate() + count - 365 - now.getDay())
    )
    div.setAttribute('title', dateFormat(dayOffset))
    if (dateFormat(dayOffset) === dateFormat(new Date)) {
      div.classList.add('now')
    }
    if (isInTheFuture(dayOffset)) {
      div.classList.remove('grid-item')
    }
    gridWeek.append(div)
  }
  gridContainer.append(gridWeek)
}

function dateFormat(d) {
  const date = d.toString().split(' ')
  return `${date[0]}, ${date[1]} ${date[2]}, ${date[3]}`
}

function isInTheFuture(date) {
  const today = new Date()
  today.setHours(23, 59, 59, 998)
  return date > today
}
