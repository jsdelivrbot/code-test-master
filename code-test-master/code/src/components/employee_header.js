import React,{Component} from 'react';
import Moment from 'react-moment';

//Author Ram Date: 7/10/2018
//Company Header and Title
class EmployeeHeader extends Component{
  constructor(props){
    super(props);
    this.state = {term : ''};
  }
  render(){
    return (<div className="border-class">
      <h3>{this.props.companyInfo.companyName}</h3>
      {this.props.companyInfo.companyMotto}
      <div className="right-float">Since <Moment format="YYYY" date={this.props.companyInfo.companyEst} /></div>
    </div>
    );
  }
}

export default EmployeeHeader;
