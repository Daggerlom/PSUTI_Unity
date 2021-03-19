#pragma strict
var colorStart : Color = Color.grey;
var colorEnd : Color = Color.white;
var duration : float = 	0.1;
var lerp : float = 0;
var i=0;
function OnMouseDown ()
{
 Application.OpenURL ("http://Woodera.ru/");
 GetComponent.<Renderer>().material.color = Color.grey;
}

function OnMouseOver ()
{
 GetComponent.<Renderer>().material.color = Color.white;
}

function OnMouseExit ()
{
i=0;
lerp = 0;
// var lerp1 : float = Mathf.Exp (2) / duration;
 GetComponent.<Renderer>().material.color = Color.grey;
}

function Update () {

// transform.position = Vector3(Mathf.PingPong(Time.time, 3), transform.position.y, transform.position.z);
}