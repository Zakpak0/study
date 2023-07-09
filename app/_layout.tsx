import { Slot } from "expo-router";
import { GluestackUIProvider } from "../gluestack-components/v1"
import { Platform, SafeAreaView, ScrollView } from "react-native";
import { useFonts } from 'expo-font';
import { Fragment, useMemo } from "react";

const Root = function () {
    const [fonts] = useFonts({
        'Courier': require('../assets/fonts/CourierPrime-Regular.ttf'),
        'Signika Negative': require('../assets/fonts/SignikaNegative-Regular.ttf'),
        'RobotoCondensed': require('../assets/fonts/RobotoCondensed-Regular.ttf'),
        'BacasimeAntique': require('../assets/fonts/BacasimeAntique-Regular.ttf'),
    })
    const app = useMemo(() => {
        if (fonts) {
            return <Slot />;
        } else {
            return null;
        }
    }, [fonts]);
    return (
        <GluestackUIProvider>
            <SafeAreaView>
                <ScrollView>
                    {app}
                </ScrollView>
            </SafeAreaView>
        </GluestackUIProvider>
    )
}

export default Root


declare global {
    namespace ReactNavigation {
        interface RootParamList {
            "landing": undefined
            "algorithm": undefined
        }
    }
}