document.getElementById("undark").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    files: ["undark.css"]
  });
});

document.getElementById("dark").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.removeCSS({
    target: { tabId: tab.id },
    files: ["undark.css"]
  });
});
