// ==UserScript==
// @name Simple Resolution for YouTube™
// @name:pt-BR Resolução Simples do YouTube™
// @name:ar Simple Resolution for YouTube™
// @name:bg Simple Resolution for YouTube™
// @name:cs Simple Resolution for YouTube™
// @name:da Simple Resolution for YouTube™
// @name:de Simple Resolution for YouTube™
// @name:el Simple Resolution for YouTube™
// @name:eo Simple Resolution for YouTube™
// @name:es Simple Resolution for YouTube™
// @name:fi Simple Resolution for YouTube™
// @name:fr Simple Resolution for YouTube™
// @name:fr-CA Simple Resolution for YouTube™
// @name:he Simple Resolution for YouTube™
// @name:hu Simple Resolution for YouTube™
// @name:id Simple Resolution for YouTube™
// @name:it Simple Resolution for YouTube™
// @name:ja Simple Resolution for YouTube™
// @name:ko Simple Resolution for YouTube™
// @name:nb Simple Resolution for YouTube™
// @name:nl Simple Resolution for YouTube™
// @name:pl Simple Resolution for YouTube™
// @name:ro Simple Resolution for YouTube™
// @name:ru Simple Resolution for YouTube™
// @name:sk Simple Resolution for YouTube™
// @name:sr Simple Resolution for YouTube™
// @name:sv Simple Resolution for YouTube™
// @name:th Simple Resolution for YouTube™
// @name:tr Simple Resolution for YouTube™
// @name:uk Simple Resolution for YouTube™
// @name:ug Simple Resolution for YouTube™
// @name:vi Simple Resolution for YouTube™
// @name:zh-CN Simple Resolution for YouTube™
// @name:zh-TW Simple Resolution for YouTube™
// @description Change the default YouTube video quality to 720p. Compatible with 8K resolution.
// @description:pt-BR Altere a qualidade de vídeo padrão do YouTube para 720p. Compatível com resolução de 8K.
// @description:ar قم بتغيير جودة فيديو YouTube الافتراضية إلى 720 بكسل. متوافق مع دقة 8K.
// @description:bg Променете качеството на видеоклипа в YouTube по подразбиране на 720p. Съвместим с 8K резолюция.
// @description:cs Změňte výchozí kvalitu videa YouTube na 720p. Kompatibilní s rozlišením 8K.
// @description:da Skift standard YouTube -videokvalitet til 720p. Kompatibel med 8K opløsning.
// @description:de Ändern Sie die standardmäßige YouTube-Videoqualität in 720p. Kompatibel mit 8K-Auflösung.
// @description:el Αλλάξτε την προεπιλεγμένη ποιότητα βίντεο YouTube σε 720p. Συμβατό με ανάλυση 8K.
// @description:eo Ŝanĝu la defaŭltan YouTube-kvaliton al 720p. Kongrua kun 8K-rezolucio.
// @description:es Cambie la calidad de video de YouTube predeterminada a 720p. Compatible con resolución 8K.
// @description:fi Muuta YouTube -videon oletuslaaduksi 720p. Yhteensopiva 8K -resoluution kanssa.
// @description:fr Modifiez la qualité vidéo YouTube par défaut en 720p. Compatible avec la résolution 8K.
// @description:fr-CA Modifiez la qualité vidéo YouTube par défaut en 720p. Compatible avec la résolution 8K.
// @description:he שנה את איכות הווידאו המוגדרת כברירת מחדל ל- YouTube ל 720p. תואם לרזולוציית 8K.
// @description:hu Módosítsa a YouTube alapértelmezett videóminőségét 720p -re. 8K felbontással kompatibilis.
// @description:id Tukar kualiti video YouTube lalai ke 720p. Sesuai dengan resolusi 8K.
// @description:it Cambia la qualità video di YouTube predefinita a 720p. Compatibile con risoluzione 8K.
// @description:ja デフォルトのYouTubeビデオ品質を720pに変更します。 8K解像度と互換性があります。
// @description:ko 기본 YouTube 비디오 품질을 720p로 변경합니다. 8K 해상도와 호환됩니다.
// @description:nb Endre standard YouTube -videokvalitet til 720p. Kompatibel med 8K oppløsning.
// @description:nl Wijzig de standaard YouTube-videokwaliteit in 720p. Compatibel met 8K resolutie.
// @description:pl Zmień domyślną jakość wideo YouTube na 720p. Kompatybilny z rozdzielczością 8K.
// @description:ro Schimbați calitatea video implicită YouTube la 720p. Compatibil cu rezoluția 8K.
// @description:ru Измените качество видео YouTube по умолчанию на 720p. Совместим с разрешением 8K.
// @description:sk Zmeňte predvolenú kvalitu videa na YouTube na 720 p. Kompatibilné s rozlíšením 8K.
// @description:sr Promijenite zadanu kvalitetu videozapisa na YouTubeu u 720p. Kompatibilan s rezolucijom 8K.
// @description:sv Ändra standard YouTube -videokvalitet till 720p. Kompatibel med 8K -upplösning.
// @description:th เปลี่ยนคุณภาพวิดีโอ YouTube เริ่มต้นเป็น 720p เข้ากันได้กับความละเอียด 8K
// @description:tr Varsayılan YouTube video kalitesini 720p olarak değiştirin. 8K çözünürlük ile uyumludur.
// @description:uk Змініть стандартну якість відео YouTube на 720p. Сумісний з роздільною здатністю 8K.
// @description:ug سۈكۈتتىكى YouTube سىن سۈپىتىنى 720p غا ئۆزگەرتىڭ. 8K ئېنىقلىق دەرىجىسىگە ماس كېلىدۇ.
// @description:vi Thay đổi chất lượng video YouTube mặc định thành 720p. Tương thích với độ phân giải 8K.
// @description:zh-CN 将默认 YouTube 视频质量更改为 720p。兼容8K分辨率。
// @description:zh-TW 將默認 YouTube 視頻質量更改為 720p。兼容8K分辨率。
// @namespace https://greasyfork.org/users/152924
// @homepageURL https://greasyfork.org/scripts/430932
// @supportURL https://greasyfork.org/scripts/430932/feedback
// @author Punisher
// @version 1.3
// @date 2021-08-22
// @compatible chrome
// @compatible firefox
// @compatible opera
// @compatible safari
// @compatible edge
// @license CC-BY-NC-ND-4.0
// @match *://*.youtube.com/*
// ==/UserScript==
 
