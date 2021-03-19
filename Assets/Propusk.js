#pragma strict

var p = 0;
var pr: GameObject;
var text_pass: GameObject;

function Start () {
pr=GameObject.Find("prop_trig");
}

function Update () {

}

function OnTriggerEnter (other : Collider)
{
Debug.Log("taken");

//child.renderer.enabled = false;
GameObject.Find("take_prop").GetComponent.<Renderer>().enabled = false;
GameObject.Find("propusk").GetComponent.<Renderer>().enabled = false;
GameObject.Find("Prop_sign").GetComponent.<Renderer>().enabled = false;
//text_pass.GetComponent.<Text>().enabled = false;
if (p==0)
	{
	text_pass.SetActive(true);
	}
else
	{
	text_pass.SetActive(false);
	}
p=1;
}

function OnTriggerExit (other : Collider)
{

text_pass.SetActive(false);
}

function OnMouseDown()
{
Debug.Log("taken");
p=1;
//child.renderer.enabled = false;
GameObject.Find("take_prop").GetComponent.<Renderer>().enabled = false;
GameObject.Find("propusk").GetComponent.<Renderer>().enabled = false;
GameObject.Find("Prop_sign").GetComponent.<Renderer>().enabled = false;
}