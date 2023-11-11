import './Rate.css'
import { useEffect, useContext } from "react";
import { stateContext } from "../../provider/Provider";
import useRequset from "../../useRequest/useRequest";
import Center from "../../helpingClasses/HelpingClasses";
import Loader, { LoadingDots } from '../Loader/Loader';

function Rate() {

    const { fetchData } = useRequset()

    const { states } = useContext(stateContext)

    const firstType = states.firstCurrency.type
    const secondType = states.secondCurrency.type
    const num = states.inputValue
    useEffect(() => {
        fetchData(firstType, secondType, num)
    }, [])

    const options = { year: 'numeric', month: 'long', day: '2-digit', };

    const covertedDate = new Date(states.getRate.date * 1000).toLocaleDateString(undefined, options)

    return (<>

        <div className="current-rate">
            <Center>

                {states.getRate.rate ? <>{states.getRate.rate} {secondType}</> : <LoadingDots></LoadingDots>
                }

            </Center>
        </div>


        <div className="update-time">

            {states.getRate.date ? <> Last update time: <br />{covertedDate}</> : <Loader></Loader>}

        </div >

    </>
    );
}

export default Rate;
