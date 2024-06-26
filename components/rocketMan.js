import * as THREE from 'three'
import { useState, useEffect, useRef, useCallback } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'

import { RocketManSpinner, RocketManContainer } from './rocketManLoader'

// function easeOutCirc(x) {
//   return Math.sqrt( 1- Math.pow(x - 1, 4) )
// }

const RocketMan = () => {

  const refContainer = useRef();
  const [ loading, setLoading ] = useState(true);
  const [ renderer, setRenderer ] = useState();
  const [ _camera, setCamera ] = useState();
  const [ target ]= useState(new THREE.Vector3(-0.5, 1.2, 0));
  const [ initialCameraPosition ] = useState(new THREE.Vector3(20 * Math.sin(0.2 * Math.PI), 20, 20 * Math.cos(0.2 * Math.PI)));
  const [ scene ] = useState(new THREE.Scene());
  const [ _controls, setControls ] = useState();

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer;
    if(container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [renderer])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if(container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      renderer.shadowMap.enabled = true,
      renderer.shadowMap.type = THREE.PCFShadowMap;
      setRenderer(renderer);

      const scale = scH * 0.005 + 4.8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale + 0.5,
        scale,
        -scale,
        0.01,
        50000
      );
      camera.position.copy(initialCameraPosition);
      camera.zoom = 4
      camera.updateProjectionMatrix();
      camera.lookAt(target);
      setCamera(camera);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 0.6);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight( 0xccccccc, 1);
      directionalLight.position.set(0, 1, 0)
      directionalLight.castShadow = true;
      scene.add( directionalLight );

      directionalLight.shadow.mapSize.width = 512; // default
      directionalLight.shadow.mapSize.height = 512; // default
      directionalLight.shadow.camera.near = 0.5; // default
      directionalLight.shadow.camera.far = 500; // default
      

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target
      setControls(controls);

      loadGLTFModel(scene, '/rocketMan.glb', {
        recieveShadow: true,
        castShadow: true
      }).then(() => {
        animate()
        setLoading(false);
      })

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)
        frame = frame <= 100 ? frame  + 1 : frame 
        
        if(frame <= 100) {
          // const p = initialCameraPosition
          // const rootSpeed = -easeOutCirc(frame / 120 ) * Math.PI * 20
          
          camera.position.y = 10
          camera.position.x = -20
          /* p.x * Math.cos(rootSpeed) * p.z * Math.sin(rootSpeed) */
          camera.position.z = 40
          /* p.z * Math.cos(rootSpeed) * p.x * Math.sin(rootSpeed) */
          
          camera.lookAt(target)
        } else {
          controls.update();
        }
        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.dispose();

      }

    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [renderer, handleWindowResize])

  return (
    <RocketManContainer ref={refContainer}>{loading && <RocketManSpinner />}</RocketManContainer>
  )

}

export default RocketMan;