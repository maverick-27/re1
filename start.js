// function Joshi() {
//     // return <h1>Upcoming James</h1>
//     return React.createElement("h2", null, "James is back with a boom");
// }

// ReactDOM.render(
//     <Joshi />,
//     document.getElementById('mountNode'),
// );

// // Js to react is done by Babel;



// function Button() {
//     const [counter, setCounter] = useState(0);
//     return <button onClick={() => setCounter(counter + 1)}> {counter} </button>;
// }
// ReactDOM.render(
//     <Button />,
//     document.getElementById('mountNode'),
// );  



// function Clicks(){
//     // Use state is a Hook
//     const [counter , setCounter] = useState();
//     return <button onClick ={() => setCounter(counter+1)} >{counter}</button>
// }

// ReactDOM.render(
//     <Click/>,
//     document.getElementById(''),
// )

// function DoubleClick(){
// const [counter , setCounter] = useState(5);
// return <button onClick ={()=> setCounter(counter+5)}>{counter}</button>

// }
// ReactDOM.render(
//     <DoubleClick/> , 
//     document.getElementById('mountNode'),
// )

// function Display(props){
//     return (
//       <div>
//        {props}
//       </div>

//     );
// }
// ReactDOM.render(
//     [<Display/> , <DoubleClick/>]
// );



function ButtonClick(props) {
    return <button onClick={props.onClickFunction}></button>
}


function Display(props) {
    return (
        <div>
            {props.message}
        </div>
    );
}

function App() {
    const [counter, setCounter] = useState(5);
    const incrementCounter = () => setCounter(counter + 1);
    return (
        <Display message={counter} /> ,
        <ButtonClick onClickFunction={incrementCounter} />
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('hackerEarth')
);


ReactDOM.render(
    React.createElement(
        "div", null, "Hello React",
        React.createElement('input', null),
        React.createElement('pre', null, (newDate).toLocaleString()),
    )

)

const render = () => {
    document.getElementById('mountNode').innerHTML = `
        <div>
        Hello React
            <input/>
            <pre>${(new Date).toLocaleString()}</pre>   
          </div>
    ` ;

ReactDOM.render(
    React.createElement(
        "div", null, "Hello React",
        React.createElement('input', null),
        React.createElement('pre', null, (new Date).toLocaleString()),
),
  document.getElementById('mountNode'),
);
}
setInterval(render, 1000);