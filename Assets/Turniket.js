#pragma strict

var textJump: GameObject;
var textOpen: GameObject;
//var t_op=false;
var anim:Animator;
var turn_trig:GameObject;
var tr_switch:GameObject;
var Obj: GameObject;
var Obj2: GameObject;
var turn_switch;


//private var myLight : Light;


function Start () {
anim = GetComponent("Animator");

turn_trig = GameObject.Find("turnik_trigger");

textJump = GameObject.Find("Jump_text");
textOpen = GameObject.Find("Open_text");
turn_switch = transform.Find("turn_switch");


Debug.Log("Jump_text");
textJump.GetComponent.<Renderer>().enabled = false;
textOpen.GetComponent.<Renderer>().enabled = false;
anim.ResetTrigger("t_op");

}

function Update () {

}

function OnTriggerEnter (other : Collider) {
        
        var script = Obj.GetComponent(Propusk);
    	var p = script.p;
    	
    	Debug.Log(p);
    	
     if (p==0)
     {
		textJump.GetComponent.<Renderer>().enabled = true;
		/*var script2 = Obj2.GetComponent(podsv); 
		script2.enabled = false;*/
	 }
	 
	 else if (p==1)
		//t_op = true;
		{
		anim.SetTrigger("t_op");
		Debug.Log("Turnik_in");
		tr_switch = GameObject.Find("turn_switch");
	//	textOpen.GetComponent.<Renderer>().enabled = true;
		}
		
	}
	
function OnTriggerExit () {
		textJump.GetComponent.<Renderer>().enabled = false;
		textOpen.GetComponent.<Renderer>().enabled = false;
		
	}
	
 function OnMouseDown ()
 {
    Debug.Log(this.gameObject.name);
 }
	
	

	