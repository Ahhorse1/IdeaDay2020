myObj = {
    "AfternoonSessions": [
        {"name":"Creature Comforts", "speaker":"Mehri Davis", "speakerTitle":"Artist","time": "12:30-3:00 PM", "participants":"25", "description":"Making dolls isn’t just for kids! In this session, you will make homemade doll creatures using any objects you find. This session will be led by artist Mehri Davis whose mission is to use art as a tool for healing. You will discuss how art can be used in your daily life to relieve stress."}
    ]

}
var counter=0;
for (i in myObj.AfternoonSessions){
   document.getElementById('afternoon').innerHTML += "<br><div class='accordion' id='accordian" + counter + "'> <div class='card bg-success'> <div class='card-header' id='heading" + counter + "'> <h5 class='mb-0'> <button class='btn btn-link font-weight-heavy' type='button' data-toggle='collapse' data-target='#collapse" + counter + "' aria-expanded='true' aria-controls='collapse" + counter + "'> <b>" + myObj.AfternoonSessions[i].name + "</b> </button> </h5> </div> <div id='collapse" + counter + "' class='collapse show' aria-labelledby='templateHeading' data-parent='#templateAccordion'> <div class='card-body'> <h6 class='card-subtitle text-center'><b>" + myObj.AfternoonSessions[i].speaker + "</b>—" + myObj.AfternoonSessions[i].speakerTitle + "</h6> <p class='card-text text-black text-center'><br>" + myObj.AfternoonSessions[i].description + " </p> </div> <div class='card-footer bg-light'> <small class='text-muted'>Choose to attend this TEMPLATE from <br> <b>" + myObj.AfternoonSessions[i].time + "</b><br> <b>" + myObj.AfternoonSessions[i].participants + "</b> Participants</small> </div> </div> </div> </div> "
}
