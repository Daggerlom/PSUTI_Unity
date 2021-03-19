using UnityEngine;
using System.Collections;

public class FpsCount : MonoBehaviour {
	private const float FPS_UPDATE_INTERVAL = 0.5f;
	private float fpsAccum = 0;
	private int fpsFrames = 0;
	private float fpsTimeLeft = FPS_UPDATE_INTERVAL;
	private float fps = 0;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		fpsTimeLeft -= Time.deltaTime;
		fpsAccum += Time.timeScale/Time.deltaTime;
		fpsFrames++;
		if (fpsTimeLeft<=0)
		{
			fps = fpsAccum/fpsFrames;
			fpsTimeLeft = FPS_UPDATE_INTERVAL;
			fpsAccum = 0;
			fpsFrames = 0;
		}
	}

	void onGUI()
	{
		GUILayout.BeginArea (new Rect(5, 5, 500, 500));
		GUILayout.Label("FPS: " + fps.ToString ("f1"));
		GUILayout.EndArea();
	}
}
