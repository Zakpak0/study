import { router, useFocusEffect } from "expo-router"
import { Text } from "../gluestack-components/v1"
import { useEffect, useLayoutEffect } from "react"

const Landing = function () {
    useFocusEffect(() => {
        setTimeout(() => {
            router.replace("algorithm")
        }, 5000)
    })

    return (
        <Text>
            Landing
        </Text>
    )
}

export default Landing