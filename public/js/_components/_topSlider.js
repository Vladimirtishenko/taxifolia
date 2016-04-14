function TopSlider(element){
	"use strict";

	if(!element){
		return false;
	}
	this.element = element.firstElementChild;
	this.children = this.element.children;
	this.count = this.children.length;
	this.current = 0;
	this.timer = null;
	this.controls = null;

	this.constructControls();
	this.addEventListeners();
	this.addTimer();
	this.listenerForControls();

}

TopSlider.prototype = Object.create(SiteController.prototype);

TopSlider.prototype.constructControls = function(){
	"use strict";
	var str = '<div class="taxifolia-top-slider-controls">',
		self = this,
		classie;

	for (var i = 0; i < this.count; i++) {
		this.children[i].setAttribute('data-slide', i);
		(i == 0) ? classie = '-active' : classie = '';
		str += '<span class="taxifolia-top-slider-controls-item '+classie+'" data-number="'+i+'"></span>';
	}

	str += "</div>";

	try {
		self.element.parentNode.insertAdjacentHTML('beforeend', str);
		self.controls = document.querySelector('.taxifolia-top-slider-controls');
		return true;
	} catch (e){
		throw Error("No Slides");
	}

};

TopSlider.prototype.listenerForControls = function(){

	if(!this.controls){
		return;
	}

	this.controls.addEventListener('mouseenter', this.handlerEnterControls.bind(this));
	this.controls.addEventListener('mouseleave', this.handlerLeaveControls.bind(this));

}

TopSlider.prototype.handlerEnterControls = function(){
	if(!this.timer){
		return;
	}
	clearTimeout(this.timer);
}

TopSlider.prototype.handlerLeaveControls = function(){
	if(!this.timer){
		return;
	}
	this.addTimer();
}

TopSlider.prototype.addEventListeners = function(){
	"use strict";
	var controls = document.querySelector('.taxifolia-top-slider-controls');
	controls.addEventListener('click', this.handlerToListeners.bind(this));
};


TopSlider.prototype.addTimer = function(){
	this.timer = setTimeout(this.timerHandler.bind(this), 5000);
}

TopSlider.prototype.timerHandler = function(){
	"use strict";
	var next = this.current == 0 ? 1 : 0;
	this.handlerToListeners(next);
	clearTimeout(this.timer);
	this.addTimer();
}

TopSlider.prototype.handlerToListeners = function(next){
	"use strict";
	var target = (event && event.target) ? event.target : (next != null) ? document.querySelector('span[data-number="'+next+'"]') : null,
		attr = (event && typeof target.getAttribute('data-number') == 'string') ? parseInt(target.getAttribute('data-number')) : (next != null) ? next : null,
		curentSlide = this.element.parentNode.querySelector('.-active'),
		height = this.element.parentNode.clientHeight;

	if(attr == null || target.classList.contains('-active')){
		return;
	}

	this.element.style.cssText = "transform: translateY("+height*(-attr)+"px)";
	this.current = attr;
	curentSlide.classList.remove('-active');
	target.classList.add('-active');

};