function convertMinutes(item) {
    const gHour = 60;
    const workingHour = 8;
    const workingDay = 5;
  
    if (isNaN(item)) {
      console.log("Sayisal deger girmelisiniz");
    } else if (item < 0) {
      console.log("Pozitif Sayı Girmelisiniz");
    } else {
      let hour = Math.floor(item / gHour);
      let day = Math.floor(hour / workingHour);
      let week = Math.floor(day / workingDay);
      let minute = item % gHour;
  
      return `${week > 0 ? `${week}w` : ""} ${
        day % workingDay > 0 ? `${day % workingDay}d` : ""
      } ${hour % workingHour > 0 ? `${hour % workingHour}h` : ""} ${
        minute > 0 ? `${minute}m` : ""
      }`;
    }
  }