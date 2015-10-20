document.getElementById("create").addEventListener("click", function(){
    var $arr = [];
    chrome.tabs.query({}, function(tabs){
        for (var i = 0; i < tabs.length; i++){
            $arr[i] = tabs[i];
        }
        
        for (var i = 0; i < $arr.length; i++){
            if ($arr[i] != null) {
                console.log($arr[i].url);
            } else {
                console.log("??" + i);
            }
        }
    })
});