import React, { Component } from 'react';
import { CardHeader, Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Moment from 'moment';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
      }

    renderComments(dish) {
      if (dish != null) {
         Moment.locale('en');
          const comments = (
            <div><ul className='list-unstyled'>
                <h4 className='text-success'>Comments</h4>
                {
                dish.comments.map((aComment)=> {
                    var date = aComment.date
                    var cdate = (new Date(date)).toDateString().slice(4);
                    return (
                        <li key={aComment.id} className='text-left'>
                        <p>{aComment.comment}</p>
                        <p>--{aComment.author},&nbsp;{cdate} 
                        </p>    
                        </li>
                    );
                })
                }
            </ul></div>)
            return comments
        } else
          return(
              <div></div>
          );
    }


    render() {
      console.log("Rerun a gain")  
      return (
        <div className="row">
            <div  className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
                <div className="CommentBox">
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        </div>
         
      );
  }
}


export default DishDetail;
