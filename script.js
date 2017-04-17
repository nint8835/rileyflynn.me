function changeCSS(cssFile) {
    var oldlink = document.getElementsByTagName("link").item(0);
    oldlink.setAttribute("href", "styles/" + cssFile);
}