const templatetopnav = document.createElement("template");

templatetopnav.innerHTML = `
<div class="topnav">
<div class="dropdown">
  <a href="/more/index.html" class="topnavbutton">MORE↓</a>
  <div class="dropdown-content">
    <a href="/more/Unbl0ck3rs.html">Unbl0ck3rs</a>
    <a href="/more/Virtual_Machines.html" class="vm">Virtual Machines</a>
    <a href="/more/chat.html" class="dis">D1sc0rd</a>
    <a href="/more/G4m3-Requests.html" class="vm">G4m3 Requests</a>
    <a href="/more/takedown.html" class="gr">DMCA</a>

  </div>
</div>
<a href="/about.html">📝ABOUT</a>
<a href="/leaderboard.html">🏆LEADERBOARD</a>
<a href="/index.html">🎮G4M3S</a>
<div class="centered-fixed">
     <img src="/assets/img/goose.webp" onmouseover="spin(this)"
    onmouseout="unspin(this)" alt="Duck" width="40" height="40" />
      <span class="duckmath-header" onmouseenter="showchildren(this);" onmouseleave="hidechildren(this);">DuckMath<span class="small-text" style="visibility: hidden">.org</span></span>
</div>


</div>



<div id="hamburger-icon" onclick="toggleMobileMenu(this)">
<div class="bar1"></div>
<div class="bar2"></div>
<div class="bar3"></div>
<ul class="mobile-menu">
  <li><a href="/index.html">HOME</a></li>
  <li><a href="/g4m3s.html">G4M3S</a></li>
  <li><a href="/leaderboard.html">LEADERBOARD</a></li>
  <li><a href="/changelog.html">CHANGELOG</a></li>
  <li><a href="/about.html">ABOUT</a></li>
  <li>
    <a class="topnavbutton">MORE↓</a>
    <div class="dropdown-content">
      <a href="/more/Unbl0ck3rs.html">Unbl0ck3rs</a>
      <a href="/more/Virtual_Machines.html" class="vm">Virtual Machines</a>
      <a href="/more/chat.html" class="dis">D1sc0rd</a>
      <a href="/more/G4m3-Requests.html" class="gr">G4m3 Requests</a>
    </div>
  </li>
</ul>
</div>
`;

function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

document.body.appendChild(templatetopnav.content);

// <footer class="footer">Copyright 2021-2023 duckmath.org</footer>
