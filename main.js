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

//Figura principal (Dodecaedro)
const geometria1 = new THREE.IcosahedronGeometry(7,0)
const material1 = new THREE.MeshStandardMaterial({color: 0xFC4C4E, wireframe: false});
const figura1 = new THREE.Mesh(geometria1, material1);

//Segunda figura (Caja)
const geometria2 = new THREE.BoxGeometry(3,3,3);
const material2 = new THREE.MeshStandardMaterial({color: 0x028A0F, wireframe: false});
const figura2 = new THREE.Mesh(geometria2, material2);

//Tercera figura (Cilindro)
const geometria3 = new THREE.CylinderGeometry(2,2,5,6);
const material3 = new THREE.MeshStandardMaterial({color: 0x1167B1, wireframe: false});
const figura3 = new THREE.Mesh(geometria3, material3);

//Cuarta Figura (Octahedro)
const geometria4 = new THREE.OctahedronGeometry(3,0);
const material4 = new THREE.MeshStandardMaterial({color: 0xFFDC00, wireframe: false});
const figura4 = new THREE.Mesh(geometria4, material4);

//Quinta Figura (Cono)
const geometria5 = new THREE.ConeGeometry(5,6,4)
const material5 = new THREE.MeshStandardMaterial({color: 0xff6600, wireframe: false});
const figura5 = new THREE.Mesh(geometria5, material5);

//Añade todas las figuras a la escena
escena.add(figura1,figura2,figura3,figura4,figura5);


//Posicion figura 2
figura2.position.y = 10;
figura2.position.x = 10;
figura2.position.z = 10;


//Posicion figura 3
figura3.position.y = 10;
figura3.position.x = -10;
figura3.position.z = 10;

//Posicion figura 4
figura4.position.y = -9;
figura4.position.x = -10;
figura4.position.z = 10;

//Posicon figura 5
figura5.position.y = -9;
figura5.position.x = 10;
figura5.position.z = -10;


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
const texturaEsp = new THREE.TextureLoader().load('fondo2.jpg')
escena.background = texturaEsp;

//Animacion continua
function animate(){
  requestAnimationFrame(animate);
  
  //animacion continua de figura 1
  figura1.rotation.x += 0.002;
  figura1.rotation.y += 0.003;
  
  //animacion de figura 2
  figura2.rotation.x += 0.03;
  figura2.rotation.z += 0.03;
  
  //Animacion de figura 3
  figura3.rotation.x += 0.02;
  figura3.rotation.z += 0.05;

  //Animacion de Figura 4
  figura4.rotation.y += 0.04;

  figura5.rotation.z += 0.05;
  figura5.rotation.y += 0.03;

  //actualizacion de control
  control.update()
  
  //Ajustes de rotacion automatica
  control.autoRotate=true;
  control.autoRotateSpeed = 3;
  
  render.setPixelRatio(window.devicePixelRatio);
  render.setSize(window.innerWidth,window.innerHeight);

  render.render(escena,camara);
}

animate();

function movimientoSexy(){
  const t = document.body.getBoundingClientRect().top;

 //Velocidad de rotacion
 control.autoRotateSpeed= 20;

 //animacion continua de figura 1
 figura1.rotation.x += 0.04;
 figura1.rotation.y += 0.06;
 
 //animacion de figura 2
 figura2.rotation.x += 0.06;
 figura2.rotation.z += 0.06;
 
 //Animacion de figura 3
 figura3.rotation.x += 0.04;
 figura3.rotation.z += 0.10;

 //Animacion de Figura 4
 figura4.rotation.y += 0.08;

 figura5.rotation.z += 0.10;
 figura5.rotation.y += 0.07;

 
}

document.body.onscroll = movimientoSexy