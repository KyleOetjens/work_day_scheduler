$(document).ready(function () {
  let currentHour = dayjs().hour()
  saveButtonEl = $(`.saveBtn`)
  plans = $('.description')

//fuction to set a current time at the top of the schedle
  setTime()
  function setTime() {
    var timeInterval = setInterval(function () {
      var reformatDate = dayjs().format(`dddd, MMMM D YYYY, h:mm:ss A`);
      $(`#currentDay`).text(reformatDate);
      reformatDate++;
    }, 1000);
  }

  //functiont to color code the time blocks
  $(".time-block").each(function () {
    let blockHour = parseInt($(this).attr("id"));
    let $pel = $(this);
    if (currentHour < blockHour) {
      $(this).addClass(`future`)
    }
    else if (currentHour === blockHour) {
      $(this).addClass(`present`)
    }
    else {
      $(this).addClass(`past`)
    }
  })
  // function to save inputs to local storage
  saveButtonEl.click(function () {
    const $el = $(this)
    let key1 = $el.siblings().eq(0).text()
    let vall1 = $el.siblings().eq(1).val()
    localStorage.setItem(key1, vall1)

  })

  // get any saved inputs from local storage
  $("#9 .description").val(localStorage.getItem("9AM"));
  $("#10 .description").val(localStorage.getItem("10AM"));
  $("#11 .description").val(localStorage.getItem(`11AM`));
  $("#12 .description").val(localStorage.getItem("12PM"));
  $("#13 .description").val(localStorage.getItem("1PM"));
  $("#14 .description").val(localStorage.getItem("2PM"));
  $("#15 .description").val(localStorage.getItem("3PM"));
  $("#16 .description").val(localStorage.getItem("4PM"));
});