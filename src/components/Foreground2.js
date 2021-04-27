import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

export const Foreground2 = () => {
    const { ref, playState, getAnimation } = useWebAnimations({
        keyframes:
        { transform: "translateX(100%)",
          transform: "translateX(-100%)" },
        animationOptions: {
            duration: 12000,
            iterations: "Infinity",
        }
    });

    const animationFg2 = getAnimation();

    return (
        <div className="scenery" id="foreground2" ref={ref}>
            <img id="bush"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" 
                alt=" "
            />

            <img id="w_rook_upright"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" 
                alt=" "
            />
        </div>
    )
}
export default Foreground2;