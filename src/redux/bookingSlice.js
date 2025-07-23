import { createSlice } from '@reduxjs/toolkit'

const bookingSlice = createSlice({ //booking shelf
    //shelf name ethu 
    name: 'booking',
    initialState: {
        history: [],
        status: "true"
    },
    reducers: {
        addBooking: (state, action) => {
            state.history.push(action.payload)
        },
        clearBookings: (state) => {
            state.history = []
        }
    }
})

export const { addBooking, clearBookings } = bookingSlice.actions //bookingSkice la action iruku so namba action nu mention pannaum 
export default bookingSlice.reducer