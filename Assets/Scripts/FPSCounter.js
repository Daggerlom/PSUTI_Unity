#pragma strict

	/*	const fpsMeasurePeriod = 0.5f;
        var m_FpsAccumulator = 0;
        var m_FpsNextPeriod = 0;
        private int m_CurrentFps;
        const string display = "{0} FPS";
        private GUIText m_GuiText;*/
/*        var deltaTime = 0.0f;
        var fps = 0;

function Start () {

}

function Update () {
	//fps++;
	deltaTime += (Time.deltaTime - deltaTime) * 0.1f;
	fps = 1.0f / deltaTime;
	Debug.Log("fps "+fps);
}

*/

// Attach this to a GUIText to make a frames/second indicator.
//
// It calculates frames/second over each updateInterval,
// so the display does not keep changing wildly.
//
// It is also fairly accurate at very low FPS counts (<10).
// We do this not by simply counting frames per interval, but
// by accumulating FPS for each frame. This way we end up with
// correct overall FPS even if the interval renders something like
// 5.5 frames.

 
  

var updateInterval = 0.5;
var fps_text : GameObject; 
 
private var accum = 0.0; // FPS accumulated over the interval
private var frames = 0; // Frames drawn over the interval
private var timeleft : float; // Left time for current interval
 
function Start()
{

    timeleft = updateInterval;  
    fps_text = GameObject.Find("FPS_text");
}
 
function Update()
{
    timeleft -= Time.deltaTime;
    accum += Time.timeScale/Time.deltaTime;
    ++frames;
 
    // Interval ended - update GUI text and start new interval
    if( timeleft <= 0.0 )
    {
        // display two fractional digits (f2 format)
      /*  fps_text.text = "" + (accum/frames).ToString("f2");
        timeleft = updateInterval;
        accum = 0.0;
        frames = 0;*/
        Debug.Log((accum/frames).ToString("f2"));
    }
}
