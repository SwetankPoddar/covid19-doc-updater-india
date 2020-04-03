function isInToday(inputDate)
{
  var today = new Date();
  if(today.setHours(0,0,0,0) === inputDate.setHours(0,0,0,0)){ return true; }
  else { return false; }  
}

export default isInToday;