const controls = document.querySelectorAll('.control')
let currentItem = 0
const items = document.querySelectorAll('.item')
const maxItems = items.length

controls.forEach((control) => {
    control.addEventListener('click', (e) => {
        isLeft = e.target.classList.contains('arrow-left')

        if (isLeft) {
            if (currentItem === 0) {
                return
            }
            currentItem -= 1
        } else {
            if (currentItem === maxItems - 1) {
                return
            }
            currentItem += 1
        }

        items.forEach((item) => item.classList.remove('current-item'))

        items[currentItem].scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
        })

        items[currentItem].classList.add('current-item')
    })
})
