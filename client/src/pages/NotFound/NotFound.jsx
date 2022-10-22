import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
    const styleSheet = {'title': {
        'fontSize': '50pt',
        'textAlign': 'center',
        'color': '#2bcad9',
    }, 'container': {
        'color': 'red',
        'position': 'absolute',
        'left': '50%',
        'top': '50%',
        'transform': 'translate(-50%, -50%)'
    },
'LinkStyle': {
    color: 'red',
    fontSize: '50pt'
}};

    return (
        <>
        <div style={styleSheet.container}>
        <h1 style={styleSheet.title}>Page not found!</h1>
        <h2 style={styleSheet.title}><Link style={styleSheet.LinkStyle} to="/">Go Home Page</Link></h2>
        </div>
        </>
    )
}

export default NotFound;