chrome.browserAction.onClicked.addListener(function(tab) {
	console.log('Turning ' + tab.url + ' red!');
	chrome.tabs.executeScript(null, {file: "jquery.min.js"}, function(){
		chrome.tabs.executeScript(null, {file: "matrixCanvas.js"})
	});
});