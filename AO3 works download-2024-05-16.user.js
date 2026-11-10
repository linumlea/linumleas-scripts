// ==UserScript==
// @name         AO3 works download
// @namespace    http://tampermonkey.net/
// @version      2024-05-16
// @description  Automatically downloads opened fics on ao3 in three formats, with a timeout to let ao3 process the files. Downloads epub, html, pdf.
// @author       You
// @match        https://archiveofourown.org/works/*
// @exclude      https://archiveofourown.org/works/search*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=archiveofourown.org
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    setTimeout(function () {
        // Find all elements with class "download"
        const downloadElements = document.querySelectorAll('.download');

        // Loop through each download element
        downloadElements.forEach(downloadElement => {
            // Find anchor elements within the download element
            const anchorElements = downloadElement.querySelectorAll('a');

            // Loop through each anchor element
            anchorElements.forEach(anchorElement => {
                const anchorText = anchorElement.textContent.toLowerCase();

                // Check if anchor text contains "html", "epub", or "pdf"
                if (anchorText.includes('html')) {
                    anchorElement.click();
                }
                if (anchorText.includes('epub')) {
                    // Set timeout for clicking on the anchor element
                    setTimeout(() => {
                        anchorElement.click();
                    }, 20000); // 20s timeout
                }
                if (anchorText.includes('pdf')) {
                    // Set timeout for clicking on the anchor element
                    setTimeout(() => {
                        anchorElement.click();
                    }, 40000); // 40s timeout
                }
            });
        });
    }, 30000) // 30s timeout before first download starts
})();