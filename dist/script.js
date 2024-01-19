document.addEventListener('DOMContentLoaded', function () {
    var calendarItems = document.querySelectorAll('.calendar-item');

    calendarItems.forEach(function (item) {
        var description = item.querySelector('.title');

        item.addEventListener('click', function () {
            // Alternar a visibilidade da descrição do calendário
            if (description.style.display === 'block' || description.style.display === '') {
                description.style.display = 'none';
            } else {
                description.style.display = 'block';
            }
        });
    });
});