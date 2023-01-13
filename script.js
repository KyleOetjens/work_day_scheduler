$(document).ready(function () {
  let currentHour = dayjs().hour()
  saveButtonEl = $(`.saveBtn`)
  plans = $('.description')
  appointment = localStorage.getItem("todo")
  plans.textContent = appointment
  console.log(currentHour);
  let plans1 = plans.val()
  var rootEl = $('#root');
  setTime()

  console.log(plans);
  function setTime() {
    var timeInterval = setInterval(function () {
      var reformatDate = dayjs().format(`dddd, MMMM D YYYY, h:mm:ss A`);
      $(`#currentDay`).text(reformatDate);
      reformatDate++;
    }, 1000);
  }
// options are past, present and future
  $(".time-block").each(function () {
    let blockHour = parseInt($(this).attr("id"))   
    let $pel = $(this)
    let getKey = $pel.children().eq(0).text()
    let getval = $pel.children().eq(1).val()
    console.log(getval);
      console.log($($pel));
if (currentHour < blockHour) {
      $(this).addClass(`future`)
    }
    else if (currentHour === blockHour) {
      $(this).addClass(`present`)
    }
    else {
      $(this).addClass(`past`)
    }
    localStorage.getItem(getval)
    //console.log($pel.children().eq(1).val());
//console.log(($pel.siblings().eq(0).text(),$pel.siblings().eq(1).val()));
//console.log(($pel.children().eq(0).text(),$pel.children().eq(1).val()));
//localStorage.getItem(($pel.children().eq(0).text(),$pel.children().eq(1).val()));
  })

  // on click of save button, text needs to be saved to local storage
  // so that it will show up later
///saveButtonEl.on('click', function (){
  saveButtonEl.click(function (){
    const $el = $(this)
    let key1 = $el.siblings().eq(0).text()
    let vall1 = $el.siblings().eq(1).val()
    console.log($el);
    console.log("function started");
    console.log($el.siblings().eq(0));
    console.log($el.siblings().eq(0).text());
    //localStorage.setItem($el.siblings().eq(0).text(),$el.siblings().eq(1).val())
    localStorage.setItem(key1,vall1)

  })
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});