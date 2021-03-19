using UnityEngine;
public class MouseLook : MonoBehaviour {
	public float sensetiv = 5;
	void Update () {
		transform.rotation *= Quaternion.Euler(0,sensetiv * Time.deltaTime * Input.GetAxis("Mouse X"),0);
	}
}