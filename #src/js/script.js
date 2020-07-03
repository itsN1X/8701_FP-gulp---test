const changeBg = () => {
  const background = document.querySelector('.wrapper__background__left');
  const background2 = document.querySelector('.wrapper__background__right')
  const hoverChange = document.querySelector('.nav__menu__list-item');
  const hoverChangeTwo = document.querySelector('.nav__menu__list-item');
  const hoverBarChange = document.querySelector('.header__border');

    hoverChange.addEventListener('mouseover', handle);
    hoverChange.addEventListener('mouseleave', handle2);
    hoverChangeTwo.addEventListener('mouseover', handle3);
    hoverChangeTwo.addEventListener('mouseleave', handle4);
    hoverChange.addEventListener('mouseover',()=> {
      hoverBarChange.classList.toggle('active');
    });
    hoverChange.addEventListener('mouseleave', ()=> {
      hoverBarChange.classList.remove('active')
    });

  function handle() {
    background.style.background = 'url(../img/vectors/violet.svg) bottom left/auto 50% no-repeat';
  }

  function handle2() {
    background.style.background = '';
  }

  function handle3() {
    background2.style.background = 'url(../img/vectors/orangeNew.svg) bottom right/auto 100% no-repeat';
  }

  function handle4() {
    background2.style.background = '';
  }

}
changeBg ();

let changedHeight = $('')

jQuery(document).ready(function() {
  jQuery(".item__link").click(function () {
  elementClick = jQuery(this).attr("href")
  destination = jQuery(elementClick).offset().top - 77;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 700);
  return false;
  });
});

const burgerSlide = () => {
  const burger = document.querySelector('.nav__container__burger');
  let nav = document.querySelector ('.header__container');
  let navLinks = document.querySelectorAll ('.nav__menu__list-item li');
  const lock = document.querySelector ('body');
  let border = document.querySelector ('.header__border');

  burger.addEventListener('click',()=> {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
    lock.classList.toggle('lock');
    border.classList.toggle('active');


      navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
      });
   });
};

burgerSlide();


$(".nav__menu__list-item li a").click(function(){
$(".header__container").removeClass('active')
$("body").removeClass('lock')
$(".header__border").removeClass('active')
$(".nav__container__burger").removeClass('active')
$('.nav__menu__list-item li').removeAttr( 'style' );

})

//===============================POPUP__WINDOW==================================

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 300;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener('click', function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}

function popupOpen (currentPopup) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    currentPopup.classList.add('open');
    currentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
        bodyUnLock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});


(function () {
  if (!Element.prototype.closest) {

    Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();

(function (){
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();


@@include('_swap.js');