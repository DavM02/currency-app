import './Loader.css'
const Loader = () => {
    return <div className="loader"></div>
}

export  const LoadingDots = () => {
    return <>
        <div className="loading">
            Converting
            <span className="loading__dot"></span>
            <span className="loading__dot"></span>
            <span className="loading__dot"></span>
        </div>
    </>
}

export default Loader