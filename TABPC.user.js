// ==UserScript==
// @name        TABPC
// @namespace   https://github.com/ixmr
// @match       *://*.twitch.tv/*
// @grant       none
// @version     0.1
// @author      IXMR
// @require     https://code.jquery.com/jquery-3.7.1.min.js
// @description Twitch Auto Bonus Points Claimer
// @icon        https://logo.clearbit.com/twitch.tv
// @homepageURL https://github.com/ixmr/TABPC
// @downloadURL https://github.com/ixmr/TABPC/raw/main/TABPC.user.js
// ==/UserScript==

console.log("%cTABPC: %cScript Initialized", "font-weight: bold; color: red;", "color: black;");
setInterval(() => {
  if($(".ScCoreButtonSuccess-sc-ocjdkq-5")[0]) {
      $(".ScCoreButtonSuccess-sc-ocjdkq-5").click();
      console.log("%cTABPC: %cPoints Claimed for %c"+location.pathname.substring(1), "font-weight: bold; color: red;", "color: black;", "font-weight: bold; color: black;");
  }
}, 1000)
