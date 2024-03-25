function addMeeting() {
    const name = document.getElementById('meeting-name').value;
    const place = document.getElementById('meeting-place').value;
    const time = document.getElementById('meeting-time').value;
    const description = document.getElementById('meeting-description').value;
    const participants = document.getElementById('meeting-participants').value;

    const card = document.createElement('div');
    card.classList.add('card');

    let colorClass = '';
    const colors = ['green', 'blue', 'red'];
    colorClass = colors[Math.floor(Math.random() * colors.length)];

    card.classList.add(colorClass);

    card.innerHTML = 
        `<h2>${name}</h2>
        <p><strong>Место:</strong> ${place}</p>
        <p><strong>Время:</strong> ${time}</p>
        <p><strong>Описание:</strong> ${description}</p>
        <p><strong>Участники:</strong> ${participants}</p>`
        
    ;

    document.getElementById('meeting-cards').appendChild(card);
}
