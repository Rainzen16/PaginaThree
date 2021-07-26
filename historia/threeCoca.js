import './style.css'
import * as THREE from 'three';
import { Camera, PointLight, RGBA_ASTC_10x10_Format, Scene, SRGB8_ALPHA8_ASTC_12x10_Format } from 'three';
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

//Creacion de Escena, Camara y Render 
const escena = new THREE.Scene();
const camara = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,1000);
const render = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
})

//Configuracion del render en pantalla
render.setPixelRatio(window.devicePixelRatio);
render.setSize(window.innerWidth,window.innerHeight);

//Posicion inicial de camara
camara.position.setZ(6);

//Primera renderizacion de escena y camara
render.render(escena, camara);
 
//Fondo 
const texturaEsp = new THREE.TextureLoader().load('fondo2.jpg')
escena.background = texturaEsp;

//Iluminacion
const pointIlu = new THREE.PointLight(0xffffff);
pointIlu.position.set(10,20,20);
const ambientIlu = new THREE.AmbientLight(0xffffff, 5);
escena.add(pointIlu, ambientIlu);

////Grid
//const gridHelp = new THREE.GridHelper(200, 50);
//escena.add(gridHelp);


const control = new OrbitControls(camara, render.domElement);

const loader = new GLTFLoader();

loader.load( 'gaseo/latita.glb', function ( gltf ) {

    const canMesh = gltf.scene.children.find((child)=> child.name === "1");
	escena.add(canMesh);

}, undefined, function ( error ) {

	console.error( error );

} );


//Animacion continua
function animate(){
  requestAnimationFrame(animate);
  
  

  //actualizacion de control
  control.update()
  

  
  render.setPixelRatio(window.devicePixelRatio);
  render.setSize(window.innerWidth,window.innerHeight);

  render.render(escena,camara);
}

animate();

function movimientoSexy(){
  const t = document.body.getBoundingClientRect().top;
 
}

document.body.onscroll = movimientoSexy