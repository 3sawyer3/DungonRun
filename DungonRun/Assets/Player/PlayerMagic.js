//#
//pragma strict
var useMagic = false;

function Start() {

}

function Update() {
    //Firebolt shoot
    if (Input.GetKeyDown("g")) {
        useMagic = true;
    }
    if (useMagic) {
        transform.Translate(Vector3.up * Time.deltaTime * 2, Space.World);
    }
}