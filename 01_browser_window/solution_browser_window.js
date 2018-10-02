function BrowserWindow(accountName,windowName,tabs = [{tabURL:"defaultHomePage.com"}]){
    this.accountName = accountName;
    this.windowName = windowName;
    this.tabs = tabs;
};
//methods added to prototype below
BrowserWindow.prototype.joinWindows = function (firstWindow){
    this.tabs.concat(firstWindow[tabs]);
};
BrowserWindow.prototype.newTab = function(newURL){
    this.tabs.push({tabURL: newURL});
};
BrowserWindow.prototype.closeTab = function(indexNum){
    this.tabs.splice(indexNum,1);
};
