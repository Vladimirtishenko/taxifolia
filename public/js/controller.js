function SiteController(){
	"use strict";
	this.registrationModule();
}

SiteController.prototype = Object.create(SiteModel.prototype);

SiteController.prototype.registrationModule = function(){
	"use strict";
	new TopSlider(document.querySelector('.taxifolia-top-slider'));
};

function handlerToLoad() {
	"use strict";
	new SiteController();
}

window.addEventListener("DOMContentLoaded", handlerToLoad);