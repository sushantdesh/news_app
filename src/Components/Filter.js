import React from "react";

class Filter extends React.Component{
        getStyle= {
            textAlign:'center',
    border: '3px solid green',
    padding: '10px',
    background: 'f8f8ff',margin:'auto',width:'100%',
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
               <button style={this.getbuttonstyle} onClick={this.props.category.bind(this,'home.json')}>Home</button> {' '}
               <button style={this.getbuttonstyle} onClick={this.props.category.bind(this,'arts.json')}>Arts</button>{' '}
               <button style={this.getbuttonstyle} onClick={this.props.category.bind(this,'books.json')}>Books</button>{' '}
               <button style={this.getbuttonstyle} onClick={this.props.category.bind(this,'business.json')}>Business</button>{' '}
               <button style={this.getbuttonstyle} onClick={this.props.category.bind(this,'fashion.json')}>Fashion</button>{' '}
               <button style={this.getbuttonstyle} onClick={this.props.category.bind(this,'food.json')}>Food</button>{' '}
               <button style={this.getbuttonstyle} onClick={this.props.category.bind(this,'health.json')}>Health</button> {'  '}
               <button style={this.getbuttonstyle} onClick={this.props.category.bind(this,'magazine.json')}>Magazine</button> {'  '}
               <button style={this.getbuttonstyle} onClick={this.props.category.bind(this,'movies.json')}>Movies</button> {'  '}
               <button style={this.getbuttonstyle} onClick={this.props.category.bind(this,'nyregion.json')}>NYregion</button> {'  '}
               <button style={this.getbuttonstyle} onClick={this.props.category.bind(this,'opinion.json')}>Opinion</button> {'  '}
               <button style={this.getbuttonstyle} onClick={this.props.category.bind(this,'politics.json')}>Politics</button> {'  '}
               <button style={this.getbuttonstyle} onClick={this.props.category.bind(this,'science.json')}>Science</button> {'  '}
               <button style={this.getbuttonstyle} onClick={this.props.category.bind(this,'sports.json')}>Sports</button> {'  '}
               <button style={this.getbuttonstyle} onClick={this.props.category.bind(this,'technology.json')}>Technology</button> {'  '}




           </div>
        )
    }
}
export default Filter;