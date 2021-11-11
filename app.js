window.addEventListener("load", async () => {
  const subscribeButton = document.querySelector("#subscribeButton");

  // Register Service Worker
  const sW = await navigator.serviceWorker.register("./sw.js");
  console.log("Service Worker => ", sW);

  subscribeButton.addEventListener("click", async () => {
    
    const serviceWorker = await navigator.serviceWorker.ready;
    const clientID = await serviceWorker.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        "BNjh0YtX6nXikacLSKgpY6DIjrQq0cu1Kv5KW2OsEqrnJG6BgKBEf0bki3J3VUacjlZpOGCPUJUW1PXNgbnQz8U",
    });

    console.log(clientID);
    console.log(JSON.stringify(clientID));
  });
});
