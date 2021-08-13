var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 300;

var loader = new THREE.TextureLoader();
var color = loader.load('../assets/images/earth3d/earth_color_map.jpg');
var specular = loader.load('../assets/images/earth3d/earth_specular_map.jpg');
var normal = loader.load('../assets/images/earth3d/earth_normal_map.jpg');

var geometry = new THREE.SphereGeometry(128, 128, 128);
var material = new THREE.MeshPhongMaterial({
    map: color,
    specularMap: specular,
    normalMap: normal,
    shininess: 25,
});

var group = new THREE.Group();
var sphere = new THREE.Mesh(geometry, material);
var pivot = new THREE.Object3D();


var light = new THREE.DirectionalLight(0xffffff, 1.0);
light.position.z = 250;
var ambient = new THREE.AmbientLight(0xffffff, 0.3);

camera.add(light);
pivot.add(camera);
group.add(sphere, ambient, pivot);
scene.add(group);

var renderer = new THREE.WebGLRenderer({antialias : true, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.minDistance = 150;
controls.maxDistance = 1000;

function update() {
	requestAnimationFrame(update);
    controls.update();

    renderer.setClearColor(0x000000, 0); 
	renderer.render(scene, camera);
}

update();