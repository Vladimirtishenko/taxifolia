function SiteController(){
	"use strict";
}

SiteController.prototype = Object.create(SiteModel.prototype);

function handlerToLoad() {
	new SiteController();
}

window.addEventListener("DOMContentLoaded", handlerToLoad)