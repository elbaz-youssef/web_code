const navBar = document.querySelector('.nav-bar');
const navList = document.querySelector('header .nav-list');
const bar = document.querySelector('header .bar');
const spans = document.querySelectorAll('.bar span');
bar.onclick = function() {
    if(navBar.classList.contains('newClass')) {
        navBar.classList.remove('newClass');
    }
    else {
        navBar.classList.add('newClass');
    }
    // spans.forEach(elm => {
    //     elm.style.position = 'absolute';
    //     elm.style.right = '20px';
    // });
    // spans[1].style.width = '0px';
    // spans[1].style.transition = 'width 0.5s ease-in-out'
    // spans[0].style.transform = 'rotate(45deg)';
    // spans[2].style.transform = 'rotate(-45deg)';
    // for(let i = 0; i <= 2; i += 2) {
    //     spans[i].style.transition = 'transform 0.5s ease-in-out'
    // }
    // navList.style.left = '0px';
    // navList.style.transition = "left 0.5s ease-in-out";
    
    // navList.style.left = "0px";
    // navList.style.transition = "left 0.5s ease-in-out";
    // navList.classList.toggle('leftElm');
}

// year of copyright

const fullYear = document.getElementById('fullyear');
let date = new Date();
let year = date.getFullYear();
fullYear.innerHTML = `${year}`;
