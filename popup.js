var clicked = false;

document.getElementById( 'create' ).addEventListener( 'click', function() {
//click event on the create button.

    if (clicked) {
        return;
    }
    clicked = true;
    //click is originally false because i didn't click. But after i add event listener and i click
    //it becomes true. Then i can no longer click. This prevents urls to be repeatedly added to the list
    //when the button is clicked. So i disabled it.


    var field = document.getElementById( 'title' );
    var button = document.getElementById( 'submit' );
    if (field.style.display == 'block' && button.style.display == 'block') {
        field.style.display = 'none';
        button.style.display = 'none';
    } else {
        field.style.display = 'block';
        button.style.display = 'block';
    }
    //when clicked i want to show input field and submit button

    var arr = [];

    chrome.tabs.query( {'active': false}, function(tabs) { //chrome.tabs.query is a chrome api method. query() gets the tabs.id. query() is asynchronous      
        for (var i = 0; i < tabs.length; i++) {
            arr.push(tabs[i]);
        }

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != null) {
                var div = document.createElement( 'div' )
                div.className = 'list'
                div.innerHTML = "<input type='checkbox' id='box' name= " + arr[i].url + ">" + arr[i].url; //grabs each tab url.
                document.getElementById( 'content' ).appendChild(div);
            }
        }
    })
});

//when user clicks the submit button. The data in the input field and the checked off boxes
//should be saved with localStorage
//retrieved with localStorage and put in a drop down.

document.getElementById( 'submit' ).addEventListener( 'click', function(){
    var check_bool = document.getElementById( 'box' )
        field_data = document.getElementById( 'title' )
        wrapper = document.getElementById( 'wrapper' )
        panel = document.getElementById( 'accordion' )
        panel_heading = document.getElementById( 'collapsible' )
        panel_body = document.getElementById( 'accordionOne' )
        // urls = document.querySelectorAll('#box')

    //when i click submit i want to get the value of the field and check if box is checked
    //and save both in a dropdown list. 

    
    if ( check_bool.checked || field_data != undefined ) { // or if field has text in it.
        panel_heading.innerHTML = field_data.value; //field data value is now the name of the group
        // panel_body.innerHTML = "<ul><li>" + check_bool.name + "</li></ul>";
        var selected = []
        
        var u = $(".list").children("input:checked").each(function(){ selected.push(($(this).attr('name')))})
        // for(var i = 0; i < u.length; i++){(panel_body.innerHTML = "<ul><li>" + (u[i].name) + "</li></ul>")}
        panel_body.innerHTML = selected;

        wrapper.style.display = 'none'; //hide 'create group' info
        panel.style.display = 'block'; //show the list of groups
    }
        debugger
    
    //test^^

});


//to do:
//only shows first checkbox clicked if i click more than one checkbox. so figure out a way
//to add all checked checkboxes to group list
//only shows list of urls if two pages are open
//make url list in groups links so user can click on them
//










// function clearAllLists() {
//     var lists = document.getElementById('content').getElementsByClassName('list');
//     for (var i = 0; i < lists.length; i++) {
//         lists.parentElement.removeChild(lists[i]);
//     }
// }    