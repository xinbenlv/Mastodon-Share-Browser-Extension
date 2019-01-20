chrome.browserAction.onClicked.addListener(function(){
    createPrompt();
});

function createPrompt(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {showPopup: true}, function(response) {
            console.log('popupShowed');
        });
    });
}