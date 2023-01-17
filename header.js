


console.log("!!!!!!hello local or maybe github dev");


/**
 * 
 * REDIRECT OLD PAGES JS
 */


// old blog/news stuff e.g.  /?p=7487  goes to -> /blog/7540 and url /?p=7453 -> /blog/7453
  function redirectBlogUrls(){
    const blogfeedUrl = "uutiset";
    const url = window.location.href;
    if (url.includes('/?p=')) {
        const newUrl = url.replace('/?p=', '/' + blogfeedUrl +'/');
        console.log(newUrl);
        window.location.href = newUrl;
    }
}
redirectBlogUrls();
  








/**
 * TAPAHTUMAT TULEVAT MENNEET LINKIT JA H1 TITLES
 */


  $( document ).ready(function() {    
    console.log("MMMMMMM");
    // Check if the current page path contains "/tapahtumat"
    if (window.location.pathname.includes('/tapahtumat')) {
      // Check if an element with the class "events-list" exists on the page
      if (document.querySelector('.events-list')) {
        // Check if there is an element with the class ".eventlist--upcoming"
        if (document.querySelector('.eventlist--upcoming')) {
          // Add the tag "<h1 id='tulevat-tapahtumat' class='js-event-list-heading upcoming-events-custom-heading'>Tulevat tapahtumat</h1>"
          // before the element with class ".eventlist--upcoming"
          document.querySelector('.eventlist--upcoming').insertAdjacentHTML(
            'beforebegin',
            '<h1 id="tulevat-tapahtumat" class="js-event-list-heading upcoming-events-custom-heading">Tulevat tapahtumat</h1>'
          );
        }
  
        // Check if there is an element with the class ".eventlist--past"
        if (document.querySelector('.eventlist--past')) {
          // Add the tag "<h1 id='menneet-tapahtumat' class='js-event-list-heading past-events-custom-heading'>Menneet tapahtumat</h1>"
          // before the element with class ".eventlist--past"
          document.querySelector('.eventlist--past').insertAdjacentHTML(
            'beforebegin',
            '<h1 id="menneet-tapahtumat" class="js-event-list-heading past-events-custom-heading">Menneet tapahtumat</h1>'
          );
        }
  
        // Check if the url contains '#menneet'
        if (window.location.hash.includes('#menneet')) {
          // Smoothly scroll down until the element with id "menneet-tapahtumat" is at the top of the viewport with 10px offset
          const element = document.getElementById('menneet-tapahtumat');
          element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', offsetTop: 10 });
        }
  
        // Check if the url contains '#tulevat'
        if (window.location.hash.includes('#tulevat')) {
          // Smoothly scroll down until the element with id "tulevat-tapahtumat" is at the top of the viewport with 10px offset
          const element = document.getElementById('tulevat-tapahtumat');
          element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', offsetTop: 10 });
        }
      }
    }
  }); 
  




// Tapahtumat: päivämäärä thumbnailista tekstin sekaan
function prependDateToEventTimeLocalizedStart(){
    var eventTimeLocalizedStart = document.querySelectorAll(".event-time-localized-start");
    for (var i = 0; i < eventTimeLocalizedStart.length; i++) {
        var datetime = eventTimeLocalizedStart[i].getAttribute("datetime");
        var datetimeSplit = datetime.split("-");
        var year = datetimeSplit[0];
        var month = datetimeSplit[1];
        var day = datetimeSplit[2];
        var time = eventTimeLocalizedStart[i].innerHTML;
        var newDateTime = day + "." + month + "." + year + " klo " + time;
        eventTimeLocalizedStart[i].innerHTML = newDateTime;
    }
}

