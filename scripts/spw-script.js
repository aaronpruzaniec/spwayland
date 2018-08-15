var SPW = {};
var SPW= {'donations':{'donationsBuilt':false}};
getDimentions = function(element){
    var getDimensions = {};
    getDimensions.offset = $(element).offset();
    getDimensions.width = $(element).outerWidth();
    getDimensions.height = $(element).outerHeight();
    getDimensions.color = 'b80000';
    return getDimensions;
}
clearInput = function(){
    $('#emailInput').on('focus',function(){
        console.log('input');
        var a = $(this).attr('value');
        console.log(a);
        if (this.value==a) this.value='';
    });
}
openModal = function(){
    // $('.contributeButton a').each(function(){
    //     var a = $(this).attr('href');
    //     alert(a);
    //     $(this).attr({'data-href':a});
    //     $(this).attr({'href':''});
    // });
    SPW.contribute = [3,10,15,'other'];
    SPW.modal = {};
    $('#contributeContainer a').on('click',function(){ 
        var a = '';
        SPW.modal.dimentions = getDimentions(this);
        if($('#contributeOuter').length){

        }else{
            $('<div id="contributeOuter" class="fs-32" style="width:'+SPW.modal.dimentions.width+'px;height:'+SPW.modal.dimentions.height+'px;top:'+SPW.modal.dimentions.offset.top+'px;left:'+SPW.modal.dimentions.offset.left+'px;background-color:#'+SPW.modal.dimentions.color+';position:fixed;z-index:1001;display:none;"><div id="openLinkOuter"><div id="openLinkInner"></div></div><div id="contributeClose" class="changaone">X</div><div id="contributeInner"><div class="outer"><div class="left"><div class="leftInner"><div class="changaone">Donate</div><div id="donateOuter"><div id="donateInner"><a href="https://www.crowdpac.com/contribute/193015?amount=3" class="donation changaone" data="3">$3</a><a href="https://www.crowdpac.com/contribute/193015?amount=10" class="donation changaone" data="10">$10</a><a href="https://www.crowdpac.com/contribute/193015?amount=15" class="donation changaone" data="15">$15</a><a href="https://www.crowdpac.com/contribute/193015" class="donation changaone" data="other">other</a></div></div></div></div><div class="right"><div class="rightInner"><div class="changaone">Newsletter</div><div id="emailInputOuter"><form id="form1" name="form1" class="wufoo topLabel page table" accept-charset="UTF-8" autocomplete="off" enctype="multipart/form-data" method="post" novalidate action="https://aaronpruzaniec.wufoo.com/forms/zv730fq1slnc4v/#public"><div class="table" id="wufooOuter"><input id="emailInput" name="Field1" type="email" spellcheck="false" class="table-cell changaone element1" value="" maxlength="255" tabindex="1" placeholder="enter email" /><input id="saveForm" name="saveForm" class="btTxt submit table-cell changaone c-fff element2" type="submit" value="Submit" /><input type="hidden" id="idstamp" name="idstamp" value="1jrxh/GKidML6kkBlLKELMDWuPtSyCD39iakyH1P8jY=" /></div></form></div></div></div></div></div></div>').insertBefore('body');
        }
        // Build donation buttons once
        if(SPW.donations.donationsBuilt){

        }else{
            for(i=0;i<SPW.contribute.length;i++){
                if( Number.isInteger(SPW.contribute[i]) ){
                    a ='$';
                }else{
                    a ='';
                }
                //$('#donateInner').append('<a class="donation changaone" data="'+SPW.contribute[i]+'">'+a+SPW.contribute[i]+'</a>');
            }
            SPW.modal.dimentions.donationsBuilt = true;
        }
        $('#contributeOuter').fadeIn();
        $('#contributeOuter').animate({
            left: '0px',
            top: '0px',
            width: '100%',
            height: '100%'
        }, 500, function() {
            $('#contributeOuter *').fadeIn();
        });
        closeModal();
        clearInput();
        openModalLink();
        return false;
    });
}
openModalLink = function(){
    $('#donateOuter .donation').click(function(){
        var a = $(this).attr('data');

    });
}
closeModal = function(){
    $('#contributeClose').on('click',function(){
        $('#contributeOuter').fadeOut();
    })
}
builldNavigation = function(){
    $('#mainNavigation div:not(.folder):last-child').detach().appendTo('header .header-inner').addClass('contributeButton');
    $('<div id="contributeContainer"></div>').detach().prependTo('body');
    $('.contributeButton').detach().prependTo('#contributeContainer');
    $('.collection-58c5d2dabebafb01e0518dc1 > #contributeContainer').remove();
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
    $('<div id="endorsementsOuter"><div class="fs-65-p caps changaone c-secondary text-center">Endorsed by:</div><div id="endorsementsInner"><img src="../assets/vote-vets-logo-2x.jpg" alt="Vote Vets"></div></div>').insertAfter('.collection-58c5d2dabebafb01e0518dc1 #page');
    //$('').appendTo('');
    $('<div id="contentOuter" class="fs-40"><img class="icon" src="../assets/Sean-Patrick-Wayland.jpg" alt="Sean Patrick Wayland"><div id="contentInner"><div id="slide1"><div class="changaone fs-65-p caps ls-200 c-secondary">SEAN PATRICK WAYLAND<br>PHILADELPHIAN. FATHER. VETERAN.</div><div class="changaone ls-200 lh-2 c-secondary fs-100-p">CARRYING<br>YOUR VOICE<br>TO HARRISBURG.</div><div id="contributeContainer"><div class="external contributeButton"><a href="http://crowdpac.com/c/spwayland">Contribute</a></div></div></div></div></div>').appendTo('.collection-58c5d2dabebafb01e0518dc1 .content-inner .sqs-layout');
}
buildBackgrounds = function(){
    var a = '<div class="background" style="background-image:url("/assets/hero1.jpg");"></div>';
    var b;
    var c = $('.collection-type-index').length;
    SPW.backgrounds = [1,2,3,4];
    var d = SPW.backgrounds.length;
    if( c>0 ){
        for(i=0;i<d;i++){
            var e = setRandomNumber(d);
            console.log(e);
        }
        console.log(c);
    }

}
setRandomNumber = function(d){
    return Math.floor((Math.random() * d) + 1);
}
$(document).ready(function(){
    builldNavigation();
    tempInjectHTML();
    calcDim();
    openModal();
    buildBackgrounds();
});
$(window).on('load',function(){

});
$(window).on('resize',function(){
    calcDim();
});