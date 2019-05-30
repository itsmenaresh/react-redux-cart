const initialState = [
  {id:1, name:"PS4 Console", count:0},
  {id:2, name:"DJI Drone", count:0}, 
  {id:3, name:"Sony TV 65inches", count:0}
  ];

const reducer = (state=initialState, action)=>{
  const returnState=[...state];
  if (action.type === "INC") {
    returnState.filter(item => item.id === action.id)[0].count++
  }
   if (action.type === "DEC") {
     const fArray = returnState.filter(item => item.id === action.id)[0];
    if (fArray.count > 0) fArray.count--
  }
  return returnState;
}

export default reducer;