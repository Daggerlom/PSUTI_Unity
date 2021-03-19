#pragma strict
var colorStart : Color = Color.red;
var colorEnd : Color = Color.green;
var duration : float = 	1.0;
var lerp : float = 0;
var i=0;
function OnMouseDown ()
{
 Application.OpenURL ("http://unity3d.com/");
 GetComponent.<Renderer>().material.color = Color.red;
}

function OnMouseOver ()
{
i++;
 lerp = Mathf.Exp (i/10)/200;
 Debug.Log (lerp);
// renderer.material.color = Color.Lerp (colorStart, colorEnd, lerp);
GetComponent.<Renderer>().material.color = Color.Lerp(colorStart, colorEnd, lerp);
}

function OnMouseExit ()
{
i=0;
lerp = 0;
// var lerp1 : float = Mathf.Exp (2) / duration;
 GetComponent.<Renderer>().material.color = Color.grey;
}

function Update () {

 transform.position = Vector3(Mathf.PingPong(Time.time, 3), transform.position.y, transform.position.z);
}