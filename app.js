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
    closeShareLinkModal()
}

shareBtn.addEventListener('click', openShareModal)
closeShareBtn.addEventListener('click', closeShareModal)
backdrop.addEventListener('click', closeall)
closeNewsBtn.addEventListener('click', closeNewsModal)
followBtn.addEventListener('click', openNewsModal)


const shareBtnLink = document.querySelectorAll('.share-button');
const shareModalLink = document.getElementById('share-modal-link');
const closeShareLinkBtn = document.getElementById('closeShareBtnLink');
const hiddenText = document.getElementById('hiddentext')


shareBtnLink.forEach(button =>{
    button.addEventListener('click', (event)=>{

        const url = event.currentTarget.getAttribute('urlToPass');
        shareModalLink.style.display = 'block';
        backdrop.style.display = 'block';

        const content = shareModalLink.querySelector('.dinamyc-content');
        hiddenText.textContent = url;
        content.value = url;
        
    })
})

function closeShareLinkModal(){
    shareModalLink.style.display = 'none';
    backdrop.style.display = 'none';
}

closeShareLinkBtn.addEventListener('click', closeShareLinkModal)



document.getElementById('shareInstagram').addEventListener('click', async () => {
    const url = 'https://vito290500.github.io/Link_Tree/';


    try {
        await navigator.clipboard.writeText(url);
        alert("link copied to clipboard!")
    } catch (err) {
        console.error('Errore nella copia del link:', err);
    }


    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Guarda questo link',
                text: 'Dai un’occhiata a questo contenuto!',
                url: url,
            });
        } catch (err) {
            console.error('Errore nella condivisione:', err);
        }
    } else {
        alert('La tua piattaforma non supporta la condivisione tramite Web Share API.');
    }
});


const copyToClipboardBtn = document.getElementById('copy-to-clipboard');
function Copy(){
    const url = 'https://vito290500.github.io/Link_Tree/';
    navigator.clipboard.writeText(url);
    alert("link copied to clipboard!")
}
copyToClipboardBtn.addEventListener('click', Copy)



const otherClick = document.getElementById('other-click');

otherClick.addEventListener('click', ()=>{
    shareModalLink.style.display = 'none';
    backdrop.style.display = 'none';
    openShareModal()
})

const ShareCopyBtn = document.getElementById('copy-to-clipboard-share');

ShareCopyBtn.addEventListener('click', ()=>{
    url = hiddenText.textContent
    
    navigator.clipboard.writeText(url);
    alert("link copied to clipboard!")
})