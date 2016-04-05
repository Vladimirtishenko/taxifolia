function CommentSlider(element){
	"use strict";

	if(!element){
		return false;
	}

	this.element = element;
	this.children = this.element.children;
	this.count = this.children.length;
	this.current = 0;
	this.state = true;

	this.addStyleWidth();
	this.addEventListeners();

}

CommentSlider.prototype = Object.create(SiteController.prototype);


CommentSlider.prototype.addEventListeners = function(){
	"use strict";
	var controls = document.querySelector('.taxifolia-slider-comments-controls');
	controls.addEventListener('click', this.handlerToListeners.bind(this));
};

CommentSlider.prototype.addStyleWidth = function(){
	"use strict";
	this.element.style.cssText += "width: "+ 100 * this.count + "%";

	[].forEach.call(this.children, function(item){
		item.style.width = 100 / this.count + "%";
	}.bind(this));
};

CommentSlider.prototype.handlerToListeners = function(){
	"use strict";
	var target = event.target,
		attr = target.getAttribute('data-arrow'),
		self = this,
		width = self.element.firstElementChild.clientWidth;

	if(!attr){
		return;
	}

	if(self.state != true){
		return;
	}

	self.state = false;

	if(attr == 'prev'){
		self.element.insertBefore(self.element.lastElementChild, self.element.firstElementChild);
		self.element.style.cssText += "transform: translateX("+(-width)+"px)";
		setTimeout(function(){
			self.element.style.cssText += "transition: .5s; transform: translateX(0px)";
			self.animation(null);
		}, 20);
		

	} else{
		self.element.style.cssText += "transition: .5s; transform: translateX("+(-width)+"px)";
		self.animation('appendChild', self.element.firstElementChild);
	}

};

CommentSlider.prototype.animation = function(method, elem){
	"use strict";
	var self = this;
	setTimeout(function(){
		if(method){
			self.element[method](elem);
		}
		self.element.style.cssText += "transition-duration: 0s; transform: translateX(0)";
		self.state = true;
	}, 600);
	
};