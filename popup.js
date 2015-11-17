var clicked = false;

document.getElementById('create').addEventListener('click', function() {
//click event on the create button.

    if (clicked) {
        return;
    }
    clicked = true;
    //click is originally false because i didn't click. But after i add event listener and i click
    //it becomes true. Then i can no longer click. This prevents urls to be repeatedly added to the list
    //when the button is clicked. So i disabled it.


    var field = document.getElementById('title');
    var button = document.getElementById('submit');
    if (field.style.display == 'block' && button.style.display == 'block') {
        field.style.display = 'none';
        button.style.display = 'none';
    } else {
        field.style.display = 'block';
        button.style.display = 'block';
    }
    //when clicked i want to show input field and submit button

    var arr = [];



    chrome.tabs.query({'active': false}, function(tabs) { //chrome.tabs.query is a chrome api method. query() gets the tabs.id. query() is asynchronous      
        for (var i = 0; i < tabs.length; i++) {
            arr.push(tabs[i]);
        }
        // debugger


        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != null) {
                var div = document.createElement('div')
                div.className = 'list'
                div.innerHTML = "<input type='checkbox' id='box'>" + arr[i].url + ">"; //grabs each tab url.
                document.getElementById('content').appendChild(div);

            }
        }

    })
});

// function clearAllLists() {
//     var lists = document.getElementById('content').getElementsByClassName('list');
//     for (var i = 0; i < lists.length; i++) {
//         lists.parentElement.removeChild(lists[i]);
//     }
// }

//whats next..
//create a dropdown 
//different drop down tabs
//should be able to add urls to specified tabs...
