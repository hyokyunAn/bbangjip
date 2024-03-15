const appLink = document.querySelector('.app-link');

function handleClick(event) {
  event.preventDefault();
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = 'https://play.google.com/store/apps/details?id=com.example.myapp';
  } else {
    alert('모바일에서 이용 가능한 링크입니다.');
  }
}

appLink.addEventListener('click', handleClick);
