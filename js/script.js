"use strict"

const customSwiper = document.querySelector('.custom-swiper')

if (customSwiper){

const swiper = new Swiper('.custom-swiper', {

   loop: true,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   },
 });
}