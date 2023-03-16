// Display date with moment (activity 26 week 5)
let date = moment().format('dddd, MMMM Do')
console.log(date)

// Create function that retrives data from local storage
// Create a variable to hold id attribute of each timeblock (ex id=9)
let dayCalander = JSON.stringify({
  nineAM: {
    id: '9',
    activity: '',
  },
  tenAM: {
    id: '10',
    activity: '',
  },
  elevenAM: {
    id: '11',
    activity: '',
  },
  twelvePM: {
    id: '12',
    activity: '',
  },
  onePM: {
    id: '1',
    activity: '',
  },
  twoPM: {
    id: '2',
    activity: '',
  },
  threePM: {
    id: '3',
    activity: '',
  },
  fourPM: {
    id: '4',
    activity: '',
  },
  fivePM: {
    id: '5',
    activity: '',
  },
  sixPM: {
    id: '6',
    activity: '',
  },
})

if (!localStorage.getItem('dayCalander')) {
  localStorage.setItem('dayCalander', dayCalander)
}

$(document).ready(function () {
  // Pin date to .currentday
  $('#currentDay').text(date)
  // Append data from local storage to timeblocks using id's from index
  let activity = ''
  for (var index = 1; index < 13; index++) {
    let cal = JSON.parse(localStorage.getItem('dayCalander'))
    for (item in cal) {
      if (cal[item].id == index) {
        activity = cal[item].activity
      }
    }
    $('#' + index + ' .description').text(activity)
  }
  // Create a function that handles save button click
  // Button click.parent().attr("id")
  $('.saveBtn').click(function () {
    alert('Handler for .click() called.')
    let saveId = $(this).parent().attr('id')
    console.log(saveId)
    // Create variable to hold text value
    let activity = $('#' + saveId + ' .description').val()
    console.log(activity)
    let cal = JSON.parse(localStorage.getItem('dayCalander'))
    console.log(cal)
    for (item in cal) {
      console.log(cal[item])
      if (cal[item].id == saveId) {
        console.log(cal[item].id)
        cal[item].activity = activity
      }
    }
    console.log(cal)
    localStorage.setItem('dayCalander', JSON.stringify(cal))
  })
})

//create a function to determin the time block is past present or future (moment)
$(document).ready(function () {
  // Pin date to .currentday
  let hour = parseInt(moment().format('H'))
  console.log(hour)
  $('.description').each(function (index) {
    if ($(this).parent().attr('id') < hour) {
      $(this).addClass('past')
    } else if ($(this).parent().attr('id') == hour) {
      $(this).addClass('present')
    } else {
      $(this).addClass('future')
    }
  })
})
