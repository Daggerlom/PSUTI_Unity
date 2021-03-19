function Start () {
var distances_near = new float[32];
distances_near[14] = 5;
GetComponent.<Camera>().layerCullDistances = distances_near;
}

