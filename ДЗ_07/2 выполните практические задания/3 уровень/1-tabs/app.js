'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/
let text = document.querySelector('.text');
let navLinkColls = document.querySelectorAll('.nav-link');
navLinkColls.forEach( function(element, index) {
    element.addEventListener('click', clickHandler);
});
// navLinkColls.addEventListener('click', clickHandler);
// // console.log(navLinkColls); 

/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.
    // console.log(event.target);
    changeActiveClass(event);
    changeText(event);
   
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(event) {
    navLinkColls.forEach( function(element, index) {
        element.classList.remove("active");
    });

    event.target.classList.add("active");
    
}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(event) {
    

    let textContent = event.target.textContent;
    let n = textContent.split(" ");
    let linkIndex = n[n.length - 1];
    let objText = texts["text" + linkIndex];

    text.innerText = objText;
    console.log(objText);
}