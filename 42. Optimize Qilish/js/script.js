window.addEventListener('DOMContentLoaded', () => {
    const tabsParent = document.querySelector('.tabheader__items'),
    tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    loader = document.querySelector('.loader')

    // Loader
    setTimeout(() => {
        loader.style.opacity = '0'
        setTimeout(() => {
            loader.style.display = 'none'
        }, 500)
    }, 2000)
    
    // Tabs
    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.classList.add('hide')
            item.classList.remove('show', 'fade')
        })

        tabs.forEach((item) => {
            item.classList.remove('tabheader__item_active')
        })
    }

    function showTabContent(i = 0) {
        // tabsContent[i].style.display = 'block'
        tabsContent[i].classList.add('show', 'fade')
        tabsContent[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active')
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, idx) => {
                if (target == item) {
                    hideTabContent()
                    showTabContent(idx)
                }
            })
        }
    })


    // Timer

    const deadline = '2024-12-31'

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const timer = Date.parse(endtime) - Date.parse(new Date())

        if (timer <= 0) {
            days = 0
            hours = 0
            minutes = 0
            seconds = 0
        }
        else {
            days = Math.floor(timer / (1000 * 60 * 60 * 24)),
            hours = Math.floor((timer / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((timer / 1000 / 60) % 60),
            seconds = Math.floor((timer / 1000) % 60)
        }

        return { timer, days, hours, minutes, seconds}
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        }
        else {
            return num
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000)

        updateClock()

        function updateClock() {
            const t = getTimeRemaining(endtime)

            days.innerHTML = getZero(t.days)
            hours.innerHTML = getZero(t.hours)
            minutes.innerHTML = getZero(t.minutes)
            seconds.innerHTML = getZero(t.seconds)

            if (t.timer <= 0) {
                clearInterval(timeInterval)
            }
        }
    }

    setClock('.timer', deadline)
    

    // Modal
    
    const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]')
    
    function closeModal() {
        modal.classList.add('hide')
        modal.classList.remove('show')
        document.body.style.overflow = ''
    }
    
    function openModal() {
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.style.overflow = 'hidden'
        clearInterval(modalTimerId)
    }

    modalTrigger.forEach((item) => {
        item.addEventListener('click', openModal)
    })
    
    modalCloseBtn.addEventListener('click', closeModal)
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal()
        }
    })
    
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal()
        }
    })
    
    const modalTimerId = setTimeout(openModal, 5000)

    
    console.log(window.pageYOffset);
    console.log(document.documentElement.clientHeight);

    function showModalByScroll() {
        if (
            window.pageYOffset + document.documentElement.clientHeight
            >= document.documentElement.scrollHeight
        ) {
            openModal()
            window.removeEventListener('scroll', showModalByScroll)
        }
    }
    window.addEventListener('scroll', showModalByScroll)
});