# AWS Console Colors Userscript

This userscript (for GreaseMonkey / TamperMonkey) extends the user's configured color for the role switcher widget in the AWS Console, and applies it to the entire menu bar. This allows for better identification of which AWS account and/or role is currently being assumed. Some manipulation of the color is done to make it suitable for use as the menu bar background, so that text remains legible and it doesn't look too horrific.

Some screenshots:

![Green Screenshot](https://user-images.githubusercontent.com/251987/40589702-7896439c-61f2-11e8-89dc-45a28e45168b.png "Green Screenshot")
![Blue Screenshot](https://user-images.githubusercontent.com/251987/40589706-7f5cd268-61f2-11e8-8c81-17f1a789234d.png "Blue Screenshot")
![Red Screenshot](https://user-images.githubusercontent.com/251987/40589707-829255d4-61f2-11e8-8865-c0816606933d.png "Red Screenshot")

## Installation

Best used with a userscript manager such as [Greasemonkey][greasemonkey] (Firefox) or [Tampermonkey][tampermonkey] (Chrome).

* [One-click install from OpenUserJs][openuserjs-install]
* [Install directly from GitHub][github-install]

## Customizing

The script manipulates the saturation and luminosity of the role switcher background color. Edit the script and adjust the values of `s` and `l` (near the top) - higher saturation makes a bolder color, higher luminosity makes a brighter color.


[greasemonkey]: https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/
[tampermonkey]: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
[openuserjs-install]: https://openuserjs.org/scripts/manicminer/AWS_Console_Colored_Menu_Bar
[github-install]: https://github.com/manicminer/userscript-aws-console-colors/raw/master/aws-console-colors.user.js
