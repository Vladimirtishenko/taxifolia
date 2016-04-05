function Modal() {}

Modal.prototype = Object.create(SiteController.prototype);

Modal.prototype.responseModal = function(template, callback) {

    var element = document.querySelector('.taxifolia-modal'),
        wrap = element.firstElementChild;

    wrap.insertAdjacentHTML('beforeend', template + "<a class='taxifolia-modal-closes'></a>");
    element.classList.add('taxifolia-modal-flex', 'taxifolia-modal-animate-in');
    callback();

    this.createClose(element, wrap, 'disqus');

}

Modal.prototype.discusTemplate = function() {

    var str = "<div id='disqus_thread'></div>",
        callback = function() {
            var d = document,
                s = d.createElement('script');
            s.src = '//taxi1989.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s); };

    this.responseModal(str, callback);
}

Modal.prototype.mailResponse = function() {
    console.log("mailResponse");
}


Modal.prototype.createClose = function(element, wrap, remover){
	var close = element.querySelector('.taxifolia-modal-closes');
	if(!close){
		return;
	}
	close.addEventListener('click', this.closeHandler.bind(this, element, wrap, remover))
}

Modal.prototype.closeHandler = function(element, wrap, remover){
	element.classList.add('taxifolia-modal-animate-out');
	setTimeout(function(){
		element.classList.remove('taxifolia-modal-flex', 'taxifolia-modal-animate-in', 'taxifolia-modal-animate-out');
		wrap.innerHTML = "";
		if(remover){
			var script = document.querySelectorAll('script[src*="'+remover+'"]');	
			for (var i = 0; i < script.length; i++) {
				script[i].parentNode.removeChild(script[i]);
			}
		}
	}, 800);
}