chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// ==UserScript==
			// @name         TTVGA
			// @namespace    std KEKW
			// @version      3
			// @description  Clicks the gift button thingy.
			// @author       u/cognitively_edgy
			// @match        *://www.twitch.tv/*
			// ==/UserScript==

			var chatButtonsCollection;
			var giftBtnCollection;

			function main() {
				chatButtonsCollection = document.getElementsByClassName("chat-input__buttons-container tw-flex tw-justify-content-between tw-mg-t-1")
				if (chatButtonsCollection.length > 0) {
					giftBtnCollection = chatButtonsCollection[0].getElementsByClassName("tw-button tw-button--success tw-interactive");
					if (giftBtnCollection.length > 0) {
						giftBtnCollection[0].click();
						console.log("TTVGA clicked!");
					}
				}
			}

			setInterval(main, 1500);
			console.log("TTVGA ready");

		}
	}, 10);
});