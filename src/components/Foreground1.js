import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

export const Foreground1 = () => {
    const { ref, getAnimation } = useWebAnimations({
        keyframes:
        { transform: "translateX(100%)",
          transform: "translateX(-100%)" },
        animationOptions: {
            duration: 12000,
            iterations: "Infinity",
        }
    });

    const fgUp = () => {
        const animationFg1 = getAnimation();
        animationFg1.currentTime = animationFg1.effect.getTiming().duration / 2;
    }

    return (
        <div className="scenery" id="foreground1" ref={ref} onClick={fgUp}>
            <img id="palm3"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
                alt=" "
            />
        </div>
    )
}
export default Foreground1;