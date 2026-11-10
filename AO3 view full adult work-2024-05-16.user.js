// ==UserScript==
// @name         AO3 view full adult work
// @namespace    http://tampermonkey.net/
// @version      2024-05-16
// @description  Automatically adds "view_adult=true" and "view_full_work=true" when you open an ao3 fic link.
// @author       You
// @match        https://archiveofourown.org/works/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=archiveofourown.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
  const url = new URL(window.location.href); // Get current URL
  const params = url.searchParams;

  // Check if both parameters already exist
  const hasViewAdult = params.has('view_adult');
  const hasViewFullWork = params.has('view_full_work');

  // Only reload if at least one parameter is missing
  if (!hasViewAdult || !hasViewFullWork) {
    if (!hasViewAdult) {
      params.set('view_adult', 'true'); // Add 'view_adult=true'
    }
    if (!hasViewFullWork) {
      params.set('view_full_work', 'true'); // Add 'view_full_work=true'
    }
    url.search = params.toString(); // Update URL search string
    window.location.replace(url.toString()); // Replace current URL without creating a history entry
  }
})();