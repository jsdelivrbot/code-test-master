//Author Ram Date: 7/10/2018
//Action for responding back the payload to components after user search
export default function(state=[], action){
switch (action.type) {
  case 'REDUCER_FILTER':
  return action.payload.data.employees;
}
return state;
}
