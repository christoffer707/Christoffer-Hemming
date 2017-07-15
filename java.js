var cart = {
	name: [],
	price: [],
	count: []
};
	
function addItem(name, price)
{
	if (cart.name.length == 0)
	{
		cart.name.push(name);
		cart.price.push(price);
		cart.count.push(1);
		saveCart();
		return;
	}
	else
	{
		for (var i = 0; i < cart.name.length; i++)
		{
			if (cart.name[i] == name)
			{
				cart.count[i] += 1;
				saveCart();
				return;
			}
		}
				
	cart.name.push(name);
	cart.price.push(price);
	cart.count.push(1);
	saveCart();
	return;
			
	}
}

function removeItem(name)
{
	for (var i = 0; i < cart.name.length; i++)
	{
		if (cart.name[i] === name)
		{
			cart.count[i] --;
			if (cart[i].count == 0)
			{
				cart.name.splice(i, 1);
				cart.price.splice(i, 1);
				cart.count.splice(i, 1);
			}
		}
	}
	saveCart();
}

function clearCart()
{
	cart.name = [];
	cart.price = [];
	cart.count = [];
	saveCart();
}

function countItem()
{
	var allItem = 0;
	for (var i = 0; i < cart.name.length; i++)
	{
		allItem += cart.count[i];
	}
	return allItem;
}

function totalCost()
{
	var total = 0;
	var td = document.getElementById("total");
	for (var i = 0; i < cart.name.length; i++)
	{
		total += cart.price[i] * cart.count[i];
	}
	td.innerHTML = "Total: $" + total.toFixed(2);
	return total.toFixed(2);
}

function saveCart()
{
	localStorage.setItem("name", JSON.stringify(cart.name));
	localStorage.setItem("price", JSON.stringify(cart.price));
	localStorage.setItem("count", JSON.stringify(cart.count));
	var table = document.getElementById('table');
	var cost = totalCost();
	while(table.rows.length > 1)
	{
		table.deleteRow(1);
	}
	for (var i = 0; i < cart.name.length; i++)
	{
		var tr = document.createElement('tr');   

		var td1 = document.createElement('td');
		var td2 = document.createElement('td');
		var td3 = document.createElement('td');
		var td4 = document.createElement('td');
		
		

		var text1 = document.createTextNode(cart.name[i]);
		var text2 = document.createTextNode(cart.count[i]);
		var text3 = document.createTextNode(cart.price[i]);
		var text4 = document.createTextNode('remove');

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		td4.appendChild(text4);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);

		table.appendChild(tr);
	}
}

function loadCart()
{
	var tempName = JSON.parse(localStorage.getItem("name"));
	var tempPrice = JSON.parse(localStorage.getItem("price"));
	var tempCount = JSON.parse(localStorage.getItem("count"));
	
	for (var i = 0; i < tempName.length; i++)
	{
		cart.name.push(tempName[i]);
		cart.price.push(tempPrice[i]);
		cart.count.push(tempCount[i]);
	}
}

function modalButton()
{
	var modal = document.getElementById('myModal');
	modal.style.display = "block";
}

function closeModal()
{
	var modal = document.getElementById('myModal');
	modal.style.display = "none";
}

function openTab(evt, tabName) 
{
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function Check1(name, error) 
{  
    var pattern = /^[a-zA-Z ]*$/;
	if (name)
	{
		error.style.display="none";
	}
	else
	{
		error.style.display="block";
	}
}

function check3(cc, error3)
{
	var pattern = /^(\s+)?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}(\s+)?$/;
	if (cc.match(pattern))
	{
		error3.style.display="none";	
	}
	else
	{
		error3.style.display="block";
	}
	
}

function check4(date, error5)
{
	var pattern = /^(\s+)?([0]?[1-9]|[1][0-2])[/]([0-9]{4})(\s+)?$/;
	var today = new Date();
 
 if(date)
{
	var part = date.split('/');
	var cardExp = new Date();
	error5.style.display="block";
   if (date.match(pattern))
	{
    if (today.getTime() < cardExp.setFullYear(part[1], part[0]))
		{
			error5.style.display="none";
		}
	
	else
		{
			error5.style.display="block";
		} 
	}
 }
}
function check6(phone, error2)
{
	var pattern = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
	if (phone.match(pattern))
	{
		error2.style.display="none";	
	}
	else
	{
		error2.style.display="block";
	}
	
}

function check2(address, error1)
{
	var pattern = /^[a-zA-Z ]*$/;
	if (address)
	{
		error1.style.display="none";	
	}
	else
	{
		error1.style.display="block";
	}
	
}

function check5(cn, error4)
{
	var pattern = /^(\s+)?\b[A-Z][-'a-zA-Z]+\?\s[A-Z][-'a-zA-Z]{0,19}\b(\s+)?$/;
	if (cn)
	{
		error4.style.display="none";	
	}
	else
	{
		error4.style.display="block";
	}
	
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 

function myReset() 
{
    var reset = document.getElementById("nameInput");
    alert("Before reset, the text was: " + reset.value);
}

function mySubmit() 
{
    var str = JSON.stringify(cart);
	document.getElementById("hidden1").value = str;
	document.getElementById("hidden2").value = totalCost();
	
}

function actionValue(n) 
{
	if(n == 1)
		document.getElementById("action").value = "confirmOrder";
	else
		document.getElementById("action").value = "nfeuiq";
	
}

function myBlur() 
{
    var blurred = document.getElementById("nameInput");
    blurred.value = blurred.value.toUpperCase();
}

function myLoad() 
{
    alert("Page is loaded");
}
 function myAlert()
 {
	 var txt;
    if (confirm("Your Items Been Added!") == true) {
        txt = "Item Confirmed!";
    } else {
        txt = "Item Cancelled!";
    }
    document.getElementById("alert1").innerHTML = txt;
}

function combined(item, price)
{
	myAlert();
	addItem(item, price);
}
