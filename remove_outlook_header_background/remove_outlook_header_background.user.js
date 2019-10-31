// ==UserScript==
// @name         Remove Outlook Header Background
// @namespace    https://github.com/richardsavio/userscripts
// @author       Richard Savio
// @description  Remove outlook header background image
// @version      0.1
// @match        https://outlook.office.com/*
// @grant        GM_addStyle
// ==/UserScript==

console.log("Changing Outlook Header");
    GM_addStyle ( `
.o365sx-navbar {
background-image: none !important;
};
`
    );
