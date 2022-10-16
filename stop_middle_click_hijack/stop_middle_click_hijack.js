// ==UserScript==
// @name           Stop Middle Click Hijacking
// @namespace      http://whatisthisidonteven.com
// @version        0.1
// @author         Nickel, Richard
// @description    Prevent sites from hijacking the middle mouse button for their own purposes
// @include        *
// ==/UserScript==
/*
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
*/
(function() {
    //Adapted from Chrome extension (written by petergrabs@yahoo.com)
    document.addEventListener("click", function(e) {
        // Block both middle click and CTRL + Left Click
        // Causes problems on Todoist
        // if (e.button === 1 || (e.button === 0 && e.ctrlKey)) {
        if (e.button === 1) {
            e.stopPropagation();
        }
    }, true);
})();
