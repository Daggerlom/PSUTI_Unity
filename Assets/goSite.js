#pragma strict
var colorStart : Color = Color.red;
var colorEnd : Color = Color.green;
var duration : float = 1.0;

function OnMouseDown ()
{
 Application.OpenURL ("http://unity3d.com/");
}

function OnMouseOver ()
{
 var lerp : float = Mathf.PingPong (Time.time, duration) / duration;
 GetComponent.<Renderer>().material.color = Color.Lerp (colorStart, colorEnd, lerp);
}

function Update () {

}