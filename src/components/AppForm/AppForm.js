
import ChangeCurrencyState from '../ChangeCurrencyState/ChangeCurrencyState'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import './AppForm.css'
import useRequset from '../../useRequest/useRequest'
import { useContext } from 'react'
import { stateContext } from '../../provider/Provider'


function AppForm(props) {

    const { fetchData } = useRequset()

    const { states, functions } = useContext(stateContext)

    const firstType = states.firstCurrency.type
    const secondType = states.secondCurrency.type
    const num = states.inputValue

    function exchangeCurrency(e) {
        e.preventDefault()
        fetchData(firstType, secondType, num)
    }

    function inputHandler(e) {
        functions.getInputValue(e.target.value)

    }

 

    return <form onSubmit={exchangeCurrency}>
         <Input type='number' min='0'
            placeholder='Write a sum' value={states.inputValue}
            onChange={inputHandler} ></Input>
        {props.children}
        <Button type="submit" text={'submit'}></Button>
        <ChangeCurrencyState></ChangeCurrencyState>
    </form>
}

export default AppForm