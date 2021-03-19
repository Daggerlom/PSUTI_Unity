var timeLeft: int;
var textContr: GameObject;
var pl: GameObject;
var x_prev;
var z_prev;

var x_new;
var z_new;

var pl_mov;

function Start () {

//textContr = GameObject.Find("Text_Controls");


var distances = new float[32];
//var dist_ter = new float[32];
//var dist_obj = new float[32];
// Set up layer 10 to cull at 15 meters distance.
// All other layers use the far clip plane distance.
distances[11] = 40;
//distances[12] = 80;
//dist_obj[13] = 10;
GetComponent.<Camera>().layerCullDistances = distances;
//GetComponent.<Camera>().layerCullDistances = dist_ter;
//GetComponent.<Camera>().layerCullDistances = dist_obj;
//camera.layerCullDistances = dist_ter;
//camera.layerCullDistances = dist_obj;
}


function Update ()
{
	x_new = pl.transform.position.x;
	z_new = pl.transform.position.z;

	if (Input.GetAxis("Mouse X")==0)
	{
	//Debug.Log("Mouse stop");
	timeLeft-=1;
	//Debug.Log(timeLeft);
	
	if ((x_new-x_prev)!=0 || (z_new-z_prev)!=0)
		{
		pl_mov = true;
		}
		
	else if ((x_new-x_prev)<=0.01 && (z_new-z_prev)<=0.01)
		{
		pl_mov = false;
		}
	
}

	if (Input.GetAxis("Mouse X")!=0 || pl_mov == true)
	{
		timeLeft=60;
		textContr.SetActive(false);
	}
	
	if (timeLeft <= 0)
			{
			textContr.SetActive(true);
			}

	x_prev = x_new;
	z_prev = z_new;


}