(function () {
  'use strict';

  /* ---------------------------------------------------------
     CONFIG – set the official Google Form URL here (HTTPS only)
     --------------------------------------------------------- */
  var FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdvcYNa7JncM_Rdmra-7MnbY9e8xmj6ksp2GppIizOd_11tSw/viewform';

  /* ---------- Form link ---------- */
  var formLink = document.getElementById('form-link');
  if (formLink) {
    if (/^https:\/\//.test(FORM_URL)) {
      formLink.href = FORM_URL;
    } else {
      formLink.setAttribute('aria-disabled', 'true');
      formLink.addEventListener('click', function (e) {
        e.preventDefault();
        alert('The registration form is not yet available. Please check back soon.');
      });
    }
  }

  /* ---------- Hero video: pause control + reduced motion ---------- */
  var video = document.getElementById('hero-video');
  var videoBtn = document.getElementById('video-toggle');
  if (video && videoBtn) {
    var setPaused = function (paused) {
      if (paused) video.pause();
      else { var p = video.play(); if (p && p.catch) p.catch(function () {}); }
      videoBtn.setAttribute('aria-pressed', paused ? 'true' : 'false');
      videoBtn.setAttribute('aria-label', paused ? 'Play video' : 'Pause video');
    };
    videoBtn.addEventListener('click', function () {
      setPaused(!video.paused);
    });

    var mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    var handleMotionPreference = function (e) {
      if (e.matches) setPaused(true);
    };
    if (mq.addEventListener) mq.addEventListener('change', handleMotionPreference);
    else if (mq.addListener) mq.addListener(handleMotionPreference);
    handleMotionPreference(mq);
  }

  /* ---------- Footer year ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
