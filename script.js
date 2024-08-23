const share = document.querySelector('.share');
const shareIcons = document.querySelectorAll('.share-icon');

for (let i = 0; i < shareIcons.length; i++) {
    shareIcons[i].addEventListener('click', ()=> {
        share.classList.value == 'share slide-out-bottom'
        ? share.classList.value = 'share slide-top'
        : share.classList.value = 'share slide-out-bottom';
    })
}