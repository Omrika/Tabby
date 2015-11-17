document.getElementById('create').addEventListener('click', function(){
    // var arr = [];

    // chrome.tabs.query({}, function(tabs){
    //     for (var i = 0; i < tabs.length; i++){
    //         arr[i] = tabs[i];
    //     }
        
    //     for (var i = 0; i < arr.length; i++){
    //         if (arr[i] != null) {
    //             var div = document.createElement('div')
    //             div.className = 'list'
    //             div.innerHTML = "<ul><li>" + arr[i].url +"</li></ul>";
    //             document.getElementById('content').appendChild(div);
    //         } else {
    //             document.write("no tabby's");
    //         }
    //     }
    // })
    var field = document.getElementById('title');
        if(field.style.display == 'block') {
          field.style.display = 'none';
        }
        else {
            field.style.display = 'block'
        }

}); 



//whats next..
//create a dropdown 
//different drop down tabs
//should be able to add urls to specified tabs...

//11/16
//user should be able to click a button and create a list. 
//then they should be able to add to that list specific urls

