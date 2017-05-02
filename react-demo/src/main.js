import React from 'react' ;

class Main extends React.Component {
  render(){
    let mainStyle = {
      margin:'0 auto',
      width:'50%',
      textAlign:'center',
      background:'#ccc',
      borderRadius: '10px'
    };
    return(
      <div id="main" style={mainStyle}>
        <div id="banner">
          <h1>Jumbotron heading</h1>
          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <a href="#">Sign up today</a>
        </div>
      </div>
    )
  }
};

export default Main ;
