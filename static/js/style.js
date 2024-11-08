window.onload = function() {
	guanggao();
}
function guanggao() {
	var xmlhttp;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("guanggao").innerHTML = xmlhttp.responseText;
			translate.execute();
		}
	}
	xmlhttp.open("GET", "/guanggao.html", true);
	xmlhttp.send();
}
