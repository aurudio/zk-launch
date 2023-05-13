import { Dispatch } from 'react'
import { IUser, getFailure, getStart, getSuccess } from './userSlice'

interface IDispatch {
	payload: undefined | string | IUser
	type: string
}

export const getUser = (
	dispatch: Dispatch<IDispatch>,
	user: IUser | undefined
) => {
	dispatch(getStart())
	try {
		dispatch(getSuccess(user))
	} catch (err) {
		dispatch(getFailure())
		console.log(err)
	}
}
