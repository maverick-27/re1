class Card extends React.Component{
    render(){
        return (
       <div className = "github-profile" style = {{ margin : '1rem'}}> 
        <img src= "https://placehold.it/75"/>
        <div className= "info" style = {{display:'inline-block' , marginLeft:10}}>
          <div className= "name" style = {{fontSize: 125%}}>Name Here ....</div>
          <div className= "company">Company Name Here ....</div>
        </div>
        </div>
        );        
    }
}
class App extends React.Component{
    render(){
        return (
          <div>
          <div className = "header">
            {this.props.title}
          </div>
            <Card/>
            </div>
        );
    }
}

ReactDOM.render(
 <App title = "The Github Cards App"/>,
 mountNode,
);

.github-profile{
    margin: 1rem;
}
.info{
    display:inline-block;
    margin-left:12px;
}
img{    
    width:px;
}