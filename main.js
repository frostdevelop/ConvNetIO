window.addEventListener("message", (event) => {
  // We only accept messages from ourselves
  if (event.source !== window) {
    return;
  }
  const {
	type,
	data
  } = event.data;
  
  if (type === "saveimg") {
	let ag = document.createElement("a");ag.href = window.URL.createObjectURL(new Blob([JSON.stringify(net.toJSON())]));ag.download = data.name + ".json";ag.click();
  } else if (type === "loadimg") {
	let ga = document.createElement("input");
	ga.setAttribute("type","file");
	ga.onchange = e=>{const fr = new FileReader;fr.onload = ()=>{net = new convnetjs.Net();net.fromJSON(JSON.parse(fr.result))};fr.readAsText(ga.files[0])}
	ga.click();
  }
}, false);