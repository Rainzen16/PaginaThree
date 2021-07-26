import './style.css'
import * as THREE from 'three';
import { Camera, PointLight, RGBA_ASTC_10x10_Format, Scene, SRGB8_ALPHA8_ASTC_12x10_Format } from 'three';
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const escena = new THREE.Scene();
const camara = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,1000);
const render = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
})

render.setPixelRatio(window.devicePixelRatio);
render.setSize(window.innerWidth,window.innerHeight);
camara.position.setZ(35);

render.render(escena, camara);

//Creacion de figuras
const geometry = new THREE.RingGeometry( 6, 4, 9 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
const mesh = new THREE.Mesh( geometry, material );
escena.add( mesh );

//Creacion de figuras
const geometry2 = new THREE.RingGeometry( 3, 1, 9 );
const material2 = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
const mesh2 = new THREE.Mesh( geometry2, material2 );
escena.add( mesh2 );

//Creacion de figuras
const geometry3 = new THREE.RingGeometry( 9, 7, 9 );
const material3 = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
const mesh3 = new THREE.Mesh( geometry3, material3 );
escena.add( mesh3 );

//Creacion de figuras
const geometry4 = new THREE.RingGeometry( 12, 10, 9 );
const material4 = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
const mesh4 = new THREE.Mesh( geometry4, material4 );
escena.add( mesh4 );

//Creacion de figuras
const geometry5 = new THREE.RingGeometry( 15, 13, 9 );
const material5 = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
const mesh5 = new THREE.Mesh( geometry5, material5 );
escena.add( mesh5 );

//Creacion de figuras
const geometry6 = new THREE.RingGeometry( 18, 16, 9 );
const material6 = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
const mesh6 = new THREE.Mesh( geometry6, material6 );
escena.add( mesh6 );

//Creacion de figuras
const geometry7 = new THREE.RingGeometry( 21, 19, 9 );
const material7 = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
const mesh7 = new THREE.Mesh( geometry7, material7 );
escena.add( mesh7 );

//Creacion de figuras
const geometry8 = new THREE.RingGeometry( 24, 22, 9 );
const material8 = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
const mesh8 = new THREE.Mesh( geometry8, material8 );
escena.add( mesh8 );

//Creacion de figuras
const geometry9 = new THREE.RingGeometry( 27, 25, 9 );
const material9 = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
const mesh9 = new THREE.Mesh( geometry9, material9 );
escena.add( mesh9 );

//Creacion de figuras
const geometry10 = new THREE.RingGeometry( 30, 28, 9 );
const material10 = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
const mesh10 = new THREE.Mesh( geometry10, material10 );
escena.add( mesh10 );

//Iluminacion
const pointIlu = new THREE.PointLight(0xffffff);
pointIlu.position.set(20,20,20);
const ambientIlu = new THREE.AmbientLight(0xffffff);
escena.add(pointIlu, ambientIlu);

////Grid
//const gridHelp = new THREE.GridHelper(200, 50);
//escena.add(gridHelp);

const control = new OrbitControls(camara, render.domElement);

//Fondo 
const texturaEsp = new THREE.TextureLoader().load('fondo3.jpg')
escena.background = texturaEsp;

//Animacion continua
function animate(){
  requestAnimationFrame(animate);
  
  mesh10.rotation.z += 0.001;
  mesh9.rotation.z += -0.002;
  mesh8.rotation.z += 0.003;
  mesh7.rotation.z += -0.004;
  mesh6.rotation.z += 0.005;
  mesh5.rotation.z += -0.007;
  mesh4.rotation.z += 0.008;
  mesh3.rotation.z += -0.009;
  mesh.rotation.z += 0.010;
  mesh2.rotation.z += -0.011;
 
 //actualizacion de control
 control.update()
  
 render.setPixelRatio(window.devicePixelRatio);
 render.setSize(window.innerWidth,window.innerHeight);

  render.render(escena,camara);
}

animate();

function movimientoSexy(){
  const t = document.body.getBoundingClientRect().top;

  mesh10.rotation.z += 0.01;
  mesh9.rotation.z += -0.02;
  mesh8.rotation.z += 0.03;
  mesh7.rotation.z += -0.04;
  mesh6.rotation.z += 0.05;
  mesh5.rotation.z += -0.07;
  mesh4.rotation.z += 0.08;
  mesh3.rotation.z += -0.09;
  mesh.rotation.z += 0.10;
  mesh2.rotation.z += -0.11;
 
}

document.body.onscroll = movimientoSexy