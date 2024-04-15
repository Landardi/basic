const eventForm = document.getElementById('eventForm');
const eventsList = document.getElementById('eventsList');

eventForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const description = document.getElementById('description').value;

    const eventObj = {
        title,
        date,
        startTime,
        endTime,
        description
    };

    let events = JSON.parse(localStorage.getItem('events')) || [];
    events.push(eventObj);
    localStorage.setItem('events', JSON.stringify(events));

    displayEvents();
    eventForm.reset();
});

function displayEvents() {
    eventsList.innerHTML = '';

    let events = JSON.parse(localStorage.getItem('events')) || [];
    
    events.forEach(function(event, index) {
        const eventItem = document.createElement('div');
        eventItem.innerHTML = 
            `<h3>${event.title}</h3>
            <p><strong>Дата:</strong> ${event.date}</p>
            <p><strong>Время:</strong> ${event.startTime} - ${event.endTime}</p>
            <p><strong>Описание:</strong> ${event.description}</p>
            <button onclick="deleteEvent(${index})">Удалить</button>`
        ;
        eventsList.appendChild(eventItem);
    });
}

function deleteEvent(index) {
    let events = JSON.parse(localStorage.getItem('events')) || [];
    events.splice(index, 1);
    localStorage.setItem('events', JSON.stringify(events));
    
    displayEvents();
}

displayEvents();