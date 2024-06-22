import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom'

export const useLogin = () =>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()
    const navigate = useNavigate()

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:5000/api/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        const json = await response.json()

        if(response.ok){
            //save user to local storage
            localStorage.setItem('userInfo', JSON.stringify(json))

            //update AuthConext
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
            navigate("/")
        } else {
            setIsLoading(false)
            setError(json.error)
        }
    }

    return {login,isLoading, error}
}