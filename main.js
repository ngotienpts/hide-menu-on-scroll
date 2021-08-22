var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

function start() {
    var prevScroll = window.pageYOffset;
    var backTop = $(".back-top");
    window.addEventListener("scroll", showContent);

    function showContent() {
        hideMenu();
        backToTop();
    }

    function hideMenu() {
        var currentScroll = window.pageYOffset;
        if (currentScroll > prevScroll) {
            $("#header").classList.add("fixed");
        } else {
            $("#header").classList.remove("fixed");
        }
        prevScroll = currentScroll;
    }

    function backToTop() {
        if (
            document.body.scrollTop > 150 ||
            document.documentElement.scrollTop > 150
        ) {
            $(".back-top").classList.add("scroll");
        } else {
            $(".back-top").classList.remove("scroll");
        }
    }
    backTop.addEventListener("click", function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
}
start();