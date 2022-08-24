// Опредиление устройства
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

// добавляем класс для body
if (isMobile.any()) {
    document.body.classList.add('_touch');
// добавляем класс подменю menu_arrow
    let menuArrows = document.querySelectorAll('.menu_arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active')
            });
        }
    }
} else {
    document.body.classList.add('_pc');
}
// Слайдер
const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    parallax: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop : true,
    autoplay: {
        delay: 2500,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    speed: 2500,
});

// бургер
const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu_box_list');
if (iconMenu){
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}