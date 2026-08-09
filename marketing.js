(function () {
	"use strict";

	var config = window.SVY_CONFIG || {};
	var backendBaseUrl = config.backendBaseUrl || "https://siliconvalleyyouth.herokuapp.com";
	var descriptionElement = document.getElementById("marketing-description");
	var errorElement = document.getElementById("marketing-error");
	var qrGrid = document.getElementById("marketing-qr-grid");

	function renderQrCode(qrCode) {
		var panel = document.createElement("article");
		var title = document.createElement("p");
		var link = document.createElement("a");
		var image = document.createElement("img");
		var help = document.createElement("p");
		var imageUrl = qrCode.qr_image_url || "";

		if (imageUrl.charAt(0) === "/") {
			imageUrl = backendBaseUrl + imageUrl;
		}
		panel.className = "qr-panel";
		title.className = "qr-title";
		title.textContent = qrCode.label || "扫码加入线下群";
		link.href = qrCode.qr_code_url || imageUrl;
		link.target = "_blank";
		link.rel = "noopener noreferrer";
		image.src = imageUrl;
		image.alt = title.textContent + "二维码";
		help.className = "qr-help";
		help.textContent = "长按或扫描二维码加入";
		link.appendChild(image);
		panel.appendChild(title);
		panel.appendChild(link);
		panel.appendChild(help);
		qrGrid.appendChild(panel);
	}

	fetch(backendBaseUrl + "/api/marketing", { cache: "no-store" })
		.then(function (response) {
			if (!response.ok) {
				throw new Error("Marketing API returned " + response.status);
			}
			return response.json();
		})
		.then(function (marketing) {
			descriptionElement.textContent = marketing.description || "";

			var qrCodes = Array.isArray(marketing.qr_codes) ? marketing.qr_codes : [];
			if (qrCodes.length === 0 && marketing.qr_image_url) {
				qrCodes.push({
					label: "扫码加入线下群",
					qr_code_url: marketing.qr_code_url,
					qr_image_url: marketing.qr_image_url
				});
			}
			for (var i = 0; i < qrCodes.length; i++) {
				if (qrCodes[i].qr_image_url) {
					renderQrCode(qrCodes[i]);
				}
			}
			if (qrGrid.childNodes.length > 0) {
				qrGrid.hidden = false;
			}
		})
		.catch(function (error) {
			console.error("Unable to load marketing content", error);
			descriptionElement.hidden = true;
			errorElement.hidden = false;
		});
})();
