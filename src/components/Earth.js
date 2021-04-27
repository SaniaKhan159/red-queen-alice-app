import React from "react";
import Background1 from "./Background1.js";
import Background2 from "./Background2.js";
import Foreground1 from "./Foreground1.js";
import Foreground2 from "./Foreground2.js";
import useWebAnimations from "@wellyshen/use-web-animations";

export const Earth = () => {
    const { ref,  getAnimation } = useWebAnimations({
        playbackRate: 1,
        keyframes: 
        { transform: "translateY(0)" ,
          transform: "translateY(-100%)" },
        animationOptions: {
            easing: "steps(7, end)",
            direction: "reverse",
            duration: 600,
            iterations: "Infinity",
        }
    });

        
   
    const redQueen_alice = getAnimation();
    const sceneries = [Foreground1, Foreground2, Background1, Background2];
    const adjustBackgroundPlayback = () => {
        if(redQueen_alice.playbackRate < .8){
            sceneries.forEach(function(anim){
                anim.playbackRate = redQueen_alice.playbackRate/2 * -1;
            });
        }
        else if(redQueen_alice.playbackRate > 1.2){
            sceneries.forEach(function(anim){
                anim.playbackRate = redQueen_alice.playbackRate/2;
            });
        }
        else{
            sceneries.forEach(function(anim){
                anim.playbackRate = 0;
            });
        }
    }
    
    setInterval(() => {
        if(redQueen_alice.playbackRate > .4){
            redQueen_alice.playbackRate *= .9;
        }
        adjustBackgroundPlayback();
    },3000);
    
    var goFaster = () => {
        redQueen_alice.playbackRate *= 1.1;
        adjustBackgroundPlayback();
    }

    document.addEventListener("click", goFaster);
    
    return (
        <div className="earth">
            <div id="red-queen_and_alice">
                <img ref={ref}
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
                    alt="Alice and Red Queen running to stay in place"
                />
            </div>
        </div>
    )
}
export default Earth;