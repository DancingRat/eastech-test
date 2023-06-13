// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});
$(document).ready(function() {
    $(".recent-news-col").css("height", $(".recent-news-img-col").height());
    $(".day").css("height", $(".day").width());
});

window.showBtn = function (word){
    console.log("test btn")
    //show sidebar btn
    $(`.${word}`).css("background-color","rgb(108, 117, 125)");
}

window.showSidebarSub = function (sidebarClass,arrow){
    if($(`.${sidebarClass}`).is(":visible")){
        $(`.${sidebarClass}`).hide(100);
        $(`.${sidebarClass}`).css({"transform":"translateY(-50%)","transition":"0.2s"});
        $(`.${arrow}`).css({"transform":"rotate(0deg)","transition":"0.2s"});
    }else{
        $(`.${sidebarClass}`).show();
        $(`.${sidebarClass}`).css({"transform":"translateY(0%)","transition":"0.2s"});
        $(`.${arrow}`).css({"transform":"rotate(90deg)","transition":"0.2s"});
    }
}

window.showQuickLinks = function (){
    if($('.quick-links-group').is(":visible")){
        $('.quick-links-group').hide(100);
        $('.quick-links-group').css({"transform":"translateY(-50%)","transition":"0.2s"});
        $('.quick-links-arrow').css({"transform":"rotate(-90deg)","transition":"0.2s"});
    }else{
        $('.quick-links-group').show();
        $('.quick-links-group').css({"transform":"translateY(0%)","transition":"0.2s"});
        $('.quick-links-arrow').css({"transform":"rotate(90deg)","transition":"0.2s"});
    }
}
window.showDailyEvent = function (){
    if($('.daily-event-group').is(":visible")){
        $('.daily-event-group').hide(100);
        $('.daily-event-group').css({"transform":"translateY(-50%)","transition":"0.2s"});
        $('.daily-event-arrow').css({"transform":"rotate(-90deg)","transition":"0.2s"});
    }else{
        $('.daily-event-group').show();
        $('.daily-event-group').css({"transform":"translateY(0%)","transition":"0.2s"});
        $('.daily-event-arrow').css({"transform":"rotate(90deg)","transition":"0.2s"});
    }
}
window.showUpcomingEvent = function (){
    if($('.upcoming-event-group').is(":visible")){
        $('.upcoming-event-group').hide(100);
        $('.upcoming-event-group').css({"transform":"translateY(-50%)","transition":"0.2s"});
        $('.upcoming-event-arrow').css({"transform":"rotate(-90deg)","transition":"0.2s"});
    }else{
        $('.upcoming-event-group').show();
        $('.upcoming-event-group').css({"transform":"translateY(0%)","transition":"0.2s"});
        $('.upcoming-event-arrow').css({"transform":"rotate(90deg)","transition":"0.2s"});
    }
}

window.showNavPhone = function (){
    if($('.mobile-navbar-content').is(":visible")){
        $('.mobile-navbar-content').hide(100);
        $('.mobile-navbar-content').css({"transform":"translateY(-50%)","transition":"0.2s"});
    }else{
        $('.mobile-navbar-content').show();
        $('.mobile-navbar-content').css({"transform":"translateY(0%)","transition":"0.2s"});
    }
}


window.onload = async () => {
    await loadSidebarFunc();
    await loadLeaveContent();
    
}

async function loadSidebarFunc(){
    $('.career-sub-btn-group').hide();
    $('.new-staff-sub-btn-group').hide();
    $('.pay-sub-btn-group').hide();
    $('.medical-sub-btn-group').hide();
    $('.finance-sub-btn-group').hide();
    $('.research-sub-btn-group').hide();
    $('.it-sup-sub-btn-group').hide();

    $('.quick-links-group').hide();
    $('.daily-event-group').hide();
    $('.upcoming-event-group').hide();

    $('.mobile-navbar-content').hide();
}

async function loadLeaveContent(){
    let leaveContentBody = document.querySelector("#leave-content-container");
    let leaveContent = ``;
    for(let i = 0; i < 6; i++){
        leaveContent += `<div>
        <div class="leave-content-header">Your application for leave has been approved</div>
        <div class="row" style="padding: 0.5rem 0 2rem;">
            <div class="col-md-4">
                <div class="leave-content-text">Annual leave</div>
                <div class="leave-content-type">Leave type</div>
            </div>
            <div class="col-md-4">
                <div class="leave-content-text">2023/05/12 10:00a.m.</div>
                <div class="leave-content-type">Start time</div>
            </div>
            <div class="col-md-4">
                <div class="leave-content-text">2023/05/12 07:00a.m.</div>
                <div class="leave-content-type">Endtime</div>
            </div>
        </div>
    </div>`
    };
    leaveContentBody.innerHTML += leaveContent;

    let leaveContentPhoneBody = document.querySelector("#leave-content-container-phone");
    let leaveContentPhone = ``;
    for(let i = 0; i < 6; i++){
        leaveContentPhone += `<div>
        <div class="leave-content-header">Your application for leave has been approved</div>
        <div class="row" style="padding: 0.5rem 0 2rem;">
            <div class="col-md-4">
                <div class="leave-content-type">Leave type</div>
                <div class="leave-content-text">Annual leave</div>
            </div>
            <div class="col-md-4">
                <div class="leave-content-type">Start time</div>
                <div class="leave-content-text">2023/05/12 10:00a.m.</div>
            </div>
            <div class="col-md-4">
                <div class="leave-content-type">Endtime</div>
                <div class="leave-content-text">2023/05/12 07:00a.m.</div>
            </div>
        </div>
    </div>`
    };
    leaveContentPhoneBody.innerHTML += leaveContentPhone;
}


/*calendar */
const calendar = document.querySelector('.calendar');
const monthYear = calendar.querySelector('.month-year');
const daysContainer = calendar.querySelector('.days');
const prevBtn = calendar.querySelector('.prev-btn');
const nextBtn = calendar.querySelector('.next-btn');

let currentDate = new Date();

function renderCalendar() {
  // set the month and year in the header
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthName = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  monthYear.textContent = `${monthName} ${year}`;

  // clear the previous days
  daysContainer.innerHTML = '';

  // get the first and last day of the month
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  // add the days to the calendar
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    const day = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);

    const dayElement = document.createElement('div');
    dayElement.textContent = i;
    dayElement.classList.add('day');

    if (day.toDateString() === new Date().toDateString()) {
      dayElement.classList.add('today');
    }

    daysContainer.appendChild(dayElement);
  }
}

renderCalendar();

prevBtn.addEventListener('click', () => {
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
  renderCalendar();
});

nextBtn.addEventListener('click', () => {
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
  renderCalendar();
});