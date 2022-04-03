const mostFrequentDays = year => {
    const display =[]
    const weekdays = {
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thursday: 0,
      Friday: 0,
      Saturday: 0,
      Sunday: 0
    }
   const startDate = new Date(year,0,1)
   const endDate = new Date(year,11,31)
   
   for(var date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
     switch (date.getDay()) {
       case 1:
         weekdays.Monday += 1
         break;
       case 2:
         weekdays.Tuesday += 1
         break;
       case 3:
         weekdays.Wednesday += 1
         break;
       case 4:
         weekdays.Thursday += 1
         break;
       case 5:
         weekdays.Friday += 1
         break;
       case 6:
         weekdays.Saturday += 1
         break;
       case 0:
         weekdays.Sunday += 1
     }
   }
   
   Object.entries(weekdays).map(day=> {
     if(day[1] === Math.max(...Object.values(weekdays))){
       display.push(day[0])
     }
   })
   
 return display
}  