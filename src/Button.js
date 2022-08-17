import PorpTypes from 'prop-types';
function Button({text}){
    return <button>{text}</button>
}

Button.porpTypes ={
    text :PorpTypes.string.isRequired,
}

export default Button;