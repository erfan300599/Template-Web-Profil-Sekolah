$(document).ready(function(){
    $('#slider-hero').owlCarousel({
        loop:true,
        nav:true,
        items:1,
        navText:[
                    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        navContainer:'#slider-hero-nav',
    });

    $('#tenaga-pendidik-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        },
        navText:[
                    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        navContainer:'#slider-tools-1',
    });
    $('#alumni-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        // items: 2,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        },
        navText:[
                    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        navContainer:'#slider-tools-2',
    });

    $('#galeri-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        },
        navText:[
                    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        navContainer:'#slider-tools-3',
    });
});