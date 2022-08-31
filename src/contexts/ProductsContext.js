import React, { createContext, useContext } from 'react'
import { RiHome5Line, 
    RiSteering2Fill,
    MdPedalBike,
    MdOutlineDirectionsTransitFilled,
    IoCarOutline,
    ImSpoonKnife,
    GiCoffeeCup,
    MdOutlineBusinessCenter,
    BiMoney 
} from '../components/Icons'
const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
    const PRODUCTS_LIST = [
        [<RiHome5Line />, 'Home', '/home'],
        [<IoCarOutline />, 'Ride', '/ride'],
        [<RiSteering2Fill />, 'Drive', '/drive'],
        [<ImSpoonKnife />, 'Eat', '/eat'],
        [<GiCoffeeCup />, 'Merchants', '/merchants'],
        [<MdPedalBike />, 'Bike & scoot', '/bike-and-scoot'],
        [<MdOutlineDirectionsTransitFilled />, 'Transit', '/transit'],
        [<MdOutlineBusinessCenter />, 'Business', '/business'],
        [<BiMoney />, 'Money', '/Money'],
    ]
    return (
        <ProductsContext.Provider value={PRODUCTS_LIST}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductsContext)