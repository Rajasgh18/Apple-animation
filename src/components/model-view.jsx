import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import Lights from "./lights";
import { Suspense } from "react";
import IPhone from "./iphone";
import * as THREE from "three";
import Loader from "./loader";

const ModelView = ({
    index, groupRef, gsapRef, gsapType, controllRef, setRotationState, size, item
}) => {
    return (
        <View
            index={index}
            id={gsapType}
            className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
        >
            <ambientLight intensity={10} />
            <PerspectiveCamera makeDefault position={[0, 0, 4]} />
            <Lights />
            <OrbitControls
                makeDefault
                ref={controllRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={2}
                target={new THREE.Vector3(0, 0, 0)}
                onEnd={() => setRotationState(controllRef.current.getAzimuthalAngle())}
            />
            <group ref={groupRef} name={index === 1 ? "small" : "large"} position={[0, 0, 0]}>
                <Suspense fallback={<Loader />}>
                    <IPhone
                        scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
                        item={item}
                        size={size}
                    />
                </Suspense>
            </group>
        </View>
    )
}

export default ModelView;