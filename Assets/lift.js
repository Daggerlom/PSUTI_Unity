var animLift : Animator;
var Obj: GameObject;

function Start ()
{
    animLift = GetComponent("Animator");
    var script = Obj.GetComponent(callLift);
//    var cl = script.cl;
//    Debug.Log(cl);
    animLift.ResetTrigger("CallUp");
    animLift.ResetTrigger("CallDown");
    animLift.ResetTrigger("MoveLift");
    
  //  if (cl == 1)
    
// var currentBaseState = animLift.GetCurrentAnimatorStateInfo(0);
  //   Debug.Log(currentBaseState);
  
  Debug.Log(animLift.GetCurrentAnimatorStateInfo(0).nameHash);

  
 
     if (animLift.GetCurrentAnimatorStateInfo(0).nameHash != -996319189)
     {
        
          
		 animLift.SetTrigger("CallUp");
		 animLift.ResetTrigger("CallDown");
		 animLift.Play("lift_open", -1, 0f);
		 }
		 
	
	/*
	else  if (animLift.GetCurrentAnimatorStateInfo(0).nameHash == -1576311589 || animLift.GetCurrentAnimatorStateInfo(0).nameHash == 2081584052) 
     {
        
		 animLift.SetTrigger("CallDown");
		 animLift.ResetTrigger("CallUp");
		 animLift.Play("lift_onTop", -1, 0f);
		 }
		 */
}


function Down ()
{
    animLift = GetComponent("Animator");
    var script = Obj.GetComponent(callLift);
 //   var cl = script.cl;
 //   Debug.Log(cl);
    Debug.Log(animLift.GetCurrentAnimatorStateInfo(0).nameHash);

  
 
/*     if (animLift.GetCurrentAnimatorStateInfo(0).nameHash != -996319189)
     {
        
          
		 animLift.SetTrigger("CallUp");
		 animLift.ResetTrigger("CallDown");*/
		 animLift.Play("lift_down", -1, 0f);
		// }

}




function Update () 
{



}






function OpenLiftUp()
	{
		animLift.SetTrigger("CallUp");
		animLift.ResetTrigger("CallDown");
		animLift.ResetTrigger("CallDown");
	//	animLift.Play("lift_open", -1, 0f);
	}
	
	
function MoveLift()
	{
		animLift.SetTrigger("MoveLift");
		animLift.ResetTrigger("CallDown");
		animLift.ResetTrigger("CallDown");
	//	animLift.Play("lift_open", -1, 0f);
	}
	
	
function ResetTriggers()
	{
		animLift.ResetTrigger("MoveLift");
		animLift.ResetTrigger("CallDown");
		animLift.SetTrigger("CallDown");
	//	animLift.Play("lift_open", -1, 0f);
	}
	
	



