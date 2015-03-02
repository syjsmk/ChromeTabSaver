chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({
//    code: 'document.body.style.backgroundColor="red"'
      code: 'console.log(window.location.href)'
  });
});
