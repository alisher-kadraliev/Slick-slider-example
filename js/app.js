$(document).ready(function () {
    $('.slider').slick({
        adaptiveHeight: true,
        asNavFor: ".sliderbig",
        centerMode: true,
        centerPadding: '60px',
        autoplay: true,

        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.sliderbig').slick({
        arrows: false,
        fade: true,
        asNavFor: ".slider"
    })
});

$(document).ready(function () {
    $('.slider-main').slick({
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: '60px',
        autoplay: true,

        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});

//modal
function bindModal(trigger, modal, close) {
    trigger = document.querySelector(trigger),
        modal = document.querySelector(modal),
        close = document.querySelector(close)

    const body = document.body

    trigger.addEventListener('click', e => {
        e.preventDefault()
        modal.style.display = 'flex'
        body.classList.add('locked')
    });
    close.addEventListener('click', () => {
        modal.style.display = 'none'
        body.classList.remove('locked')
    });
    modal.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none'
            body.classList.remove('locked')
        }
    })
}

bindModal('.modal__btn', '.modal__wrapper', '.modal__close')
