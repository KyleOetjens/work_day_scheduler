$(document).ready(function () {
  let currentHour = dayjs().hour()
  saveButtonEl = $(`.saveBtn`)
  plans = $('.description')
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
    //$("#9 .description").val(localStorage.getItem("9AM"));
    // $("#9 .description").val(localStorage.getItem("9AM"));
    //JSON.parse(localStorage.getItem("studentGrade"));
    let blockHour = parseInt($(this).attr("id"));
    let $pel = $(this);
    console.log($pel);
    let foo = $pel.children().eq(1).val()
    console.log(foo);
    let bar = $pel.children(1).text()
    //const ggg= $(plans).text(localStorage.getItem(foo));
    //let $pel = $(this).children(1)
    let getKey = $pel.children().val();
    console.log(getKey);
    let val2 = $pel.text();
    $pel.children().eq(1).text(localStorage.getItem($pel.children().eq(0).val()));
    //let getval = getKey.siblings(0).val();
    //console.log(getval);
    console.log(val2);
    console.log(foo);
    this.bar.text(localStorage.getItem("9AM"));
    //$(getKey.plans).val(localStorage.getItem(val2));
    if (currentHour < blockHour) {
      $(this).addClass(`future`)
    }
    else if (currentHour === blockHour) {
      $(this).addClass(`present`)
    }
    else {
      $(this).addClass(`past`)
    }
    //console.log($pel.children().eq(1).val());
    //console.log(($pel.siblings().eq(0).text(),$pel.siblings().eq(1).val()));
    //console.log(($pel.children().eq(0).text(),$pel.children().eq(1).val()));
    //localStorage.getItem(($pel.children().eq(0).text(),$pel.children().eq(1).val()));
  })

  // on click of save button, text needs to be saved to local storage
  // so that it will show up later
  ///saveButtonEl.on('click', function (){
  saveButtonEl.click(function () {
    const $el = $(this)
    let key1 = $el.siblings().eq(0).text()
    let vall1 = $el.siblings().eq(1).val()
    console.log($el);
    console.log($el.siblings().eq(0));
    console.log($el.siblings().eq(0).text());
    localStorage.setItem(key1, vall1)

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

  //try making this go in to the each function using this
  /* $("#9 .description").val(localStorage.getItem("9AM"));
   $("#10 .description").val(localStorage.getItem("10AM"));
   $("#11 .description").val(localStorage.getItem(`11AM`));
   $("#12 .description").val(localStorage.getItem("12PM"));
   $("#13 .description").val(localStorage.getItem("1PM"));
   $("#14 .description").val(localStorage.getItem("2PM"));
   $("#15 .description").val(localStorage.getItem("3PM"));
   $("#16 .description").val(localStorage.getItem("4PM"));*/
});