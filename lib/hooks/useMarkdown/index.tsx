import Markdown, { MarkdownProps } from '@ronradtke/react-native-markdown-display';
import { Asset } from 'expo-asset';
import { useMemo, useState } from "react";
export const useMarkdown = function (file: ReturnType<NodeRequire>) {
    const [markdown, setMarkdown] = useState<string>('')
    useMemo(() => {
        Asset.fromModule(file).downloadAsync().then((asset) => {
            fetch(asset.localUri as string)
                .then((response) => response.text())
                .then((text) => setMarkdown(text))

        })
    }, [file])
    return function (props: Omit<MarkdownProps, 'children'>) {
        return (
            <Markdown
                {...props}
                style={{
                    // code_block: {
                    //     fontFamily: 'Signika Negative',
                    //     fontSize: 12,
                    // },
                    // code_inline: {
                    //     fontFamily: 'Signika Negative',
                    //     fontSize: 12,
                    // },
                    body: {
                        fontFamily: 'Signika Negative',
                        fontSize: 15,
                    },
                    heading1: {
                        fontFamily: 'RobotoCondensed',
                    },
                    heading2: {
                        fontFamily: 'RobotoCondensed',
                    },
                    heading3: {
                        fontFamily: 'RobotoCondensed',
                    },
                    heading4: {
                        fontFamily: 'RobotoCondensed',
                    },
                    heading5: {
                        fontFamily: 'RobotoCondensed',
                    },
                    heading6: {
                        fontFamily: 'RobotoCondensed',
                    },
                }}
                children={markdown}
            />
        )
    }
}