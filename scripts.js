const lightSwitchKey = 'light-switch';
let lightSwitch = window.localStorage.getItem(lightSwitchKey);
if (lightSwitch === null) {
    lightSwitch = 'f';
    window.localStorage.setItem(lightSwitchKey, lightSwitch);
}

function setColors(lightSwitch) {
    if (lightSwitch === 't') {
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.setAttribute('data-theme', 'light');
    }
}

function changeTheme() {
    lightSwitch = lightSwitch === 'f' ? 't' : 'f';
    window.localStorage.setItem(lightSwitchKey, lightSwitch);
    setColors(lightSwitch);
}

function getChecked() {
    return lightSwitch === 'f';
}

window.onload = function() {
    const input = document.getElementById('light-theme-input');
    input.addEventListener('change', changeTheme);
    input.checked = lightSwitch === 'f';
    setColors(lightSwitch);
}
