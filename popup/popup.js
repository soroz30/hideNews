window.onload=function(){
  function hideUnwanted() {
    let text = document.getElementById("input").value
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {text: text}, function(response) {
        console.log(response);
      });
    });
  }

  document.getElementById("button").addEventListener("click", hideUnwanted);
}
