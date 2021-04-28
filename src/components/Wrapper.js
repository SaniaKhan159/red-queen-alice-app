import React, { useEffect } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
let pbr = 1;
let pbr_anim = 1;

export const Wrapper = () => {
    const sceneryFrames = [
        { transform: 'translateX(100%)' },
        { transform: 'translateX(-100%)' }
    ];

    const sceneryTimingBackground = {
        duration: 36000,
        iterations: Infinity,
        playbackRate: 1,
    };

    const sceneryTimingForeground = {
        duration: 12000,
        iterations: Infinity,
        playbackRate: 1,
    };

    const bg1 = useWebAnimations({
        keyframes: sceneryFrames,
        animationOptions: sceneryTimingBackground,
    });

    const bg2 = useWebAnimations({
        keyframes: sceneryFrames,
        animationOptions: sceneryTimingBackground,
    });

    const fg1 = useWebAnimations({
        keyframes: sceneryFrames,
        animationOptions: sceneryTimingForeground,
    });

    const fg2 = useWebAnimations({
        keyframes: sceneryFrames,
        animationOptions: sceneryTimingForeground,
    });

    const spriteFrames = [
        { transform: 'translateY(0)' },
        { transform: 'translateY(-100%)' }
    ];

    const redqueenTiming = {
        easing: 'steps(7, end)',
        direction: 'reverse',
        duration: 600,
        iterations: Infinity,
        playbackRate: 1,
    };

    const redqueen_alice = useWebAnimations({
        keyframes: spriteFrames,
        animationOptions: redqueenTiming,
    });

    const adjustBackgroundPlayback = () => {
        if (pbr < .8) {

            pbr_anim = pbr / 2 * 1;

        }
        else if (pbr > 1.2) {

            pbr_anim = pbr / 2;

        }
        else {

            pbr_anim = .8;

        }

        bg1.getAnimation().playbackRate = pbr_anim;
        bg2.getAnimation().playbackRate = pbr_anim;
        fg1.getAnimation().playbackRate = pbr_anim;
        fg2.getAnimation().playbackRate = pbr_anim;
    }

    const goFaster = () => {
        pbr *= 1.1;
        adjustBackgroundPlayback();
    }

    useEffect(() => {
        setInterval(() => {
            if (pbr > .4) {
                pbr *= .9;
            }
            adjustBackgroundPlayback();
        }, 3000);

        document.addEventListener("click", goFaster);
        document.addEventListener("touchstart", goFaster);
    })

    return (
        <div className="wrapper">
            <div className="sky"></div>
            <div className="earth">
                <div id="red-queen_and_alice">
                    <img ref={redqueen_alice.ref}
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
                        alt="Alice and Red Queen running to stay in place"
                    />
                </div>
            </div>

            <div className="scenery" id="foreground1" ref={fg1.ref}>
                <img id="palm3"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
                    alt=" "
                />
            </div>

            <div className="scenery" id="foreground2" ref={fg2.ref}>
                <img id="bush"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" 
                    alt=" "
                />

                <img id="w_rook_upright"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
                    alt=" "
                />
            </div>

            <div className="scenery" id="background1" ref={bg1.ref}>
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

            <div className="scenery" id="background2" ref={bg2.ref}>
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
        </div>
    );
}
export default Wrapper;