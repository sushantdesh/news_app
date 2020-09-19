import React from "react";


class Newsitem extends React.Component{


    render() {

        return(
<div >
            <h2>{this.props.article.title}</h2>
    <h3>from {this.props.article.source.name}</h3>

    {this.props.article.urlToImage ? <img src={this.props.article.urlToImage} alt="image not loaded" style={{maxWidth:"30%"}}/> : null}
    {this.props.article.author ? <p><p>author :{this.props.article.author}</p>
        <p> published at : {this.props.article.publishedAt}</p> </p>:
        <p>published at : {this.props.article.publishedAt}</p>}
    <p>{this.props.article.description}</p>

    <p>{this.props.article.content}</p>
</div>
        )
    }
}
export default Newsitem;