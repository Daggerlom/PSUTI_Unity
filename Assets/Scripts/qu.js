#pragma strict

function Start () {

}
function Update () {
	if (Input.GetKey ("escape")) {
			Debug.Log("quit");
			Application.Quit();	
		}
	}