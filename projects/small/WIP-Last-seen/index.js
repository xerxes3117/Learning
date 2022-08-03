//Edge cases:
// 1) today vs yesterday check
// 2) 12:59 AM / PM

const updateLastSeen = dateString => {
    let lastSeen = '';
    const dt = new Date(dateString);
    console.log(dt)
    const dateDiffInSeconds = (Date.now() - dt.getTime())/1000;

    console.log(dateDiffInSeconds)

    if(dateDiffInSeconds < 0) {
        alert('Invalid date')
        return;
    }

    if(dateDiffInSeconds < 60){
        lastSeen = 'just now'
    } else if(dateDiffInSeconds < 60*60){
        lastSeen = `${Math.floor(dateDiffInSeconds/60)} minute(s) ago`
    } else if(dateDiffInSeconds < 60*60*2) {
        lastSeen = `${Math.floor(dateDiffInSeconds/(60*60))} hours(s) ago at ${dt.getHours()}:${dt.getMinutes()}`
    } else if(dateDiffInSeconds < 60*60*24) {
        lastSeen = `today at ${dt.getHours()}:${dt.getMinutes()}`
    }

    document.getElementById('last-seen').innerText = `Last seen ${lastSeen}`;
}

const handleDateChange = () => {
    const inputDate = document.getElementById('date-input').value;
    console.log(new Date(inputDate));

    updateLastSeen(inputDate);
}

//Test dates
//2022-08-03 10:11:56