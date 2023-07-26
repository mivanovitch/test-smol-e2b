var browsingHistory = [];

chrome.history.onVisited.addListener(function(historyItem) {
    browsingHistory.push(historyItem);
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "getHistory") {
        sendResponse({history: browsingHistory});
    }
    else if (request.message === "saveHistory") {
        var json = JSON.stringify(browsingHistory);
        var blob = new Blob([json], {type: "application/json"});
        var url = URL.createObjectURL(blob);

        chrome.downloads.download({
            url: url,
            filename: "browsingHistory.json"
        });
    }
});