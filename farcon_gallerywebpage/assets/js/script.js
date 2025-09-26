alert("Welcome to Redbean Production!")

var activePage = '';
function showPage(id) {
    activePage = id;
    document.getElementById('gallery').classList.add('hidden');

    //   document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    document.getElementById(id).classList.add('active');
}

function backToGallery() {

    document.getElementById(activePage).classList.remove('active');
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById('gallery').classList.remove('hidden');
    activePage = '';

}

document.querySelectorAll('.gallery-item video').forEach(video => {
  video.addEventListener('mouseenter', () => video.play());
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});

