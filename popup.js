var App = {
    init: function() {
        field_data = document.getElementById( 'title' )
        panel = document.getElementById( 'accordion' )
        clicked = false 
        App.local_storage();
        App.create_list();
        App.submit_list();
        // App.format_urls();
        // App.delete_button();
    },

    local_storage: function() {
        container = document.getElementById( 'container' )
        panel.style.display = 'none'; //removes blank panel when page loads.
        if (localStorage != undefined){
            for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i)
                    url = localStorage.getItem(key)
                    value = url.link(url)
                    
                var testing = ('<div class="panel-group" id="accordion"><div class="panel panel-primary"><div class="panel-heading"><h4 class="panel-title"><a id="collapsible">' + key + '</a><button id="delete" class="btn-xs btn-danger btn-default pull-right">Delete</button></h4></div><div id="accordionOne"><div class="panel-body">' + value +'</div></div></div></div>')
                container.insertAdjacentHTML('afterend', testing);
            };
        }  
    },

    create_list: function() {
        document.getElementById( 'create' ).addEventListener( 'click', function() { 
            if (clicked){
                return;
            }
            
            clicked = true

            //click is originally false because i didn't click. But after i add event listener and i click
            //it becomes true. Then i can no longer click. This prevents urls to be repeatedly added to the list
            //when the button is clicked. So i disabled it.

            var button = document.getElementById( 'submit' );
            if (field_data.style.display == 'block' && button.style.display == 'block') {
                field_data.style.display = 'none';
                button.style.display = 'none';
            } 
            else {
                field_data.style.display = 'block';
                button.style.display = 'block';
            }
            //when clicked i want to show input field_data and submit button

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
    },

    // format_urls: function() {
    //     var urls = document.querySelector('.panel-body a').innerHTML
    //     var regex = new RegExp(',', 'g');
    //     var str = urls.replace(regex, ' ');

    //     // replace all commas with space
    //     // want to turn each url into list items
    //     // 

    //     if (/^http/.test(urls) ) {

    //     }

    // },

    submit_list: function() {
        panel_heading = document.getElementById( 'collapsible' )
        panel_body = document.getElementById( 'accordionOne' )

        document.getElementById( 'submit' ).addEventListener( 'click', function(){

        var check_bool = document.getElementById( 'box' )

        //when i click submit i want to get the value of the field and check if box is checked
        //and save both in a list. 

            if ( check_bool.checked && field_data != undefined ) { // or if field has text in it.

                var selected = []
     
                var u = $('.list').children("input:checked").each(function(){ selected.push(($(this).attr('name')))})
                var list = document.getElementsByClassName('list')
                // for (var i = 0; i < list.length; i++) {
                //     if (list[i].children.checked) {
                //         console.log(list[i])
                //     }
                // }

                localStorage[field_data.value] =  selected;

                panel_heading.innerHTML = field_data.value;
                panel_body.innerHTML = selected;

                //^ sets input in heading and body. 


                panel.style.display = 'block'; //show the list of groups just created 
                document.getElementById( 'wrapper' ).style.display = 'none'; //hide 'create group' info
            }
        });
    }

    // delete_button: function() {
    //     var remove = document.getElementById('delete')
    //     var att = document.getElementById('accordion')
      
    //     function testing () { 
    //         // if (remove.parentElement.childNodes = remove) {  
    //         //     remove.parentElement.parentElement.parentElement.parentElement.parentElement.removeAttribute('.panel-group')
    //         // }
    //     }
        
    //     remove.addEventListener('click', testing)
    // }
}

window.addEventListener( 'DOMContentLoaded', App.init );