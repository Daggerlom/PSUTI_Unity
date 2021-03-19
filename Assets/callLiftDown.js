#pragma strict

var cl = 0;
var Obj: GameObject;
var textDown : GameObject;
//var panr: GameObject;

function Start ()
{


Debug.Log(cl);
GetComponent.<Renderer>().material.color = Color(0.85, 0.85, 0.85);
/*
textDown = GameObject.Find("Lift_text2");
textDown.GetComponent.<Renderer>().enabled = false;*/
}


function OnMouseOver ()
{
GetComponent.<Renderer>().material.color = Color.white;
/*textDown.GetComponent.<Renderer>().enabled = true;*/
//anim.SetBool("op", true);


	  if (Input.GetKeyDown ("e")) {
        Debug.Log ("e");
        /*var liftScript = Obj.GetComponent(lift);
	    liftScript.OpenLiftUp();  */ 
	    OpenLift();
    }

}

function OnMouseExit ()
{
// var lerp1 : float = Mathf.Exp (2) / duration;
 GetComponent.<Renderer>().material.color = Color(0.85, 0.85, 0.85);
 /*textDown.GetComponent.<Renderer>().enabled = false;*/
}


function OnMouseDown ()
{
	OpenLift();
	/*panr = GameObject.Find("pan");
	panr.GetComponent.<Renderer>().enabled = false;*/
	
}

function OpenLift()
{
	cl = 1;
		
	Debug.Log("click");
	Debug.Log(cl);
			
	var liftScript = Obj.GetComponent(lift);
	liftScript.Down();
	}