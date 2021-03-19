#pragma strict


var Pl: GameObject;
var Li: GameObject;
var l=0;
var Obj:GameObject;


function Start () {
		Pl = GameObject.Find("FPSController");
	    Li = GameObject.Find("lift_trig");

}

function Update () {
	if (l==1)
		{
		
		
		/*
		Pl.transform.position.y = Li.transform.position.y+1.5;
		Debug.Log(Li.transform.position.y);*/
		//Li.transform.position.y=Li.transform.position.y+1;
		Pl.transform.parent = Li.transform;
	//	Debug.Log("Player's Parent: " + Pl.transform.parent.name);
		}
	else if (l==0)
		{
		
		Pl.transform.parent = null;
		Pl.transform.localScale = new Vector3(1, 1, 1);
		}	

}


function OnTriggerEnter()
     {
     l=1;
     Debug.Log("Player_in");
     var liftScript = Obj.GetComponent(lift);
	 liftScript.MoveLift();
     }
 
 
 
 
 function OnTriggerExit()
 	{
 	l=0;
 	Debug.Log("Player_out");
 	var liftScript = Obj.GetComponent(lift);
	liftScript.ResetTriggers();
	
 	}
