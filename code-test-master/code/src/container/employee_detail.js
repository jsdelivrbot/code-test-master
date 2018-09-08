import React , {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';

class EmployeeDetail extends Component {
  constructor(props){
    super(props);
    this.state = {open:true};
    const {open} = this.props.open;
  }

  onOpenModel = () => {this.setState({open:true})};
  onCloseModel = () => {
    this.setState({open:false});
    //this.setState({activeEmployee:null});
  };
  render(){
    const {open} = this.state;

    if(!this.props.employee){
      return (<div></div>);
    }

    return(
      <div>
      <Modal open={open} onClose={this.onCloseModel} center>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={this.props.employee.avatar} />
        </div>
        <div className="media-body">
          <div className="media-heading">{this.props.employee.firstName} {this.props.employee.lastName}</div>
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
