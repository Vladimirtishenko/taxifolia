function SiteController() {
    "use strict";
    this.registrationModule();
    this.registrationSimpleHandler(
    	{
    		element: ".taxifolia-discus-link", 
    		event: "click",
    		classRequest: "Modal",
    		classMethod: "discusTemplate",
    		params: "discus"
    	}
    );
}

SiteController.prototype = Object.create(SiteModel.prototype);

SiteController.prototype.registrationModule = function() {
    "use strict";
    this.TopSlider = new TopSlider(document.querySelector('.taxifolia-top-slider'));
    this.CommentSlider = new CommentSlider(document.querySelector('.taxifolia-slider-comments-list'));
    this.Modal = new Modal();
    this.Brakets = new Brakets(document.querySelector('.taxifolia-backets-responsive'));
    $('.taxifolia-link-menu').on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
    });
    var carousel = $("#taxifolia-carousel").waterwheelCarousel();
    $('#taxifolia-carousel-prev').bind('click', function () {
        carousel.prev();
        return false
    });
    $('#taxifolia-carousel-next').bind('click', function () {
        carousel.next();
        return false;
    });
};

SiteController.prototype.registrationSimpleHandler = function() {
    "use strict";

    var objectArgument = arguments;

    for (var i = 0; i < objectArgument.length; i++) {
    	if(objectArgument[i] instanceof Object && Object.keys(objectArgument[i]).length == 5){
    		var element = document.querySelector(objectArgument[i].element)
    		element.addEventListener(objectArgument[i].event, this[objectArgument[i].classRequest][objectArgument[i].classMethod].bind(this.Modal))
    	}
    }

}

function handlerToLoad() {
    "use strict";
    new SiteController();
}

window.addEventListener("DOMContentLoaded", handlerToLoad);
