import React, { Dispatch } from "react";

export enum USERACTION_TYPES {
    "INCREASE" = "INCREASE",
    "DECREASE" = "DECREASE", 
    "RESET" = "RESET",
}

export enum FRUIT_TYPES {
    "BANANA" = "BANANA",
    "APPLE" = "APPLE",
    "ORANGE" = "ORANGE",
}

export type ACTION = {
    type: USERACTION_TYPES,
    target: FRUIT_TYPES
}

export type FRUIT = {
    name: FRUIT_TYPES, 
    count: number
}

export type FRUITCONTEXT = {
    fruits: Array<FRUIT>, 
    dispatch: Dispatch<ACTION>
}

export const fruitReducer = (fruits: Array<FRUIT>, action: ACTION ) => {
    const targetFruit: FRUIT_TYPES = action.target
    switch (action.type) {
        case USERACTION_TYPES.INCREASE: {
            const newFruits = fruits.map((fruit, i) => {
                if (fruit.name === targetFruit) {
                    return { ...fruit, count: fruit.count + 1}
                } else {
                  return fruit;
                }
            });
            return newFruits
        }
        case USERACTION_TYPES.DECREASE: {
            const newFruits = fruits.map((fruit, i) => {
                if (fruit.name === targetFruit) {
                    return { ...fruit, count: fruit.count - 1}
                } else {
                  return fruit;
                }
            });
            return newFruits
        }
        case USERACTION_TYPES.RESET: {
            const newFruits = fruits.map((fruit, i) => {
                if (fruit.name === targetFruit) {
                    return { ...fruit, count: 0}
                } else {
                  return fruit;
                }
            });
            return newFruits
        }
        default:
            throw new Error (`Unhandled action type: ${action.type}`)
    }

}

export const FruitContext = React.createContext<FRUITCONTEXT>({
    fruits: [],
    dispatch: () => {}
})


