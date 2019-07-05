// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
	
  var sol = {};
  var money=[50, 25, 10, 5, 1];  
  var i=0;
  var qu;  
  for (i=0; i<money.length; i++)
  {
  	  if (currency>10000)
  		{
  			return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  		} else if (currency<1){
			return  sol;
		}else if (currency>=money[i]){
        	qu = Math.floor(currency/money[i]);            
            if (money[i] == 50)
			{
					sol.H= qu;
			} else	if (money[i] == 25)
			{
					sol.Q= qu;
			} else if (money[i] == 10)
			{
					sol.D= qu;
			} else if (money[i] == 5)
			{
					sol.N= qu;
			} else if (money[i] == 1)
			{
					sol.P= qu;
			};			                    
            currency = currency % money[i];
 		};  
  };    
  return  sol;
} 