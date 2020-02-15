// ==UserScript==
// @name         Nexusmods Redirect to File Tab
// @namespace    https://github.com/richardsavio/userscripts
// @version      0.1
// @description  Redirect from the description tab to files (downloads) tab by default
// @author       Richard Savio
// @include      /^https://www\.nexusmods\.com/[a-zA-Z0-9_-]+/mods/[0-9]+$/
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    if (window.location.search === "") {
        var oldUrl = window.location;
        var url = oldUrl
        if (!window.location.toString().endsWith("?")) {
            url += "?"
        }
        url += "tab=files";
        window.location.replace(url);
        console.log('Redirected from "' +oldUrl + '" to "' + url + '"')
    }
})();
