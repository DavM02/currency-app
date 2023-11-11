import SelectionWrapper from '../UI/Selection/SelectionWrapper'
import './AppMain.css'
import { useContext, useEffect, useState } from 'react';
import AppForm from '../AppForm/AppForm';
import { stateContext } from '../../provider/Provider';
import Rate from '../Rate/Rate';

function AppMain() {

    const [firstSelectionOpen, setFirstSelectionOpen] = useState(false)
    const [secondSelectionOpen, setSecondSelectionOpen] = useState(false)
    const { functions, states } = useContext(stateContext)

    function toggleFirstSelection() {
        setFirstSelectionOpen(!firstSelectionOpen)
        setSecondSelectionOpen(false)
    }

    function toggleSecondSelection() {
        setSecondSelectionOpen(!secondSelectionOpen)
        setFirstSelectionOpen(false)
    }


    useEffect(() => {

        if (states.canClick) {
            if (!firstSelectionOpen && !secondSelectionOpen) {
                return;
            } else {
                if (firstSelectionOpen) {
                    toggleFirstSelection()

                } else {
                    toggleSecondSelection()

                }
            }

        }

    }, [states.appIsClicked])

    function selectFirst(img, type) {
        functions.selectFirstCurrency({
            img: img,
            type: type
        })
    }

    function selectSecond(img, type) {
        functions.selectSecondCurrency({
            img: img,
            type: type
        })
    }



    return (
        <main>
            <div className='app-inner'>
                <section className="app-wrapper glass">
                    <AppForm  >
                        <SelectionWrapper
                            onClick={selectFirst}
                            siblingHandler={toggleFirstSelection}
                            initialSelect={states.firstCurrency}
                            setStyle={{ height: firstSelectionOpen ? '268px' : '0px' }} />
                        <SelectionWrapper
                            onClick={selectSecond}
                            siblingHandler={toggleSecondSelection}
                            initialSelect={states.secondCurrency}
                            setStyle={{ height: secondSelectionOpen ? '268px' : '0px' }} />
                    </AppForm>
                    <Rate></Rate>
                </section>
            </div>
        </main>
    );
}

export default AppMain
