// Slim loader for leaderboard interactions — defer heavy work until user toggles butterfly view
(function(){
  // Load the original interactive script only when needed
  function loadFullScript(){
    var s = document.createElement('script');
    s.src = '/static/leaderboard-full.js';
    s.defer = true;
    document.body.appendChild(s);
  }

  // Wire toggle to load full script when switching to butterflies
  var toggle = document.getElementById('rkViewToggle');
  if (toggle) {
    toggle.addEventListener('click', function(){
      var isTable = document.getElementById('rankings').classList.toggle('is-table-view');
      if (!isTable) {
        // user requested butterflies, load full interactive script
        loadFullScript();
      }
    });
  }

  // Immediately set table view visible
  document.addEventListener('DOMContentLoaded', function(){
    try { document.getElementById('rankings').classList.add('is-table-view'); } catch(e){}
  });
})();
