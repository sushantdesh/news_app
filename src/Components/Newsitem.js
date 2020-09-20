import React from "react";
import Card from 'react-bootstrap/Card'
import Moment from 'moment'

class Newsitem extends React.Component{


    render() {

        return(
<div >

    <Card>
        {this.props.article.multimedia?
        <Card.Img  src={this.props.article.multimedia[0].url} />
        : null}
        <Card.Body>
            <Card.Title style={{cursor:'pointer'}}><a href={this.props.article.url}>{this.props.article.title}</a></Card.Title>
            <Card.Subtitle  className="mb-2 text-muted" >{this.props.article.section} {' '}{this.props.article.subsection}</Card.Subtitle>
            <Card.Text>
                {this.props.article.abstract}
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted"> {Moment(this.props.article.published_date).fromNow()} </small>
        </Card.Footer>
    </Card>

    {/*        <h2>{this.props.article.title}</h2>*/}
    {/*<h3>from {this.props.article.source.name}</h3>*/}

    {/*{this.props.article.urlToImage ? <img src={this.props.article.urlToImage} alt="image not loaded" style={{maxWidth:"30%"}}/> : null}*/}
    {/*{this.props.article.author ? <p><p>author :{this.props.article.author}</p>*/}
    {/*    <p> published at : {this.props.article.publishedAt}</p> </p>:*/}
    {/*    <p>published at : {this.props.article.publishedAt}</p>}*/}
    {/*<p>{this.props.article.description}</p>*/}

    {/*<p>{this.props.article.content}</p>*/}
</div>
        )
    }
}
export default Newsitem;