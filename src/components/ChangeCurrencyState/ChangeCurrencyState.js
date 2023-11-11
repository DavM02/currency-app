import './ChangeCurrencyState.css'
import { useContext } from 'react'
import { stateContext } from '../../provider/Provider'
import useRequset from '../../useRequest/useRequest'

function ChangeCurrencyState() {

    const { fetchData } = useRequset()
    const { states, functions } = useContext(stateContext)
    
    const firstType = states.firstCurrency.type
    const secondType = states.secondCurrency.type
    const num = states.inputValue


    function currencyStateHandler() {
        functions.selectFirstCurrency(states.secondCurrency)
        functions.selectSecondCurrency(states.firstCurrency)


        functions.appHandler(!states.appIsClicked);

        fetchData( secondType, firstType, num)

    }


    return <button type='button' onClick={currencyStateHandler} className='change-currency'>
        <span>&#8593;</span>
        <span>&#8595;</span>
    </button>
}

export default ChangeCurrencyState