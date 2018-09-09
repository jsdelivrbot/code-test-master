export default function(state=null, action){
switch (action.type) {
  case 'REDUCER_SORT':
  return action.payload;
}
return state;
}
