(function(){
    let temp = jQuery.Event.handle
   jQuery.Event.handle = function() {
       try {
          temp.applyt(this, arguments)
       }
       catch(e){
           console.log(e.message)
       }
   }
}());
window.onerror = (messageOrEvent, source, lineno, colno, error) => {
    console.log(messageOrEvent)
   
}