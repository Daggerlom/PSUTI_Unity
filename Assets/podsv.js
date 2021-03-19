#pragma strict

var ObjChild;

function Start()
{

}

function OnMouseDown ()
{
var allChildren = gameObject.GetComponentsInChildren(Transform);
for (var child : Transform in allChildren) {
   GetComponent.<Renderer>().material.color = Color.white; // do whatever with child transform here
   
}
 //GetComponent.<Renderer>().material.color = Color.white;
}

function OnMouseOver ()
{
// ObjChild=this.gameObject.transform.GetChild(0);
  // this.gameObject.transform.GetChild(0).GetComponent.<Renderer>().material.color = Color.white;
   var allChildren = gameObject.GetComponentsInChildren(Transform);
	for (var child : Transform in allChildren) {
	child.GetComponent.<Renderer>().material.color = Color.white;
	
	//Debug.Log(this.gameObject.name);
   // GetComponent.<Renderer>().material.color = Color.white; // do whatever with child transform here}
// GetComponent.<Renderer>().material.color = Color.white;
}
 
// Debug.Log(this.gameObject.name);
//Debug.Log(allChildren);
 //GetComponent.<Renderer>().material.color = Color.white;
 //GetComponent.<Renderer>().material.color = Color.white;
 }

function OnMouseExit ()
{

  var allChildren = gameObject.GetComponentsInChildren(Transform);
	for (var child : Transform in allChildren) {
	child.GetComponent.<Renderer>().material.color = Color.grey;
}

}