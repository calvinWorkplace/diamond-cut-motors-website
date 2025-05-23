function readMore(button) {
    var target = button.getAttribute('data-target');
    document.getElementById('read-more-' + target).style.display = 'block';
    button.style.display = 'none';
    document.querySelector('button.read-less-btn[data-target="' + target + '"]').style.display = 'block';
}

function readLess(button) {
    var target = button.getAttribute('data-target');
    document.getElementById('read-more-' + target).style.display = 'none';
    button.style.display = 'none';
    document.querySelector('button.read-more-btn[data-target="' + target + '"]').style.display = 'block';
}

document.getElementById('mobile-menu').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});