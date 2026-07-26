"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import * as THREE from "three"

// ─── Ethereal Particle Sphere ────────────────────────────────────────
function ParticleSphere() {
  const meshRef = useRef<THREE.Points>(null!)
  const { pointer } = useThree()

  const count = 3000
  const radius = 1.8

  const { positions, sizes, alphas } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    const alphas = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      // Fibonacci sphere distribution
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count)
      const theta = Math.PI * (1 + Math.sqrt(5)) * i

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)

      // Very small particles — constellation-like
      sizes[i] = Math.random() * 0.6 + 0.15
      // Low opacity for airy, ethereal feel  
      alphas[i] = Math.random() * 0.35 + 0.08
    }

    return { positions, sizes, alphas }
  }, [])

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1 },
        uColor1: { value: new THREE.Color("#4f46e5") }, // Indigo
        uColor2: { value: new THREE.Color("#ec4899") }, // Pink
        uColor3: { value: new THREE.Color("#0ea5e9") }, // Sky Blue
      },
      vertexShader: `
        attribute float aSize;
        attribute float aAlpha;
        uniform float uTime;
        uniform float uPixelRatio;
        varying float vAlpha;
        varying float vNoise;
        
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
        
        float snoise(vec3 v) {
          const vec2 C = vec2(1.0/6.0, 1.0/3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
          vec3 i  = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);
          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;
          i = mod289(i);
          vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
          float n_ = 0.142857142857;
          vec3 ns = n_ * D.wyz - D.xzx;
          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_);
          vec4 x = x_ *ns.x + ns.yyyy;
          vec4 y = y_ *ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);
          vec4 b0 = vec4(x.xy, y.xy);
          vec4 b1 = vec4(x.zw, y.zw);
          vec4 s0 = floor(b0)*2.0 + 1.0;
          vec4 s1 = floor(b1)*2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));
          vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
          vec3 p0 = vec3(a0.xy,h.x);
          vec3 p1 = vec3(a0.zw,h.y);
          vec3 p2 = vec3(a1.xy,h.z);
          vec3 p3 = vec3(a1.zw,h.w);
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
          p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
        }
        
        void main() {
          // Gentle organic distortion
          float noise = snoise(position * 0.5 + uTime * 0.1);
          float displacement = noise * 0.25;
          
          vec3 newPosition = position + normalize(position) * displacement;
          
          vNoise = noise;
          vAlpha = aAlpha;
          
          vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0);
          
          gl_PointSize = aSize * uPixelRatio * (80.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        varying float vAlpha;
        varying float vNoise;
        
        void main() {
          // Hard-edged tiny dots (not soft blobs)
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          // Crisp circle with slight anti-aliasing at edge
          float alpha = 1.0 - smoothstep(0.35, 0.5, dist);
          
          // Colorful depth variation
          vec3 color = mix(uColor1, uColor2, smoothstep(-0.3, 0.2, vNoise));
          color = mix(color, uColor3, smoothstep(0.2, 0.6, vNoise));
          
          alpha *= vAlpha;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    })
  }, [])

  const mouseCurrent = useRef({ x: 0, y: 0 })

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    shaderMaterial.uniforms.uTime.value = time

    // Smooth mouse lerp
    mouseCurrent.current.x += (pointer.x - mouseCurrent.current.x) * 0.025
    mouseCurrent.current.y += (pointer.y - mouseCurrent.current.y) * 0.025

    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.05 + mouseCurrent.current.x * 0.5
      meshRef.current.rotation.x = Math.sin(time * 0.03) * 0.12 + mouseCurrent.current.y * 0.3
    }
  })

  return (
    <points ref={meshRef} material={shaderMaterial}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-aSize" count={count} array={sizes} itemSize={1} />
        <bufferAttribute attach="attributes-aAlpha" count={count} array={alphas} itemSize={1} />
      </bufferGeometry>
    </points>
  )
}

// ─── Thin Orbit Lines ────────────────────────────────────────────────
function FloatingRing({ radius: r, speed, tilt, opacity, color }: { radius: number; speed: number; tilt: number; opacity: number; color: string }) {
  const ref = useRef<THREE.Line>(null!)

  const geometry = useMemo(() => {
    const points: THREE.Vector3[] = []
    const segments = 256
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2
      points.push(new THREE.Vector3(Math.cos(angle) * r, 0, Math.sin(angle) * r))
    }
    return new THREE.BufferGeometry().setFromPoints(points)
  }, [r])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = tilt + Math.sin(t * speed * 0.5) * 0.06
    ref.current.rotation.y = t * speed
    ref.current.rotation.z = Math.cos(t * speed * 0.3) * 0.03
  })

  return (
    <line ref={ref as any} geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={opacity} />
    </line>
  )
}

// ─── Orbiting Dots ───────────────────────────────────────────────────
function OrbitingDots({ color }: { color: string }) {
  const groupRef = useRef<THREE.Group>(null!)
  const dotCount = 6

  const dots = useMemo(() => {
    return Array.from({ length: dotCount }, (_, i) => ({
      orbitRadius: 2.4 + Math.random() * 0.5,
      speed: 0.12 + Math.random() * 0.18,
      phase: (Math.PI * 2 * i) / dotCount,
      yOffset: (Math.random() - 0.5) * 1.0,
      size: 0.012 + Math.random() * 0.015,
    }))
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (!groupRef.current) return
    groupRef.current.children.forEach((child, i) => {
      const dot = dots[i]
      const angle = t * dot.speed + dot.phase
      child.position.x = Math.cos(angle) * dot.orbitRadius
      child.position.z = Math.sin(angle) * dot.orbitRadius
      child.position.y = dot.yOffset + Math.sin(t * 0.35 + dot.phase) * 0.2
    })
  })

  return (
    <group ref={groupRef}>
      {dots.map((dot, i) => (
        <mesh key={i}>
          <sphereGeometry args={[dot.size, 8, 8]} />
          <meshBasicMaterial color={color} transparent opacity={0.45} />
        </mesh>
      ))}
    </group>
  )
}

// ─── Connecting Lines Between Random Particles ───────────────────────
function ConstellationLines({ color }: { color: string }) {
  const ref = useRef<THREE.LineSegments>(null!)

  const geometry = useMemo(() => {
    const vertices: number[] = []
    const numLines = 40
    const radius = 1.8

    for (let i = 0; i < numLines; i++) {
      // Two random points on sphere surface
      for (let p = 0; p < 2; p++) {
        const phi = Math.acos(2 * Math.random() - 1)
        const theta = Math.random() * Math.PI * 2
        vertices.push(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        )
      }
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    return geo
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime()
    ref.current.rotation.y = t * 0.05
    ref.current.rotation.x = Math.sin(t * 0.03) * 0.12
  })

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={0.08} />
    </lineSegments>
  )
}

import { useTheme } from "@/hooks/use-theme"

// ─── Main Component ──────────────────────────────────────────────────
export default function Hero3D() {
  const { theme } = useTheme()
  const isLight = theme === 'light'
  
  const elementColor = isLight ? "#666666" : "#cccccc"
  const ringColor = isLight ? "#444444" : "#cccccc"
  const ringOpacities = isLight ? [0.15, 0.1, 0.06] : [0.08, 0.05, 0.03]

  return (
    <div className="w-[320px] h-[320px] md:w-[480px] md:h-[480px] lg:w-[560px] lg:h-[560px] relative">
      {/* Subtle glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-foreground/[0.015] blur-3xl" />
      </div>

      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 40 }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ParticleSphere />
        <ConstellationLines color={elementColor} />
        <FloatingRing radius={2.4} speed={0.1} tilt={Math.PI * 0.38} opacity={ringOpacities[0]} color={ringColor} />
        <FloatingRing radius={2.7} speed={-0.07} tilt={Math.PI * 0.58} opacity={ringOpacities[1]} color={ringColor} />
        <FloatingRing radius={3.0} speed={0.05} tilt={Math.PI * 0.18} opacity={ringOpacities[2]} color={ringColor} />
        <OrbitingDots color={elementColor} />
      </Canvas>
    </div>
  )
}
