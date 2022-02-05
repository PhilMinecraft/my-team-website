function openLanguage(){
    document.getElementById('current').onclick = closeLanguage;
    document.getElementById('selection').style.display = 'flex';
    document.getElementById('language').style.display = 'block';
  }
  function closeLanguage(){
    document.getElementById('current').onclick = openLanguage;
    document.getElementById('selection').style.display = 'none';
    document.getElementById('language').style.display = 'none';
  }