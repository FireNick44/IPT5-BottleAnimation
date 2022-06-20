import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


function main(){
  const scene = new THREE.Scene();

  var box = genObject(3,3,3);
  scene.add(box);

  //var floor = genFloor(10);
  //scene.add(floor);

  const camera = new THREE.PerspectiveCamera(
    50, 
    window.innerWidth / window.innerHeight, 
    1, 
    1000 
  );

  camera.position.setZ(30);


  const renderer = new THREE.WebGLRenderer({
    //select canvas
    canvas: document.getElementById('bg'),
  });
  
  //set ratio + size
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setPixelRatio( window.devicePixelRatio );

  const gridHelper = new THREE.GridHelper(200, 50);
  scene.add(gridHelper);
  
  //const controls = new THREE.OrbitControls(camera);
  var controls = new OrbitControls(camera, renderer.domElement);
  
  update(renderer, scene, camera, controls);
}

function genObject(x, y, z){
  var geo = new THREE.BoxGeometry(x, y, z);
  var mat = new THREE.MeshBasicMaterial({
    color: 0xffffff
  });

  var mesh = new THREE.Mesh(geo, mat);
  return mesh;
}

function genFloor(x, y){
  var geo = new THREE.PlaneGeometry(x, y);
  var mat = new THREE.MeshBasicMaterial({
    color: 0xffffff, 
    side: THREE.DoubleSide
  });

  var mesh = new THREE.Mesh(geo, mat);
  return mesh;
}

function update(renderer, scene, camera, controls){
  renderer.render(scene, camera);

  controls.update();

  requestAnimationFrame(function() {
    update(renderer, scene, camera, controls);
  });
  
}


console.log('running main');
main();







//const pointLight = new THREE.PointLight(0xffffff);
//pointLight.position.set(5,5,5);

//scene.add(pointLight);




