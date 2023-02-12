if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
// Dropdown

document.querySelectorAll('.dropdown').forEach(function (dropDownWrap) {
    const dropDownBtn = dropDownWrap.querySelector('.dropdown-btn');
    const dropDownList = dropDownWrap.querySelector('.dropdown-list');
    const dropDownListItem = dropDownList.querySelectorAll('.dropdown-list-item');

    var dropDownFunc = (list, btn, listItem) => {
        var changeStyle = () => {
            list.classList.toggle('dropdown-list-hide');
            btn.classList.toggle('dropdown-active');
        }
        btn.addEventListener('click', changeStyle);
        listItem.forEach(function (item) {
            item.addEventListener('click', function (event) {
                event.stopPropagation();
                btn.innerText = this.innerText;
                listItem.forEach(function (listItemActive) {
                    listItemActive.classList.remove('active-item');
                })
                this.classList.add('active-item');
                btn.classList.remove('dropdown-active');
                list.classList.add('dropdown-list-hide');
            })
        })
        document.addEventListener('click', function (event) {
            if (event.target !== btn) {
                btn.classList.remove('dropdown-active');
                list.classList.add('dropdown-list-hide');
            }
        });
    }

    dropDownFunc(dropDownList, dropDownBtn, dropDownListItem);
});



// Slider

const slide = document.querySelectorAll('.slider-block');
const sliderLine = document.querySelector('.slides-container');
let slider = document.querySelector('.slider');
let width = document.querySelector('.slider').offsetWidth;
let arrowRight = document.querySelector('.right-1');
let arrowLeft = document.querySelector('.left-1');
let dotSlide = slider.querySelectorAll('.dot');
let count = 0;

arrowLeft.addEventListener('click', function () {
    count--;
    for (let i = 0; i < slide.length; i++) {
        if (count < slide.length - 1) {
            arrowRight.classList.remove('disabled-arrow');
        }
        if (count == 0) {
            arrowLeft.classList.add('disabled-arrow');
        }
    }
    if (count < 0) {
        count = slide.length - 1;
    }
    dotSlide.forEach(function (dotActive) {
        dotActive.classList.remove('dot-active');
    })
    dotSlide[count].classList.add('dot-active');
    rollSlider(sliderLine);
})
arrowRight.addEventListener('click', function () {
    count++;
    for (let i = 0; i < slide.length; i++) {
        if (count > 0) {
            arrowLeft.classList.remove('disabled-arrow');
        }
        if (count == slide.length - 1) {
            arrowRight.classList.add('disabled-arrow');
        }
    }
    if (count >= slide.length) {
        count = 0;
    }
    dotSlide.forEach(function (dotActive) {
        dotActive.classList.remove('dot-active');
    })
    dotSlide[count].classList.add('dot-active');
    rollSlider(sliderLine);
})
let dotToggle = () => {

    dotSlide.forEach(dot => {
        dot.addEventListener('click', (e) => {

            dotSlide.forEach(dot => {
                dot.classList.remove('dot-active');
            });

            e.currentTarget.classList.add('dot-active');

            for (let i = 0; i < dotSlide.length; i++) {
                if (dotSlide[i] == e.currentTarget) {
                    count = i;
                }
            }
            for (let i = 0; i < slide.length; i++) {
                if (count > 0) {
                    arrowLeft.classList.remove('disabled-arrow');
                }
                if (count == slide.length - 1) {
                    arrowRight.classList.add('disabled-arrow');
                }
                if (count == 0) {
                    arrowLeft.classList.add('disabled-arrow');
                }
                if (count < slide.length - 1) {
                    arrowRight.classList.remove('disabled-arrow');
                }
            }
            rollSlider(sliderLine);

        });
    });

}

dotToggle();

// Sale slider

