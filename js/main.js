window.onload = init()

function init(){
    /* for slider unknown */
    UKcontent = document.querySelector('section#uk .container .content')
    UKdots = document.querySelectorAll('section#uk .container .dots .dot')
    Ncontent = document.querySelector('section#news .container .content')
    Ndots = document.querySelectorAll('section#news .container .dots .dot')

    listener()

    autoSlideUK = setInterval(() => {
        autoSliderUK()
    }, 2000)

    autoSlideN = setInterval(() => {
        autoSliderN()
    }, 2000)
}

function listener(){
    Array.from(UKdots).forEach(dot => {
        dot.addEventListener('click', function(){
            clearInterval(autoSlideUK)
            Array.from(UKdots).forEach(dot => {
                dot.classList.remove('active')
            })

            this.classList.add('active')

            const dataSlide = this.getAttribute('data-slide')

            if(dataSlide === '0'){
                UKcontent.style.left = '0'
            }
            else if(dataSlide === '1'){
                if(window.innerWidth >= 1280){
                    UKcontent.style.left = '-115%'
                }
                else if(window.innerWidth <= 768){
                    UKcontent.style.left = '-126%'
                }
            }
            else if(dataSlide === '2'){
                if(window.innerWidth >= 1280){
                    UKcontent.style.left = '-230%'
                }
                else if(window.innerWidth <= 768){
                    UKcontent.style.left = '-252%'
                }
            }
            else{
                if(window.innerWidth >= 1280){
                    UKcontent.style.left = '-345%'
                }
                else if(window.innerWidth <= 768){
                    UKcontent.style.left = '-378%'
                }
            }
        })
    })

    Array.from(Ndots).forEach(dot => {
        dot.addEventListener('click', function(){
            Array.from(Ndots).forEach(dot => {
                dot.classList.remove('active')
            })

            this.classList.add('active')

            const dataSlide = this.getAttribute('data-slide')

            if(dataSlide === '0'){
                Ncontent.style.left = '0'
            }
            else if(dataSlide === '1'){
                if(window.innerWidth >= 1280){
                    Ncontent.style.left = '-115%'
                }
                else if(window.innerWidth <= 768){
                    Ncontent.style.left = '-126%'
                }
            }
            else if(dataSlide === '2'){
                if(window.innerWidth >= 1280){
                    Ncontent.style.left = '-230%'
                }
                else if(window.innerWidth <= 768){
                    Ncontent.style.left = '-252%'
                }
            }
            else{
                if(window.innerWidth >= 1280){
                    Ncontent.style.left = '-345%'
                }
                else if(window.innerWidth <= 768){
                    Ncontent.style.left = '-378%'
                }
            }
        })
    })

    sel('nav#navbar .collapse')[0].addEventListener('click', function(){
        this.classList.toggle('active')

        if(this.classList.contains('active')){
            sel('nav#navbar .collapse-menu')[0].style.display = 'none'
            sel('nav#navbar .collapse-menu')[0].style.opacity = '0'
        }
        else{
            sel('nav#navbar .collapse-menu')[0].style.display = 'block'
            sel('nav#navbar .collapse-menu')[0].style.opacity = '1'
        }
    })
}

function autoSliderUK() {
    UKactive = Array.from(UKdots).filter(dot => dot.classList.contains('active'))[0].getAttribute('data-slide')
    UKdots[parseInt(UKactive)].classList.remove('active')
    if(parseInt(UKactive) === 3){
        UKactive = -1
    }
    UKdots[parseInt(UKactive) + 1].classList.add('active')

    if((parseInt(UKactive) + 1) === 0){
        UKcontent.style.left = '0'
    }else{
        if(window.innerWidth >= 1280){
            UKcontent.style.left = `${-115 * (parseInt(UKactive) + 1)}%`
        }
        else if(window.innerWidth <= 768){
            UKcontent.style.left = `${-126 * (parseInt(UKactive) + 1)}%`
        }
    }
}

function autoSliderN() {
    Nactive = Array.from(Ndots).filter(dot => dot.classList.contains('active'))[0].getAttribute('data-slide')
    Ndots[parseInt(Nactive)].classList.remove('active')
    if(parseInt(Nactive) === 3){
        Nactive = -1
    }
    Ndots[parseInt(Nactive) + 1].classList.add('active')

    if((parseInt(Nactive) + 1) === 0){
        Ncontent.style.left = '0'
    }else{
        if(window.innerWidth >= 1280){
            Ncontent.style.left = `${-115 * (parseInt(Nactive) + 1)}%`
        }
        else if(window.innerWidth <= 768){
            Ncontent.style.left = `${-126 * (parseInt(Nactive) + 1)}%`
        }
    }
}

function sel(el){
    return document.querySelectorAll(el)
}