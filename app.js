//variables for setup

let container;
let camera;
let renderer;
let scene;
let house;

function init(){
    container = document.querySelector('.scene');

    //create scene
    const scene = new THREE.Scene();

    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 500;

    //camera setup
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far );
    camera.position.set(0, 0, 50);

    //light
    hlight = new THREE.AmbientLight (0x404040, 100);
    scene.add(hlight);


    //Renderer
    renderer = new THREE.webGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    //load model
    let loader = new THREE.GLTFLoader();
    loader.load('./3D./scene.gltf', function(gltf){
        scene.add(gltf.scene);
        renderer.render(scene, camera);
    });


    init();
}
<script>
        //scene
        const scene = new THREE.Scene();

        //camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        //renderer
        const renderer = new THREE.webGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        //renderer.setPixelRatio(Window.devicePixelRatio);
        document.body.appendChild(renderer.domElement);

        const geometry = new THREE.SphereGeometry(10, 10, 10)
        const material = new THREE.MeshNormalMaterial({wireframe: true })
        const sphere = new THREE.Mesh(geometry, material)
        scene.add(sphere)

        camera.position.z =70

        const animate = () => {
            requestAnimationFrame(animate)
            renderer.render(scene, camera)

        }

        animate()
    </script>



<script>
        let scene, camera, renderer;
        function init() {
          scene = new THREE.Scene();
          scene.background = new THREE.Color(0xdddddd);


          camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
          camera.rotation.y = 45/180*Math.PI;
          camera.position.x = 800;
          camera.position.y = 100;
          camera.position.z = 1000;


          controls = new THREE.OrbitControls(camera);
          controls.addEventListener('change', renderer);

          
          hlight = new THREE.AmbientLight (0x404040,100);
          scene.add(hlight);
          directionalLight = new THREE.DirectionalLight(0xffffff,100);
          directionalLight.position.set(0,1,0);
          directionalLight.castShadow = true;
          scene.add(directionalLight);
          light = new THREE.PointLight(0xc4c4c4,10);
          light.position.set(0,300,500);
          scene.add(light);
          light2 = new THREE.PointLight(0xc4c4c4,10);
          light2.position.set(500,100,0);
          scene.add(light2);
          light3 = new THREE.PointLight(0xc4c4c4,10);
          light3.position.set(0,100,-500);
          scene.add(light3);
          light4 = new THREE.PointLight(0xc4c4c4,10);
          light4.position.set(-500,300,500);
          scene.add(light4);
          renderer = new THREE.WebGLRenderer({antialias:true});
          renderer.setSize(window.innerWidth,window.innerHeight);
          document.body.appendChild(renderer.domElement);
          let loader = new THREE.GLTFLoader();
          loader.load('scene.gltf', function(gltf){
            car = gltf.scene.children[0];
            car.scale.set(0.5,0.5,0.5);
            scene.add(gltf.scene);
            animate();
          });
        }
        function animate() {
          renderer.render(scene,camera);
          requestAnimationFrame(animate);
        }
        init();
      </script>

