function SiteController(){
	"use strict";
	this.registrationModule();
}

SiteController.prototype = Object.create(SiteModel.prototype);

SiteController.prototype.registrationModule = function(){
	"use strict";
	new TopSlider(document.querySelector('.taxifolia-top-slider'));
	new CommentSlider(document.querySelector('.taxifolia-slider-comments-list'));
	new Brakets(document.querySelector('.taxifolia-backets-responsive'));
	$('[href*=#]').on('click', function(event){     
	    event.preventDefault();
	    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
};

function handlerToLoad() {
	"use strict";
	new SiteController();
}

window.addEventListener("DOMContentLoaded", handlerToLoad);