import { useAuthContext } from "./useAuthContext"
// import { useHostelsContext } from "./useHostelsContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    //clear global hostel state
    // const { dispatch: hostelsDispatch } = useHostelsContext()

    const logout = () => {
        //remove user from storage
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({type: 'LOGOUT'})
        // hostelsDispatch({type: 'SET_HOSTELS', payload: null})
    }

    return {logout}
}