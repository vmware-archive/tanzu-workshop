(function () {
    var keyCodes = {
        ENTER: 13,
        ESCAPE: 27
    };

    var slides = document.querySelectorAll("[data-slide]");

    var slideKeys = Array.prototype.map.call(slides, function (e) {
        return e.dataset.slide;
    });

    var gong = document.getElementById("gong");

    var instructorModeCheckbox = document.getElementById("instructor-mode");

    instructorModeCheckbox.checked = isInstructorMode();
    instructorModeCheckbox.addEventListener("change", setInstructorMode);

    window.addEventListener("keyup", (function (e) {
        if (isInstructorMode() && !isTextInput(e.target)) {

            var code = e.which;
            var keypress = String.fromCharCode(code);

            if (slideKeys.includes(keypress)) {
                e.preventDefault();
                hideSlides();
                showSlide(keypress);
            }

            if (keypress === "0") {
                e.preventDefault();
                stopGong();
                gong.play()
            }

            if (keypress === "8") {
                setEndInMinutes(90)
            }

            if (keypress === "9") {
                setEndInMinutes(15)
            }

            if (code === keyCodes.ENTER || code === keyCodes.ESCAPE) {
                e.preventDefault();
                stopGong();
                hideSlides();
            }
        }
    }));

    function isTextInput(target) {
        return target.tagName === "INPUT" && target.type !== "checkbox";
    }

    function showSlide(keypress) {
        document.querySelectorAll('[data-slide="' + keypress + '"]').forEach(function (element) {
            element.style.display = "flex";
        });
    }

    function setEndInMinutes(delay) {
        var end = new Date();
        end.setMinutes(end.getMinutes() + delay);
        var endString = hours(end) + ":" + minutes(end) + meridean(end);

        document.querySelectorAll("[data-time]").forEach(function (element) {
            element.value = endString;
        });
    }

    function hideSlides() {
        slides.forEach(function (element) {
            element.style.display = "none";
        });
    }

    function stopGong() {
        gong.pause();
        gong.currentTime = 0;
    }

    function setInstructorMode() {
        localStorage.setItem("instructor-mode", instructorModeCheckbox.checked)
    }

    function isInstructorMode() {
        return localStorage.getItem("instructor-mode") === "true";
    }

    function minutes(time) {
        var minutes = time.getMinutes();

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes;
    }

    function hours(time) {
        return (time.getHours() - 1) % 12 + 1;
    }

    function meridean(time) {
        if (time.getHours() < 12) {
            return "am";
        } else {
            return "pm";
        }
    }
})();
