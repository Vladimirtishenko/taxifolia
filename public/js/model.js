function SiteModel() {
    "use strict";
    this.xhr = function() {
        var xmlhttp;
        try {
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (E) {
                xmlhttp = false;
            }
        }
        if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
            xmlhttp = new XMLHttpRequest();
        }
        return xmlhttp;
    };
}

SiteModel.prototype.Xhr = function() {
    "use strict";

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(argument) {
        if (xhr.status === 200 && xhr.readyState === 4) {
            callback(xhr.responseText, objectCaller);
        }
    };

    xhr.open(method, url, true);
    xhr.send(formData);

};
