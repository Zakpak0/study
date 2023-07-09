import { Link } from "expo-router"
import { useMarkdown } from "../../../lib"
import { View } from "react-native"

const $Array = function () {
    return (
        <View
            style={{
                padding: 30
            }}
        >
            <Link href="algorithm/array/subarrays">
                Subarrays
            </Link>
        </View>
    )
}

export default $Array