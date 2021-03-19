#pragma strict
var pr = 1;

function Start () {
GetComponent.<Animation>().Stop();
}

function OnMouseDown () {
GetComponent.<Animation>().wrapMode = WrapMode.Once;
if(pr>0)
{
GetComponent.<Animation>()["a_door"].speed = 1; 
Debug.Log (pr);
}
else if (pr<0)
{
//animation.wrapMode = WrapMode.PingPong;
GetComponent.<Animation>()["a_door"].speed = -1; 
GetComponent.<Animation>()["a_door"].time = GetComponent.<Animation>()["a_door"].length;
Debug.Log (pr);
} 
GetComponent.<Animation>().Play();
pr=-pr;
}

function Update () {
//animation.Play();
}