import React, { useEffect, useState, useContext, useRef, useCallback, useLayoutEffect  } from "react";
import currencyData from '../../../data/data.json';
import './Selection.css';
import Loader from "../../Loader/Loader";
import { stateContext } from "../../../provider/Provider";
import Center, { Row } from "../../../helpingClasses/HelpingClasses";
function Selection(props) {

    const [range, setRange] = useState([]);
    const currencyCode = Object.entries(currencyData);
    const selectionRef = useRef();
    const selectedRef = useRef(null);

    const { states, functions} = useContext(stateContext);

    function select(img, type) {
        props.selectValue(img, type);
 
    }
 
    // rendering the data
    const loadImages = useCallback(async () => {
        if (props.selectedValue) {
            const displaySelection = await Promise.all(currencyCode.map(async ([key, value]) => {
                try {
                    const module = await import(`../../../assets/flags/${value}.svg`);

                    return (
                        <li
                            id={key}
                            key={key}
                            // adding bgColor to the selected element
                            className={key === props.selectedValue ? "selected-item" : "list-item"}
                            onClick={() => key !== props.selectedValue && select(module.default, key)}
                            ref={(element) => key === props.selectedValue && (selectedRef.current = element) }>
                            <Row>
                                {key}
                                <img src={module.default} alt={key} />
                            </Row>
                        </li>
                    );
                } catch (error) {
                    console.error("Ошибка при загрузке изображения:", error);
                    return null;
                }
            }));

            setRange(displaySelection);
        }
    }, [props.selectedValue]);


    useEffect(() => {
        loadImages();
    }, [loadImages]);

    // scrolling to the top of the choosen element initially
    useLayoutEffect (() => {
        if (range.length === currencyCode.length) {
 
                const scrollTopValue = selectedRef.current.offsetTop;
                selectionRef.current.scrollTop = scrollTopValue;
 
        }
    }, [selectionRef.current]);
    

    // allowing clicking only when array is completely rendered
    useEffect(() => {
        if (range.length === currencyCode.length) { 
            functions.allowClick(true);
        }

    }, [range, selectionRef.current]);

    // showing loader when data is not rendered yet.

    return (
        <>
            {
                range.length !== 0 ? (
                    <div className="custom-selection" style={{
                        ...props.setStyle,
                        transition: !states.canClick ? 'unset' : '1s height cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }
                    } ref={selectionRef}  >
                        <ul>
                            {range}
                        </ul>
                    </div>
                ) : (
                    <div className="loader-wrapper">
                        <Center>
                            <Loader></Loader>
                        </Center>
                    </div>
                )
            }
        </>
    );
}

export default Selection;
