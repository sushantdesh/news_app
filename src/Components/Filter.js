import React from "react";

class Filter extends React.Component{
        getStyle= {
    border: '3px solid green',
    padding: '10px',
    background: 'f8f8ff',margin:'auto',width:'70%',
            borderRadius: '10px'
}
getbuttonstyle={
            borderRadius:'12px',
            background: 'lightblue',
            cursor:'pointer'
}
selectedCountry='R'
    render() {
        return(
           <div style={this.getStyle}>
               <button style={this.getbuttonstyle} onClick={this.props.category.bind(this,'category=business')}>Bussiness</button> {' '}
               <button style={this.getbuttonstyle} onClick={this.props.category.bind(this,'category=entertainment')}>Entertainment</button>{' '}
               <button style={this.getbuttonstyle} onClick={this.props.category.bind(this,'category=general')}>General</button>{' '}
               <button style={this.getbuttonstyle} onClick={this.props.category.bind(this,'category=health')}>Health</button>{' '}
               <button style={this.getbuttonstyle} onClick={this.props.category.bind(this,'category=science')}>Science</button>{' '}
               <button style={this.getbuttonstyle} onClick={this.props.category.bind(this,'category=sports')}>Sports</button>{' '}
               <button style={this.getbuttonstyle} onClick={this.props.category.bind(this,'category=technology')}>Technology</button> {'  '}


               <input type="textfield" ></input>
           </div>
        )
    }
}
export default Filter;