fetch('/assets/clocks.json')
  .then(function (people) {
    people.json().then(function (json) {
      json.forEach(function (el) {
        var clock = document.createElement('div')
        clock.className = "clock"
        clock.setAttribute('data-timezone', el.timezone)
        var heading = document.createElement('h3')
        heading.textContent = el.name
        clock.appendChild(heading)
        var display = document.createElement('div')
        display.textContent = "Loading..."
        display.className = "display"
        clock.appendChild(display)
        document.querySelector('.clocks').appendChild(clock)
      })
    })
  })
setInterval(function () {
  document.querySelectorAll('.clock').forEach(function (el) {
    el.querySelector('.display').textContent = moment().tz(el.getAttribute('data-timezone')).format('HH:mm:ss')
  })

}, 100)
