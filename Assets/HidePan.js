#pragma strict

var panor: GameObject;

function Start () {
	panor = GameObject.Find("pan");
	//panor.GetComponent.<Renderer>().enabled = false;
	panor.SetActive(false);
	Debug.Log("HidePan");
}

function Update () {

}

function OnTriggerEnter()
{
	//panor = GameObject.Find("pan");
	//panor.GetComponent.<Renderer>().enabled = false;
	panor.SetActive(false);
	Debug.Log("HidePan");

}


function OnTriggerExit()
{
	//panor = GameObject.Find("pan");
	//panor.GetComponent.<Renderer>().enabled = false;
	panor.SetActive(false);
	Debug.Log("HidePan");

}