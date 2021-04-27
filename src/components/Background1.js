import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

export const Background1 = () => {
    const { ref, playState, getAnimation } = useWebAnimations({
        keyframes:
        { transform: "translateX(100%)",
          transform: "translateX(-100%)" },
        animationOptions: {
            duration: 36000,
            iterations: "Infinity",
        }
    });

    const bgUp = () => {
        const animationBg1 = getAnimation();
        animationBg1.currentTime = animationBg1.effect.getTiming().duration / 2;
    }
    
    return (
        <div className="scenery" id="background1" ref={ref} onClick={bgUp}>
            <img id="r_pawn_upright"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" 
                alt=" "
            />

            <img id="w_rook"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
                alt=" "
            />

            <img id="palm1"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" 
                alt=" "
            />
        </div>
    )
}
export default Background1;