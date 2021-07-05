window.logout = function() {
	fetch('/~/DecisiveDecisions/logout', { method: 'POST'});
	alert('Logged Out!')
	location.href = 'index'
}


function addRemoveAttr() {
    var contenteditable = document.getElementById("hackathon").contentEditable;
    var text = document.getElementById("hackathon");
    var button = document.getElementById("but_enable");
    if (contenteditable == "inherit" || contenteditable == "false") {
        document.getElementById("hackathon").contentEditable = true;
        text.focus;
        button.value = "save";
    } else {
        document.getElementById("hackathon").contentEditable = false;
        button.value = "edit";
    }
}


async function deleteTheme() {
	/* Ask the server for the data by its name we gave it */
	var resp = await fetch('/~/DecisiveDecisions/account/Themes?all=true')

	/* Putting the data into an array so that we can easily count the entries */
	var json = await resp.json();
	
	resp.pop();
	json.pop();
	
}