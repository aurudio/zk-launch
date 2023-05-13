import { createSlice } from '@reduxjs/toolkit'

export interface IUser {
	address: string
	balanceDecimals?: number | undefined
	balanceFormatted?: string | undefined
	balanceSymbol?: string | undefined
	displayBalance?: string | undefined
	displayName: string
	ensAvatar?: string | undefined
	ensName?: string | undefined
	hasPendingTransactions: boolean
}

interface initialState {
	isFetching: boolean
	error: boolean
	currentUser: null | IUser
}

export const userSlice = createSlice({
	name: 'user',
	initialState: <initialState>{
		isFetching: false,
		error: false,
		currentUser: null,
	},
	reducers: {
		getStart: state => {
			state.isFetching = true
			state.error = false
		},
		getSuccess: (state, action) => {
			state.isFetching = false
			state.currentUser = action.payload
			state.error = false
		},
		getFailure: state => {
			state.isFetching = true
			state.error = false
		},
	},
})

export const { getStart, getSuccess, getFailure } = userSlice.actions
export default userSlice.reducer
