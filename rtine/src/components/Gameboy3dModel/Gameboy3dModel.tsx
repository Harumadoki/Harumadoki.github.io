import React, { useEffect, useRef } from "react";
import "./Gameboy3dModel.scss";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three-stdlib";

const Gameboy3dModel: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Création de la scène
    const scene = new THREE.Scene();

    // Création de la caméra
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 5, 10);

    // Création du renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio); // Pour meilleure qualité sur écrans HD

    if (refContainer.current) {
      refContainer.current.appendChild(renderer.domElement);
    }

    scene.background = new THREE.Color("#0d0e10");

    // Ajout de la lumière
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Chargement du modèle 3D
    const loader = new GLTFLoader();
    loader.load(
      `${process.env.PUBLIC_URL}/gameboy.glb`,
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(0, 0, 0);
        model.scale.set(2, 2, 2); // Augmente la taille du modèle

        // const box = new THREE.BoxHelper(model, "#0d0e10");
        // scene.add(box);
      },
      undefined,
      (error) => {
        console.error("Erreur lors du chargement du modèle :", error);
      }
    );

    // Ajout des contrôles interactifs
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Gestion du redimensionnement de la fenêtre
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (refContainer.current) {
        refContainer.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={refContainer} className="gameboy-3d-model"></div>;
};

export default Gameboy3dModel;
