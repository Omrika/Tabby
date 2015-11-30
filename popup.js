field_data = document.getElementById( 'title' )
wrapper = document.getElementById( 'wrapper' )
panel = document.getElementById( 'accordion' )
panel_heading = document.getElementById( 'collapsible' )
panel_body = document.getElementById( 'accordionOne' )
clicked = false

window.onload = function(){
    panel.style.display = 'none'; //removes blank panel when page loads.
    if (localStorage != undefined){
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i)
                url = localStorage.getItem(key)
                value = url.link(url)
                
            var testing = ('<div class="panel-group" id="accordion"><div class="panel panel-primary"><div class="panel-heading"><h4 class="panel-title"><a id="collapsible">' + key + '</a><button id="delete" class="btn-xs btn-danger btn-default pull-right">Delete</button></h4></div><div id="accordionOne"><div class="panel-body">' + value +'</div></div></div></div>')
            $("#container").after(testing)
        };
    }  
}



document.getElementById( 'create' ).addEventListener( 'click', function() { 
//click event on the create button.
    if (clicked){
        return;
    }
    clicked = true
 
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

// field_data = document.getElementById( 'title' )
// wrapper = document.getElementById( 'wrapper' )
// panel = document.getElementById( 'accordion' )
// panel_heading = document.getElementById( 'collapsible' )
// panel_body = document.getElementById( 'accordionOne' )

document.getElementById( 'submit' ).addEventListener( 'click', function(){
    
    var check_bool = document.getElementById( 'box' )

    //when i click submit i want to get the value of the field and check if box is checked
    //and save both in a dropdown list. 
  
    if ( check_bool.checked || field_data != undefined ) { // or if field has text in it.

        //field data value is now the name of the group
        var selected = []
        
        var u = $(".list").children("input:checked").each(function(){ selected.push(($(this).attr('name')))})

        localStorage[field_data.value] =  selected;
        
        panel_heading.innerHTML = field_data.value;
        panel_body.innerHTML = selected;

        //^ sets input in heading and body. 
        
        
        panel.style.display = 'block'; //show the list of groups just created 
        wrapper.style.display = 'none'; //hide 'create group' info
    }

});


//to do:
//add delete button -- check!
//make delete button work 
//change color scheme
//set urls in each panel as a list and not one long string
//space out list of urls
//make each url a link so the user can go to that page. -- check!


