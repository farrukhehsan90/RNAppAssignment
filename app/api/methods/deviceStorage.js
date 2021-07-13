import AsyncStorage from "@react-native-community/async-storage";

const deviceStorage = {
    async saveItem(key, value) {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (error) {

        }
    },

    async loadToken() {
        try {
            const token = await AsyncStorage.getItem('token')
            return token
        } catch (error) {
        }
    }
}
export default deviceStorage