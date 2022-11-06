window.addEventListener("DOMContentLoaded", () => {
    const infiniteSlider = new Swiper(".infinite-slider", {
      loop: true,
      loopedSlides: 10,
      slidesPerView: "auto",
      speed: 10000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    });
  });



$(document).on('click', function(){
    document.getElementById("my_audio").play();
    console.log('Shaadi me zaroor aana');
});
