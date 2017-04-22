function changeColour(cssFile) {
    var oldlink = document.getElementsByTagName("link").item(1);
    oldlink.setAttribute("href", "styles/colour_schemes/" + cssFile + ".css");
}