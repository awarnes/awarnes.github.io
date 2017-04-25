"use strict";

$(document).on('ready', () => {
    
    $('.project-image').on('click', (evt)=>{
        let $curModal = $(evt.currentTarget).data("target");
        $($curModal).modal("toggle");
    })
})