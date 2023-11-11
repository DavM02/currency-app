import Selection from "./Selection"
import { useContext, useEffect } from "react"
import { Row } from '../../../helpingClasses/HelpingClasses'
import { stateContext } from "../../../provider/Provider"
function SelectionWrapper(props) {

    const { states, functions } = useContext(stateContext)

    function selectionHandler(e) {
        if (states.canClick) {
            props.siblingHandler()
        }
    }


    function selectValue(img, type) {
        props.onClick(img, type)
    }

    useEffect(() => {
        if (states.firstCurrency.type === states.secondCurrency.type) {
            functions.handleError({
                state: true,
                message: 'Currencies cannot be the same. Please try again.'
            })
        }
    }, [states.firstCurrency.type, states.secondCurrency.type])

    return (

        <div className="selection-wrapper">
            <input type="hidden"></input>
            <div className="selection-header" onClick={selectionHandler} >
                <Row>
                    {props.initialSelect.type}
                    <img src={props.initialSelect.img}></img>
                </Row>
                <Selection selectValue={selectValue} setStyle={props.setStyle} selectedValue={props.initialSelect.type} />
            </div>

        </div>



    );
}


export default SelectionWrapper