var prompt = document.getElementById('MastodonSharePrompt');
var layer = document.getElementById('MastodonShareLayer');

function insertPopup(){   

    if(!prompt){

        var layer = document.createElement('div');
        layer.id="MastodonShareLayer"
        layer.classList.add('off');

        layer.addEventListener('click', hidePopup);
        
        prompt = document.createElement('div');
        prompt.id = 'MastodonSharePrompt';
        prompt.classList.add('off');
    
    
        var template = chrome.runtime.getURL('popup.html');    
        var frame = document.createElement('iframe');
        frame.scrolling = "no";
        frame.src = template;
        frame.frameBorder = "no";
    
        var mastodonFly = document.createElement('img');
        mastodonFly.id="fly";

        var mastodonFlyImage = chrome.runtime.getURL('assets/images/mastodon-fly.png');
        mastodonFly.src= mastodonFlyImage;

        prompt.appendChild(mastodonFly);
        prompt.appendChild(frame);

        layer.appendChild(prompt);
    
        document.body.appendChild(layer);
    }
}

function showPopup(){
    var layer = document.getElementById('MastodonShareLayer');
    var prompt = document.getElementById('MastodonSharePrompt');

    layer.classList.remove('off');
    prompt.classList.remove('off');
}

function hidePopup() {
    var layer = document.getElementById('MastodonShareLayer');
    var prompt = document.getElementById('MastodonSharePrompt');

    layer.classList.add('off');
    prompt.classList.add('off');
}

insertPopup();

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.showPopup){
        showPopup();
    }
});

