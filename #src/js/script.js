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

// Etherscan Calculation.js
//	        <!--auth.ID=1TsNiXCQkPKaB6zfDQQXAwMBfe12ySoKa-->
FNTes00 = "https://api.etherscan.io/api?module=stat&action=tokensupply&contractaddress=0xdc5864ede28bd4405aa04d93e05a0531797d9d59&apikey=YHMFHFSV36RRAYD3IR2W2J5E29W8S3TMBU";
falcones00=new XMLHttpRequest();
falcones00.open("GET", FNTes00, true);
falcones00.onload = function(){FALCONes00=JSON.parse(this.response);
    FNTes01 = "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xdc5864ede28bd4405aa04d93e05a0531797d9d59&address=0xbca64241b4c7d3d2ca36c91facc69663b4517f54&tag=latest&apikey=YHMFHFSV36RRAYD3IR2W2J5E29W8S3TMBU";
    falcones01=new XMLHttpRequest();
    falcones01.open("GET", FNTes01, true);
    falcones01.onload = function(){FALCONes01=JSON.parse(this.response);
        FNTes02 = "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xdc5864ede28bd4405aa04d93e05a0531797d9d59&address=0xf56b07ab0e46afef054ae0a58d4195ee944bea93&tag=latest&apikey=YHMFHFSV36RRAYD3IR2W2J5E29W8S3TMBU";
        falcones02=new XMLHttpRequest();
        falcones02.open("GET", FNTes02, true);
        falcones02.onload = function(){FALCONes02=JSON.parse(this.response);
            FNTes03 = "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xdc5864ede28bd4405aa04d93e05a0531797d9d59&address=0x3deffdb7004b1b4c5388f5a0ee7c2031c0ad375d&tag=latest&apikey=YHMFHFSV36RRAYD3IR2W2J5E29W8S3TMBU";
            falcones03=new XMLHttpRequest();
            falcones03.open("GET", FNTes03, true);
            falcones03.onload = function(){FALCONes03=JSON.parse(this.response);
                FNTes04 = "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xdc5864ede28bd4405aa04d93e05a0531797d9d59&address=0xa32043305cab58eca36badc26e62b7af83dc825b&tag=latest&apikey=YHMFHFSV36RRAYD3IR2W2J5E29W8S3TMBU";
                falcones04=new XMLHttpRequest();
                falcones04.open("GET", FNTes04, true);
                falcones04.onload = function(){FALCONes04=JSON.parse(this.response);
                    FNTes05 = "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xdc5864ede28bd4405aa04d93e05a0531797d9d59&address=0x8c54085ad729fde488338fc50cfc8dfd5e2b5b89&tag=latest&apikey=YHMFHFSV36RRAYD3IR2W2J5E29W8S3TMBU";
                    falcones05=new XMLHttpRequest();
                    falcones05.open("GET", FNTes05, true);
                    falcones05.onload = function(){
                        FALCONes05=JSON.parse(this.response);
                        const Falcones=document.getElementById('falcon-live');
            const Falcon2es=document.getElementById('falcon-live-v');
            const Falcones2=document.getElementById('falcon-live-2');
                        const Falcon2es2=document.getElementById('falcon-live-v2');
                        FNTCS = (FALCONes00.result
                            - FALCONes01.result
                            - FALCONes02.result
                            - FALCONes03.result
                            - FALCONes04.result
                        )/1e6;
            Falcon2es.textContent = (FALCONes05.result/1e6).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
            Falcon2es2.textContent = (FALCONes05.result/1e6).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            Falcones.textContent = FNTCS.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
            Falcones2.textContent = FNTCS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            falconcg=new XMLHttpRequest();
                        falconcg.open("GET","https://api.coingecko.com/api/v3/coins/falcon-token?localization=false&tickers=true&market_data=false&community_data=false&developer_data=false&sparkline=false",true);
                        falconcg.onload = function()
                        {
                            var pb =0;
                            var vb =0;
                            Falcont = document.getElementById("footer__gecko_table_tt");
                            FALCONCG=JSON.parse(this.response);
                            for(i=0;i<FALCONCG.tickers.length;i++)
                            {
                                const FalconCGROW = document.createElement("tr");
                                const FalconCGPR = document.createElement("td");
                                FalconCGPR.textContent= FALCONCG.tickers[i].target+ " " + FALCONCG.tickers[i].last.toFixed(8) ;
                                const FalconCGEX = document.createElement("td");
                                FalconCGEXac= "footer__gecko_exchanges_" + FALCONCG.tickers[i].market.identifier;
                                const FalconCGEXa = document.createElement("a");
                                FalconCGEXa.textContent=FALCONCG.tickers[i].market.name;
                                FalconCGEXa.setAttribute("href",FALCONCG.tickers[i].trade_url);
                                FalconCGEXa.setAttribute("class",FalconCGEXac);
                                FalconCGEXa.setAttribute("target","_blank");
                                FalconCGEX.appendChild(FalconCGEXa);
                                const FalconCGVO = document.createElement("td");
                                FalconCGVO.textContent=FALCONCG.tickers[i].volume.toLocaleString() + " FNT";
                                FalconCGROW.appendChild(FalconCGPR);
                                FalconCGROW.appendChild(FalconCGEX);
                                FalconCGROW.appendChild(FalconCGVO);
                                Falcont.appendChild(FalconCGROW);
                                pb+=FALCONCG.tickers[i].converted_last.usd*FALCONCG.tickers[i].converted_volume.usd;
                                vb+=FALCONCG.tickers[i].converted_volume.usd;
                            }
                            const FalconCGMS=document.getElementById("footer__gecko_ms");
                            FalconCGMS.innerText = "market capitalization of $" + (FNTCS*pb/vb).toFixed(0) + " at median price of " + (pb/vb).toFixed(6) + "$/FNT";
                        }
                        falconcg.send();
                    ;}
                    falcones05.send();
                ;}
                falcones04.send();
            ;}
            falcones03.send();
        ;}
        falcones02.send();
    ;}
    falcones01.send();
;}
falcones00.send();

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
