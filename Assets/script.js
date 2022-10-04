var now = moment();
var todaysDateEl = now.format('MMMM Do YYYY');
var saveBtn = $(".saveBtn");
var clearBtn = $(".clearBtn");

$("#currentDay").text(todaysDateEl);

window.onload = function() {
    $('#9AM').val(localStorage.getItem(9));
    $('#10AM').val(localStorage.getItem(10));
    $('#11AM').val(localStorage.getItem(11));
    $('#12PM').val(localStorage.getItem(12));
    $('#1PM').val(localStorage.getItem(13));
    $('#2PM').val(localStorage.getItem(14));
    $('#3PM').val(localStorage.getItem(15));
    $('#4PM').val(localStorage.getItem(16));
    $('#5PM').val(localStorage.getItem(17));
}

function colorCodeInputs() {
    var currentTimeEL = now.format("H");

    $(".row").each(function () {
        var currentHour = parseInt($(this).children(".time-block").attr("data-hr"));
console.log(currentHour + " " + currentTimeEL);
        if (currentHour > currentTimeEL) {
            $(this).addClass("future");
        }
        else if (currentHour == currentTimeEL) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
};


saveBtn.on("click", function () {

    var time = $(this).siblings(".time-block").attr("data-hr");
    var input = $(this).siblings(".input").val();

    localStorage.setItem(time, input);
});

clearBtn.on('click', function () {
    var time = $(this).siblings(".time-block").attr("data-hr");
    $(this).siblings(".input").val("");

    localStorage.removeItem(time);


});
colorCodeInputs()