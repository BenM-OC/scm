function showTechHL() {
	document.getElementById("techHL").style.display = "block";
	document.getElementById("techHlBtn").style.backgroundColor = "var(--boxColor)";
	document.getElementById("hobbyHlBtn").style.backgroundColor = "var(--outOfFocus)";
	document.getElementById("hobbyHL").style.display = "none";
	document.getElementById("defaultHL").style.display = "none";
	document.getElementById("techHlBtn").style.borderBottom = "0px";
	document.getElementById("hobbyHlBtn").style.borderBottom = "2px solid var(--backgroundColor)";
}

function showHobbyHL() {
	document.getElementById("hobbyHL").style.display = "block";
	document.getElementById("hobbyHlBtn").style.backgroundColor = "var(--boxColor)";
	document.getElementById("techHlBtn").style.backgroundColor = "var(--outOfFocus)";
	document.getElementById("techHL").style.display = "none";
	document.getElementById("defaultHL").style.display = "none";
	document.getElementById("hobbyHlBtn").style.borderBottom = "0px";
	document.getElementById("techHlBtn").style.borderBottom = "2px solid var(--backgroundColor)";
}

