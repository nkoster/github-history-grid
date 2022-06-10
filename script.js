const weekDays = ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za']

// const firstDay = new Date(new Date().setDate(new Date().getDate() - (53*7)))
// const gridWeek = document.querySelector('.grid-week')
const gridContainer = document.querySelector('.grid-container')
let count = 0
for (let col = 0; col < 53; col++){
  const gridWeek = document.createElement('div')
  for (let row = 0; row < 7; row++) {
    count++
    const div = document.createElement('div')
    div.className = 'grid-item'
    const now = new Date()
    const dayOffset = new Date(now.setDate(now.getDate() + (count - 372 + (7-now.getDay()))))
    // const d = new Date()
    // d.setDate(d.getDate() - row)
    const thisId = `day_${weekDays[row]}___${dayOffset}`
    div.setAttribute('id', thisId);
    console.log(count)
    gridWeek.append(div)
  }
  gridContainer.append(gridWeek)
}

/*
var fiveDaysAgo = new Date(new Date().setDate(new Date().getDate() - 5));
 */

const d = new Date()
d.setDate(d.getDate() - 2)
