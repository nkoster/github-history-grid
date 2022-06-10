const gridContainer = document.querySelector('.grid-container')
const weekDays = document.querySelector('.week-days')

let count = 0

for (let col = 0; col < 53; col++){
  const gridWeek = document.createElement('div')
  for (let row = 0; row < 7; row++) {
    let div
    if (col === 0) {
      let text
      div = document.createElement('div')
      switch (row) {
        case 0:
          text = document.createTextNode('');
          break
        case 1:
          text = document.createTextNode('Mon');
          break
        case 2:
          text = document.createTextNode('');
          break
        case 3:
          text = document.createTextNode('Wed');
          break
        case 4:
          text = document.createTextNode('');
          break
        case 5:
          text = document.createTextNode('Fri');
          break
        case 6:
          text = document.createTextNode('');
          break
      }
      div.className = 'grid-week-text'
      div.appendChild(text)
      weekDays.append(div)
    }
    count++
    div = document.createElement('div')
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

function dateFormat(date) {
  const d = date.toString().split(' ')
  return `${d[0]}, ${d[1]} ${parseInt(d[2], 10)}, ${d[3]}`
}

function isInTheFuture(date) {
  const today = new Date()
  today.setHours(23, 59, 59, 998)
  return date > today
}
