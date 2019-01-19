var UA = window.navigator.userAgent;
var msie = UA.indexOf('MSIE ');
var trident = UA.indexOf('Trident/');
var edge = UA.indexOf('Edge/');
var ie11 = UA.indexOf("Trident/7.0");
var iPad = /iPad/i.test(UA);
var iPhone = /iPhone/i.test(UA);
var iOS = /iPhone/i.test(UA) || /iPod/i.test(UA) || /iPad/i.test(UA);
var android = /(android)/i.test(navigator.userAgent);

var doc = document.getElementsByTagName('html');


if (msie > 0 || trident > 0 || edge > 0) {
    $('html').addClass('isIE');
    if (ie11 > 0) {
        $('html').addClass('isIE11');
    }
} else if (iOS > 0) {
    $('html').addClass('isIOS');
    if (iOS == /iPad/i.test(UA)) {
        $('html').addClass('isIpad');
    }
} else if (android > 0) {
    $('html').addClass('isAndroid');
}