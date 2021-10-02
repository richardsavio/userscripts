// ==UserScript==
// @name           Re-enable dev tools shortcuts
// @version        0.1
// @author         Richard Savio
// @namespace      https://github.com/richardsavio/userscripts
// @description    Stop websites from hijacking dev tools shortcuts
// @run-at         document-start
// @include        *
// @grant          none
// ==UserScript==

// https://superuser.com/a/595885

var fTwelveKeyCode = 123;
var cKeyCode = 67;

document.addEventListener('keydown', function(e) {
    // alert(e.keyCode); //uncomment to find out the keycode for any given key
    if ((e.keyCode === fTwelveKeyCode) ||
        (e.keyCode === cKeyCode && e.ctrlKey && e.shiftKey && ! e.altKey)) {
        e.cancelBubble = true;
        e.stopImmediatePropagation();
        // alert("Captured key press!"); // Uncomment to see when it captured something
        return false;
    }
});
