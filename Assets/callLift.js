#pragma strict

var cl = 0;
var Obj: GameObject;
//var textUp : GameObject;
//var panor: GameObject;

function Start ()
{
Debug.Log(cl);
GetComponent.<Renderer>().material.color = Color(0.85, 0.85, 0.85);
/*
textUp = GameObject.Find("Lift_text1");
textUp.GetComponent.<Renderer>().enabled = false;
*/

}


/*function OnMouseOver ()
{
GetComponent.<Renderer>().material.color = Color.white;
//anim.SetBool("op", true);
textUp.GetComponent.<Renderer>().enabled = true;
}
*/

/*
function OnMouseExit ()
{
// var lerp1 : float = Mathf.Exp (2) / duration;
 GetComponent.<Renderer>().material.color = Color(0.85, 0.85, 0.85);
 textUp.GetComponent.<Renderer>().enabled = false;
 //renderer.enabled = true;
}
*/

function OnMouseDown ()
{
	cl = 1;
		
	Debug.Log("click");
	Debug.Log(cl);
			
	var liftScript = Obj.GetComponent(lift);
	liftScript.OpenLiftUp();
	
}


function OnMouseOver ()
{
	  if (Input.GetKeyDown ("e")) {
        Debug.Log ("e");
        var liftScript = Obj.GetComponent(lift);
	    liftScript.OpenLiftUp();
        
    }
	
}