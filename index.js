function scuberGreetingForFeet(ride){
  let result;
  if (ride<=400) {
    result = 'This one is on me!';
  } else if (ride>200 && ride<=2000) {
    result = 'That will be twenty bucks.'
  } else if (ride>2000 && ride<=2500) {
    result = 'I will gladly take your thirty bucks.'
  } else {
    result = "No can do."
  }
  return result;
}

function ternaryCheckCity(city){
 const result = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
 return result;
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    default:
      return 'Bye.';
      break;
  }
}