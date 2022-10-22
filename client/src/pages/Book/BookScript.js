import $ from 'jquery';

$(() => {
    $("html, body").animate({scrollTop: -window.innerHeight});
    const pageCount = $(".pageWrapper .page").length;
    const flexDirection = $(".pageWrapper").css("flex-direction");
    if(flexDirection === "column") $(".pageWrapper").css({width: "100%", height: pageCount*100+"%"});
})