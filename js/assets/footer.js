function openLanguage(){
    document.getElementById('current').onclick = closeLanguage;
    document.getElementById('current').style.position = 'relative';
    document.getElementById('selection').style.display = 'flex';
    document.getElementById('language').style.display = 'block';
  }
  function closeLanguage(){
    document.getElementById('current').onclick = openLanguage;
    document.getElementById('current').style.position = 'static';
    document.getElementById('selection').style.display = 'none';
    document.getElementById('language').style.display = 'none';
  }