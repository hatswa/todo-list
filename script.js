
/*
 * taking an element as the parameter
 * manages the text decorations 
 */
function strike(elem){
	if($(elem).css("text-decoration") == "line-through"){
		// if the element has already been checked off
		$(elem).css("text-decoration","none");
	}
	else{
		// if element has not been checked off 
		$(elem).css("text-decoration","line-through");
	}
} 

var count = 0; // for id names 

/**
 * onclick function for the submit button
 */
$("#go").click(function(){
	console.log("hi: " + $("#new_item").val()); // test for the new values 
	
	// appending a new div element that includes the newly entered to do item
	// also set the onstrike method as stirike()
	$("#list").append("<div class='todo_item' id='item_'" + count + "' onclick='strike(this)'>" + $('#new_item').val() + "</div>");

	//reset the value of the input box 
	$("#new_item").val("");

	// for a different id 
	count++;
});

/**
 * making "enter" the click function 
 * so you can just enter and it would click "submit"
 */
$("#new_item").keyup(function(e){
	if(e.keyCode == 13){ // 13 is the enter key keycode
		$(this).trigger("enterKey");
		$("#go").click(); // when pressing enter, run onclick
	}
});
