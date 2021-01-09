const THREE = require('./three');

function iniciar(){
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;

    //Criar um cubo
    var cubeGeometry = new THREE.BoxGeometry(6, 4, 6);
    var cubeMaterial = new THREE.MeshLambertMaterial({color:'red'});
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;
    cube.position.x = 0;  
    cube.position.y = 0;  
    cube.position.z = 0;

    scene.add(cube);

    //criar um plano
    var planeGeometry = new THREE.planeGeometry(20,20);
    var planeMaterial = new THREE.MeshLambertMaterial({color: 0xccccccc});
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;

    //determinar a posição do plano
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 0;
    plane.position.y = -2;
    plane.position.z = 0;
    
    //adicionar o plano à cena
    scene.add(plane);

    //posicionar a camera e apontar para o centro da cena
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 15;

}