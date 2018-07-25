$(document).ready(function(){
    //materialize trigger elements
    $(".dropdown-trigger").dropdown();
    $('.tabs').tabs();

    //ajax call to ticketmaster
    function search() {
        $("#eventSearchBtn").on("click", function(){
        event.preventDefault()
        var city = $(".eventSearch").val().trim();
        console.log(city)
        var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?source=ticketmaster&city=" + city + "&apikey=lGBKPRi2mIZ03mNlpjqBKE6b6S0We9Kn"
        console.log(queryURL)

            $.ajax({
                url: queryURL,
                method: 'GET'
            }).then(function(response) {
                if(response._embedded.events) {
                    var results = response._embedded.events
                    console.log(results[0])
                    var row1 = $("<div class='row'>")
                    var row2 = $("<div class='row'>")
                    var row3 = $("<div class='row'>")
                    var row4 = $("<div class='row'>")
                    var row5 = $("<div class='row'>")
                    $("#eventsResults").empty();
                    for (var i=0; i<results.length; i++){
                        var newCardCol = $("<div class='col s12 m3'>")
                        var newCardContain = $("<div class='card z-depth-0'>")
                        newCardCol.append(newCardContain)
                        var newCardImage = $("<div class='card-image'>")
                        newCardContain.append(newCardImage)
                        var newCardImg = $("<img class='cardImgEvent'>")
                        newCardImg.attr("src", results[i].images[1].url)
                        newCardImage.append(newCardImg)
                        var newCardContent = $("<div class='card-content'>")
                        newCardContain.append(newCardContent)
                        var newCardTitle = $("<span class='card-title eventTitle'>").text(results[i].name)
                        newCardContent.append(newCardTitle)
                        var dateAr = results[i].dates.start.localDate.split('-');
                        var newDate = dateAr[1] + '-' + dateAr[2] + '-' + dateAr[0];
                        var newCardDate = $("<p>").text("Event Date: " + newDate)
                        newCardContent.append(newCardDate)
                        var newCardAction = $("<div class='card-action'>")
                        newCardContain.append(newCardAction)
                        var newCardLink = $("<a class='eventButton' target='_blank'>").text("Details")
                        newCardLink.attr("href", results[i].url)
                        newCardAction.append(newCardLink)

                        if(i<4) {
                            row1.append(newCardCol)
                        } else if (i<8) {
                            row2.append(newCardCol)
                        } else if (i<12) {
                            row3.append(newCardCol)
                        } else if (i<16) {
                            row4.append(newCardCol)
                        } else if (i<20) {
                            row5.append(newCardCol)
                        }
                    } 
                    $("#eventsResults").prepend(row1, row2, row3, row4, row5)
                }
                else {
                    $("#eventsResults").empty();
                    var reply = $("<h3>").text("No events found for selected city.")
                    $("eventsResults").prepend(reply)
                }
            })
        })
    }

    search()
})
