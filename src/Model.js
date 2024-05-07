import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three';
import { Html  } from '@react-three/drei'

const Model = () => {
  function loaded(){
    document.querySelector("#loading").style.display = "none"
    document.querySelector("#xp").style.display = "block"
  }
  const gltf = useLoader(GLTFLoader, '/scene.gltf')
  return (
    <>
      <primitive object={gltf.scene} >
        <Html transform distanceFactor={1} position={[-3.13, 2.56, -0.946]} scale={0.2} rotation-y={THREE.MathUtils.degToRad(90)}>
          <div>
            <iframe id='xp' onLoad={loaded} src='https://winxp.vercel.app/' style={{borderRadius: "30px",display:"none"}}  width={1090} height={770}></iframe>
            <img src='loading_xp.gif' width={1090} height={770} style={{borderRadius: "30px"}} id='loading'/>
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
        <Html transform distanceFactor={1} position={[0, 2, -3.5]} rotation-x={THREE.MathUtils.degToRad(-90)} rotation-y={THREE.MathUtils.degToRad(0)} rotation-z={THREE.MathUtils.degToRad(340)}>
            <div style={{marginTop: "210px",paddingLeft:"20px"}}>
              <a href='https://www.instagram.com/noosabaktee/' target='_blank' style={{marginBottom: "15px",display: "flex",width: "70px",height:"20px"}}></a>
              <a href='https://github.com/noosabaktee/' target='_blank' style={{marginBottom: "15px",display: "flex",width: "70px",height:"20px"}}></a>
              <a href='https://www.linkedin.com/in/rama-nusa-bakti-8a9410288/' target='_blank' style={{marginBottom: "15px",display: "flex",width: "70px",height:"20px"}}></a>
            </div>
        </Html>
      </primitive>
    </>
  )
};
export default Model;