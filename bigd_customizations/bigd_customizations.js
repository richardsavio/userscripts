// ==UserScript==
// @name         BigD Customization
// @namespace    https://richarsavio.com
// @author       Richard Savio
// @description  Customize bigdecisions pages
// @version      0.1
// @match        https://*.bigdecisionsdemo.com/*
// @grant        GM_addStyle
// ==/UserScript==

if (window.location.href.includes("azure-qa.bigdecisionsdemo.com")) {
    GM_addStyle ( `
.navbar-inverse {
background-color: #007fff !important;
};
`
                );
} else if (! window.location.href.includes("aws-qa.bigdecisionsdemo.com")) {
    GM_addStyle ( `
.navbar-inverse {
background-color: #b11111 !important;
};
`
                );
}

function dummyKeyUp(){
//     var dummyEvent = new KeyboardEvent('keyup', {"code": "ShiftLeft", "keycode": 16, "key": "Shift", "bubbles": true});
    var dummyEvent = new KeyboardEvent('keyup', {"bubbles": true});
    var randomElement = document.getElementById('notificationBar')
    console.log("Trigerring a Shift keypress...");
    randomElement.dispatchEvent(dummyEvent);
}
/*
setInterval(
    dummyKeyUp,
    17 * 60 * 1000
);
*/
