console.log('AutoPXLS mod by p0358, randomized pixel placement + wrong color autoadjust + stats, https://github.com/p0358/autopxls');

window.App.banMe = function() {
    // Greetings to xSke, why don't you star me on GitHub? xD
};

for (var i = 1; i < 999999; i++) {
    window.clearInterval(i);
    window.clearTimeout(i);
    if (window.mozCancelAnimationFrame) window.mozCancelAnimationFrame(i); // Firefox
}
window.App.updateTimeInit = function() {
    setInterval(this.updateTime.bind(this), 1E3);
}
window.App.updateTimeInit();

document.autoPxlsScriptRevision_ = 7; // _alwaysBeSafe:)
if (!document.autoPxlsRandomNumber) document.autoPxlsRandomNumber = Math.round(Math.random() * 10000000);
//console.log('Script revision: 1, initializing...');

if (window.location.hostname == 'pxls.space') {
    console.error('WARNING: you may get banned on pxls.space by using scripts!');
}

function AutoPXLS2(images) {
    
    function makeid() {
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz";

        for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    
    var autoPxlsInfoDivId = 'autopxlsinfo';
    var autoPxlsInfoTextPId = 'infoText';
    if (window.location.hostname == 'pxls.space') {
        
        autoPxlsInfoDivId = makeid();
        autoPxlsInfoTextPId = makeid();
        //if (!$("div.info").find("#autopxlsinfo").length) {
        if (!$("div.info").find("#autopxlsinfo").length && !$("div.info").find("#" + autoPxlsInfoDivId).length) {
            //$("div.info").append('<div id="autopxlsinfo"><h1>AutoPXLS <a href="//github.com/p0358/autopxls">mod</a>' + /* by p0358*/'</h1><p id="infoText"> </p></div>');
            $("div.info").append('<div id="' + autoPxlsInfoDivId + '"><h1>AutoPXLS <a href="//github.com/p0358/autopxls">mod</a>' + /* by p0358*/'</h1><p id="' + autoPxlsInfoTextPId + '"> </p></div>');
        }
    }
//

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  images = shuffle(images);

  // === control group
  var uiPanel;
  if (uiPanel = document.getElementById('uiPanel')) uiPanel.parentNode.removeChild(uiPanel);
  var uiPanel = document.createElement('div');
  uiPanel.id = "uiPanel";
  uiPanel.style.right = 0;
  uiPanel.style.position = "absolute";
  //document.body.append(uiPanel); - doesn't work in Microsoft Edge for some reason...
  $(uiPanel).appendTo(document.body);

  var uiSound = document.createElement('div');
  uiSound.id = "uiSound";
  uiSound.style.margin = "3px";  
  uiSound.style.fontSize = "20pt";
  uiSound.style.cursor = "pointer";
  uiSound.style.backgroundColor = "rgba(20, 20, 20, 0.7)";
  uiSound.style.borderRadius = "5px";
  uiSound.style.textAlign = "center";
  uiSound.innerHTML = document.captchaSoundAlert ? "🔊" : "🔇";
  uiSound.onclick = function(){
  	document.captchaSoundAlert = !document.captchaSoundAlert;
  	uiSound.innerHTML = document.captchaSoundAlert ? "🔊" : "🔇";
  	console.log("[captcha notification sound " + (document.captchaSoundAlert ? 'unmuted]' : "muted]"));
  }
  //uiPanel.append(uiSound);
  $(uiPanel).append(uiSound);
  
  var uiMode = document.createElement('div');
      uiMode.id = "uiMode";
      uiMode.style.margin = "3px";  
      uiMode.style.color = "#adadad";
      uiMode.style.fontSize = "20pt";
      uiMode.style.cursor = "pointer";
      uiMode.style.backgroundColor = "rgba(20, 20, 20, 0.7)";
      uiMode.style.borderRadius = "5px";
      uiMode.style.textAlign = "center";
      uiMode.innerHTML = document.classic ? "⇢" : "⇝";
      uiMode.onclick = function () {
  	  document.classic = !document.classic;
  	  uiMode.innerHTML = document.classic ? "⇢" : "⇝";
  	  console.log((document.classic ? "[linear" : "[random") + " pixels placing mode]");
  }
  //uiPanel.append(uiMode);
  $(uiPanel).append(uiMode);
  
  var uiSettings = document.createElement('div');
      uiSettings.id = "uiSettings";
      uiSettings.style.margin = "3px";  
      uiSettings.style.color = "#adadad";
      uiSettings.style.fontSize = "20pt";
      uiSettings.style.cursor = "pointer";
      uiSettings.style.backgroundColor = "rgba(20, 20, 20, 0.7)";
      uiSettings.style.borderRadius = "5px";
      uiSettings.style.textAlign = "center";
      uiSettings.innerHTML = "⚙";
      uiSettings.onclick = function () {
  	  alert('For full list of settings, have a look here: https://github.com/p0358/autopxls');
  }
  //uiPanel.append(uiSettings);
  $(uiPanel).append(uiSettings);
  // ===
  
  function changeFavicon(href) {
    document.head.removeChild(document.head.querySelectorAll('link[rel="icon"]')[0]);
    var favicon = document.createElement('link');
    favicon.type = 'image/x-icon';
    favicon.rel = 'icon';
    favicon.href = href;
    document.getElementsByTagName('head')[0].appendChild(favicon);
  }
  if (!sfx) var sfx = new Audio(document.captchaSoundSource || "//www.youtubeinmp3.com/fetch/?video=https://www.youtube.com/watch?v=8yGfQak-q9M");
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === 'visible' &&
      document.querySelectorAll('link[rel="icon"]')[0].href !== 'http://pxls.space/favicon.ico') {
      changeFavicon('http://pxls.space/favicon.ico');
    }
  });
  
  if (Notification.permission !== "granted")
    Notification.requestPermission();

  var om = App.socket.onmessage;

  App.socket.onmessage = function(message){
    var m = JSON.parse(message.data);

    if (m.type == "captcha_required") {
      if (Notification.permission !== "granted")
        Notification.requestPermission();
      else {
        var notification = new Notification('autopxls', {
          body: "Hey there! Enter the captcha!",
        });
      }
      
      document.title = "[captcha!] " + document.location.hostname;
      
      if (document.visibilityState !== 'visible') {
        if (document.captchaSoundAlert) sfx.play();
        changeFavicon(document.captchaFaviconSource || document.defaultCaptchaFaviconSource);
      }
      
    }

    om(message);
  }
