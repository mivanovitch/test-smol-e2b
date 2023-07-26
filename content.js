// content.js

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "getHistory") {
      chrome.history.search({text: '', maxResults: 10000}, function(data) {
        sendResponse({history: data});
      });
      return true; // keeps the message channel open until sendResponse is executed
    }
  }
);