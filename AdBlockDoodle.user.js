// ==UserScript==
// @name        Ad Block Doodle
// @namespace   none
// @description A script to block ads in doodle.com
// @include     https://doodle.com/*
// @version     0.3
// @grant       GM_xmlhttpRequest
// @grant       GM_addStyle
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @author      EPFL-dojo/zuzu59
// @downloadURL https://raw.githubusercontent.com/zuzu59/UserScript_AdBlockDoodle/master/AdBlockDoodle.user.js
// ==/UserScript==

// Avoid conflicts
this.$ = this.jQuery = jQuery.noConflict(true);
$(document).ready(function() {

  console.log("Début du script sur Ad Block Doodle " + window.location);

  // Remove all iframes and specific ad every 3s
  setInterval(function(){
      $('iframe').remove()
      $("#af_video_content_1").css( "visibility", "hidden" ).css( "display", "none" );
  }, 4000);



  console.log("Fin du script sur Ad Block Doodle");
});
