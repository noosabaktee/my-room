import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three';
import { Html  } from '@react-three/drei'

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/scene.gltf')
  return (
    <>
      <primitive object={gltf.scene} >
        <Html transform distanceFactor={1} position={[-3.13, 2.56, -0.946]} scale={0.2} rotation-y={THREE.MathUtils.degToRad(90)}>
          <div>
            {/* <iframe src='https://pranx.com/windows-xp-simulator/' style={{borderRadius: "30px"}}  width={1090} height={770}></iframe> */}
            <img src='loading_xp.gif' width={1090} height={770} style={{borderRadius: "30px"}} />
          </div>
        </Html>
        <Html transform distanceFactor={1} position={[-4, 4.4, 0]} scale={1.1} rotation-y={THREE.MathUtils.degToRad(90)}>
            <div style={{paddingTop:"100px"}}>
              <div className='portfolio'>
                <a href='https://noosabaktee.netlify.app' target='_blank' className='porto'></a>
                <a href='https://pahlawan-rupiah.netlify.app' target='_blank' className='porto'></a>
              </div>
              <div className='portfolio'>
                <a href='https://ngochat.vercel.app' target='_blank' className='porto'></a>
                <a href='https://neerdle.netlify.app' target='_blank' className='porto'></a>
              </div>
              <div className='portfolio'>
                <a href='https://http://kabo.vercel.app' target='_blank' className='porto'></a>
                <a href='https://expressify-mood.netlify.app' target='_blank' className='porto'></a>
              </div>
              <div className='portfolio'>
                <a href='https://ramanusabakti.itch.io' target='_blank' className='porto'></a>
                <a href='https://tausos.netlify.app' target='_blank' className='porto'></a>
              </div>
            </div>
        </Html>
      </primitive>
    </>
  )
};
export default Model;