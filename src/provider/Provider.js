import React, { createContext, useEffect, useRef, useState } from "react";
import img1 from '../assets/flags/EU.svg'
import img2 from '../assets/flags/AM.svg'

export const stateContext = createContext();

const Provider = ({ children }) => {
    const [inputValue, setInputValue] = useState(1)
    const [canClick, setCanClick] = useState(false);
    const [appIsClicked, setAppIsClicked] = useState(false);
    const [prevCurrency, setPrevCurrency] = useState([])
 
    const [getRate, setRate] = useState({
        rate: null,
        date: null
    })
    const [errorState, setErrorState] = useState({
        message: '',
        state: false
    });

    const [firstCurrency, setFirstCurrency] = useState({
        img: img1,
        type: 'EUR'
    });
    const [secondCurrency, setSecondCurrency] = useState({
        img: img2,
        type: 'AMD'
    });


    useEffect(() => {
        function prevValueHandler() {
            setPrevCurrency((prevCurrencies) => [...prevCurrencies, secondCurrency]);
        }

        prevValueHandler();

    }, [secondCurrency]);


    function allowClick(newValue) {
        setCanClick(newValue);
    }

    function appHandler(newValue) {
        setAppIsClicked(newValue);
    }

    function selectFirstCurrency(newValue) {
        setFirstCurrency(newValue);
    }

    function selectSecondCurrency(newValue) {
        setSecondCurrency(newValue);

    }

    function handleError(newValue) {
        setErrorState(newValue)
    }

    function exchangeRate(newValue) {
        setRate(newValue)
    }

    function getInputValue(newValue) {
        setInputValue(newValue)
    }

 
    const stateAndFunctions = {
        functions: {
            allowClick,
            appHandler,
            selectFirstCurrency,
            selectSecondCurrency,
            handleError,
            exchangeRate,
            getInputValue,
 
        },
        states: {
            canClick,
            appIsClicked,
            firstCurrency,
            secondCurrency,
            errorState,
            getRate,
            inputValue,
            prevCurrency,
 
        }
    };



    return (
        <stateContext.Provider value={stateAndFunctions}>
            {children}
        </stateContext.Provider>
    );
}

export default Provider;
