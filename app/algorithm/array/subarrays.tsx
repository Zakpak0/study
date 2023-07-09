import { Platform, View } from "react-native"
import { useLottie, useMarkdown } from "../../../lib"
import { AnswerElement } from "../../../components"
import React, { useEffect } from "react"
import { subarrays } from '../../../lib/course-questions'
import { FlashList } from '@shopify/flash-list'

const Subarrays = function () {
    const Overview = useMarkdown(require('../../../assets/md/algorithm/array/subarrays/overview.md'))
    const PositiveInteger = useMarkdown(require('../../../assets/md/algorithm/array/subarrays/positive-integer-array-sum.md'))
    const NegativeInteger = useMarkdown(require('../../../assets/md/algorithm/array/subarrays/negative-integer-array-sum.md'))
    const { LottieView: SuccessAnimation, controller } = useLottie(require('../../../assets/animations/success.json'), {
        web: {
            autoplay: true,
            loop: true,
            style: {
                width: 50,
                height: 50
            }
        },
        mobile: {
            autoPlay: true,
            loop: true,
            style: {
                width: 50,
                height: 50
            }
        }
    })
    useEffect(() => {
        if (controller) {
            controller.play()
        }
    }, [controller])
    return (
        <View
            style={{
                padding: 15,
                maxWidth: 700,
            }}
        >
            {/* <SuccessAnimation /> */}
            <Overview />
            <PositiveInteger />
            <View>
                <FlashList
                    data={Object.values(subarrays["positive-integer-array-sum"])}
                    renderItem={({ item }) => {
                        return (
                            <AnswerElement
                                type="single-digit"
                                question={item.question}
                                answer={item.answer}
                                inputProps={{
                                    maxLength: 1,
                                    keyboardType: "number-pad",
                                    inputMode: "numeric",


                                }}
                                formContainerProps={{
                                    marginTop: 15,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    width: 150
                                }}
                            />
                        )
                    }}
                />
            </View>
            {/* <AnswerElement
                type="single-digit"
                question="What is the sum of all subarrays of a given array of positive integers?"
                answer="The sum of all subarrays of a given array of positive integers is the sum of all elements in the array multiplied by the number of subarrays."

            />
            <Overview />
            <NegativeInteger /> */}
        </View>
    )
}

export default Subarrays