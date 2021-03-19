#pragma strict

function Start () {

}

function Update () {

    if (Input.GetKeyDown(KeyCode.F11) || Input.GetKeyDown(KeyCode.F))
    { Screen.fullScreen = !Screen.fullScreen;
    /* {  
       if (Screen.fullScreen == false)
       {
        Screen.fullScreen = !Screen.fullScreen;
        Debug.Log("fullScreen");
        }
       // Screen.SetResolution(1280, 720, true);
      else if (Screen.fullScreen == true)
       {
       Debug.Log("no_fullscreen");
       }*/
     }
}