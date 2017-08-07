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
    numberHeaders();
    SPW.nav.count = $('#header #mainNavigation > div').length;
    SPW.nav.rightCount = Math.round((SPW.nav.count)/2);
    SPW.nav.leftCount = SPW.nav.count - SPW.nav.rightCount;
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
    for(i=1;i<SPW.nav.leftCount;i++){
        SPW.nav.leftWidth += $('#header .collection:nth-child('+(i)+')').outerWidth();
    }
    for(i=1;i<SPW.nav.rightCount;i++){
        SPW.nav.rightWidth += $('#header .collection:nth-child('+(i+SPW.nav.leftCount)+')').outerWidth();
    }
    SPW.nav.lrDiff = (SPW.nav.leftWidth - SPW.nav.rightWidth)+18/*18=offset calc*/;
    // if negative, apply as left padding, if positive apply as right padding
    if(SPW.nav.lrDiff<=0){
        $('#header #mainNavigation').css({'padding-left':(SPW.nav.lrDiff*(-1))+'px'});
    }else{
        $('#header #mainNavigation').css({'padding-right':(SPW.nav.lrDiff)+'px'});
    }
}
tempInjectHTML = function(){
    $('<a href="http://crowdpac.com/c/spwayland" class="m-tb-1 sqs-block-button-element--small sqs-block-button-element" data-initialized="true">Contribute Now</a>').appendTo('.collection-type-index #page #content .sqs-block-content');
}
$(document).ready(function(){
    builldNavigation();
    tempInjectHTML();
});
$(window).on('load',function(){

});