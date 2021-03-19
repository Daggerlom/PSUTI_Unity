#pragma strict

var anim : Animator;
//var openDoor : int = Animator.StringToHash("a_door2");
//var closeDoor : int = Animator.StringToHash("Base Layer.Run");
var op=false;
var cl=false;
var oc = 0;

function Start ()
{
    anim = GetComponent("Animator");
   // anim.SetBool("op", true);
  //  anim.SetBool("cl", true);
//  GetComponent.<Renderer>().material.color = Color(0.85, 0.85, 0.85);
}



function OnMouseOver ()
{
GetComponent.<Renderer>().material.color = Color.white;
//anim.SetBool("op", true);
	  if (Input.GetKeyDown ("e")) {
        Debug.Log ("e");
        OpenDoor();
}
}

function OnMouseExit ()
{
// var lerp1 : float = Mathf.Exp (2) / duration;
 GetComponent.<Renderer>().material.color = Color(0.85, 0.85, 0.85);
}

function OnMouseDown ()
{
OpenDoor();
//op=true;
/*
	if(op == false)
	{
	anim.SetBool("op", true);
	anim.SetBool("cl", false);
	Debug.Log (op);
	}
	
	else if(op == true)
	{
	anim.SetBool("op", false);
	anim.SetBool("cl", true);
	Debug.Log (op);
	}
	*/
//GetComponent.<Renderer>().material.color = Color.white;
}

function OpenDoor()
{
	if(oc == 0)
		{
		anim.SetTrigger("op");
		anim.ResetTrigger("cl");
		oc=1;
		}
	else if(oc == 1)
		{
		anim.ResetTrigger("op"); 
		anim.SetTrigger("cl"); 
		oc=0;
		}
		
}

/*
function Update () 
{
    var move : float = Input.GetAxis ("Vertical");
    anim.SetFloat("Speed", move);

    var stateInfo : AnimatorStateInfo = anim.GetCurrentAnimatorStateInfo(0);
    if(Input.GetKeyDown(KeyCode.Space) && stateInfo.nameHash == runStateHash)
    {
        anim.SetTrigger (openDoor);
    }
}
*/