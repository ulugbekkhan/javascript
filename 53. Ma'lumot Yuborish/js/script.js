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


    // Class

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src
            this.alt = alt
            this.title = title
            this.descr = descr
            this.price = price
            this.classes = classes
            this.parent = document.querySelector(parentSelector)
            this.transfer = 11000
            this.changeToUZS()
        }

        changeToUZS() {
            this.price = this.price * this.transfer
        }

        render() {
            const element = document.createElement('div')

            if (this.classes.length === 0) {
                this.element = 'menu__item'
                element.classList.add(this.element)
            }
            else {
                this.classes.forEach((classname) => element.classList.add(classname))
            }


            element.innerHTML = `
                <img src=${this.src} alt=${this.alt} />
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Price:</div>
                    <div class="menu__item-total"><span>${this.price}</span> uzs/month</div>
                </div>`

            this.parent.append(element)
        }
    }

    new MenuCard(
        'img/tabs/1.png',
        'usual',
        'Plan "Usual"',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.',
        10,
        '.menu .container',
        'menu__item'
    ).render()

    new MenuCard(
        'img/tabs/2.jpg',
        'plan',
        'Plan "Premium"',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.',
        20,
        '.menu .container',
        'menu__item'
    ).render()

    new MenuCard(
        'img/tabs/3.jpg',
        'VIP',
        'Plan "VIP"',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.',
        30,
        '.menu .container',
        'menu__item'
    ).render()


    // // Rest Operatori
    // function logger(a, b, ...rest) {
    //     console.log(a, b, rest);
    // }
    // logger(1, 2, 3, 4, 5, 6, 7)


    // // Default qiymat berish
    // function calc(number, def = 10) {
    //     // def = def || 10
    //     console.log(number + def);
    // }
    // calc(1, 2)
    // calc(1)


    // Form

    const forms = document.querySelectorAll('form')

    forms.forEach((form) => {
        postData(form)
    })

    const msg = {
        loading: 'Loading...',
        success: 'Thanks for submitting our form',
        failure: 'Something went wrong'
    }

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            const statusMessage = document.createElement('div')
            statusMessage.textContent = msg.loading
            form.append(statusMessage)

            const request = new XMLHttpRequest()
            request.open('POST', 'server.php')

            request.setRequestHeader('Content-Type', 'multipart/form-data')

            const formData = new FormData(form)

            request.send(formData)

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    statusMessage.textContent = msg.success
                }
                else {
                    statusMessage.textContent = msg.failure
                }
            })
        })
    }

})