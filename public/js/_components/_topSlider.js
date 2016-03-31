function TopSlider(element){
	"use strict";

	if(!element){
		return false;
	}

	this.width = element.clientHeight;
	this.element = element.firstElementChild;
	this.children = this.element.children;
	this.count = this.children.length;
	this.current = 0;

	this.constructControls();
	this.addEventListeners();

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
		return true;
	} catch (e){
		throw Error("No Slides");
	}

};

TopSlider.prototype.addEventListeners = function(){
	"use strict";
	var controls = document.querySelector('.taxifolia-top-slider-controls');
	controls.addEventListener('click', this.handlerToListeners.bind(this));
};

TopSlider.prototype.handlerToListeners = function(){
	"use strict";
	var target = event.target,
		attr = (typeof target.getAttribute('data-number') == 'string') ? parseInt(target.getAttribute('data-number')) : null,
		curentSlide = this.element.parentNode.querySelector('.-active');

	if(attr == null || target.classList.contains('-active')){
		return;
	}

	this.element.style.cssText = "transform: translateY("+this.width*(-attr)+"px)";
	this.current = attr;
	curentSlide.classList.remove('-active');
	target.classList.add('-active');

};