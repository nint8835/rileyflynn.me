function changeColour(cssFile) {
    var oldlink = document.getElementsByTagName("link").item(1);
    oldlink.setAttribute("href", "styles/colour_schemes/" + cssFile + ".css");
}
function changeFont(cssFile) {
    var oldlink = document.getElementsByTagName("link").item(2);
    oldlink.setAttribute("href", "styles/fonts/" + cssFile + ".css");
}