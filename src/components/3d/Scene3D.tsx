import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { FloatingGeometry } from './FloatingGeometry';

export function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00BFFF" />
        
        {/* Floating geometric shapes */}
        <FloatingGeometry position={[-4, 2, -5]} geometry="octahedron" color="#A855F7" speed={0.8} />
        <FloatingGeometry position={[4, -2, -3]} geometry="torus" color="#00BFFF" speed={1.2} />
        <FloatingGeometry position={[-2, -3, -4]} geometry="sphere" color="#F59E0B" speed={0.6} />
        <FloatingGeometry position={[3, 3, -6]} geometry="box" color="#EF4444" speed={1} />
        <FloatingGeometry position={[0, -4, -7]} geometry="octahedron" color="#10B981" speed={0.9} />
        <FloatingGeometry position={[-5, 0, -5]} geometry="sphere" color="#EC4899" speed={0.7} />
        
        {/* Starfield background */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        
        {/* Interactive controls (optional) */}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}