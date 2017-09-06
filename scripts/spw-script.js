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
calcDim = function(){
    SPW.footer = {};
    SPW.footer.topOffset = $('#footer').offset();
    SPW.footer.bottomOffset = $('.footer-inner').offset();
    SPW.footer.endorsementHeight = $('#endorsementsOuter').outerHeight();
    SPW.footer.offset = SPW.footer.bottomOffset.top-SPW.footer.topOffset.top;
    console.log(SPW);
    // page height
    $('.collection-type-index #page').css({
        'height':(window.innerHeight-SPW.footer.offset-14-SPW.footer.endorsementHeight)+'px',
        'position':'static'
    });
}
tempInjectHTML = function(){
    $('<a href="http://crowdpac.com/c/spwayland" class="m-tb-1 sqs-block-button-element--small sqs-block-button-element" data-initialized="true">Contribute Now</a>').appendTo('.collection-type-index #page #content .sqs-block-content');
    // index page content
    $('.collection-type-index .sqs-layout.sqs-grid-12.columns-12 *').remove();
    //index page endorsements
    $('<div id="endorsementsOuter"><div class="fs-12 caps changaone c-secondary text-center">Endorsed by:</div><div id="endorsementsInner"><img src="../assets/vote-vets-logo-2x.jpg" alt="Vote Vets"></div></div>').insertAfter('.collection-58c5d2dabebafb01e0518dc1 #page');
    //$('').appendTo('');
    $('<div id="contentOuter"><img class="icon" src="../assets/Sean-Patrick-Wayland.jpg" alt="Sean Patrick Wayland"><div id="contentInner"><div id="slide1"><div class="changaone fs-26 caps ls-200 c-secondary">SEAN PATRICK WAYLAND<br>PHILADELPHIAN. FATHER. VETERAN.</div><div class="changaone ls-200 lh-2 c-secondary fs-40">CARRYING<br>YOUR VOICE<br>TO HARRISBURG.</div></div></div></div>').appendTo('.collection-58c5d2dabebafb01e0518dc1 .content-inner .sqs-layout');
}
$(document).ready(function(){
    builldNavigation();
    tempInjectHTML();
    calcDim();
});
$(window).on('load',function(){

});
$(window).on('resize',function(){
    calcDim();
});