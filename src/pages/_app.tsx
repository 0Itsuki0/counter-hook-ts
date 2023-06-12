import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { FruitContext, fruitReducer, FRUIT_TYPES, FRUIT } from '@/context/fruit-context'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
    const initialFruits: Array<FRUIT> = []
    Object.values(FRUIT_TYPES).forEach(key => {
        const fruit: FRUIT = {
            name: key,
            count: 0
        } 
        initialFruits.push(fruit)
    });


    const [fruits, dispatch] = React.useReducer(fruitReducer, initialFruits)

    const value = React.useMemo(() => (
        {fruits: fruits, dispatch: dispatch}
    ), [fruits, dispatch])

    return (
        <FruitContext.Provider value = {value}>
			<Component {...pageProps} />
		</FruitContext.Provider>
    )
}
