# AutoPXLS - mod
This fork version is selecting random pixel instead of first available one on left-to-right up-to-down basis like the original does. That way you see the shape of your project faster and script is harder to block, especially if ran by more people. Additional options include autoadjusting wrong colors to the ones in palette and online stats (you can see how many people are drawing with you and estimated completion time).

>**WARNING: It was just announced that using scripts on pxls.space may result in ban, so use at your own risk!**

>**WARNING #2: Current version of the script is busted and will result in instant ban. I'm no longer updating it on GitHub for now, so dear @xSke can't see how I'm bypassing his anti-script protection :)**          
>If you want to get the working script, you can query me at IRC (`/server irc.pirc.pl` or http://pirc.pl/bramka_iframe/pxls) or go into channel #pxls and mention me.

## Options
You can tweak the script's behaviour using options. Append the option text into URL after the `#`, script checks if it contains the string. Alternatively you can set options like `document.optionname = true;`. They can be applied at any time while the script is running. List of available options:


>**nostats** - disables stats reporting

>**noautocolor** - disables selecting the closest color on palette if it comes across incorrect one, will just report that in chat and skip like original script does if this option is enabled

>**notimer** - disables timer output to console

>**timerlite** - makes timer output the same text into console, so that it will be wrapped to one line with counter on the left in some browsers

>**classic** - don't pick random pixel on screen, go line-by-line like the original script

>**fast** - force lower colors check delay = faster drawing, for PXLS with low delay

>**veryfast** - as above, just even faster

>**superfast** - now this is really fast, do not abuse ;)

## Usage
### Basic example (with base script code being always up-to-date)
```javascript
var script = document.createElement('script');
script.src = "https://rawgit.com/p0358/autopxls/master/autopxls.js";
script.onload = function () {
    var images = [
        {
            title: "wiedzmin",
            x: 306,
            y: 201,
            image: "http://i.imgur.com/zlUARdq.png"
        }
    ];
    AutoPXLS(images);
};
document.head.appendChild(script);
```
It is pretty self-explainatory, you basically need to replace `x`, `y`, `title` and `image` values with your own. You need to prepare the image in right dimensions yourself with right color palette. Script will adjust the color to the nearest one if it's incorrect, but it is always better to do it yourself.
### Options setting
If you want, for example, not to display timer in console, you want to either append `#notimer` to URL in your URL bar, so it looks like `http://pxls.space/#notimer`. Alternatively you can enter 
```javascript
document.notimer = true;
```
in the console, useful especially if you want to share a script with someone appending the options.
### Multiple images
Here's an example with 2 images + **notimer** option enabled:
```javascript
var script = document.createElement('script');
script.src = "https://rawgit.com/p0358/autopxls/master/autopxls.js";
script.onload = function () {
    var images = [
        {
            title: "wiedzmin",
            x: 306,
            y: 201,
            image: "http://i.imgur.com/zlUARdq.png"
        },
        {
            title: "international",
            x: 0,
            y: 0,
            image: "http://i.imgur.com/O1ViQ3L.png"
        }
    ];
    AutoPXLS(images);
};
document.head.appendChild(script);
document.notimer = true;
```
Remember about the commas delimetering image objects!