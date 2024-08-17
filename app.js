const followBtn = document.getElementById('follow-btn')
const newsModal = document.getElementById('news-modal')
const closeNewsBtn = document.getElementById('news-modal')

const backdrop = document.getElementById('backdrop')

const shareBtn = document.getElementById('share-btn')
const shareModal = document.getElementById('share-modal')
const closeShareBtn = document.getElementById('closeShareBtn')

function openNewsModal() {
    newsModal.classList.add('show');
    backdrop.style.display = 'block';
    setTimeout(() => {
        newsModal.style.opacity = '1';
        newsModal.style.display = "block";
    }, 10);
}

function openShareModal() {
    shareModal.classList.add('show');
    backdrop.style.display = 'block';
    setTimeout(() => {
        shareModal.style.opacity = '1';
        shareModal.style.display = "block";
    }, 10);
}

function closeNewsModal() {
    newsModal.style.opacity = '0';
    newsModal.style.display = "none";
    backdrop.style.display = 'none';
    setTimeout(() => {
        newsModal.classList.remove('show');
    }, 300);
}

function closeShareModal() {
    shareModal.style.opacity = '0';
    shareModal.style.display = "none";
    backdrop.style.display = 'none';
    setTimeout(() => {
       shareModal.classList.remove('show');
    }, 300);
}

function closeall(){
    closeNewsModal()
    closeShareModal()
}

shareBtn.addEventListener('click', openShareModal)
closeShareBtn.addEventListener('click', closeShareModal)
backdrop.addEventListener('click', closeall)
closeNewsBtn.addEventListener('click', closeNewsModal)
followBtn.addEventListener('click', openNewsModal)