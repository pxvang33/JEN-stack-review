console.log('js');

$(document).ready(readyNow);
let username = '';

function readyNow(){
    console.log('jq');
    $('#refreshButton').on('click', refreshPage);
    $('#sendButton').on('click', newMessage);
    $('#loginButton').on('click', loginNow);
    $('#logoutButton').on('click', logoutNow);
    $('#newMessage').hide();
    $('#output').hide();

}
function loginNow(){
    username = $('#nameIn').val();
    console.log('logging in:', username);
    $('#welcome').empty();
    $('#welcome').append(`Hello, ${username}`);
    // toggle input elements
    $('#login').hide();
    $('#newMessage').show();
    $('#output').show();
    $('#nameIn').val('');

    refreshPage()
} //end loginNow

function logoutNow(){
    username = '';
    $('#login').show();
    $('#newMessage').hide();
    $('#output').hide();

} // end logoutNow
function newMessage(){
    console.log('in newMessage');
    // get user input
    // assemble into an object
    let objectToSend = {
        from: username,
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
        $('#messageIn').val('');
        refreshPage();

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