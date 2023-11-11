import { useContext } from "react";
import { stateContext } from '../provider/Provider'

function useRequset() {

    const {functions} = useContext(stateContext)

    const fetchData = async (firstType, secondType, num) => {

        const url = `https://v6.exchangerate-api.com/v6/bce47724efefbb70060c6115/latest/${firstType}`

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Failed to convert. Please try again");
            }

            const data = await response.json();

        
        if(data) {
            functions.exchangeRate({
                rate: data.conversion_rates[secondType]*num,
                date: data.time_last_update_unix
            })
    
        }
 
        } catch (error) {
            functions.handleError({
                state: true,
                message: error.message
            })
        }
    };
    return {
        fetchData,
    }


}


export default useRequset