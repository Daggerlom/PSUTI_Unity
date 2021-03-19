#pragma strict

var sw = false;
var cam0 : Camera;
var cam1 : Camera;
var lift1 : GameObject;
var lift2 : GameObject;
var anpan : GameObject;
var hide1 : GameObject;
var hide2 : GameObject;
var hide3 : GameObject;
var hide4 : GameObject;
var hide5 : GameObject;
var hide6 : GameObject;
var hideLift2 : GameObject;

var hideTextControls : GameObject;
var hideTextSwitch : GameObject;
var hideTarget : GameObject;

var An_door1 : GameObject;
var An_door2 : GameObject;
var An_door3 : GameObject;

//var cam2 : Camera;
function Start(){
         sw = false;
         cam0.GetComponent(AudioListener).enabled = true;
         
         cam1.GetComponent(AudioListener).enabled = false ;
         
         CameraWalk();
         //anpan.SetActive(false);
         
}
function Update () {
         if(Input.GetKeyDown("v")){
           sw=!sw;      
          // Debug.Log("sw="+sw);
         }
  /*       
         if(sw > 1){
            sw = 0;
         }
         */
//         Debug.Log("sw=" + sw);
         
         if(sw == false)
         {
         	CameraWalk();
         }
         
         else if(sw == true)
         {
         	CameraDemo();
         }
       }  
         
        
       

function CameraWalk () {
         	sw = false;
         	
            cam1.enabled = false;
            cam1.GetComponent(AudioListener).enabled = false;
            cam0.enabled = true;
            cam0.GetComponent(AudioListener).enabled = true;
            
    //		Debug.Log("sw=" + sw);
            
             for (var j=0; j<=8; j++)
            {
            lift1.transform.GetChild(0).GetChild(j).GetComponent.<Renderer>().enabled = true;
            //hideLift2.GetChild(0).GetChild(j).SetActive(false);
			}
			for (var k=0; k<=1; k++)
            {
            lift1.transform.GetChild(0).GetChild(0).GetChild(k).GetComponent.<Renderer>().enabled = true;
            //hideLift2.GetChild(0).GetChild(j).SetActive(false);
			}
          //  lift1.SetActive(true);
         //   lift2.SetActive(false);
            hide1.SetActive(true);
            hide2.SetActive(true);
            hide3.SetActive(true);
            hide4.SetActive(true);
            hide5.SetActive(true);
            hide6.SetActive(true);
            anpan.SetActive(false);
       //     hideCanv.SetActive(true);
            hideLift2.SetActive(false);
            
            An_door1.SetActive(false);
            An_door2.SetActive(false);
            An_door3.SetActive(false);
            
        //    hideTextControls.SetActive(true);
            hideTextSwitch.SetActive(false);
            hideTarget.SetActive(true);
            
 			lift2.GetComponent.<Animator>().speed = 0.001;
            
           // lift1.GetComponent.<Renderer>().enabled = true;
           // lift2.GetComponent.<Renderer>().enabled = false;
           // cap.GetComponent.<Renderer>().enabled = true;
            
      //      cam2.enabled = false;
         }
         
         
         
          
         function CameraDemo () {
         	sw = true;
            cam0.enabled = false;
            cam0.GetComponent(AudioListener).enabled = false;
            cam1.enabled = true;
            cam1.GetComponent(AudioListener).enabled = true;
           
             for (var i=0; i<=8; i++)
            {
            lift1.transform.GetChild(0).GetChild(i).GetComponent.<Renderer>().enabled = false;
			}
			
			for (var l=0; l<=1; l++)
            {
            lift1.transform.GetChild(0).GetChild(0).GetChild(l).GetComponent.<Renderer>().enabled = false;
            //hideLift2.GetChild(0).GetChild(j).SetActive(false);
			}
			
           // lift1.SetActive(false);
        //    lift2.SetActive(true);
            hide1.SetActive(false);
            hide2.SetActive(false);
            hide3.SetActive(false);
            hide4.SetActive(false);
            hide5.SetActive(false);
            hide6.SetActive(false);
            anpan.SetActive(true);
         //   hideCanv.SetActive(false);
            
            An_door1.SetActive(true);
            An_door2.SetActive(true);
            An_door3.SetActive(true);
            
            hideTextControls.SetActive(false);
            hideTextSwitch.SetActive(true);
            hideTarget.SetActive(false);
            
            hideLift2.SetActive(true);
            lift2.GetComponent.<Animator>().speed = 1;
            
          //  lift1.GetComponent.<Renderer>().enabled = false;
          //  lift2.GetComponent.<Renderer>().enabled = true;
         //   cap.GetComponent.<Renderer>().enabled = false;
   //         cam2.enabled = false;
   
         }
   /*      if(sw == 2){
            cam0.enabled = false;
            cam1.enabled = false;
            cam2.enabled = true;
         }*/
         
 
