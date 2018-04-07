//ajax exercises from skillport course

var contentDiv;
var xmlhttp;
var xmlhttp1;
var xmlhttp2;
var xmlhttp3;
var xmlhttp4;
var xmlhttp5;
var xmlhttp6;
var jsonOutput;
var x;
var changecounter = 1;

function setColor(element, color)
{
    element.style.backgroundColor = color;
}

window.onload = function()
        
	{
	$('#changeBack').hide()

	document.getElementById('testphp').addEventListener('click', loadTest, false);
	document.getElementById('loadData').addEventListener('click', loadAjaxData, false);
	document.getElementById('changeButton').addEventListener('click', changeContent, false);
	document.getElementById('multiply').addEventListener('click', getTable, false);
	document.getElementById('rsmonitor').addEventListener('click', loadAjaxData2, false);
	document.getElementById('butEmployees').addEventListener('click', getEmployees, false);
	document.getElementById('chgcss').addEventListener('click', changeCSS, false);
	document.getElementById('butstyle').addEventListener('click', getCompStyle, false);
		
	if (window.XMLHttpRequest)
	{
		xmlhttp = new XMLHttpRequest();
	} else
	{
		xmlhttp =new ActiveXObjet("Microsoft.XMLHTTP");  
		console.log("to make it work with old IEs");
	}

	$('#changeBack').hide()
	
}
function changeContent()
{
	if (!x) {
	x = $('#cchanged').html();
	}
	$('#cchanged').html("<strong>This is the new content.</strong>"+changecounter);
	$('#changeButton').hide();
	$('#changeBack').show();
		
	document.getElementById('changeBack').addEventListener('click', changeBack, false);
}
		
function changeBack() 
{
	$('#cchanged').html(x+"<strong> "+changecounter+"</strong>");
	changecounter +=1;
	$('#changeBack').hide();
	$('#changeButton').show();
	
	document.getElementById('changeButton').addEventListener('click', changeContent, false);
}

function receiveData()
	{
		if (xmlhttp1.readyState ==4 && xmlhttp1.status==200)
		{
			document.getElementById("multiplied").innerHTML = xmlhttp1.responseText;
		}
	}
		
function getTable()
	{
		xmlhttp1 = new XMLHttpRequest();
		xmlhttp1.onreadystatechange = receiveData;
		xmlhttp1.open("POST", "multiply.php", true);
		
		var theNum = document.getElementById("userNumber").value;
		xmlhttp1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp1.send("num=" + theNum);
	}

		

function loadAjaxData()
{
    xmlhttp.onreadystatechange = serverResponse;
    xmlhttp.open('GET', "ajax_php_test.php", true);
    xmlhttp.send();
}    
	
function loadTest()
{
    xmlhttp.onreadystatechange = testResponse;
    xmlhttp.open('GET', "test.php", true);
    xmlhttp.send();
}   

function testResponse()
{
	//alert('xmlhttp.readyState: '+xmlhttp.readyState);
	console.log('xmlhttp.readyState: '+xmlhttp.readyState);
    if (xmlhttp.readyState ==4 && xmlhttp.status ==200)
    {
        //alert("Data returned from server");
        document.getElementById("phparray").innerHTML = xmlhttp.responseText;                
    }
} 	
function serverResponse()
{
	//alert('xmlhttp.readyState: '+xmlhttp.readyState);
	console.log('xmlhttp.readyState: '+xmlhttp.readyState);
    if (xmlhttp.readyState ==4 && xmlhttp.status ==200)
    {
        //alert("Data returned from server");
        document.getElementById("loadresult").innerHTML = xmlhttp.responseText;                
    }
}

function loadAjaxData2()
{  
		xmlhttp2 = new XMLHttpRequest();
		xmlhttp2.onreadystatechange = readyStateMon;
		xmlhttp2.open('GET', "ajax_php_test.php", true);
		xmlhttp2.send();
}			

function readyStateMon()

{
		document.getElementById("rsmonitor").innerHTML = "xmlhttp2 readyState: "+xmlhttp2.readyState;
		
		$.msgBox('xmlhttp2.readyState: '+xmlhttp2.readyState);
		if (xmlhttp2.readyState ==4 && xmlhttp2.status ==200)
		{
            document.getElementById("rsmonitor").innerHTML = '<h1>'+xmlhttp2.responseText+'</h1>';
        }
		
}

//test receive xml data

	function getComputers()
		{
			xmlhttp3 = new XMLHttpRequest();
			xmlhttp3.onreadystatechange = receiveXmlData;
			xmlhttp3.open('GET', "computers.php", true);
			xmlhttp3.send();
		}
		
	function receiveXmlData()
		{
			if(xmlhttp3.readyState==4 && xmlhttp3.status==200)
			{
				var output="<table class='plain'>";
				var computersXML = xmlhttp3.responseXML.documentElement.getElementsByTagName("computer");
				for (var i=0; i < computersXML.length; i++)
				{
					output += "<tr>";
					var nameElement = computersXML[i].getElementsByTagName("name");
					var computerName = nameElement[0].firstChild.nodeValue;
					output += "<td>" + computerName + "</td>";
					var yearElement = computersXML[i].getElementsByTagName("year");
					var year = yearElement[0].firstChild.nodeValue;
					output += "<td>" + year + "</td>";
					output += "</tr>";
				}
				output += "</table>"
				document.getElementById("computerlist").innerHTML = output;
			}
		}
		
