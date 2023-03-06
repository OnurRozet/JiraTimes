function convertTime(time) {
    const globalHour = 60;
    const workingDay = 5;
    const workingHour = 8;
  
    let timeArray = time.split(" ");
  
    let totalMinutes = 0;
  
    for (let i = 0; i < timeArray.length; i++) {
      const element = timeArray[i];
      if (element.indexOf("w") > -1) {
        totalMinutes += parseInt(element) * workingDay * workingHour * globalHour;
      } else if (element.indexOf("d") > -1) {
        totalMinutes += parseInt(element) * workingHour * globalHour;
      } else if (element.indexOf("h") > -1) {
        totalMinutes += parseInt(element) * globalHour;
      } else if (element.indexOf("m") > -1) {
        totalMinutes += parseInt(element);
      } else {
        return "Hatalı veri girdiniz";
      }
    }
  
    return totalMinutes;
  }