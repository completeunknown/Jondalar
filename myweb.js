//define the function to size video displays in function of the available screen size
function showScreenDimensions()
{
document.t.t1.value=screen.width;
document.t.t2.value=screen.height;
document.t.t3.value=screen.colorDepth;
document.t.t4.value=screen.pixelDepth;
document.t.t5.value=screen.availWidth;
document.t.t6.value=screen.availHeight;
}
//re_size function sizes movies to full screen (-margin) in function of the web browser
function re_size()
{
document.getElementById("myFlashContent").width=screen.availWidth-80;
document.getElementById("myFlashContent").height=screen.availHeight-60;
document.getElementById("ie_video").width=screen.availWidth-80;
document.getElementById("ie_video").height=screen.availHeight-60;
document.getElementById("moz_video").width=screen.availWidth-80;
document.getElementById("moz_video").height=screen.availHeight-60;
}
//fullscreen function sizes pictures according to body.clientWidth (originally based on screen available width
//found out that setting only height or only width is sufficient - picture resizes maintaining ratio.
function fullscreen()
{
document.getElementById("fullscreen").width=document.getElementById("myBody").clientWidth
//document.getElementById("fullscreen").width=screen.availWidth-80;
//document.getElementById("fullscreen").height=screen.availHeight-60;
}
//declare some variables for the buttons on the Main Exercise page mainpage.htm
function set_vars()
{
mButton1_a_value="Why?";
mButton2_a_value="Because...";
mButton2_b_value="Ooops!";
mButton3_a_value="Reset";
}
function init_button_values()
{
document.getElementById("Button_1").value=mButton1_a_value;
document.getElementById("Button_2").value=mButton2_a_value;
document.getElementById("Button_3").value=mButton3_a_value;
document.getElementById('MyTitle').innerHTML="This is my Exercise Page";
}

//this is to pop up an alert when you click the HOME topnav menu while already on the Home Page
function home_alert()
{alert("You are already on the Home Page!");}

//this is from @guy.com but I haven't figured out yet how to make it work...
function resize_iframe()
{
	var height=window.innerWidth;//Firefox
	if (document.body.clientHeight)
	{
		height=document.body.clientHeight;//IE
	}
	/*resize the iframe with ID "glu" according to the size of the
	  window (all this should be on the same line)*/
	document.getElementById("glu").style.height=parseInt(height-document.getElementById("glu").offsetTop-8)+"px";
}
/* this will resize the iframe with ID="glu" every time you change the size of the window.
window.onresize=resize_iframe; 
Instead of using this you can use: 
<BODY onresize="resize_iframe()"> */

//change the background of the first button
function changecolor(color)
{
document.getElementById('Button_1').style.background=color;
document.getElementById("Page1link").href="personal.htm";
document.getElementById("Page1link").innerHTML="Link to my personal links page";
document.getElementById("Button_1").value=mButton1_a_value;
}
//change the caption of the second button
function Ooops()
{
document.getElementById("Button_2").value=mButton2_b_value;
document.getElementById("Page2link").href="index.htm";
document.getElementById("Page2link").innerHTML="Link to Page 2";
document.getElementById("MyBody").bgColor="FF0000"; //eso no funciona
}
//reload the page
function reset()
{
window.location.reload()
}
//resize the top row gallery photos in function of body.clientWidth (ratio 3:4)
var allHTMLTags = new Array();
function topgalleryresize(thisClass) {
var allHTMLTags=document.getElementsByTagName("*");
for (i=0; i<allHTMLTags.length; i++) {
if (allHTMLTags[i].className==thisClass) {
allHTMLTags[i].width=document.getElementById('MyBody').clientWidth/4-5; //remove 5 pixels from client-width for scroll bar margin
}
}
}
//same as back function in browser
function goBack()
{
window.history.back();
}

//loadXMLDoc function
function loadXMLDoc(dname)
{
xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET",dname,false);
xmlhttp.send();
return xmlhttp.responseXML;
}

function showNewBodySize()
{
x = document.getElementById('MyBody').clientWidth;
y = document.getElementById('MyBody').clientHeight;
alert("Body.clientWidth: " + x +"  Body.clientHeight: " + y)
}

function showNewPictureSize()
{
x = document.getElementById('MyBody').clientWidth;
y = document.getElementById('this_img').width;
z = x-(3*y);
alert("New body.clientWidth: " + x + "px\n\n" + "Resized image width: " + y + "px\n\n" + "Margin: " + z + "px")
}
