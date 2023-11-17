import { Spinner } from "react-bootstrap"

const Loader = ({show}) => {
    return (
        show ?
        (
            <div className="loader-full-size">
                <div className="loader-spinner">
                    <Spinner animation="border" variant="light" />
                </div>
            </div>
        ) : 
        (<></>)
    )
}

export default Loader