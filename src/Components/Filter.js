import React from "react";
import Button from 'react-bootstrap/Button'
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
               <Button variant="primary" onClick={this.props.category.bind(this,'home.json')}>Home</Button> {' '}
               <Button variant="primary" onClick={this.props.category.bind(this,'arts.json')}>Arts</Button>{' '}
               <Button variant="primary"  onClick={this.props.category.bind(this,'books.json')}>Books</Button>{' '}
               <Button variant="primary"  onClick={this.props.category.bind(this,'business.json')}>Business</Button>{' '}
               <Button variant="primary" onClick={this.props.category.bind(this,'fashion.json')}>Fashion</Button>{' '}
               <Button variant="primary"  onClick={this.props.category.bind(this,'food.json')}>Food</Button>{' '}
               <Button variant="primary"  onClick={this.props.category.bind(this,'health.json')}>Health</Button> {'  '}
               <Button variant="primary"  onClick={this.props.category.bind(this,'magazine.json')}>Magazine</Button> {'  '}
               <Button variant="primary"  onClick={this.props.category.bind(this,'movies.json')}>Movies</Button> {'  '}
               <Button variant="primary" onClick={this.props.category.bind(this,'nyregion.json')}>NYregion</Button> {'  '}
               <Button variant="primary"  onClick={this.props.category.bind(this,'opinion.json')}>Opinion</Button> {'  '}
               <Button variant="primary"  onClick={this.props.category.bind(this,'politics.json')}>Politics</Button> {'  '}
               <Button variant="primary"  onClick={this.props.category.bind(this,'science.json')}>Science</Button> {'  '}
               <Button variant="primary"  onClick={this.props.category.bind(this,'sports.json')}>Sports</Button> {'  '}
               <Button variant="primary"  onClick={this.props.category.bind(this,'technology.json')}>Technology</Button> {'  '}




           </div>
        )
    }
}
export default Filter;