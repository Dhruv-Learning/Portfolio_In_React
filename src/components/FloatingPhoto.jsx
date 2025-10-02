import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const FloatingPhoto = ({ src }) => {
  const mountRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(300, 300); // photo size
    mountRef.current.appendChild(renderer.domElement);

    // Texture (your photo)
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(src);

    // Geometry & Material
    const geometry = new THREE.PlaneGeometry(2, 2.5); // adjust size
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Animation: slow rotation & floating effect
    let t = 0;
    const animate = () => {
      t += 0.01;
      plane.rotation.y = Math.sin(t) * 0.2; // smooth rotation
      plane.position.y = Math.sin(t * 2) * 0.1; // floating effect
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      renderer.setSize(300, 300);
      camera.aspect = 300 / 300;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, [src]);

  return <div ref={mountRef} style={{ margin: "auto" }} />;
};

export default FloatingPhoto;
