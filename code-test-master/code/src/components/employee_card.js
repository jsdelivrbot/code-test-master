import React, {Component} from 'react';
import  {Card , CardImg ,CardColumns, CardText , CardBody , CardTitle , CardSubTitle , Button}  from 'reactstrap';

//Author: Ram Date: 7/10/2018
//Employee card to show employee details(popup)
class EmployeeCard extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const imageUrl = this.props.employee.avatar;
  
    return (
              <div onClick={()=>this.props.onClick()} className="cardstyle">
              <Card style={{border:'solid 1px'}}>
              <CardBody>
              <div className="video-list media">
                <div style={{float:'left'}}>
                  <img style={{float:'left',display:'flex'}} src={this.props.employee.avatar} />
                </div>
                <div className="media-body">
                  <div className="media-heading" style={{padding:'5px'}}><h5>{this.props.employee.firstName} {this.props.employee.lastName}</h5></div>
                  {this.props.employee.bio.substring(0,50) + " ..."}
                </div>
              </div>
              </CardBody>
              </Card>
              </div>
           );
  }
}

export default EmployeeCard;