//test styled xml data

function getCompStyle()

	{	
		xmlhttp4 = new XMLHttpRequest();
		xmlhttp4.onreadystatechange = getStyledList;
		xmlhttp4.open('GET', "computers.php", true);
		xmlhttp4.send();
	}

function getStyledList()
	
	{
		if(xmlhttp4.readyState==4 && xmlhttp4.status==200) 
		{
			var styledlist = "";
			var listlength = xmlhttp4.responseXML.documentElement.getElementsByTagName("name").length;
			for (var i=0; i < listlength; i++)
			{
			styledlist +='<br />'+
			xmlhttp4.responseXML.documentElement.getElementsByTagName("name")[i].childNodes[0].nodeValue;
			}
		
		$('#compstyle').css({'background-color': '#aabbcc', 'font-family':'lucida console','font-size':'1.2em','color':'#ffffff'});
		$("[type='button']").css({'border':'solid 2px tomato'});
		document.getElementById("styledlist").innerHTML = styledlist;
		}
}
	
function getEmployees()

	{	
		xmlhttp5 = new XMLHttpRequest();
		xmlhttp5.onreadystatechange = showEmployees;
		xmlhttp5.open('GET', "jsonEmp.php", true);
		xmlhttp5.send();
	}

function showEmployees()

{
	if(xmlhttp5.readyState==4 && xmlhttp5.status==200) 
	{
		var employeelist = "";
		//console.log(xmlhttp5.responseText);
		//var data = eval('(' + xmlhttp5.responseText + ')' ); //deprecated, use jQuery .parseJSON instead
		var data = $.parseJSON(xmlhttp5.responseText);
		//console.log(data);
		//console.log(data.employees[0].name);
		var loopLength = data.employees.length;
		for (var i=0; i<loopLength; i++)
		{
			employeelist += "<br/><a href='personal.htm'>Name: </a>" + data.employees[i].name;
			employeelist += "<br/>Position: " + data.employees[i].position;
		}
		//document.getElementById('employeelist').innerHTML = employeelist;
		$.msgBox(employeelist);
	}
}

function createBandsList()
{	
	xmlhttp6 = new XMLHttpRequest();
	xmlhttp6.onreadystatechange = getBands;
	var band1 = document.getElementById('band1').value;
	var band2 = document.getElementById('band2').value;
	var band3 = document.getElementById('band3').value;
	var jsonOutput = "";
	jsonOutput += "[";
	jsonOutput += '"' + band1 + '",';
	jsonOutput += '"' + band2 + '",';
	jsonOutput += '"' + band3 + '"';
	jsonOutput += "]";
	console.log(jsonOutput);
	var url = "jsonReceiver.php?bands="+ jsonOutput;
	//console.log(url);
	// works: xmlhttp.open("GET", 'jsonReceiver.php?bands=["Santana", "Pink Floyd", "Styx"]', true);
	// returns NULL: xmlhttp.open("GET", "jsonReceiver.php?bands=['Santana', 'Pink Floyd', 'Styx']", true);
	xmlhttp6.open("GET", url, true);
	xmlhttp6.send();
}

function changeCSS()
{
	var body_font = document.getElementById('body_font').value;
	var body_text = document.getElementById('body_text').value;
	var body_bgd = document.getElementById('body_bgd').value;
	var rem_class = document.getElementById('rem_class').value;
	var ajaxdivs = document.getElementsByClassName('ajaxdiv');
	var divcount = ajaxdivs.length;
	
	/*document.getElementById('mybody').style.fontFamily = body_font;
	document.getElementById('mybody').style.color = body_text;
	document.getElementById('butstyle').style.fontFamily = body_font;
	document.getElementById('mybody').style.backgroundColor = body_bgd;*/
	
	$('#mybody').css({'font-family':body_font, 'color':body_text, 'background-color': body_bgd});
	//$('#butstyle').css({'font-family':body_font, 'color':body_text});
	$("button[type='button']").css({'font-family':body_font, 'color':body_text});
	
		/*for (i = 0; i < divcount; i++)
		{
		ajaxdivs[i].style.backgroundColor = "#ffffff";	
		}*/
		
		$("button[type='button']").css('border','2px dotted blue');
		$(ajaxdivs).each(function() {
			$(this).css('background-color',body_bgd);
			});
	
		if (rem_class == "ajaxdiv")
		{
		$(ajaxdivs).each(function() {
			$(this).addClass('restore');
			$(this).removeClass('ajaxdiv');
			console.log(this);
			});
		$("a").removeClass("topnav");
		$("a").addClass("test");
		}
		else
		{	
		ajaxdivs = document.getElementsByClassName('restore');
			$(ajaxdivs).each(function() {
			$(this).addClass('ajaxdiv');
			$(this).removeClass('restore');
			console.log(this);
			});
			$("a").removeClass("test");
			$("a").addClass("topnav");
			$('#compstyle').css({'font-family':body_font, 'color':body_text,'background-color': body_bgd});
		}
	
}
		
function getBands()
{
	if(xmlhttp6.readyState==4 && xmlhttp6.status==200)
	{
		//document.getElementById('bands').innerHTML = $.parseJSON(jsonOutput);
		document.getElementById('bands').innerHTML = xmlhttp6.responseText;
		
		document.getElementById('bandlist').style.backgroundColor = "white";
	}
}
