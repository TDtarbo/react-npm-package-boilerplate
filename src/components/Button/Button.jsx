const sayHi = () => {
    window.alert("Hi👋");
};

const Button = () => {

    return <button onClick={sayHi}>Click Me</button>
};

export default Button;