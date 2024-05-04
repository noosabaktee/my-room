import { Canvas } from '@react-three/fiber'
import Model from './Model'
import { Html  } from '@react-three/drei'
import { useState } from 'react';
import * as THREE from 'three';
import './App.css'

import { Camera } from './Camera';


function App() {
  const body = [
    {title: "Hello World", content:"Are you ready?"},
    {title: "Hello World", content:"Are you ready 2?"},
    {title: "Hello World", content:"Are you ready 3?"},
    {title: "Hello World", content:"Are you ready?"},
    {title: "Hello World", content:"Are you ready?"},
    {title: "Hello World", content:"Are you ready?"},
    {title: "Hello World", content:"Are you ready?"},
    {title: "Hello World", content:"Are you ready?"}
  ]

  const [pos, setPos] = useState(0)
  const [isTurnOn, setIsTurnOn] = useState(false)
  const [poinIntensity, setPoinIntensity] = useState(5)
  const [directionalIntensity, setDirectionalIntensity] = useState(0)

  const turnOn = () => {
    if(!isTurnOn){
      setPoinIntensity(0)
      setDirectionalIntensity(1)
      setIsTurnOn(true)
    }else{
      setPoinIntensity(5)
      setDirectionalIntensity(0)
      setIsTurnOn(false)
    }
  }
  return (
    <div id="App">
      <div id="canvas">
        <Canvas >
          <Camera pos={pos} setPos={setPos}/>
          <Model />
          <pointLight color="white" position={[0.442, 2.531, -2.971]} intensity={poinIntensity} decay={2}/>
          <directionalLight color="white" position={[5, 11, 9]} intensity={directionalIntensity}/>
        </Canvas>
      </div>
      <div id="content">
        <h1>{body[pos].title}</h1>
        <p>{body[pos].content}</p>
        <div>
          {pos > 0 &&
            <button onClick={() => {setPos(pos-1)}}>Back</button>
          }
          {pos < 7 &&
            <button onClick={() => {setPos(pos+1)}}>Next</button>
          }
        </div>
        <button onClick={turnOn}>Turn {isTurnOn ? 'Off' : 'On'}</button>
      </div>
    </div>
  )
}

export default App;
