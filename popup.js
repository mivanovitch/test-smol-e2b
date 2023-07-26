document.addEventListener('DOMContentLoaded', function() {
    var saveButton = document.getElementById('saveButton');
    saveButton.addEventListener('click', function() {
        chrome.runtime.sendMessage({message: 'getHistory'}, function(response) {
            var historyList = document.getElementById('historyList');
            historyList.innerHTML = '';
            response.history.forEach(function(item) {
                var li = document.createElement('li');
                li.textContent = item.title + ' - ' + item.url;
                historyList.appendChild(li);
            });
        });
    });
});