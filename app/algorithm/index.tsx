import { Link } from "expo-router"
import { Text } from "../../gluestack-components/v1"
import { Fragment } from "react"
import { View } from "react-native"

const Algorithm = function () {
    return (
        <View
            style={{
                padding: 30
            }}
        >
            <Link href="algorithm/array">
                Array
            </Link>
            <Link
                style={{
                    marginLeft: 10
                }}
                href="algorithm/array/subarrays">
                Subarrays
            </Link>
        </View>
    )
}

export default Algorithm