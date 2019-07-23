import React from 'react'; 

class Welcome extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      date: new Date()
    }
    setInterval(()=>{ 
      this.setState({
        date: new Date() // 更新 date
      })
    })
  }    
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h2>{this.state.date.toString()}</h2>
      </div>
    )
  }
}

export default Welcome 