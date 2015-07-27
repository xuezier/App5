//// THIS CODE AND INFORMATION IS PROVIDED "AS IS" WITHOUT WARRANTY OF
//// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
//// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
//// PARTICULAR PURPOSE.
////
//// Copyright (c) Microsoft Corporation. All rights reserved

(function () {
    "use strict";
    console.log("gsdfsdfsdf");
    var pageThis;
    var returnButton;
    WinJS.UI.Pages.define("/transitionPages.html", {
        ready: function (element, options) {
            pageThis = document.querySelector("main");
            returnButton = document.getElementById("Edit");
            returnButton.addEventListener("click", transitionBetweenPages, false);
            // Run enter page animation to animate in the page that has just been loaded
            WinJS.UI.Animation.enterPage([pageThis], null);
        }
    });

    function transitionBetweenPages() {
        // When navigating away from this page, run exit page animation on current page, then navigate to new page
        WinJS.UI.Animation.exitPage([pageThis], null).done(
            function () {
                WinJS.Navigation.navigate("/default.html", "sample page");
            });
    }
})();
