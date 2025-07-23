//store-cardboard mari

import { configureStore } from '@reduxjs/toolkit'
import bookingReducer from './bookingSlice'

const store = configureStore({
    reducer: { //mothara irukara shelf
        booking: bookingReducer //athukula oru shelf ethu(name ethu acc pandrathu ethu like 1st shelf )
    }
})

export default store