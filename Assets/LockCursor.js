var gt: GUITexture;

var pan: GameObject;

function Start() {

//	gt = GetComponent.<GUITexture>();
Cursor.lockState = CursorLockMode.Locked;
Cursor.visible = false;

pan = GameObject.Find("pan");
pan.GetComponent.<Renderer>().enabled = false;
Debug.Log("HidePan");
}

// Called when the cursor is actually being locked

function DidLockCursor () {
	Debug.Log("Locking cursor");
//Cursor.lockState = CursorLockMode.Locked;
	// Disable the button
	//gt.enabled = false;
}

// Called when the cursor is being unlocked
// or by a script calling Screen.lockCursor = false;
function DidUnlockCursor () {
	Debug.Log("Unlocking cursor");

	// Show the button again
	//gt.enabled = true;
}

function OnMouseDown () {
   if(Input.GetMouseButtonDown(0))
	// Lock the cursor
	//Screen.lockCursor = true;
	{
	Cursor.lockState = CursorLockMode.Locked;}
}

private var wasLocked = true;

function Update () {
	// In standalone player we have to provide our own key
	// input for unlocking the cursor
	
	if (Input.GetButtonDown("Fire1"))
	{Cursor.lockState = CursorLockMode.Locked;
	 Cursor.visible = false;}
	
	if (Input.GetKeyDown ("escape") || Input.GetKeyDown ("q"))
		//Screen.lockCursor = false;
		{Cursor.lockState = CursorLockMode.None;
		Cursor.visible = true;}

	// Did we lose cursor locking?
	// eg. because the user pressed escape
	// or because he switched to another application
	// or because some script set Screen.lockCursor = false;
/*	if (!Screen.lockCursor && wasLocked) {
		wasLocked = false;
		DidUnlockCursor();
	}
	// Did we gain cursor locking?
	else if (Screen.lockCursor && !wasLocked) {
		wasLocked = true;
		DidLockCursor ();
	}*/
}