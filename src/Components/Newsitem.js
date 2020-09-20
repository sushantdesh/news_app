import React from "react";
import Card from 'react-bootstrap/Card'


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
            <Card.Text>
                {this.props.article.abstract}
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">{this.props.article.published_date}, ({this.props.article.section} {' '}
            {this.props.article.subsection}) </small>
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