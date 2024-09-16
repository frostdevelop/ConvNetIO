chrome.runtime.onMessage.addListener((obj, sender, res) => {
    const {
        type,
        data
    } = obj;
    if (type === "loadimg" || type === "saveimg") {
        window.postMessage({type:type,data:data});
    }
})