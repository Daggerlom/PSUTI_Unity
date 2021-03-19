#pragma strict

var LiftDoor:GameObject;

function Start () {

}

function Update () {

}

function OnMouseOver(){
	Debug.Log("Over");
	LiftDoor = GameObject.Find("Plane3423");
	GameObject.Find("Plane3423").GetComponent.<Renderer>().material.color = Color.white;	
	Debug.Log(LiftDoor.name);
}