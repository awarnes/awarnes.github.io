"use strict";

$(document).on('ready', () => {
    
    $('.project-image').on('click', (evt)=>{
        let $curModal = $(evt.currentTarget).data("target");
        $($curModal).modal("toggle");
    })
    
    // Smooth scrolling across the page.
    $('.smooth-scroll').click(function(event) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          
        if (target.length) {
            event.preventDefault()
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 700, function() {
            
                var $target = $(target);
                $target.focus()
                if ($target.is(":focus")) {
                    return false
                } else {
                    $target.attr('tabindex','-1')
                    $target.focus()
                }
            })
        }
    })
    
})