(function() {
	const changeResolution = true;
	const targetRes = "hd720";
	const highFramerateTargetRes = null;
	const changePlayerSize = false;
	const useCustomSize = false;
	const customHeight = 600;
	const autoTheater = false;
	const flushBuffer = true;
	const allowCookies = false;
	const setResolutionEarly = true;
	const enableErrorScreenWorkaround = true;
	const deBug = false;
	const resolutions = ['highres', 'hd2880', 'hd2160', 'hd1440', 'hd1080', 'hd720', 'large', 'medium', 'small', 'tiny'];
	const heights = [4320, 2880, 2160, 1440, 1080, 720, 480, 360, 270, 270];
	let doc = document, win = window;
	let recentVideo = "";
	let foundHFR = false;
	let setHeight = 0;
 
	function debugLog(message) {
		if (deBug) {
			console.log(message);
		}
	}
 
	function unwrapElement(el) {
		if (el && el.wrappedJSObject) {
			return el.wrappedJSObject;
		}
		return el;
	}
 
	function getVideoIDFromURL(ytPlayer) {
		const idMatch = /(?:v=)([\w\-]+)/;
		let videoURL = ytPlayer.getVideoUrl();
		let id = idMatch.exec(videoURL)[1] || "ERROR: idMatch failed; youtube changed something";
		return id;
	}
 
	function setResolution(ytPlayer, resolutionList) {
		const currentQuality = ytPlayer.getPlaybackQuality();
		let res = targetRes;
		if (highFramerateTargetRes && foundHFR) {
			res = highFramerateTargetRes;
		}
		if (resolutionList.indexOf(res) >= resolutionList.indexOf(currentQuality)) {
			if (ytPlayer.setPlaybackQualityRange !== undefined) {
				ytPlayer.setPlaybackQualityRange(res);
			}
			ytPlayer.setPlaybackQuality(res);
			debugLog(res);
			return;
		}
		const end = resolutionList.length - 1;
		let nextBestIndex = Math.max(resolutionList.indexOf(res), 0);
		let ytResolutions = ytPlayer.getAvailableQualityLevels();
		debugLog(ytResolutions.join(", "));
		while ( (ytResolutions.indexOf(resolutionList[nextBestIndex]) === -1) && nextBestIndex < end )
		{
			++nextBestIndex;
		}
		if (flushBuffer && currentQuality !== resolutionList[nextBestIndex]) {
			let id = getVideoIDFromURL(ytPlayer);
			if (id.indexOf("ERROR") === -1) {
				let pos = ytPlayer.getCurrentTime();
				ytPlayer.loadVideoById(id, pos, resolutionList[nextBestIndex]);
			}
			debugLog(id);
		}
		if (ytPlayer.setPlaybackQualityRange !== undefined) {
			ytPlayer.setPlaybackQualityRange(resolutionList[nextBestIndex]);
		}
		ytPlayer.setPlaybackQuality(resolutionList[nextBestIndex]);
		debugLog(resolutionList[nextBestIndex]);
	}
 
	function setResOnReady(ytPlayer, resolutionList) {
		if (ytPlayer.getPlaybackQuality === undefined) {
			win.setTimeout(setResOnReady, 100, ytPlayer, resolutionList);
		} else {
			let framerateUpdate = false;
			if (highFramerateTargetRes) {
				let isHFR = ytPlayer.getVideoData().video_quality_features.includes("hfr");
				framerateUpdate = isHFR != foundHFR;
				foundHFR = isHFR;
			}
			let curVid = getVideoIDFromURL(ytPlayer);
			if ((curVid !== recentVideo) || framerateUpdate) {
				recentVideo = curVid;
				setResolution(ytPlayer, resolutionList);
				let storedQuality = localStorage.getItem("yt-player-quality");
				if (!storedQuality || storedQuality.indexOf(targetRes) === -1) {
					let tc = Date.now(), te = tc + 2592000000;
					localStorage.setItem("yt-player-quality","{\"data\":\"" + targetRes + "\",\"expiration\":" + te + ",\"creation\":" + tc + "}");
				}
			}
		}
	}
 
	function setTheaterMode(ytPlayer) {
		if (win.location.href.indexOf("/watch") !== -1) {
			let pageManager = unwrapElement(doc.getElementsByTagName("ytd-watch-flexy")[0]);
			if (pageManager) {
				if (enableErrorScreenWorkaround) {
					const styleContent = "#error-screen { z-index: 42 !important } .ytp-error { display: none !important }";
					let errorStyle = doc.getElementById("ythdErrorWorkaroundStyleSheet");
					if (!errorStyle) {
						errorStyle = doc.createElement("style");
						errorStyle.type = "text/css";
						errorStyle.id = "ythdStyleSheet";
						errorStyle.innerHTML = styleContent;
						doc.head.appendChild(errorStyle);
					} else {
						errorStyle.innerHTML = styleContent;
					}
				} try {
					pageManager.theaterModeChanged_(true);
				}
				catch (e)
				{}
			}
		}
	}
 
	function computeAndSetPlayerSize() {
		let height = customHeight;
		if (!useCustomSize) {
			let heightOffsetEl = doc.getElementById("masthead");
			let mastheadContainerEl = doc.getElementById("masthead-container");
			let mastheadHeight = 50, mastheadPadding = 16;
			if (heightOffsetEl && mastheadContainerEl) {
				mastheadHeight = parseInt(win.getComputedStyle(heightOffsetEl).height, 10);
				mastheadPadding = parseInt(win.getComputedStyle(mastheadContainerEl).paddingBottom, 10) * 2;
			}
			let i = Math.max(resolutions.indexOf(targetRes), 0);
			height = Math.min(heights[i], win.innerHeight - (mastheadHeight + mastheadPadding));
		}
		resizePlayer(height);
	}
 
	function resizePlayer(height) {
		if (setHeight === height) {
			return;
		}
		let styleContent = "\
		ytd-watch-flexy[theater]:not([fullscreen]) #player-theater-container.style-scope { \
			min-height: " + height + "px !important; max-height: none !important; height: " + height + "px !important } \
		";
		let ythdStyle = doc.getElementById("ythdStyleSheet");
		if (!ythdStyle) {
			ythdStyle = doc.createElement("style");
			ythdStyle.type = "text/css";
			ythdStyle.id = "ythdStyleSheet";
			ythdStyle.innerHTML = styleContent;
			doc.head.appendChild(ythdStyle);
		} else {
			ythdStyle.innerHTML = styleContent;
		}
		setHeight = height;
		win.dispatchEvent(new Event("resize"));
	}
 
	function main() {
		let ytPlayer = doc.getElementById("movie_player") || doc.getElementsByClassName("html5-video-player")[0];
		let ytPlayerUnwrapped = unwrapElement(ytPlayer);
		if (autoTheater && ytPlayerUnwrapped) {
			if (allowCookies && doc.cookie.indexOf("wide=1") === -1) {
				doc.cookie = "wide=1; domain=.youtube.com";
			}
			setTheaterMode(ytPlayerUnwrapped);
		}
		if (changePlayerSize && win.location.host.indexOf("youtube.com") !== -1 && win.location.host.indexOf("gaming.") === -1) {
			computeAndSetPlayerSize();
			window.addEventListener("resize", computeAndSetPlayerSize, true);
		}
		if (changeResolution && setResolutionEarly && ytPlayerUnwrapped) {
			setResOnReady(ytPlayerUnwrapped, resolutions);
		}
		if (changeResolution || autoTheater) {
			win.addEventListener("loadstart", function(e) {
				if (!(e.target instanceof win.HTMLMediaElement)) {
					return;
				}
				ytPlayer = doc.getElementById("movie_player") || doc.getElementsByClassName("html5-video-player")[0];
				ytPlayerUnwrapped = unwrapElement(ytPlayer);
				if (ytPlayerUnwrapped) {
					if (changeResolution) {
						setResOnReady(ytPlayerUnwrapped, resolutions);
					}
					if (autoTheater) {
						setTheaterMode(ytPlayerUnwrapped);
					}
				}
			}, true );
		}
		win.removeEventListener("yt-navigate-finish", main, true);
	}
	main();
	win.addEventListener("yt-navigate-finish", main, true);
})();
