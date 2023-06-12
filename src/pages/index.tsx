import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { FRUIT_TYPES, USERACTION_TYPES, FruitContext } from '@/context/fruit-context'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const {fruits, dispatch} = React.useContext(FruitContext)

    React.useEffect(() => {
        console.log(fruits)
    }, [fruits])

    const handleAppleIncreaseButtonClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch({target: FRUIT_TYPES.APPLE, type: USERACTION_TYPES.INCREASE})
    }

    const handleAppleDecreacesButtonClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch({target: FRUIT_TYPES.APPLE, type: USERACTION_TYPES.DECREASE})

    }

    const handleAppleResetButtonClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch({target: FRUIT_TYPES.APPLE, type: USERACTION_TYPES.RESET})
    }


    return (
        <>
        <Head>
            <title>Fruits counter</title>
            <meta name="description" content="Fruits counter" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            This is the top page
            <div className={styles.popup}>
                <h2 className={styles.title}>{FRUIT_TYPES.APPLE}</h2>
				<button type='button' onClick={handleAppleIncreaseButtonClicked} className={styles.button} id={USERACTION_TYPES.INCREASE}>{USERACTION_TYPES.INCREASE}</button>            
				<button type='button' onClick={handleAppleDecreacesButtonClicked} className={styles.button} id={USERACTION_TYPES.DECREASE}>{USERACTION_TYPES.DECREASE}</button>            
                <button type='button' onClick={handleAppleResetButtonClicked} className={styles.button} id={USERACTION_TYPES.RESET}>{USERACTION_TYPES.RESET}</button>            
            </div>
        </div>
        </>
    )
}
