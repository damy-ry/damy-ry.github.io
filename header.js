
alert("hello local dev");


 


 // make afunction for lines 6-9 that takes the css file name as an argument
function addCSStoHead(cssFileName) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href
    document.getElementsByTagName('head')[0].appendChild(link);
}




function isLocalhost() {
    if( window.location.href.includes(":5757") ) {
        console.log("LOCAL DEV. loading script from: http://127.0.0.1:5500/header.js ");
        $.getScript("http://127.0.0.1:5500/header.js", function() {
            console.log("local Script loaded and executed.");
        // here you can use anything you defined in the loaded script
        });

        addCSStoHead("style.css");
        
       

        
        
        
    } else {
        console.log("NOT LOCAL - load live public script file from: https://damy-ry.github.io/header.js");
        $.getScript("https://damy-ry.github.io/header.js", function() {
            console.log("live Script loaded and executed.");
        // here you can use anything you defined in the loaded script
        });
        addCSStoHead("style.css");
    }
}

isLocalhost();


// new version of isLocalhost() function. it takes arguments for these parts: header.js "http://127.0.0.1:5500" "https://damy-ry.github.io"
function isLocalhost(scriptName, localServer, liveServer) {
    if( window.location.href.includes(":5757") ) {
        console.log("LOCAL DEV. loading script from: " + localServer + scriptName);
        $.getScript(localServer + scriptName, function() {
            console.log("local Script loaded and executed.");
        // here you can use anything you defined in the loaded script
        });
        
    } else {
        console.log("NOT LOCAL - load live public script file from: " + liveServer + scriptName);
        $.getScript(liveServer + scriptName, function() {
            console.log("live Script loaded and executed.");
        // here you can use anything you defined in the loaded script
        });
    }
}
