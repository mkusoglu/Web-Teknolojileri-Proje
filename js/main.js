const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});



var count= 20;

function validate()
{
	var un = document.login.username.value;
	var pw = document.login.password.value;
	var valid = false;
	var usernameArray = ["b1812100001@sakarya.edu.tr"];
	var passwordArray = ["123"];
	for (var i = 0; i < usernameArray.length; i++)
 {

	if ((un == usernameArray[i]) && (pw == passwordArray[i]))
	{
		valid = true;
		break;
	}
}
	if (valid)
	{
		alert("Hoşgeldiniz");
		window.location = "index.html";
		return false;
	}
	var again = " tries";
	if (count ==1)
	{
		again = " try"
	}
	if (count >= 1)
	{
		alert("Hatalı Giriş")
		count--;
	}
	
}




