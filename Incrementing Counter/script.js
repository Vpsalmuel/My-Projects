const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerHTML = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText


        const incerement = target / 1000

        if (c < target) {
            counter.innerText = `${Math.ceil(c + incerement)}`

            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()

});