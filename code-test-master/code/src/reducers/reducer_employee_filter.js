export default function(state=null, action){
switch (action.type) {
  case 'EMPLOYEE_FILTER':
  return action.payload;
}
return state;
}
