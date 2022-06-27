import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();


function main(){

  var box = genObject(20,3,3);
  scene.add(box);

  var box1 = genObject(3,3,20);
  scene.add(box1);

  //light source 
  const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
  scene.add( light );

  //camera perspective
  const camera = new THREE.PerspectiveCamera(
    50, 
    window.innerWidth / window.innerHeight, 
    1, 
    1000 
  );
  //set Z coord to 30;
  camera.position.setZ(30);
  
  const renderer = new THREE.WebGLRenderer({
    //select canvas by id bg 
    canvas: document.getElementById('bg'),
  });
  
  //set ratio + size
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setPixelRatio( window.devicePixelRatio );
  //renderer.setClearColor()

  //grid helping layout 
  const gridHelper = new THREE.GridHelper(200, 50);
  scene.add(gridHelper);
  
  //const controls = new THREE.OrbitControls(camera);
  var controls = new OrbitControls(camera, renderer.domElement);
  
  update(renderer, scene, camera, controls);
}

//for using a new box object, with no shader or textures
function genObject(x, y, z){
  var geo = new THREE.BoxGeometry(x, y, z);
  var mat = new THREE.MeshBasicMaterial({
    color: 0x222222
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