// EI TARVITAKKAAN - BUILT-IN LÖYTYI
$( document ).ready(function() {
  //Huom. päivämäärä toimii vaan jos yhden päivän tapahtuma, koska tää on tapahtuman alku päivämäärä
   // prependDateToEventTimeLocalizedStart();
});
















  ////SINGLE POST
    $( document ).ready(function() {    
        //❗IF BLOG POST SINGLE  DATE FORMAT
    if(document.querySelector("meta[itemprop=datePublished]")){
    
      //if(document.querySelector("meta[itemprop=datePublished]").getAttribute("content") === "Description of the webpage")
    
        //console.log("BLOG SINGLE POST WITH DATE FOR IT");
        
        //blog post single - <meta itemprop="datePublished" content="2022-09-14T16:31:36+0300">
        console.log("yes");
         var blogSinglePublishDate = $('meta[itemprop="datePublished"]').attr("content")
        console.log(blogSinglePublishDate);
        var blogSingleDateArray = blogSinglePublishDate.split("T");
        console.log(blogSingleDateArray);
        var blogSingleDateSplitted = blogSingleDateArray[0].split("-");
    console.log(blogSingleDateSplitted);
    
        var year = blogSingleDateSplitted[0];
        var monthNumber = blogSingleDateSplitted[1];
        var day = blogSingleDateSplitted[2]
        var kuukaudennimi = monthNumberToMonthName(monthNumber);
        var kuukaudenNimiLyhyt =  kuukaudennimi.substring(0, 3);
        console.log("kuukaudenimi kuukaudelle " + monthNumber + "on " + kuukaudennimi);
        //$(".blog-meta-item--date span").html(year + "-" + monthNumber + "-" + day).addClass("dateFormatted-and-ready-to-show");
    
    
                            //👇👇👇    EDIT SIGNLE BLOG POST DATE FORMAT HERE    👇👇👇
            var singlePostDateFormat =  day + "/" + monthNumber + "/" + year;
                                    //👆👆👆.   EDIT SIGNLE BLOG POST DATE FORMAT HERE.   👆👆👆
    
        
        $(".blog-meta-item--date span").html(singlePostDateFormat).addClass("dateFormatted-and-ready-to-show");
    
    }
    else{
      console.log("No meta description for blog date");
    
    }
    
    }); 












    var monthNumberToMonthName = function(monthNumber){
    
      switch(monthNumber) {
          case "01":
              return "January";
              break;
          case "02":
              return "February";
              break;
          case "03":
              return "March";
              break;
          case "04":
              return "April";
              break;
          case "05":
              return "May";
              break;
          case "06":
              return "June";
              break;
          case "07":
              return "July";
              break;
          case "08":
              return "August";
              break;
          case "09":
              return "September";
              break;
          case "10":
              return "October";
              break;
          case "11":
              return "November";
              break;
          case "12":
              return "December";
              break;
          default:
              monthName = "error";
          }
      
          //console.log(monthName);
      }
      
      //EG
      monthNumberToMonthName("01");










  ////SINGLE POST DATE FORMAT
  $( document ).ready(function() {    
    //❗IF BLOG POST SINGLE  DATE FORMAT
if(document.querySelector("meta[itemprop=datePublished]")){

  //if(document.querySelector("meta[itemprop=datePublished]").getAttribute("content") === "Description of the webpage")

    //console.log("BLOG SINGLE POST WITH DATE FOR IT");
    
    //blog post single - <meta itemprop="datePublished" content="2022-09-14T16:31:36+0300">
    console.log("yes");
     var blogSinglePublishDate = $('meta[itemprop="datePublished"]').attr("content")
    console.log(blogSinglePublishDate);
    var blogSingleDateArray = blogSinglePublishDate.split("T");
    console.log(blogSingleDateArray);
    var blogSingleDateSplitted = blogSingleDateArray[0].split("-");
console.log(blogSingleDateSplitted);

    var year = blogSingleDateSplitted[0];
    var monthNumber = blogSingleDateSplitted[1];
    var day = blogSingleDateSplitted[2]
    var kuukaudennimi = monthNumberToMonthName(monthNumber);
    var kuukaudenNimiLyhyt =  kuukaudennimi.substring(0, 3);
    console.log("kuukaudenimi kuukaudelle " + monthNumber + "on " + kuukaudennimi);
    //$(".blog-meta-item--date span").html(year + "-" + monthNumber + "-" + day).addClass("dateFormatted-and-ready-to-show");


                        //👇👇👇    EDIT SIGNLE BLOG POST DATE FORMAT HERE    👇👇👇
        var singlePostDateFormat =  day + "." + monthNumber + "." + year;
                                //👆👆👆.   EDIT SIGNLE BLOG POST DATE FORMAT HERE.   👆👆👆

    
    $(".blog-meta-item--date span").html(singlePostDateFormat).addClass("dateFormatted-and-ready-to-show");

}
else{
  console.log("No meta description for blog date");

}

}); 











/**
 * BLOG POST DATES - not working for finnish format fully yet
 */

/*


    
    
    //// BLOG PAGE GRID DATES – OROGINALLY MONTH/DAY/YEAR WITH HTML <time class="blog-date" pubdate="" data-animation-role="date">9/14/22</time>
    $( document ).ready(function() {    
    
     $('time.blog-date').each(function(i, obj) {
    
         console.log(dateArray);
            var dateArray = $(this).text().split("/");
       
            console.log(dateArray);
            var monthNumber = dateArray[0];
         if( monthNumber.length <= 1){
             console.log("blog grid monthNumber is single digit. Let's add a 0");
             monthNumber = "0" + monthNumber;
         } else{
            console.log("blog grid monthNumber is double digit. So it's cool as is");    
         }
    
         var kuukaudennimi = monthNumberToMonthName(monthNumber);
         var kuukaudenNimiLyhyt =  kuukaudennimi.substring(0, 3);
         console.log("kuukaudenimi kuukaudelle " + monthNumber + "on " + kuukaudennimi);
            var day = dateArray[1];
    
          if( day.length <= 1){
             console.log("blog grid day is single digit. Let's add a 0");
             day = "0" + day;
         } else{
            console.log("blog grid day is double digit. So it's cool as is");    
         }
            var year = "20" + dateArray[2];
    
    
                                 //👇👇👇    EDIT BLOG GRID DATE FORMAT HERE    👇👇👇
            var blogGridDateFormat = day + "." + kuukaudenNimiLyhyt + " " + year;
                                 //👆👆👆.   EDIT BLOG GRID DATE FORMAT HERE.   👆👆👆
            
            $(this).html(blogGridDateFormat).addClass("dateFormatted-and-ready-to-show");
            
        });
    }); 
    
    
    
  
    
    
    
    
    
    ///SUMMARY
    $( document ).ready(function() {    
        $('time.summary-metadata-item--date').each(function(i, obj) {
            var dateArray = $(this).attr("datetime").split("-");
            var year = dateArray[0];
            var monthNumber = dateArray[1];
            var day = dateArray[2];
             var kuukaudennimi = monthNumberToMonthName(monthNumber);
            var kuukaudenNimiLyhyt =  kuukaudennimi.substring(0, 3);
        console.log("kuukaudenimi kuukaudelle " + monthNumber + "on " + kuukaudennimi);
    
    
    
            
                                    //👇👇👇    EDIT SUMMARY DATE FORMAT HERE    👇👇👇
            var SummaryDateFormat = day + ". " + kuukaudenNimiLyhyt + " " + year;
                                    //👆👆👆.   EDIT SUMMARY DATE FORMAT HERE.   👆👆👆
    
    
            
            $(this).html(SummaryDateFormat).addClass("dateFormatted-and-ready-to-show");
            
        });
    }); 
    


 
*/






