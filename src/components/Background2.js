import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

export const Background2 = () => {
    const { ref } = useWebAnimations({
        keyframes:
        { transform: "translateX(100%)",
          transform: "translateX(-100%)" },
        animationOptions: {
            duration: 36000,
            iterations: "Infinity",
        }
    });

    return (
        <div className="scenery" id="background2" ref={ref}>
            <img id="r_pawn"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
                alt=" "
            />

            <img id="r_knight"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
                alt=" "
            />

            <img id="palm2"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" 
                alt=" "
            />
        </div>
    )
}
export default Background2;