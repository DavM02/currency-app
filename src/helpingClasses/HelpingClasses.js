import './HelpingClasses.css' 

function Center(props) {
    return <div className="center">
        {props.children}
    </div>
}

export default Center

export function Row(props) {
    return <div className="row">
        {props.children}
    </div>
}

export function RowEvenly(props) {
    return <div className="row-evenly">
        {props.children}
    </div>
}

export function RowNoJustify(props) {
    return <div className="row-no-justify">
        {props.children}
    </div>
}


