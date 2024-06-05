import React, { useEffect, useRef } from 'react';
import './Gameboy3dModel.scss';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three-stdlib';

const Gameboy3dModel: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {  
    const parent = refContainer.current?.parentElement;

    if (!parent) {
      console.error('Parent container not found');
      return;
    }
    const width = parent.clientWidth;
    const height = parent.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 3, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);

    if (refContainer.current) {
      refContainer.current.appendChild(renderer.domElement);
    } else {
      console.error('refContainer is not defined');
    }

    // Set the background color to grey to help debug
    scene.background = new THREE.Color(0xaaaaaa);
    // scene.background = new THREE.Color(0xffffff);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Load the GLB model
    const loader = new GLTFLoader();
    loader.load(
      `${process.env.PUBLIC_URL}/gameboy.glb`, // Correct path to your .glb file in the public folder
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(0, 0, 0); // Position the model at the origin
        model.scale.set(1, 1, 1); // Adjust the scale as needed
        console.log('Model loaded successfully:', model);

        // Add bounding box helper to visualize the model's bounds
        const box = new THREE.BoxHelper(model, 0xff0000);
        scene.add(box);
      },
      undefined,
      (error) => {
        console.error('An error happened while loading the GLTF model', error);
      }
    );

    // Add OrbitControls to enable camera movement
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enable damping (inertia)
    controls.dampingFactor = 0.25; // Damping factor
    controls.screenSpacePanning = true; // Allow panning in screen space
    controls.maxPolarAngle = Math.PI / 2; // Limit the vertical angle

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Required for damping to work
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (refContainer.current) {
        refContainer.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={refContainer} className="gameboy-3d-model"></div>;
};

export default Gameboy3dModel;