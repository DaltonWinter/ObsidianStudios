import $ from 'jquery';
$( document ).ready(function() {

    function openNav() {
      document.getElementById("myNav").style.width = "100%";
      // history.pushState({}, 'Hello', '/my/new/path')
    }

    function closeNav() {
      document.getElementById("myNav").style.width = "0%";
    }

    $('.fullprojectbtn').click(function(e) {
      openNav()
    })

    $('.closebtn').click(function(e) {
      closeNav()
    })

    //reload page / large window view
    const secondRowTopCalc = (($(window).width() / 4.246031436031746) + 5)
    let second = $($(".wrapper").children()[1])
    let third = $($(".wrapper").children()[2])
    let fourth = $($(".wrapper").children()[3])
    third.attr('style', `top: ${secondRowTopCalc}px;`)
    second.attr('style', 'left: 43.7%;')
    fourth.attr('style', `left: 56.3%; top: ${secondRowTopCalc}px;`)

    //reisze window
    $(window).resize((event) => {
      //large window view
      const secondRowTopCalc = (($(window).width() / 4.246031436031746) + 5)
      third.attr('style', `top: ${secondRowTopCalc}px;`)
      second.attr('style', 'left: 43.7%;')
      fourth.attr('style', `left: 56.3%; top: ${secondRowTopCalc}px;`)
    })

})
