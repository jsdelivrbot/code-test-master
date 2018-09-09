import React, {Component} from 'react';
import  {Card , CardImg ,CardColumns, CardText , CardBody , CardTitle , CardSubTitle , Button}  from 'reactstrap';

class EmployeeCard extends Component {
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props.employee);
    const imageUrl = this.props.employee.avatar;
    return (
    
              <Card>
              <CardBody>

              </CardBody>
                <CardBody>
                        <CardImg  src={imageUrl} /> <CardTitle>{this.props.employee.firstName} {this.props.employee.lastName}</CardTitle>
                        <CardText>{this.props.employee.bio}</CardText>
                        <Button>View</Button>
                </CardBody>
              </Card>


           );

  }
}

export default EmployeeCard;
