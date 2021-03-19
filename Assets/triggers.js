#pragma strict
var box : GameObject;
var LightG : GameObject;
var check = 1;
var anim1: AnimationClip;

function OnTriggerStay(other:Collider) {
if ( check == 1 )
{
if (other.GetComponent.<Collider>().tag == "Player")
{
LightG.GetComponent(Light).enabled = false;
}
}
if ( check == 0 )
{
if (other.GetComponent.<Collider>().tag == "Player")
{

box.GetComponent.<Animation>().clip = anim1;
box.GetComponent.<Animation>().Play();
LightG.GetComponent(Light).enabled = true;
}
}

}
function Update () {

}