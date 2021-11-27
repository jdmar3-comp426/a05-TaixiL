window.addEventListener("load", function () {

    function sendData() {
        const XHR = new XMLHttpRequest();
              FD = new URLSearchParams(new FormData( form ));
        
        // Define what happens on successful data submission
        XHR.addEventListener( 'load', function( event ) {
            alert( 'Yeah! Data sent!' );
        } );

        // Define what happens in case of error
        XHR.addEventListener(' error', function( event ) {
            alert( 'Oops! Something went wrong.' );
        } );

        XHR.open("POST", "http://localhost:5000/app/new/user");
        XHR.send( FD );
    }
    const form = document.getElementById("myForm");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        sendData();
    });
});