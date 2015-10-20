//the open tabs url is now printing to the console
document.getElementById('create').addEventListener('click', function(){
    var arr = [];

    chrome.tabs.query({}, function(tabs){
        for (var i = 0; i < tabs.length; i++){
            arr[i] = tabs[i];
        }
        
        for (var i = 0; i < arr.length; i++){
            if (arr[i] != null) {
                var div = document.createElement('div')
                div.className = 'list'
                div.innerHTML = "<ul><li>" + arr[i].url +"</li></ul>";
                document.getElementById('content').appendChild(div);
            } else {
                document.write("no tabby's");
            }
        }
    })

}); 
 
//whats next..
//create a dropdown 
//different drop down tabs
//should be able to add urls to specified tabs...
