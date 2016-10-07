// check traht the document is ready
$(document).ready(function(){
  console.log('document is ready');

  // create a click handler for when the button is clicked
  $('.button').click(function(){

    // loop through every elemnet with class "circle"
    // if the element has class of "big-red", change it to "small-yellow"
    //and if the element has class of "small-yellow", change it to "big -red"
    $('.circle').each(function(){

      if ( $(this).hasClass('big-red')){
        $(this).removeClass('big-red').addClass('small-yellow');
      } else {
        $(this).removeClass('small-yellow').addClass('big-red');
      }
    });


  });
});
