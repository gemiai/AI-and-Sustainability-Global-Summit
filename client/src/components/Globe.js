import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Globe = () => {
    const mountRef = useRef(null);
    const sceneRef = useRef(null);
    const rendererRef = useRef(null);
    const globeRef = useRef(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Camera setup
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 3;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ 
            alpha: true,
            antialias: true 
        });
        renderer.setSize(400, 400);
        renderer.setClearColor(0x000000, 0);
        rendererRef.current = renderer;

        // Create Earth geometry
        const geometry = new THREE.SphereGeometry(1, 64, 64);
        
        // Create Earth material with texture
        const textureLoader = new THREE.TextureLoader();
        const earthTexture = textureLoader.load('/earth.png');
        const material = new THREE.MeshPhongMaterial({
            map: earthTexture,
            transparent: true,
            opacity: 0.8
        });

        // Create Earth mesh
        const globe = new THREE.Mesh(geometry, material);
        globeRef.current = globe;
        scene.add(globe);

        // Add lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 3, 5);
        scene.add(directionalLight);

        // Add to DOM
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            
            if (globeRef.current) {
                globeRef.current.rotation.y += 0.005;
            }
            
            renderer.render(scene, camera);
        };
        animate();

        // Handle window resize
        const handleResize = () => {
            const width = 400;
            const height = 400;
            
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return (
        <div 
            ref={mountRef} 
            className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] flex items-center justify-center"
        />
    );
};

export default Globe; 