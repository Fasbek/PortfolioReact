// import { useFrame } from "@react-three/fiber";

import { extend, useFrame } from "@react-three/fiber";
import { MeshBasicMaterial, PointsMaterial } from "three";
import * as THREE from 'three';
import * as dat from 'lil-gui';
import { useControls } from 'leva'
import { useEffect, useMemo, useRef } from "react";
extend({PointsMaterial})

function Galaxy() {

    const galaxyRef = useRef();

    // useFrame(() => {
    //     console.log('En useFrame');
    //     // sphereRef.current.rotation.y += 0.01;
    // })

    // Debug
    // const gui = new dat.GUI({width: 200})
    const { radius } = useControls({
        radius: 7 //bef5
    })

    const parameters = {};
    parameters.radius = radius;
    parameters.verticesCount = 100000;
    parameters.spin = 0.5;
    parameters.branches = 4;
    parameters.randomness = 0.75;
    parameters.randomnessPower = 2;
    parameters.size = 0.02;
    parameters.insideColor = '#ff6030';
    parameters.outsideColor = '#1b3984'

    const positions = new Float32Array(parameters.verticesCount * 3);
    const colors = new Float32Array(parameters.verticesCount * 3);
    console.log(galaxyRef);
    useEffect(()=>{

        const colorInside = new THREE.Color(parameters.insideColor);
        const colorOutside = new THREE.Color(parameters.outsideColor);
    
        for(let i = 0; i <= parameters.verticesCount; i++){
            const i3  = i * 3;
    
            // Position
            const radius = Math.random() * parameters.radius;
            const spinAngle = radius * parameters.spin
            const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2;
    
            const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 1 ? 1 : -1) * parameters.randomness * radius;
            const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 1 ? 1 : -1) * parameters.randomness * radius;
            const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 1 ? 1 : -1) * parameters.randomness * radius;
            
            positions[i3] = Math.cos(branchAngle + spinAngle -0.5) * radius + randomX; //bef sin-0.5
            positions[i3 + 1] = randomY + (Math.random() - 0.5) * 0.4;  //bef only random Y
            positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;
        
            // Color
            const mixedColor = colorInside.clone();
            mixedColor.lerp(colorOutside, radius / parameters.radius);
    
            colors[i3] = mixedColor.r;
            colors[i3 + 1] = mixedColor.g;
            colors[i3 + 2] = mixedColor.b;
    
        }
    });

    useFrame((state, delta) => {
        // console.log(delta);
        galaxyRef.current.rotation.y += delta - 0.011;
    });

    // const parameters = {};
    // parameters.radius = radius;
    // parameters.verticesCount = 100000;
    // parameters.spin = 0.5;
    // parameters.branches = 3;
    // parameters.randomness = 0.5;
    // parameters.randomnessPower = 3;
    // parameters.size = 0.02;
    // parameters.insideColor = '#ff6030';
    // parameters.outsideColor = '#1b3984'
    // const positions = new Float32Array(parameters.verticesCount * 3);
    // const colors = new Float32Array(parameters.verticesCount * 3);

    // const colorInside = new THREE.Color(parameters.insideColor);
    // const colorOutside = new THREE.Color(parameters.outsideColor);

    // for(let i = 0; i <= parameters.verticesCount; i++){
    //     const i3  = i * 3;

    //     // Position
    //     const radius = Math.random() * parameters.radius;
    //     const spinAngle = radius * parameters.spin
    //     const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2;

    //     const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 1 ? 1 : -1) * parameters.randomness * radius;
    //     const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 1 ? 1 : -1) * parameters.randomness * radius;
    //     const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 1 ? 1 : -1) * parameters.randomness * radius;
        
    //     positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
    //     positions[i3 + 1] = randomY;
    //     positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;
    
    //     // Color
    //     const mixedColor = colorInside.clone();
    //     mixedColor.lerp(colorOutside, radius / parameters.radius);

    //     colors[i3] = mixedColor.r;
    //     colors[i3 + 1] = mixedColor.g;
    //     colors[i3 + 2] = mixedColor.b;

    // }

    // gui.add(parameters, 'count').min(100).max(1000000).step(100).onFinishChange(generateGalaxy);
    // gui.add(parameters, 'size').min(0.001).max(0.1).step(0.001).onFinishChange(generateGalaxy);
    // gui.add(parameters, 'radius').min(0.01).max(20).step(0.01).onFinishChange(generateGalaxy);
    // gui.add(parameters, 'branches').min(2).max(20).step(1).onFinishChange(generateGalaxy);
    // gui.add(parameters, 'spin').min(-5).max(5).step(0.01).onFinishChange(generateGalaxy);
    // gui.add(parameters, 'randomness').min(0).max(2).step(0.01).onFinishChange(generateGalaxy);
    // gui.add(parameters, 'randomnessPower').min(1).max(10).step(0.001).onFinishChange(generateGalaxy);
    // gui.addColor(parameters, 'insideColor').onFinishChange(generateGalaxy);
    // gui.addColor(parameters, 'outsideColor').onFinishChange(generateGalaxy);

    // let material = new THREE.PointsMaterial({
    //     size: parameters.size,
    //     sizeAttenuation: true,
    //     depthWrite: false,
    //     blending: THREE.AdditiveBlending,
    //     vertexColors: true,
    //     // color: '#ff5588'
    // })

    return ( 
        <mesh ref={galaxyRef} position-x={3}>
            <points>
                <bufferGeometry>
                    <bufferAttribute 
                        attach="attributes-position"
                        count={ parameters.verticesCount }
                        itemSize={ 3 }
                        array={positions}
                    />
                    <bufferAttribute 
                        attach="attributes-color"
                        count={ parameters.verticesCount }
                        itemSize={ 3 }
                        array={ colors }
                    />
                </bufferGeometry>
                <pointsMaterial 
                    // attach="material"
                    size={ parameters.size }
                    sizeAttenuation={ true }
                    // depthWrite={ false }
                    blending={ THREE.AdditiveBlending }
                    vertexColors= { true }
                    // color={"#ff5588"}
                />
            </points>
            {/* <MeshBasicMaterial color="red" /> */}
            {/* <sphereGeometry />
            <meshNormalMaterial color="grey" wireframe /> */}
        </mesh>
     );
}

export default Galaxy;