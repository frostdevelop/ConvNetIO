async function sendMessageToActiveTab(message) {
  const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
  const response = await chrome.tabs.sendMessage(tab.id, message);
  // do something with response here, not outside the function
  return { id: tab.id, response: response };
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('bsload').addEventListener("click",(e)=>{
        sendMessageToActiveTab({
            type: "loadimg",
            data: {}
        });
    },false)
	document.getElementById('bssave').addEventListener("click",(e)=>{
        sendMessageToActiveTab({
            type: "saveimg",
			data: {name:(document.getElementById("inname").value || "Untitled")}
        });
    },false)
})