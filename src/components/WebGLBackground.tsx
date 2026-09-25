"use client";
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useMemo } from 'react';

function Starfield(props: any) {
  const ref = useRef<any>(null);
  
  const positions = useMemo(() => {
    const count = 3500;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Bound particles within a safe depth box far from the camera lens
      pos[i * 3] = (Math.random() - 0.5) * 6;      // x: -3 to 3
      pos[i * 3 + 1] = (Math.random() - 0.5) * 5;  // y: -2.5 to 2.5
      pos[i * 3 + 2] = (Math.random() - 0.5) * 3 - 0.5; // z: -2.0 to 1.0 (camera is at 3.0)
    }
    return pos;
  }, []);
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 25;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.0035}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.55}
        />
      </Points>
    </group>
  );
}

export default function WebGLBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#050505]">
      {/* Subtle Monochrome Ambient Radial Glow */}
      <div className="absolute top-[10%] left-[20%] w-[50%] h-[50%] rounded-full bg-[#18181b] opacity-25 blur-[140px]" />
      <div className="absolute bottom-[10%] right-[20%] w-[50%] h-[50%] rounded-full bg-[#18181b] opacity-20 blur-[160px]" />

      {/* Cyber Perspective Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 75%)'
        }}
      />

      {/* SVG Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay z-0" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />
      
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <Starfield />
        </Canvas>
      </div>
    </div>
  );
}
