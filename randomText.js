class ConditionalComponent extends React.Component{
    render(){
        return(
         <div style= {{color : Math.random()< 0.5 ? 'green' : 'red'}}>
             What is the color Guess
         </div>
        );
    }
}

ReactDOM.render(
  <ConditionalComponent/>,
  mountNode,
);