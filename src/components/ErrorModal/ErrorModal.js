import './ErrorModal.css'
import { useContext, useEffect, useState } from 'react'
import { stateContext } from '../../provider/Provider'
import Center from '../../helpingClasses/HelpingClasses'
import Button from '../UI/Button/Button'
import img1 from '../../assets/flags/EU.svg'

function ErrorModal() {

    const { states, functions } = useContext(stateContext)

    const initialState = {
        img: img1,
        type: 'EUR'
    }

    let prevCurrency = states.prevCurrency.length > 2 ? states.prevCurrency[states.prevCurrency.length - 2] : initialState;

    // useEffect(() => {
    //     prevCurrency = states.prevCurrency.length > 2 ? states.prevCurrency[states.prevCurrency.length - 3] : initialState;
    // }, [states.firstCurrency])

    function closeModal() {
        functions.handleError({
            state: false,
            message: ''
        })

        if (states.firstCurrency.type === states.secondCurrency.type) {
            functions.selectSecondCurrency({
                img: prevCurrency.img,
                type: prevCurrency.type,
            })
        }

    }


    return <>
        <div className='error-modal' style={{
            animation: states.errorState.message
                ? 'appear 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95) forwards' : null
        }}>
            <Center>
                {states.errorState.message}
                <Button type='button' onClick={closeModal} text={'ok'}></Button>
            </Center>
        </div>
        <div className='backdrop'></div>
    </>

}

export default ErrorModal