document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup');
    var btns = document.querySelectorAll('.popup-message');
    var span = document.querySelector('.close');

    btns.forEach(function(btn) {
        btn.onclick = function() {
            popup.style.display = 'block';
        }
    });

    span.onclick = function() {
        popup.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }
});