//Todo:
    //Edge cases & improvements:
        // 12:59 AM / PM (see original post comments)
        // Check countdown-timer code for date if, else-if checks
        // CSS styling
    //Handle different date formats (epoch, various strings formats etc.)
    //Write everything in typescript with typechecks on variables and functions
    //Improve files structure

const dateDiffInSeconds = dt => (Date.now() - dt.getTime())/1000;


const checkIfSameDay = dt => {
    const currDate = Date.now();
    return new Date().toDateString() === dt.toDateString()
}

const getFormattedTimeInAMPM = dt => {
    let hours = dt.getHours();
    let minutes = dt.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    
    return `${hours}:${minutes} ${ampm}`;
}

//input date format
//2022-08-03 10:11:56
const updateLastSeen = dateString => {
    let lastSeen = '';
    const dt = new Date(dateString);
    const dateDiff = dateDiffInSeconds(dt);

    //Check if date is valid and also a past date
    if(new Date(dateString) == 'Invalid Date' || dateDiff < 0) {
        alert('Invalid date')
        return;
    }

    //Less than 1 min
    if(dateDiff < 60){
        lastSeen = 'just now'
    }
    //1 - 59 min
    else if(dateDiff < 60*60){
        const diffInMinutes = Math.floor(dateDiff/60);
        lastSeen = `${diffInMinutes} ${diffInMinutes == 1 ? 'minute' : 'minutes'} ago`
    }
    //60min - 4 hrs
    else if(dateDiff < 60*60*4){
        lastSeen = `${Math.floor(dateDiff/60)} hours ago`
    }
    //4 hrs - less than 24 hours
     else if(dateDiff < 60*60*24) {
        lastSeen = `${checkIfSameDay(dt) ? 'today' : 'yesterday'} at ${getFormattedTimeInAMPM(dt)}`
    }
    //24 hrs - 30 days
    else if(dateDiff < 60*60*24*30) {
        console.log('diff:', dateDiff, Math.floor(dateDiff/60*60*24));
        lastSeen = `${Math.floor(dateDiff/(60*60*24))} days ago`
    }
    //31 days - 365 days
    else if(dateDiff < 60*60*24*365) {
        lastSeen = `${Math.floor(dateDiff/(60*60*24*30))} months ago`
    }
    //greater than 365 days
    else {
        lastSeen = `over an year ago`
    }

    document.getElementById('last-seen').innerText = `Last seen ${lastSeen}`;
}

const handleDateChange = () => {
    const inputDate = document.getElementById('date-input').value;
    updateLastSeen(inputDate);
}