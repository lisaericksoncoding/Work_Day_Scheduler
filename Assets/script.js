var now = moment();
var todaysDateEl = now.format('MMMM Do YYYY');
var saveBtn = $(".saveBtn");
var clearBtn = $(".clearBtn");

$("#currentDay").text(todaysDateEl);

window.onload = function() {
    document.getElementById('9AM').innerText = localStorage.getItem(time, input);
    document.getElementById('10AM').innerText = localStorage.getItem(time, input);
    document.getElementById('11AM').innerText = localStorage.getItem(time, input);
    document.getElementById('12PM').innerText = localStorage.getItem(time, input);
    document.getElementById('1PM').innerText = localStorage.getItem(time, input);
    document.getElementById('2PM').innerText = localStorage.getItem(time, input);
    document.getElementById('3PM').innerText = localStorage.getItem(time, input);
    document.getElementById('4PM').innerText = localStorage.getItem(time, input);
    document.getElementById('5PM').innerText = localStorage.getItem(time, input);
}

function colorCodeInputs() {
    var currentTimeEL = now.format("H");

    $(".row").each(function () {
        var currentHour = parseInt($(this).attr("data-hr"));

        if (currentHour > currentTimeEL) {
            $(this).addClass("future");
        }
        else if (currentHour === currentTimeEL) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
};


saveBtn.on("click", function () {

    var time = $(this).siblings("data-hour").text();
    var input = $(this).siblings(".input").val();

    localStorage.setItem(time, input);
});

clearBtn.on('click', function () {
    $(this).localStorage.removeItem(time, input);


});
colorCodeInputs()