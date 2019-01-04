console.log('js');

$(document).ready(readyNow);

function readyNow(){
    console.log('jq');
    $('#refreshButton').on('click', refreshPage);
    
}
function refreshPage(){
    console.log('in refresh');
    // GET call to messages route
    $.ajax({
        method:'GET',
        url:'/messages'
    }).then(function(response){
        console.log('back from GET call with', response);
        // empty output elemenet
        $('#messagesOut').empty();

        //loop through messages returned
        for(messages of response){
         // display on DOM
            $('#messagesOut').append(
                                    `<li>${messages.body}</li>`);
        } //end for loop

    }) // end ajax

} // end refresh