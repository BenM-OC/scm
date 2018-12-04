function onLoad() {
	var chosenScheme = document.cookie;

	if (chosenScheme =='chosenColorScheme=Dark') {
		toggleDarkScheme();
	} 
	if (chosenScheme =='chosenColorScheme=Light') {
		toggleLightScheme();
	}
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
	document.documentElement.style.setProperty('--boxColor', '#EFE9F4');
	document.documentElement.style.setProperty('--textColor', '#171D1C');
	document.documentElement.style.setProperty('--shadeColor', '#87919E');
	document.documentElement.style.setProperty('--backgroundColor', '#FFFFFF');
	document.documentElement.style.setProperty('--outOfFocus', '#d7d1db');
	document.cookie = "chosenColorScheme=Light; path=/";
}

function toggleDarkScheme() {
	document.documentElement.style.setProperty('--boxColor', '#373f51');
	document.documentElement.style.setProperty('--textColor', '#D8DBE2');
	document.documentElement.style.setProperty('--shadeColor', '#87919E');
	document.documentElement.style.setProperty('--backgroundColor', '#202030');
	document.documentElement.style.setProperty('--outOfFocus', '#313848');
	document.cookie = "chosenColorScheme=Dark; path=/";
}