const imgSldr = document.querySelectorAll('.sale-block');
imgSldr.forEach(function (dotsWrap) {
    let imgDots = dotsWrap.querySelectorAll('.dot');
    const saleLine = dotsWrap.querySelector('.sale-line');
    let countSlide = 0;
    let dotToggleImg = () => {

        imgDots.forEach(dot => {
            dot.addEventListener('click', (e) => {

                imgDots.forEach(dot => {
                    dot.classList.remove('dot-active');
                });

                e.currentTarget.classList.add('dot-active');
                for (let i = 0; i < imgDots.length; i++) {
                    if (imgDots[i] == e.currentTarget) {
                        countSlide = i;
                    }
                }

                console.log(countSlide);
                saleLine.style.transform = 'translate(-' + countSlide * 100 + '%)';

            });
        });

    }
    dotToggleImg();
});

function rollSlider(line) {
    line.style.transform = 'translate(-' + count * 100 + '%)';
}

// Tabs

document.getElementById("defaultOpen").click();
function openTab(evt, name) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}

const tabsHeart = document.querySelectorAll('.sale-heart');

tabsHeart.forEach(function (heart) {
    heart.addEventListener('click', function () {
        heart.classList.toggle('sale-heart-active');
    });
});
// Countdown 

function countdownTimeStart() {

    var countDownDate = new Date("Sep 25, 2030 15:00:00").getTime();

    var x = setInterval(function () {

        var now = new Date().getTime();

        var distance = countDownDate - now;

        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        document.getElementById("hour").innerHTML = hours;
        document.getElementById("minute").innerHTML = minutes;
        document.getElementById("second").innerHTML = seconds;
    }, 1000);
}
countdownTimeStart()


const dayArrowLeft = document.querySelector('.day-arrow-left');
const dayArrowRight = document.querySelector('.day-arrow-right');
const container = document.querySelector('.day-img-line');
const dayImg = document.querySelectorAll('.prod-day-img');
let imgCount = 0;

dayArrowLeft.addEventListener('click', function () {
    imgCount--;
    for (let i = 0; i < dayImg.length; i++) {
        if (imgCount < dayImg.length - 1) {
            dayArrowRight.classList.remove('day-arrow-dis');
        }
        if (imgCount == 0) {
            dayArrowLeft.classList.add('day-arrow-dis');
        }
    }
    if (imgCount < 0) {
        imgCount = dayImg.length - 1;
    }
    daySlide(container);

})
dayArrowRight.addEventListener('click', function () {
    imgCount++;
    for (let i = 0; i < dayImg.length; i++) {
        if (imgCount > 0) {
            dayArrowLeft.classList.remove('day-arrow-dis');
        }
        if (imgCount == dayImg.length - 1) {
            dayArrowRight.classList.add('day-arrow-dis');
        }
    }
    if (imgCount >= dayImg.length) {
        imgCount = 0;
    }
    daySlide(container);
})
function daySlide(cont) {
    cont.style.transform = 'translate(-' + imgCount * 100 + '%)';
}

document.querySelector('.save-heart-text').addEventListener('click', function () {
    document.querySelector('.save-heart').classList.toggle('sale-heart-active');
})

// Size buttons

const sizeBtn = document.querySelectorAll('.size-btn');
sizeBtn.forEach(function (size) {
    size.addEventListener('click', function () {
        sizeBtn.forEach(function (but) {
            but.classList.remove('btn-active');
        })
        size.classList.add('btn-active');
    })
})

// Mobile menu

document.querySelector('.burger-menu').addEventListener('click', function () {
    document.querySelector('.mob-menu-content').classList.toggle('mob-menu-open');
    document.querySelector('.burger-menu-wrap').classList.toggle('burger-menu-open');
})
// document.addEventListener('click', function (event) {
//     if (event.target !== document.querySelector('.mob-menu-content') && event.target !== document.querySelector('.burger-menu')) {
//         if (document.querySelector('.mob-menu-content').classList.contains('mob-menu-open')) {
//             document.querySelector('.mob-menu-content').classList.toggle('mob-menu-open');
//             document.querySelector('.burger-menu-wrap').classList.toggle('burger-menu-open');
//         }
//     }
// });