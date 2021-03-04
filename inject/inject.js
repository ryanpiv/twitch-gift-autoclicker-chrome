chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			setInterval(() => {
				const btn = document.querySelector('button.tw-button');
				btn && btn?.click()
			}, 1500);
			console.log("TTVGA ready");
		}
	}, 10);
});