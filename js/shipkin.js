(function () {
    var sidebar = document.getElementById("sidebar");
    var headerHeight = document.getElementById("content").offsetTop;


    if (sidebar != null) {
        positionSidebar();

        window.addEventListener("scroll", positionSidebar);
        window.addEventListener("touchmove", positionSidebar);
    }

    document.querySelectorAll("[data-url-field]").forEach(fillFeedbackUrl);
    document.querySelectorAll("[data-toggle]").forEach(bindToggle);

    function positionSidebar() {
        if (document.querySelector("html").scrollTop > headerHeight) {
            sidebar.classList.add("top");
        } else {
            sidebar.classList.remove("top");
        }
    }

    function fillFeedbackUrl(element) {
        var urlField = element.getAttribute("data-url-field");
        var href = element.getAttribute("href");

        element.setAttribute("href", href + "?" + urlField + "=" + window.location)
    }

    function bindToggle(element) {
        var id = element.dataset.toggle;
        element.addEventListener("click", function (e) {
            e.preventDefault();

            var target = document.getElementById(id);

            element.classList.toggle("collapsed");
            target.classList.toggle("show");
        })
    }
})();
