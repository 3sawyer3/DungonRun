#pragma strict
// Instantiates 10 copies of prefab each 2 units apart from each other
public var prefab;

function Start() {
    for (var i = 0; i < 10; i++) {
        Instantiate(prefab, new Vector3(i * 2.0 F, 0, 0), Quaternion.identity);
        i++;
    }
}