// Handle the sublists events

document.querySelectorAll('.main-menu li').forEach(item => {
    item.addEventListener('focus', showSublist);
    item.addEventListener('click', showSublist);
});

function showSublist(event) {
    const targetId = event.target.dataset.target;

    // Hide all sublists
    document.querySelectorAll('.sublist').forEach(sublist => {
        sublist.classList.remove('active');
    });

    // Show the targeted sublist
    const targetSublist = document.getElementById(targetId);
    if (targetSublist) {
        targetSublist.classList.add('active');
    }
}