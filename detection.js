// Browser/Device Detection - Variables

var UA = window.navigator.userAgent,
chrome = UA.indexOf('Chrome'),
firefox = UA.indexOf('Firefox'),
safari = UA.indexOf('safari'),
msie = UA.indexOf('MSIE '),
trident = UA.indexOf('Trident/'),
edge = UA.indexOf('Edge/'),
ie11 = UA.indexOf("Trident/7.0"),
iPad = /iPad/i.test(UA),
iPhone = /iPhone/i.test(UA),
iOS = /iPhone/i.test(UA) || /iPod/i.test(UA) || /iPad/i.test(UA),
android = /(android)/i.test(navigator.userAgent);

var element, arr;

element = document.getElementsByTagName('html')[0];
arr = element.className.split(' ');

var addDevClass = function (className) {
    if (arr.indexOf(className) == -1) {
        element.className += ' ' + className;
        console.log(className);
    }
}

// Browser/Device Detection - Attach browser specific class(es)
if (msie > 0 || trident > 0 || edge > 0) {
    addDevClass('isIE');
    if (ie11 > 0) {
        addDevClass('isIE11');
    } else if (edge > 0) {
        addDevClass('isEdge');
    }
} else if (chrome > 0) {
    addDevClass('isChrome');
} else if (firefox > 0) {
    addDevClass('isFF');
} else if (safari > 0) {
    addDevClass('isSafari');
} else if (iOS > 0) {
    addDevClass('isIOS');
    if (iPad > 0) {
        addDevClass('isIpad');
    } else if (iPhone > 0) {
        addDevClass('isIphone');
    }
} else if (android > 0) {
    addDevClass('isAndroid');
}
