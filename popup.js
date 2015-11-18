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

//when user clicks the submit button. The data in the input field and the checked off boxes
//should be saved with localStorage
//retrieved with localStorage and put in a drop down.

document.getElementById('submit').addEventListener('click', function(){
    var check_bool = document.getElementById('box')
    var field_data = document.getElementById('title')
    var wrapper = document.getElementById('wrapper')
    var panel = document.getElementById('accordion')
    var panel_heading = document.getElementById('collapsible')
    var panel_body = document.getElementById('panel_body')

    //when i click submit i want to get the value of the field and check if box is checked
    //and save both in a dropdown list. 

    
    if ( check_bool.checked) { // or if field has text in it.
        panel_heading.innerHTML = field_data.value //ield data value is now the name of the group
        wrapper.style.display = 'none'; //hide 'create group' info
        panel.style.display = 'block'; //show the list of groups
    }
    
    //test^^

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
