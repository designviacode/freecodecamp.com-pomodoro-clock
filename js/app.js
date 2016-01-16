(function () {
    'use strict';
    var currentTime, d;
    currentTime = document.querySelector('#currentTime');
    d = new Date();
    setInterval(function () {
        currentTime.innerHTML = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    }, 1000);
}());
