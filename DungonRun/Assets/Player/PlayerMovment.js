//#
//pragma strict
var face = 1;
var moveUp = false;
var moveDown = false;
var moveRight = false;
var moveLeft = false;


function Start() {}

function Update() {
    //Move Up
    if (Input.GetKeyDown("w")) {
        moveUp = true;
        face = 1;
    }
    if (Input.GetKeyUp("w")) {
        moveUp = false;
    }
    if (moveUp) {
        transform.Translate(Vector3.up * Time.deltaTime, Space.World);
    }
    //Move Down
    if (Input.GetKeyDown("s")) {
        moveDown = true;
        face = 2;
    }
    if (Input.GetKeyUp("s")) {
        moveDown = false;
    }
    if (moveDown) {
        transform.Translate(Vector3.down * Time.deltaTime, Space.World);
    }
    //Move right
    if (Input.GetKeyDown("d")) {
        moveRight = true;
        face = 3;
    }
    if (Input.GetKeyUp("d")) {
        moveRight = false;
    }
    if (moveRight) {
        transform.Translate(Vector3.right * Time.deltaTime, Space.World);
    }
    //Move left
    if (Input.GetKeyDown("a")) {
        moveLeft = true;
        face = 4;
    }
    if (Input.GetKeyUp("a")) {
        moveLeft = false;
    }
    if (moveLeft) {
        transform.Translate(Vector3.left * Time.deltaTime, Space.World);
    }
}