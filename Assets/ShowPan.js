#pragma strict

var panor: GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter()
{
	panor = GameObject.Find("pan");
	panor.GetComponent.<Renderer>().enabled = true;
	Debug.Log("ShowPan");

}