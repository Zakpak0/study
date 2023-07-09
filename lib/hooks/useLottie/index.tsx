import { default as LottieReactNative, AnimationObject } from 'lottie-react-native';
import React, { RefObject, useRef } from 'react';
import { Platform } from 'react-native';
export const useLottie = function (
    animationData: AnimationObject,
    props: {
        web: Omit<LottieProps, 'animationData' | 'lottieRef'>,
        mobile: Omit<React.ComponentProps<typeof LottieReactNative>, 'source'>
    }) {
    if (Platform.OS == "web") {
        const _Lottie = require('lottie-react')
        const LottieReact = _Lottie.default
        const controller = useRef<AnimationInstance>()
        function LottieView() {
            return (
                <LottieReact
                    animationData={animationData}
                    // @ts-ignore
                    lottieRef={controller}
                    {...props?.web}
                />
            )
        }
        return { LottieView, controller: controller.current }
    } else {
        const controller = useRef<LottieReactNative>()
        function LottieView() {
            return (
                <LottieReactNative
                    source={animationData}
                    // @ts-ignore
                    ref={controller}
                    {...props?.mobile}
                />
            )
        }
        return { LottieView, controller: controller.current }
    }
}

interface LottieProps {
    /** A JSON Object with the exported animation data */
    animationData: string;

    /** Set it to true for infinite amount of loops, or pass a number to specify how many times should the last segment played be looped */
    loop?: boolean | number;

    /** If set to true, animation will play as soon as it's loaded */
    autoplay?: boolean;

    /** Expects an array of length 2. First value is the initial frame, second value is the final frame. */
    initialSegment?: [number, number];

    /** Style object that applies to the animation wrapper (which is a div) */
    style?: React.CSSProperties;

    /** Expects a React ref object in which interaction methods will be stored */
    lottieRef?: RefObject<any>;

    /** Interactivity params to sync animation with either scroll or cursor. */
    interactivity?: object;
}

interface AnimationInstance {
    /** Play the Lottie animation */
    play: () => void;

    /** Stop the Lottie animation */
    stop: () => void;

    /** Pause the Lottie animation */
    pause: () => void;

    /**
     * Set the speed of the Lottie animation
     * @param speed 1 is normal speed
     */
    setSpeed: (speed: number) => void;

    /**
     * Go to a specific time or frame and play the Lottie animation
     * @param value Numeric value.
     * @param isFrame Defines if first argument is a time based value or a frame based (default false).
     */
    goToAndPlay: (value: number, isFrame?: boolean) => void;

    /**
     * Go to a specific time or frame and stop the Lottie animation
     * @param value Numeric value.
     * @param isFrame Defines if first argument is a time based value or a frame based (default false).
     */
    goToAndStop: (value: number, isFrame?: boolean) => void;

    /**
     * Set the direction of the Lottie animation
     * @param direction 1 is forward, -1 is reverse.
     */
    setDirection: (direction: number) => void;

    /**
     * Play specific segments in the Lottie animation
     * @param segments Array. Can contain 2 numeric values that will be used as first and last frame of the animation. Or can contain a sequence of arrays each with 2 numeric values.
     * @param forceFlag Boolean. If set to false, it will wait until the current segment is complete. If true, it will update values immediately.
     */
    playSegments: (segments: number[] | number[][], forceFlag?: boolean) => void;

    /**
     * If false, it will respect the original AE fps. If true, it will update on every requestAnimationFrame with intermediate values.
     * @param useSubFrames Default is true.
     */
    setSubframe: (useSubFrames: boolean) => void;

    /**
     * Get the duration of the Lottie animation
     * @param inFrames If true, returns duration in frames, if false, in seconds
     */
    getDuration: (inFrames?: boolean) => number;

    /** Destroy the Lottie animation */
    destroy: () => void;
}