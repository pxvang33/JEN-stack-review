console.log('js');

$(document).ready(readyNow);

function readyNow(){
    console.log('jq');
    $('#refreshButton').on('click', refreshPage);
    $('#sendButton').on('click', newMessage);
    
}
function newMessage(){
    console.log('in newMessage');
    // get user input
    // assemble into an object
    let objectToSend = {
        from: $('#nameIn').val(),
        message: $('#messageIn').val()


    } // end objectToSend
    console.log('sending:', objectToSend);
    
    // send to server via POST
    $.ajax({
        method: 'POST',
        url: '/messages',
        data: objectToSend
    }).then(function(response){
        console.log('back from POST with:', response);

    })// end ajax
} // end newMessage
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
                                    `<li>"${messages.message}"
                                    <em>from ${messages.from}</em>
                                    </li>`);
        } //end for loop 

    }) // end ajax

} // end refresh