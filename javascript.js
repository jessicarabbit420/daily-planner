var date = moment().format('MMMM Do YYYY, h:mm:ss a');

$("#currentDay").append("<h2>" + date + "<h2>")

$(".time-block").each(function (i) {

    // Retrieve element's ID
    var timeBlockId = $(this).attr("id")
    var description = localStorage.getItem(timeBlockId)
    var descriptiontextArea = $(this).find(".description")
    console.log(descriptiontextArea)
descriptiontextArea.val(description) 
    console.log(description)
    // Retrieve this block's hour
    var hour = parseInt(timeBlockId.split("-")[1]);

    // Compare this block's hour to the current hour

    // TODO - Replace with current hour using moment()
    var hournum = moment().format('LTS');
    var currentHour = parseInt(hournum)

    var timeBlockClass = "";

    // Determine if past / present / future and assign CSS class
    if (hour === currentHour) {
        timeBlockClass = "present"
    } else if (hour < currentHour) {
        timeBlockClass = "past"
    } else if (hour > currentHour) {
        timeBlockClass = "future"
    }

    // Set class of this time-block element
    $(this).addClass(timeBlockClass)

    // TODO - Retrieve the data from local storage and replace all the textarea values with the saved tasks when the app starts






    // TODO - Add an event listener to the 'Save' buttons to save whatever value is in the textarea to local storage


})
$(".saveBtn").click(function () {
    console.log($(this).siblings(".description").val())
    var descriptionValue = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
    console.log(time)
    localStorage.setItem(time,descriptionValue);
    
})   

//var description = localStorage.getItem("hour-9")
// console.log(description)
// description = parseInt(description)
// descriptionValue.textcontent = description;

// to get local storage get item function has to be outside of the save function
//jquery grab what you get and then inside .val inside value input local storage get item 
    

