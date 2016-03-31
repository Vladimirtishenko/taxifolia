function SiteController(){
	"use strict";
	this.registrationModule();
}

SiteController.prototype = Object.create(SiteModel.prototype);

SiteController.prototype.registrationModule = function(){
	"use strict";
	new TopSlider(document.querySelector('.taxifolia-top-slider'));
	new CommentSlider(document.querySelector('.taxifolia-slider-comments-list'));
};

function handlerToLoad() {
	"use strict";
	new SiteController();
}

window.addEventListener("DOMContentLoaded", handlerToLoad);