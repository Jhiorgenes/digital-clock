const hourElement = document.querySelector('.hours')
const minutesElement = document.querySelector('.minutes')
const secondsElement = document.querySelector('.seconds')

let updateTime = () => {
  const time = new Date()
  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  hourElement.textContent = fixZero(hours)
  minutesElement.textContent = fixZero(minutes)
  secondsElement.textContent = fixZero(seconds)
}

const fixZero = time => (time < 10 ? `0${time}` : time)

setInterval(updateTime, 1000)
