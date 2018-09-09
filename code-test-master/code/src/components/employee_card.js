import React, {Component} from 'react';
import  {Card , CardImg ,CardColumns, CardText , CardBody , CardTitle , CardSubTitle , Button}  from 'reactstrap';

class EmployeeCard extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const imageUrl = this.props.employee.avatar;
    return (
              <div>
              <Card style={{border:'solid 1px'}}>
              <CardBody>
              <div className="video-list media">
                <div className="media-left">
                  <img className="media-object" src={this.props.employee.avatar} />
                </div>
                <div className="media-body">
                  <div className="media-heading" style={{padding:'5px'}} ><h5>{this.props.employee.firstName} {this.props.employee.lastName}</h5></div>
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
