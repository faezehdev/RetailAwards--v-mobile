const awardsSlider = new Swiper('.awardsSlider', {
    // Optional parameters
    speed:1000,
    // loop: true,
    slidesPerView: 2,
    // slidesPerGroup : 5,
    spaceBetween: 20,

    // grid: {
    //     fill: 'row',
    //     rows: 3,
    // },
    // slidesPerGroup : 5,

    // // If we need pagination
    centeredSlides:true,

    pagination: {
      el: '.awardsSliderpagination',
      clickable:true,
    },
  
  
  });