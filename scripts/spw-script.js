var SPW = {

};
builldNavigation = function(){
    $('#mainNavigation div:not(.folder):last-child').detach().appendTo('header .header-inner').addClass('contributeButton');
    $('<div id="contributeContainer"></div>').detach().prependTo('body');
    $('.contributeButton').detach().prependTo('#contributeContainer');
    //number the headers for targeting
    // $('header').each(function(){
    //     $(this).children('')
    // });
    // set variables
    SPW.nav = {}
    SPW.nav.headerCount = 1;
    SPW.nav.count = $('header:first-child #mainNavigation .collection').length;
    SPW.nav.rightCount = Math.round((SPW.nav.count)/2);
    SPW.nav.leftCount = SPW.nav.count - SPW.nav.rightCount;
    numberHeaders();
    sortNavigation();
    balanceSides();
    // sortNav(1);
    // sortNav(2);
    console.log(SPW.nav);

}
numberHeaders = function(){
    $('header').each(function(){
        $(this).addClass('header'+SPW.nav.headerCount);
        SPW.nav.headerCount=SPW.nav.headerCount+1;
    });
}
sortNavigation = function(selector){
    $('header').each(function(){
        $(this).find('.collection:nth-child('+SPW.nav.leftCount+')').addClass('leftmiddle');
        $(this).find('.collection:nth-child('+(SPW.nav.leftCount+1)+')').addClass('rightmiddle');
    });

}
balanceSides = function(){
    SPW.nav.leftWidth = 0;
    SPW.nav.rightWidth = 0;
    for(i=0;i<SPW.nav.leftCount;i++){
        SPW.nav.leftWidth += $('.header:nth-child('+i+')').outerWidth();
    }
    for(i=0;i<SPW.nav.rightCount;i++){
        SPW.nav.rightWidth += $('.header:nth-child('+(i+SPW.nav.leftCount)+')').outerWidth();
    }
}
testFunct = function(){
    alert('testFunct');
}
$(document).ready(function(){
    builldNavigation();
});
$(window).on('load',function(){
});