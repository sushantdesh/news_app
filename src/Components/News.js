import React from "react";
import Newsitem from "./Newsitem";
import CardsColumn from 'react-bootstrap/CardColumns'

class News extends React.Component{
    getStyle= {
        border: '3px solid green',
        padding: '10px',
        background: 'white',margin:'auto',width:'70%',
        borderRadius:'20px'

    }
    render() {

        return (
            <CardsColumn>
                {this.props.newsarticles.map((article)=>{
                    return <Newsitem article={article}></Newsitem>
                })}
            </CardsColumn>
        )

    }
}
export default News;