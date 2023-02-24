

import { extend, useFrame, useThree } from '@react-three/fiber'
// import { Html } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react';
import { OrbitControls } from  'three/examples/jsm/controls/OrbitControls';
import Galaxy from './Galaxy';
import * as dat from 'lil-gui';

extend({ OrbitControls })

function CanvasThree() {

    // const gui = new dat.GUI({width: 200})
    // const { radius } = useControls({
    //     radius: 5
    // })

    const parameters = {};
    parameters.radius = 5;

    const sphereRef = useRef();
    const galaxyRef = useRef();

    const { camera, gl } = useThree();
    const three = useThree();
    console.log('Three: ', three);
    console.log('OrbitControls: ', OrbitControls);
    camera.position.setX(2.5781791451999068);
    // camera.position.setX(2.033545111287152);
    // camera.position.setY(3.139568261539186);
    camera.position.setY(6.095874704344465); //def4
    // camera.position.setZ(5.84525691221428);
    camera.position.setZ(6.925058504972974);
    camera.rotation.x = -0.9082630596881763;//def0.7
    camera.rotation.y = 0.14012055982797003;
    camera.rotation.z = 0.11905700521276794;
    // camera.zoom = 1.8;
    // camera.far = 10;
    // camera.near = 2;
    // console.log(galaxyRef.current);
    useFrame((state, delta) => {
        // console.log(delta);
        // sphereRef.current.rotation.y += delta - 0.016;
        sphereRef.current.rotation.y += 0.009;
        console.log(delta);
        // galaxyRef.current.rotation.y += delta;
        // console.log(camera.position);
        // console.log(camera.aspect);
        // camera.zoom = 0.8;
        // camera.near = 0.9;
        // console.log(camera.rotation);
        // console.log(camera.zoom);
        // console.log(camera.near);
        // console.log(camera.far);

    })

    // useEffect(()=>{
    //     gui.add(parameters, 'radius').min(0.01).max(20).step(0.01);
    //     console.log()
    // },[parameters.radius, gui]);

    return ( 
        <>
            <orbitControls args={[camera, gl.domElement]} enableRotate={false} enableZoom={false} />  
            <Galaxy ref={galaxyRef}/>
            <mesh ref={sphereRef}>
                {/* <sphereGeometry  args={[1,9,9]} />
                <meshNormalMaterial wireframe={true}/> */}
            </mesh> 
            {/* <Html
                position={[-10, 1, 0]}
                wrapperClass="hero-text"
            >Flavio Angulo</Html> */}
        </>
     );
}

export default CanvasThree;