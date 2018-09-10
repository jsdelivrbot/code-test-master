//Author Ram Date: 7/10/2018
//For responding back with sorted array
export default function(state=null, action){
switch (action.type) {
  case 'REDUCER_SORT':
  return action.payload;
}
return state;
}
