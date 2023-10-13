$(function() {
    const mainSwiper = new Swiper(".main-slide", {
    centeredSlides: true, /* 슬라이드 가운데 */
    speed: 900,
    loop: true,
    autoplay: { 
      delay: 3500,
      disableOnInteraction: false,
    }, /* 다음 슬라이드 갈 때의 설정, 2500=2.5s */
    pagination: {
      el: ".main-slide .swiper-pagination", /* el-element */
      clickable: true, /* true- 1 기능을 넣겠다, false- 0 */
    },
    navigation: {
      nextEl: ".main-slide .swiper-button-next",
      prevEl: ".main-slide .swiper-button-prev",
    },
  });

  $('.util-list').on('click', function() {
    $(this).toggleClass('on')
    $(this).children('.arrow').toggleClass('on')
    $(this).children('ul').stop().slideToggle()
  })

  $('.menu > a').on('mouseover', function() {
    let idx = $(this).index()
    let subList = $('.sub-menu').children('.menu-list').eq(idx)
    
    $('.sub-menu').addClass('on')
    subList.addClass('on').siblings().removeClass('on')
    subList.on('mouseleave', function() {
      subList.removeClass('on')
    })
  })

    $('.main-slide .swiper-btn').on('click', function() {
      if ($(this).hasClass('pause') == true) {
        mainSwiper.autoplay.stop();
        $(this).removeClass('pause').addClass('play')
      } else if ($(this).hasClass('play') == true) {
        $(this).removeClass('play').addClass('pause')
        mainSwiper.autoplay.start();
      }
    })

    const exhiSwiper = new Swiper(".exhi-swiper", {
      slidesPerView: 1,
      spaceBetween: 60, /* 중간 간격 30 */
      speed: 850,
      loop: true,
      autoplay: { 
        delay: 3500,
        disableOnInteraction: false,
      }, /* 다음 슬라이드 갈 때의 설정, 2500=2.5s */
      navigation: {
        nextEl: ".exhi-list .swiper-button-next",
        prevEl: ".exhi-list .swiper-button-prev",
      },
      breakpoints: {
        992: {
          slidesPerView: 4,
        }
      }
    })

    $('.exhi-list .swiper-btn').on('click', function() {
      if ($(this).hasClass('pause') == true) {
        exhiSwiper.autoplay.stop();
        $(this).removeClass('pause').addClass('play')
      } else if ($(this).hasClass('play') == true) {
        $(this).removeClass('play').addClass('pause')
        exhiSwiper.autoplay.start();
      }
    })

    $('.board-title > a').on('click', function() {
      let idx = $(this).index()
      let boardList = $('.board-listArea').children('.board-list').eq(idx)
      
      $(this).addClass('select').siblings().removeClass('select')
      boardList.addClass('on').siblings().removeClass('on')
    })

    const noticeSwiper = new Swiper(".notice-slide", {
      slidesPerView: 1,
      speed: 900,
      loop: true,
      autoplay: { 
        delay: 3500,
        disableOnInteraction: false,
      }, /* 다음 슬라이드 갈 때의 설정, 2500=2.5s */
      pagination: {
        el: ".notice-slide .swiper-pagination",
        clickable: true,
      },
    });

    $('.notice-slide .swiper-btn').on('click', function() {
      if ($(this).hasClass('pause') == true) {
        noticeSwiper.autoplay.stop();
        $(this).removeClass('pause').addClass('play')
      } else if ($(this).hasClass('play') == true) {
        $(this).removeClass('play').addClass('pause')
        noticeSwiper.autoplay.start();
      }
    })

    const eventSwiper = new Swiper(".event-slide", {
      slidesPerView: 1,
      speed: 750,
      loop: true,
      pagination: {
        el: ".event .swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".event .swiper-button-next",
        prevEl: ".event .swiper-button-prev",
      },
    });

    const onExbiSwiper = new Swiper(".onExbi-slide", {
      slidesPerView: 1,
      speed: 750,
      loop: true,
      pagination: {
        el: ".onExbi .swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".onExbi .swiper-button-next",
        prevEl: ".onExbi .swiper-button-prev",
      },
    });

    $('.link-btn').on('click', function() {
      $(this).toggleClass('on')
      $(this).siblings('ul').stop().slideToggle()
    })
  
})
document.querySelector('.top-btn').addEventListener('click', ()=> {
  window.scrollTo({top: 0, behavior: 'smooth'})
} )

document.querySelector('.btn-searchPage').addEventListener('click', ()=> {
  document.querySelector('.search-area').classList.add('on')
})

document.querySelector('.btn-close').addEventListener('click', ()=> {
  document.querySelector('.search-area').classList.remove('on')
})

document.querySelector('.m-util .btn-searchPage').addEventListener('click', ()=> {
  document.querySelector('.search-area').classList.add('on')
})

document.querySelector('.btn-close').addEventListener('click', ()=> {
  document.querySelector('.search-area').classList.remove('on')
})



/* mobile */
$(function() {
  $('.m-btn-menuOpen').on('click', function() {
    $('.mobile-menu').css('display', 'block')
    $('.dimmed').addClass('on')
  })
  $('.m-btn-menuClose').on('click', function() {
    $('.mobile-menu').css('display', 'none')
    $('.dimmed').removeClass('on')
  })


  $('.m-language > a').on('click', function() {
    $(this).toggleClass('on')
    $(this).siblings('ul').stop().slideToggle()
  })

  $('.nav-title > li > a').on('click', function() {
    $(this).toggleClass('on')
    $(this).siblings('.nav-sub').stop().slideToggle()
  })

})