import React from "react";
import Sky from "./Sky.js";
import Earth from "./Earth.js";
import Foreground1 from "./Foreground1.js"
import Foreground2 from "./Foreground2.js";
import Background1 from "./Background1.js";
import Background2 from "./Background2.js";

export const Wrapper = () => {
    // const { ref, playState } = useWebAnimations({
    //     playbackRate: 1,
    //     keyframes: 
    //     { transform: "translateY(0)" ,
    //       transform: "translateY(-100%)" },
    //     animationOptions: {
    //         easing: "steps(7, end)",
    //         direction: "reverse",
    //         duration: 600,
    //         iterations: "Infinity",
    //     }
    // });
    
    return(
        <div className="wrapper">
            <Sky />
            <Earth />
            <Foreground1 />
            <Foreground2 />
            <Background1 />
            <Background2 />
            {/* <div className="sky"></div>
            <div className="earth">
                <div id="red-queen_and_alice">
                    <img ref={ref}
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
                        // srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
                        alt="Alice and Red Queen running to stay in place"
                    />
                </div>
            </div>

            <div className="scenery" id="foreground1">
                <img id="palm3"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
                    // srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" 
                    alt=" "
                />
            </div>

            <div className="scenery" id="foreground2">
                <img id="bush"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
                    // srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" 
                    alt=" "
                />

                <img id="w_rook_upright"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
                    // srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" 
                    alt=" "
                />
            </div>

            <div className="scenery" id="background1">
                <img id="r_pawn_upright"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
                    // srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" 
                    alt=" "
                />

                <img id="w_rook"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
                    // srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" 
                    alt=" "
                />

                <img id="palm1"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
                    // srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" 
                    alt=" "
                />
            </div>

            <div className="scenery" id="background2">
                <img id="r_pawn"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
                    // srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" 
                    alt=" "
                />

                <img id="r_knight"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
                    // srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" 
                    alt=" "
                />

                <img id="palm2"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
                    // srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" 
                    alt=" "
                />
            </div> */}
        </div>
    );
}
export default Wrapper;