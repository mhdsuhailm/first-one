function getCurrentDateTime() {
    const currentDate = new Date();
    
    // Get month, date, year
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const date = currentDate.getDate().toString().padStart(2, '0');
    const year = currentDate.getFullYear();
    
    // Get hours, minutes, seconds
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    
    // Get month name
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const monthName = monthNames[currentDate.getMonth()];
    
    // Format: mm/dd/yyyy hh:mm:ss, Month Name
    const formattedDateTime = `${month}/${date}/${year} ${hours}:${minutes}:${seconds}, ${monthName}`;
    
    return formattedDateTime;
  }
  
  // Usage example
  console.log(getCurrentDateTime());
  