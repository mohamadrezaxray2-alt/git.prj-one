// 1. Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#porsche-animation'),
    alpha: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// 2. Add lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5).normalize();
scene.add(light);

// 3. Load the 3D model
const loader = new THREE.GLTFLoader();
loader.load(
    'https://cdn.iconscout.com/3d/premium/thumb/sport-car-6848114-5606755.glb',
    function (gltf) {
        const car = gltf.scene;
        scene.add(car);

        // 4. Create the animation timeline
        const tl = gsap.timeline();

        tl.to(car.rotation, { y: Math.PI * 2, duration: 2, ease: 'power2.inOut' })
          .to(car.position, { x: 5, duration: 1, ease: 'power2.inOut' })
          .to(car.rotation, { y: Math.PI * 1.5, duration: 1, ease: 'power2.inOut' });

        // 5. Add the text after the animation
        tl.call(() => {
            const textDiv = document.createElement('div');
            textDiv.className = 'offer-text';
            textDiv.innerHTML = '<h2>Special Offer!</h2><p>Get 20% off on all rims!</p>';
            document.body.appendChild(textDiv);
        });
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

// 6. Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// 7. Animate the scene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
