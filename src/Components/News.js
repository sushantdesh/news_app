import React from "react";
import Newsitem from "./Newsitem";
class News extends React.Component{
    getStyle= {
        border: '3px solid green',
        padding: '10px',
        background: 'white',margin:'auto',width:'70%',
        borderRadius:'20px'

    }
    render() {
        console.log("from news",this.props.newsarticles)
        return this.props.newsarticles.map((article)=>(
            <div style={this.getStyle}>
            <Newsitem article={article}/>
                {'  '}
            </div>
        ))
    }
}
export default News;