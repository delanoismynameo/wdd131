let selectElem = document.querySelector('#mode_select');
let logo = document.querySelector('img');
let fontColor = document.querySelector("#topics");
let header = document.querySelector("h1");
let umiqueP = document.querySelector("#uniqueP");

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "#302f2f";
        header.style.color = "white";
        fontColor.style.color = "white";
        uniqueP.style.color = "rgb(126, 181, 190)";
        logo.setAttribute('src', 'byui-logo-white.png')
    } else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "white";
        header.style.color = "black";
        fontColor.style.color = "black";
        uniqueP.style.color = "#035f9c";
        logo.setAttribute('src', 'byui-logo-blue.webp')
    }
}           
                    