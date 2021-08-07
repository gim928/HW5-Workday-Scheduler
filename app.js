var today = moment();
var displaydate = today.format("MMM Do, YYYY");
var currentTime = moment().format("LT");
$("#currentDay").text("Today is " + displaydate);
$("#currentTime").text("The current time is " + currentTime);

//setting values to local storage
$("#text1").val(localStorage.text1);
$("#text2").val(localStorage.text2);
$("#text3").val(localStorage.text3);
$("#text4").val(localStorage.text4);
$("#text5").val(localStorage.text5);
$("#text6").val(localStorage.text6);
$("#text7").val(localStorage.text7);
$("#text8").val(localStorage.text8);
$("#text9").val(localStorage.text9);

//saving user inputs
$("#save1").on("click", function () {
  localStorage.text1 = $("#text1").val();
});
$("#save2").on("click", function () {
  localStorage.text2 = $("#text2").val();
});
$("#save3").on("click", function () {
  localStorage.text3 = $("#text3").val();
});
$("#save4").on("click", function () {
  localStorage.text4 = $("#text4").val();
});
$("#save5").on("click", function () {
  localStorage.text5 = $("#text5").val();
});
$("#save6").on("click", function () {
  localStorage.text6 = $("#text6").val();
});
$("#save7").on("click", function () {
  localStorage.text7 = $("#text7").val();
});
$("#save8").on("click", function () {
  localStorage.text8 = $("#text8").val();
});
$("#save9").on("click", function () {
  localStorage.text9 = $("#text9").val();
});

if (moment().hour() === 9) {
  $("#text1").attr("class", "present");
}
if (moment().hour() > 9) {
  $("#text1").attr("class", "past");
}
if (moment().hour() < 9) {
  $("#text1").attr("class", "future");
}
if (moment().hour() === 10) {
  $("#text2").attr("class", "present");
}
if (moment().hour() > 10) {
  $("#text2").attr("class", "past");
}
if (moment().hour() < 10) {
  $("#text2").attr("class", "future");
}
if (moment().hour() === 11) {
  $("#text3").attr("class", "present");
}
if (moment().hour() > 11) {
  $("#text3").attr("class", "past");
}
if (moment().hour() < 11) {
  $("#text3").attr("class", "future");
}
if (moment().hour() === 12) {
  $("#text4").attr("class", "present");
}
if (moment().hour() > 12) {
  $("#text4").attr("class", "past");
}
if (moment().hour() < 12) {
  $("#text4").attr("class", "future");
}
if (moment().hour() === 13) {
  $("#text5").attr("class", "present");
}
if (moment().hour() > 13) {
  $("#text5").attr("class", "past");
}
if (moment().hour() < 13) {
  $("#text5").attr("class", "future");
}
if (moment().hour() === 14) {
  $("#text6").attr("class", "present");
}
if (moment().hour() > 14) {
  $("#text6").attr("class", "past");
}
if (moment().hour() < 14) {
  $("#text6").attr("class", "future");
}
if (moment().hour() === 15) {
  $("#text7").attr("class", "present");
}
if (moment().hour() > 15) {
  $("#text7").attr("class", "past");
}
if (moment().hour() < 15) {
  $("#text7").attr("class", "future");
}
if (moment().hour() === 16) {
  $("#text8").attr("class", "present");
}
if (moment().hour() > 16) {
  $("#text8").attr("class", "past");
}
if (moment().hour() < 16) {
  $("#text8").attr("class", "future");
}
if (moment().hour() === 17) {
  $("#text9").attr("class", "present");
}
if (moment().hour() > 17) {
  $("#text9").attr("class", "past");
}
if (moment().hour() < 17) {
  $("#text9").attr("class", "future");
}
