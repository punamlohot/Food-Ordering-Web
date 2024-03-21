


const ErrorElement = ({msg1,msg2,msg3,msg4}) => {
    return (
      <div className="container-fluid error-element text-center m-3 p-3">
        <h1 className="error-message">{msg1}</h1>
        <h2 className="error-message">{msg2}</h2>
        <h3 className="error-message">{msg3}</h3>
        <p className="error-message4">{msg4}</p>
      </div>
    );
  };
  
  export default ErrorElement;