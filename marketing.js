(function () {
	"use strict";

	var config = window.SVY_CONFIG || {};
	var backendBaseUrl = config.backendBaseUrl || "https://siliconvalleyyouth.herokuapp.com";
	var descriptionElement = document.getElementById("marketing-description");
	var errorElement = document.getElementById("marketing-error");
	var qrPanel = document.getElementById("qr-panel");
	var qrLink = document.getElementById("marketing-qr-link");
	var qrImage = document.getElementById("marketing-qr");

	fetch(backendBaseUrl + "/api/marketing", { cache: "no-store" })
		.then(function (response) {
			if (!response.ok) {
				throw new Error("Marketing API returned " + response.status);
			}
			return response.json();
		})
		.then(function (marketing) {
			descriptionElement.textContent = marketing.description || "";

			var qrImageUrl = marketing.qr_image_url || "";
			if (qrImageUrl.charAt(0) === "/") {
				qrImageUrl = backendBaseUrl + qrImageUrl;
			}
			if (qrImageUrl) {
				qrImage.src = qrImageUrl;
				qrLink.href = marketing.qr_code_url || marketing.qr_image_url;
				qrPanel.hidden = false;
			}
		})
		.catch(function (error) {
			console.error("Unable to load marketing content", error);
			descriptionElement.hidden = true;
			errorElement.hidden = false;
		});
})();
