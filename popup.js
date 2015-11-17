var clicked = false;

document.getElementById('create').addEventListener('click', function() {


    if (clicked) {
        return;
    }
    clicked = true;


    var field = document.getElementById('title');
    var button = document.getElementById('submit');
    if (field.style.display == 'block' && button.style.display == 'block') {
        field.style.display = 'none';
        button.style.display = 'none';
    } else {
        field.style.display = 'block';
        button.style.display = 'block';
    }
    

    var arr = [];



    chrome.tabs.query({}, function(tabs) {
        for (var i = 0; i < tabs.length; i++) {
            arr.push(tabs[i]);
        }


        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != null) {
                var div = document.createElement('div')
                div.className = 'list'
                div.innerHTML = "<input type='checkbox' id='box'>" + arr[i].url + ">";
                document.getElementById('content').appendChild(div);

            }
        }

    })
});

function clearAllLists() {
    var lists = document.getElementById('content').getElementsByClassName('list');
    for (var i = 0; i < lists.length; i++) {
        lists.parentElement.removeChild(lists[i]);
    }
}

//whats next..
//create a dropdown 
//different drop down tabs
//should be able to add urls to specified tabs...

//11/16
//user should be able to click a button and create a list. 
//then they should be able to add to that list specific urls