//

  var scriptRevision = document.autoPxlsScriptRevision_;
  var reportStatsTimeout = 3 * 60 * 1000; // default, this will be updated by the server

  var Painter = function(config){
    var board = document.getElementById("board").getContext('2d');
    var title = config.title || "unnamed";

    var img = new Image();
    img.crossOrigin = "anonymous";
    img.src = config.image;
    var imgsrc = config.image;
    var x = config.x;
    var y = config.y;

    var canvas = document.createElement('canvas');
    var image;

    var image_loaded_flag = false;
    var hasStartedDrawing = false;
    
    var pixels_complete = 0;
    var pixels_incomplete = 0;
    var completionPercentage = 0;

    var colors = [
        [255,255,255],
        [228,228,228],
        [136,136,136],
        [34,34,34],
        [255,167,209],
        [229,0,0],
        [229,149,0],
        [160,106,66],
        [229,217,0],
        [148,224,68],
        [2,190,1],
        [0,211,221],
        [0,131,199],
        [0,0,234],
        [207,110,228],
        [130,0,128]
      ];
      
    var colornames = [
        'white',
        'lightgray',
        'gray',
        'black',
        'pink',
        'red',
        'orange',
        'brown',
        'yellow',
        'lightgreen',
        'green',
        'aqua',
        'darkblue',
        'magenta',
        'purple'
    ];

    function isSamePixelColor(coords){
      var board_pixel = board.getImageData((parseInt(x) + parseInt(coords["x"])), (parseInt(y) + parseInt(coords["y"])), 1, 1).data;
      var image_pixel = image.getImageData(coords["x"], coords["y"], 1, 1).data;

      if(image_pixel[3] <= 127) return true; // I think this line is for transparency

      var correct = true;
      for(var i = 0; i < 3; i++){
        if(board_pixel[i] != image_pixel[i]) correct = false;
      }
      if (correct === true) return true;
          else {                   
              image_pixel = nearestColor(image.getImageData(coords["x"], coords["y"], 1, 1).data, colors);
              
              for(var i = 0; i < 3; i++){
                if(board_pixel[i] != image_pixel[i]) return false;
              }
              return true;
          }
    }
    
    function nearestColor(needle, colors) {

        if (!needle) {
          return null;
        }

        var distance,
            minDistance = Infinity,
            rgb,
            value;

        for (var i = 0; i < colors.length; ++i) {
          rgb = colors[i];

          distance = Math.sqrt(
            Math.pow(needle[0] - rgb[0], 2) +
            Math.pow(needle[1] - rgb[1], 2) +
            Math.pow(needle[2] - rgb[2], 2)
          );

          if (distance < minDistance) {
            minDistance = distance;
            value = colors[i];
          }
        }

        return value;
        
    }

    function getColorId(coords){
      var pixel = image.getImageData(coords["x"], coords["y"], 1, 1).data;

      var color_id = -1;
      var flag = false;
      for(var i = 0; i < colors.length; i++){
        flag = true;
        for(var j = 0; j < 3; j++){
          if(pixel[j] != colors[i][j]){
            flag = false;
            break;
          }
        }
        if(flag){
          color_id = i;
          break;
        }
      }
      
      if (!isOptionProvided('noautocolor')) {
      
          if(color_id < 0)
            pixel = nearestColor(pixel, colors); // Pick the nearest color instead
        
          // Now just repeat the picking with the correct color
          flag = false;
          for(var i = 0; i < colors.length; i++){
            flag = true;
            for(var j = 0; j < 3; j++){
              if(pixel[j] != colors[i][j]){
                flag = false;
                break;
              }
            }
            if(flag){
              color_id = i;
              break;
            }
          }
      
      }
      
      if(color_id < 0)
        console.log("pixel at x:" + coords.x + " y: " + coords.y + " has incorrect color.");
      
      return color_id;
    }
    
    /**
     * Returns a random number between min (inclusive) and max (exclusive)
     */
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     */
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function tryToDraw(scanmode){
        
      var randomTimeout1 = getRandomArbitrary(2, 10);
      var randomTimeout2 = getRandomArbitrary(2, 10);
        
      pixels_complete = 0;
      pixels_incomplete = 0;
      
      var no_more_drawing = false;
      
      var processedY = [];
      var processedX = [];
      var _y_random, _x_random;
      
      //for (var __y = 0; _y < canvas.height; __y++) {
      var _y_arr = Array.apply(null, {length: canvas.height}).map(Number.call, Number);
      var _y_arr_random = shuffle(_y_arr);
      var _x_arr = Array.apply(null, {length: canvas.width}).map(Number.call, Number);
      var _x_arr_random = shuffle(_x_arr);
      
      for (var _y = 0; _y < canvas.height; _y++) {
      //for (var _y = 0; _y < canvas.height; _y++) {
        /*_y_random = getRandomInt(0, canvas.height);
        while (processedY.includes(_y_random)) {
           _y_random = getRandomInt(0, canvas.height);
        }
        processedY.push(_y_random);*/
        _y_random = _y_arr_random[_y];
          
        for (var _x = 0; _x < canvas.width; _x++) {
          /*_x_random = getRandomInt(0, canvas.width);
           while (processedX.includes(_y_random)) {
              _x_random = getRandomInt(0, canvas.width);
           }
           processedX.push(_x_random);*/
          _x_random = _x_arr_random[_x];
            
          //var coords = {x: _x, y: _y};
          if (!isOptionProvided('classic') && !scanmode) { // yes, it still does the shuffle with classic option = it's slower, but I expect most people want the new behaviour
              var coords = {x: _x_random, y: _y_random};
          } else {
              var coords = {x: _x, y: _y};
          }

          if(isSamePixelColor(coords)){
            //console.log("same color, skip");
            pixels_complete += 1;
          }
          else {
              
            pixels_incomplete += 1;

            if (!scanmode && !no_more_drawing) {
                var color_id = getColorId(coords);
                if(color_id < 0) continue;

                console.log("going to draw " + title + " coords " + " x:" + (parseInt(x) + parseInt(coords["x"])) + " y:" + (parseInt(y) + parseInt(coords["y"])) + " (" + colornames[color_id] + ") in " + (Math.round(randomTimeout1 + randomTimeout2)) + ' seconds');

                //App.switchColor(color_id);
                //App.attemptPlace ( (parseInt(x) + parseInt(coords["x"])), (parseInt(y) + parseInt(coords["y"])) );
                //return 20;
                
                setTimeout( App.switchColor.bind(window.App, color_id) , Math.round(randomTimeout1*1000));
                setTimeout( App.attemptPlace.bind (window.App, (parseInt(x) + parseInt(coords["x"])), (parseInt(y) + parseInt(coords["y"])) ) , Math.round((randomTimeout1 + randomTimeout2)*1000));
                
                no_more_drawing = true;
            }
                
            
            
          }
        }
      }
      completionPercentage = Math.round( (  pixels_complete / (pixels_incomplete + pixels_complete)  ) *100 );
      //if (no_more_drawing) return 20;
      if (no_more_drawing) {
          if (document.location.hostname == 'pxls.space') {
              return randomTimeout1 + randomTimeout2 + 20;
          } else {
              return 20;
          }
      }
      if (scanmode) {
          return completionPercentage;
      }

      console.log(title + " is correct");
      return -1;
    }

    function drawImage(){
      if(image_loaded_flag){
        return tryToDraw(false);
      }
      return -1;
    }
    
    function getPixelsComplete() {
        return pixels_complete;
    }
    
    function getPixelsIncomplete() {
        return pixels_incomplete;
    }

    function isReady(){
      return image_loaded_flag;
    }

    img.onload = function(){
      canvas.width = img.width;
      canvas.height = img.height;
      image = canvas.getContext('2d');
      image.drawImage(img, 0, 0, img.width, img.height);

      image_loaded_flag = true;
    };



    return {
      drawImage: drawImage,
      isReady: isReady,
      hasStartedDrawing: hasStartedDrawing,
      title: title,
      x: x,
      y: y,
      imgsrc: imgsrc,
      tryToDraw: tryToDraw,
      getPixelsComplete: getPixelsComplete,
      getPixelsIncomplete: getPixelsIncomplete
    }
  };


  var painters = [];
  for(var i = 0; i < images.length; i++){
    painters[i] = Painter(images[i]);
  }
  
  function isOptionProvided(option) {
      if (window.location.hash.indexOf(option) !== -1) return true;
      if (document[option] == true) return true;
      return false;
  }

  function draw(){
    var timer = (App.cooldown-(new Date).getTime())/1E3;
    if (0 < timer) {
      if (!isOptionProvided('notimer')) {
          if (isOptionProvided('timerlite')) {
              console.log("timer: waiting...");
          } else {
              console.log("timer: " + timer);
          }
      }
      setTimeout(draw, 1000);
    }
    else {
      for(var i = 0; i < painters.length; i++){
        if(painters[i].isReady()){
          if (painters[i].hasStartedDrawing == false) {
              console.log('Starting to draw ' + painters[i].title + '!');
              painters[i].hasStartedDrawing = true;
          }
            
          var result = painters[i].drawImage();

          if(result > 0){
            //setTimeout(draw, result*1000);
            var timeout = result*1000;
            if (window.location.hostname != 'pxls.space') {
                if (isOptionProvided('fast')) {
                    timeout = 250;
                } else if (isOptionProvided('veryfast')) {
                    timeout = 50;
                } else if (isOptionProvided('superfast')) {
                    timeout = 1;
                } else switch (window.location.hostname) { // pl.pxls.cf or pxls.pety.pl - fast PXLS's, quicker than default timeout
                    case 'pl.pxls.cf':
                    case 'pxls.pety.pl':
                        timeout = result*100;
                        break;
                }
            }
            
            setTimeout(draw, timeout);
            return;
          }
          else {
            continue;
          }
        }
        else {
          continue;
        }
      }
      setTimeout(draw, 3000);
    }

    return;
  }

  function reportStats() {
      /*if (!isReady()) {
          setTimeout(reportStats, 3000);
      } else {*/
          
      for(var i = 0; i < painters.length; i++){
        if(painters[i].isReady()){
          //var result = painters[i].drawImage();
          
          if (!document.autoPxlsRandomNumber) document.autoPxlsRandomNumber = Math.round(Math.random() * 10000000);
          
          var completionPercentage = painters[i].tryToDraw(true);
          //console.log(painters[i].title + ' completion percentage: ' + completionPercentage + '%');
          
          $.post( "https://auto.pxls.cf/report", { scriptRevision: scriptRevision, title: painters[i].title || null, x: painters[i].x || null, y: painters[i].y || null, image: painters[i].imgsrc || null, host: window.location.hostname || null, randomNumber: document.autoPxlsRandomNumber, completionPercentage: completionPercentage, pixelsComplete: painters[i].getPixelsComplete(), pixelsIncomplete: painters[i].getPixelsIncomplete() })
              .done(function( data ) {
                //alert( "Data Loaded: " + data );
                if (data.timeout) reportStatsTimeout = parseInt(data.timeout);
                if (data.logText) console.log(data.logText);
                if (data.alertText) window.App.alert(data.alertText);
                if (data.infoText) {
                    var $el = $("div.info").find("div#" + autoPxlsInfoDivId).find('p#' + autoPxlsInfoTextPId);
                    if ($el.length) {
                        $el.text(data.infoText);
                    } else {
                        // Info mod doesn't exist
                    }
                }
                if (data.takeOut) {
                    window.location.replace(data.takeOutLink || 'https://www.google.com/search?q=You+were+taken+out+of+the+site+by+AutoPXLS');
                }
              });
        }
      }
      
      setTimeout(reportStats, reportStatsTimeout || (3 * 60 * 1000)); // change also default value for reportStatsTimeout
  }
  
  draw();
  if (isOptionProvided('nostats')) {
      console.log('DISABLING stats reporting due to \'nostats\' option!');
  } else {
      setTimeout(reportStats, 5000);
  }
}

document.defaultCaptchaFaviconSource = "data:image/png;base64,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";