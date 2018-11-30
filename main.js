
const root = document.documentElement


function onLoad() {


	var chosenScheme = document.cookie;

	if (chosenScheme =='chosenColorScheme=Dark') {
		toggleDarkScheme();
	} 
	if (chosenScheme =='chosenColorScheme=Light') {
		toggleLightScheme();
	}

	console.log(document.cookie);
	console.log(chosenScheme);
}

function openSocialMediaNav() {
    document.getElementById("socialMediaNav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "0px";
}

function closeSocialMediaNav() {
    document.getElementById("socialMediaNav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function openColorSchemePicker() {
    document.getElementById("colorSchemePicker").style.width = "200px";
    document.getElementById("main").style.marginRight = "0px";
}

function closeColorSchemePicker() {
    document.getElementById("colorSchemePicker").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
}

function toggleLightScheme() {
	root.style.setProperty('--boxColor', '#EFE9F4');
	root.style.setProperty('--textColor', '#171D1C');
	root.style.setProperty('--shadeColor', '#87919E');
	root.style.setProperty('--backgroundColor', '#FFFFFF');
	document.cookie = "chosenColorScheme=Light; path=/";
}

function toggleDarkScheme() {
	root.style.setProperty('--boxColor', '#373f51');
	root.style.setProperty('--textColor', '#D8DBE2');
	root.style.setProperty('--shadeColor', '#87919E');
	root.style.setProperty('--backgroundColor', '#202030');
	document.cookie = "chosenColorScheme=Dark; path=/";
}
