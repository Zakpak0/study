import { Box, Button, Text, } from "gluestack-components/v1"
import React, { ComponentProps, useEffect, useRef } from "react"
import { TextInput } from "react-native"
import { Path, Svg } from "react-native-svg"

interface SingleDigitAnswerElementProps {
    question: string
    answer: string
    containerProps?: ComponentProps<typeof Box>
    formContainerProps?: ComponentProps<typeof Box>
    questionTextProps?: ComponentProps<typeof Text>
    answerTextProps?: ComponentProps<typeof Text>
    inputProps?: ComponentProps<typeof Input>
    buttonProps?: ComponentProps<typeof Button>
}

const AnswerElements = {
    'single-digit': function ({ question, answer, containerProps, formContainerProps, buttonProps, inputProps, questionTextProps, answerTextProps }: SingleDigitAnswerElementProps) {
        const [answerValue, setAnswerValue] = React.useState("")
        const [correct, setCorrect] = React.useState<boolean>(false)
        const [error, setError] = React.useState<boolean>(false)
        useEffect(() => {
            setError(false)
        }, [answerValue])
        return (
            <Box
                {...containerProps}
                marginVertical={10}
                alignSelf="flex-start"

            >
                <Text
                    alignSelf="center"
                    {...questionTextProps}
                >{question}</Text>
                <Box
                    {...formContainerProps}
                    alignSelf="center"
                    marginVertical={10}
                >
                    <TextInput
                        editable={!correct}
                        onChangeText={(text) => {
                            setAnswerValue(text)
                        }}
                        style={{
                            width: 50,
                            borderWidth: 1,
                            borderRadius: 5,
                            textAlign: "center",
                            color: error ? "red" : "black"
                        }}
                        {...inputProps} />
                    <Button
                        width={100}
                        marginLeft={10}
                        disabled={answerValue.length == 0 || correct}
                        backgroundColor={answerValue.length > 0 ? '$green400' : '$green200'}
                        onPress={() => {
                            if (answerValue.trim() == answer) {
                                setCorrect(true)
                            } else {
                                setError(true)
                            }
                        }}
                        {...buttonProps}
                    >
                        {correct ? <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                            height={20}
                            width={20}
                        >
                            <Path
                                fill='white'
                                d="m421-298 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Z" />
                        </Svg> :
                            <Text
                                {...answerTextProps}
                            >
                                Submit
                            </Text>}
                    </Button>
                </Box>
            </Box>
        )
    }
} as const

type AnswerElementProps<P> = P & {
    type: keyof typeof AnswerElements
}

export const AnswerElement =
    function <T extends keyof typeof AnswerElements>
        ({ type, ...props }: AnswerElementProps<ComponentProps<typeof AnswerElements[T]>>) {
        const Element = AnswerElements[type]
        return <Element {...props} />
    }
