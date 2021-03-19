#pragma strict

function Start () {
Screen.lockCursor = true;
}
function OnGUI () {
	GUI.Box (Rect (Screen.width/2,Screen.height/2,3,3), " ");
}
function Update () {
Screen.lockCursor = true;
}