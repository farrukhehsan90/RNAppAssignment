import { useEffect, useState } from "react";

export default function useToken() {
    const [token, setToken] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem('token')
                if (value !== null) {
                    // value previously stored
                    setToken(value);
                }
            } catch (e) {
                // error reading value
                console.log(e)
            }
        }
        getData();
    }, [])

    return token
}