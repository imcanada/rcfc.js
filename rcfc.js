window.addEventListener('contextmenu', function(x) {
    if (event.target.hasAttribute("data-rc")) {
        x.preventDefault();
        var attr = event.target.getAttribute("data-rc");
        eval(attr);
        return false;
    }
}, false);

window.addEventListener('contextmenu', function(x) {
    if (event.target.hasAttribute("data-rcw")) {
        var attr = event.target.getAttribute("data-rcw");
        eval(attr);
        return true;
    }
}, false);