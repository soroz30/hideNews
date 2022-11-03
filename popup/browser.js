let lastText = "";

function hideUnwanted(text) {
  const allLinks = Array.from(document.querySelectorAll('a'));
  if (lastText || !text) {
    const previousList = allLinks.filter(el => el.textContent.toLowerCase().includes(lastText));
    previousList.forEach((el) => {
      el.style.visibility = 'visible';
    });
  }
  if (text) {
    const list = allLinks.filter(el => el.textContent.toLowerCase().includes(text));
    list.forEach((el) => {
      el.style.visibility = 'hidden';
    });
  }
  lastText = text;
}

chrome.runtime.onMessage.addListener(
  function(request) {
    hideUnwanted(request.text);
    return true;
  }
);