#pragma strict
var pr = 1;

function Start () {
GetComponent.<Animation>().Stop();
}

function OnMouseDown () {
OpenDoor();
}


function OpenDoor()
{
GetComponent.<Animation>().wrapMode = WrapMode.Once;
if(pr>0)
{
GetComponent.<Animation>()["a_door4"].speed = 1; 
Debug.Log (pr);
}
else if (pr<0)
{
//animation.wrapMode = WrapMode.PingPong;
GetComponent.<Animation>()["a_door4"].speed = -1; 
GetComponent.<Animation>()["a_door4"].time = GetComponent.<Animation>()["a_door4"].length;
Debug.Log (pr);
} 
GetComponent.<Animation>().Play();
pr=-pr;
}


function OnMouseOver ()
{

GetComponent.<Renderer>().material.color = Color.white;

	  if (Input.GetKeyDown ("e")) {
        Debug.Log ("e");
        OpenDoor();
}

}

function OnMouseExit ()
{
// var lerp1 : float = Mathf.Exp (2) / duration;
 GetComponent.<Renderer>().material.color = Color.grey;
}

function Update () {
//animation.Play();
}