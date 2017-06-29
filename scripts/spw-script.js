var SPW = {

};
builldNavigation = function(){
    $('#mainNavigation div:not(.folder):last-child').detach().appendTo('header .header-inner').addClass('contributeButton');
    $('<div id="contributeContainer"></div>').detach().appendTo('header .header-inner');
    $('.contributeButton').detach().appendTo('#contributeContainer');
    //number the headers for targeting
    $('header').each(function(){
        var i=0;
        $(this).addClass('header'+i);
        i++;
    });

}
$(document).ready(function(){
    builldNavigation();
});
$(window).on('load',function(){
});