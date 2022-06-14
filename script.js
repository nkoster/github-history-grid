;(function() {
  const gridContainer = document.querySelector('.grid-container')
  const weekDays = document.querySelector('.week-days')
  const monthContainer = document.querySelector('.month-container')

  let count = 0

  const currentMonth = new Date().getMonth()
  const monthTable = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const monthList = []

  let i
  for (i = currentMonth; i >= 0; i--) {
    monthList.push(i)
  }
  for (i = 11; i > currentMonth; i--) {
    monthList.push(i)
  }

  monthList.reverse().forEach(m => {
    const month = document.createElement('div')
    month.className = 'month'
    const text = document.createTextNode(`${monthTable[m]}`)
    month.appendChild(text)
    monthContainer.append(month)
  })

  for (let col = 0; col < 53; col++) {
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

}())
