//facendo click sull'icona menu (bars) il menu diventa visibile
$('.header-right > a').click(function() {
    //il menu diventa visibile
    $('.hamburger-menu').show();
})
//facendo click sull'icona X il menu scompare
$('.fa-times').click(function(){

    $('.hamburger-menu').hide();
})


// //$('.fa-bars').click(function() {
//     //il menu diventa visibile
//     $('.hamburger-menu').show();
// })
