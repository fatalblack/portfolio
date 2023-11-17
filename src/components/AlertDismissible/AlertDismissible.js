import Alert from 'react-bootstrap/Alert';

const AlertDismissible = (props) => {
  return (
        props.show ?
        (
            <Alert variant={props.variant} onClose={props.closeCallback} dismissible className="text-left">
                <Alert.Heading>{props.title}</Alert.Heading>
                <p>
                    {props.message}
                </p>
            </Alert>
        ) :
        (<></>)
    );
}

export default AlertDismissible;