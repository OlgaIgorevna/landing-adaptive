$(window).on("load", function () {  
  $('#open-menu').click(function (e) {

    e.preventDefault(); // отменяем стандартное поведение

    // изменение стиля в нашем случае можно сделать так
    // этот способ быстрее всего, но применять его лучше не надо
    // хотя если сильно важна производительность - пишите так
    //       document.getElementByID("menu").style.display = 'block';

    // или так
    $("#menu").css("display", "block");
    // или так
    //       $("#enterblock").show();
  });



  $('#close-menu').click(function (e) {
    e.preventDefault();
    $("#menu").css("display", "none");
  });

});