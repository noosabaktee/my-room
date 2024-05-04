import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera  } from '@react-three/drei'
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js'

export const Camera = (props) => {
    let target = [
      {move: new THREE.Vector3(9,11,12),rotate:new THREE.Vector3(THREE.MathUtils.degToRad(-34),THREE.MathUtils.degToRad(31),THREE.MathUtils.degToRad(20))}, // Init
      {move: new THREE.Vector3(-1.7,4,3.2),rotate:new THREE.Vector3(THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(90),THREE.MathUtils.degToRad(0))}, // Poster
      {move: new THREE.Vector3(3.5,5.2,-1),rotate:new THREE.Vector3(THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(0))}, // Poster
      {move: new THREE.Vector3(2.6,2.7,0.2),rotate:new THREE.Vector3(THREE.MathUtils.degToRad(-90),THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(-90))}, // Newspaper
      {move: new THREE.Vector3(-1.8,4.7,-1.8),rotate:new THREE.Vector3(THREE.MathUtils.degToRad(-30),THREE.MathUtils.degToRad(60),THREE.MathUtils.degToRad(30))}, // Motivation
      {move: new THREE.Vector3(-1.5,4.4,0),rotate:new THREE.Vector3(THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(90),THREE.MathUtils.degToRad(0))}, // Projects
      {move: new THREE.Vector3(-2.3,2.5,-0.9),rotate:new THREE.Vector3(THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(90),THREE.MathUtils.degToRad(0))}, // Computer
      {move: new THREE.Vector3(0,3,-3.3),rotate:new THREE.Vector3(THREE.MathUtils.degToRad(-90),THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(0))}, // Ipad
    ]
    const [cameraPosition, setCameraPosition] = useState(target[0].move)
    const [cameraRotation, setCameraRotation] = useState(target[0].rotate)
    const ref = useRef();
    useFrame(() => {
      TWEEN.update()
      if(ref.current) {
        new TWEEN.Tween(cameraPosition)
        .to(target[props.pos].move, 1500)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
          setCameraPosition(cameraPosition)
        })
        .start()
        new TWEEN.Tween(cameraRotation)
        .to(target[props.pos].rotate, 1500)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
          setCameraRotation(cameraRotation)
        })
        .start()
        ref.current.position.copy(cameraPosition)
        ref.current.rotation.x = cameraRotation.x
        ref.current.rotation.y = cameraRotation.y
        ref.current.rotation.z = cameraRotation.z
      }
    });
  
    return <PerspectiveCamera makeDefault 
    ref={ref}
    position={cameraPosition} 
    rotation={cameraRotation}
    />
  }
  