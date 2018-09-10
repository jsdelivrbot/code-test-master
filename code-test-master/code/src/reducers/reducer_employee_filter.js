//Author Ram Date: 7/10/2018
//Action for responding back the payload to components after user search
export default function(state=null, action){
switch (action.type) {
  case 'EMPLOYEE_FILTER':
  return action.payload;
}
return state;
}
