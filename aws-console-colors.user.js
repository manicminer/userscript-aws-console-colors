// ==UserScript==
// @name         AWS Console Colored Menu Bar
// @namespace    io.manicminer
// @version      0.2.2
// @description  Extend AWS Console role switcher color to entire menu bar
// @author       Tom Bamford
// @icon         https://user-images.githubusercontent.com/251987/40598271-067fbe3c-6247-11e8-89c2-2e0a4d2a1464.png
// @license      MIT
// @match        https://console.aws.amazon.com/*
// @match        https://*.console.aws.amazon.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Change values of s and l to adjust the saturation and luminosity of the background color
    var s = 1.0, l = 0.25;

    function determineNewColor(rgbColor) {
        var f = rgbColor.split(","), r = parseInt(f[0].slice(4)), g = parseInt(f[1]), b = parseInt(f[2]);
        r /= 255; g /= 255; b /= 255;
        var h, max = Math.max(r, g, b), min = Math.min(r, g, b);
        if (max == min) {
            h = s = 0; // achromatic
        } else {
            var d = max - min;
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return 'hsl(' + Math.floor(h * 360) + ',' + Math.floor(s * 100) + '%,' + Math.floor(l * 100) + '%)';
    }

    var switcherClass = 'awsc-switched-role-username-wrapper';
    var roleElems = document.getElementsByClassName(switcherClass);
    if (roleElems.length == 1) {
        var bgColor = roleElems[0].style.backgroundColor;
        var newBgColor = determineNewColor(bgColor);
        var navSelector = '#nav-menubar, #nav-menu-right, .nav-menu, .nav-menu-separator';
        var menuBarElems = document.querySelectorAll(navSelector);
        for (var i = 0; i < menuBarElems.length; i++) {
            menuBarElems[i].style.backgroundColor = newBgColor;
        }
    }
})();

/* vim: set ft=javascript ts=4 sts=4 sw=4 et: */
