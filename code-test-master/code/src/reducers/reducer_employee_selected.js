//Author Ram Date: 7/10/2018
//For responding back the payload when employee get selected
export default function(state=null, action){
switch (action.type) {
  case 'EMPLOYEE_SELECTED':
  return action.payload;
}
return state;
}
