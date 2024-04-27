// PascalCasing
function Message(){
    // JSX: JavaScript XML https://babeljs.io/
    // return <h1>Hello World</h1>;

    const name = 'Nao';

    if (name)
        return <h1>Hello { name }</h1>;
    return <h1>Hello World.</h1>;
}

export default Message;


//https://www.youtube.com/watch?v=SqcY0GlETPk