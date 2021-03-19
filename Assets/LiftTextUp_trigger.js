#pragma strict

var textUp : GameObject;
var textDown : GameObject;


function Start () {
//textUp = GameObject.Find("Lift_text1");
textUp.GetComponent.<Renderer>().enabled = false;
textDown.GetComponent.<Renderer>().enabled = false;
}

function Update () {

}



function OnTriggerEnter()
     {
		textUp.GetComponent.<Renderer>().enabled = true;
		textDown.GetComponent.<Renderer>().enabled = true;
		
     }
 
 
 
 
 function OnTriggerExit()
 	{
 		textUp.GetComponent.<Renderer>().enabled = false;
 		textDown.GetComponent.<Renderer>().enabled = false;
 	}
