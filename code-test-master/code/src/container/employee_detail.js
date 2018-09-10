import React , {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import Moment from 'react-moment';

//Author :Ram, Date :7/10/2018
//Component to show employee details
class EmployeeDetail extends Component {
  constructor(props){
    super(props);
    this.state = {open:true};
    const {open} = this.props.open;
  }

  onOpenModel = () => {this.setState({open:true})};
  onCloseModel = () => {
    this.props.onClosePopUp();
    //this.setState({activeEmployee:null});
  };
  render(){
    const {open} = this.props.open;

    if(!this.props.employee){
      return (<div></div>);
    }

    return(
      <div className="container">
      <Modal open={open} onClose={this.onCloseModel} center>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={this.props.employee.avatar} />

        </div>
        <div className="media-body">
          <div className="media-heading"><h4>{this.props.employee.firstName} {this.props.employee.lastName}</h4></div>
          <div>Job Title: {this.props.employee.jobTitle}</div>
          <div>Age: {this.props.employee.age}</div>
          <div>Date of Joining : <Moment format="MM-DD-YYYY" date={this.props.employee.dateJoined} /></div>
          {this.props.employee.bio}
        </div>
      </div>
      </Modal>
      </div>
    );
  }

  onOpenModal = () =>{
    this.setState ({open : true});
  }

}

function mapStateToProps(state){
  return{
    employee : state.activeEmployee
  };
}

export default connect(mapStateToProps)(EmployeeDetail);
