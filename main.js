
const root = document.documentElement

function openNav() {
    document.getElementById("socialMediaNav").style.width = "100px";
    document.getElementById("main").style.marginLeft = "0px";
}

function closeNav() {
    document.getElementById("socialMediaNav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function toggleLightScheme() {
	root.style.setProperty('--boxColor', '#EFE9F4');
	root.style.setProperty('--textColor', '#171D1C');
	root.style.setProperty('--shadeColor', '#87919E');
	root.style.setProperty('--backgroundColor', '#FFFFFF');

}


function toggleDarkScheme() {
	root.style.setProperty('--boxColor', '#373f51');
	root.style.setProperty('--textColor', '#D8DBE2');
	root.style.setProperty('--shadeColor', '#87919E');
	root.style.setProperty('--backgroundColor', '#202030');
}

