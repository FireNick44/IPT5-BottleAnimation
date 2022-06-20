import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();

console.log('running main');
main();

function main(){

  //var box = genObject(20,3,3);
  //scene.add(box);

  //var box1 = genObject(300,300,300);
  //scene.add(box1);

  const loader = new GLTFLoader();
  loader.load( './model/bottle3D/scene.gltf', ( gltf ) => {
    gltf.scene.scale.setScalar(2);
    gltf.scene.translateY(20);

    scene.add( gltf.scene );

  });

  const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
  scene.add( light );

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
  //renderer.setClearColor()
  renderer.setClearColor( 0x222222, 5);

  const gridHelper = new THREE.GridHelper(200, 50);
  scene.add(gridHelper);
  
  //const controls = new THREE.OrbitControls(camera);
  var controls = new OrbitControls(camera, renderer.domElement);
  
  update(renderer, scene, camera, controls);
}

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

//var rndmBox =  randObj();
//scene.add(rndmBox);


function randObj(){

  var box = genObject( 
    getRandom(-100, 100),
    getRandom(-100, 100),
    getRandom(-100, 100)
  );

box.translateX(getRandom(-100, 100));
box.translateY(getRandom(-100, 100));
box.translateZ(getRandom(-100, 100));

  return box
}

function getRandom(min, max){
  var rndm = Math.floor(Math.random()*max);
  var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  
  return rndm * plusOrMinus;
}

