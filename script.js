const MATCHES = [
  // Round of 32
  { a: "South Africa 🇿🇦", b: "Canada 🇨🇦", g: "Round of 32" },
  { a: "Brazil 🇧🇷", b: "Japan 🇯🇵", g: "Round of 32" },
  { a: "Germany 🇩🇪", b: "Paraguay 🇵🇾", g: "Round of 32" },
  { a: "Netherlands 🇳🇱", b: "Morocco 🇲🇦", g: "Round of 32" },
  { a: "Ivory Coast 🇨🇮", b: "Norway 🇳🇴", g: "Round of 32" },
  { a: "France 🇫🇷", b: "Sweden 🇸🇪", g: "Round of 32" },
  { a: "Mexico 🇲🇽", b: "Ecuador 🇪🇨", g: "Round of 32" },
  { a: "England 🏴", b: "Congo 🇨🇩", g: "Round of 32" },
  { a: "Belgium 🇧🇪", b: "Senegal 🇸🇳", g: "Round of 32" },
  { a: "USA 🇺🇸", b: "Bosnia 🇧🇦", g: "Round of 32" },
  { a: "Spain 🇪🇸", b: "Austria 🇦🇹", g: "Round of 32" },
  { a: "Portugal 🇵🇹", b: "Croatia 🇭🇷", g: "Round of 32" },
  { a: "Switzerland 🇨🇭", b: "Algeria 🇩🇿", g: "Round of 32" },
  { a: "Australia 🇦🇺", b: "Egypt 🇪🇬", g: "Round of 32" },
  { a: "Argentina 🇦🇷", b: "Cabo Verde 🇨🇻", g: "Round of 32" },
  { a: "Colombia 🇨🇴", b: "Ghana 🇬🇭", g: "Round of 32" },

  // Group A
  { a: "Mexico 🇲🇽", b: "South Africa 🇿🇦", g: "Group A" },
  { a: "South Korea 🇰🇷", b: "Czechia 🇨🇿", g: "Group A" },
  { a: "Mexico 🇲🇽", b: "South Korea 🇰🇷", g: "Group A" },
  { a: "Czechia 🇨🇿", b: "South Africa 🇿🇦", g: "Group A" },
  { a: "South Africa 🇿🇦", b: "South Korea 🇰🇷", g: "Group A" },
  { a: "Czechia 🇨🇿", b: "Mexico 🇲🇽", g: "Group A" },

  // Group B
  { a: "Canada 🇨🇦", b: "Bosnia & Herzegovina 🇧🇦", g: "Group B" },
  { a: "Qatar 🇶🇦", b: "Switzerland 🇨🇭", g: "Group B" },
  { a: "Canada 🇨🇦", b: "Qatar 🇶🇦", g: "Group B" },
  { a: "Switzerland 🇨🇭", b: "Bosnia & Herzegovina 🇧🇦", g: "Group B" },
  { a: "Bosnia & Herzegovina 🇧🇦", b: "Qatar 🇶🇦", g: "Group B" },
  { a: "Switzerland 🇨🇭", b: "Canada 🇨🇦", g: "Group B" },

  // Group C
  { a: "Brazil 🇧🇷", b: "Morocco 🇲🇦", g: "Group C" },
  { a: "Haiti 🇭🇹", b: "Scotland 🏴", g: "Group C" },
  { a: "Brazil 🇧🇷", b: "Haiti 🇭🇹", g: "Group C" },
  { a: "Scotland 🏴", b: "Morocco 🇲🇦", g: "Group C" },
  { a: "Morocco 🇲🇦", b: "Haiti 🇭🇹", g: "Group C" },
  { a: "Scotland 🏴", b: "Brazil 🇧🇷", g: "Group C" },

  // Group D
  { a: "USA 🇺🇸", b: "Paraguay 🇵🇾", g: "Group D" },
  { a: "Australia 🇦🇺", b: "Türkiye 🇹🇷", g: "Group D" },
  { a: "USA 🇺🇸", b: "Australia 🇦🇺", g: "Group D" },
  { a: "Türkiye 🇹🇷", b: "Paraguay 🇵🇾", g: "Group D" },
  { a: "Paraguay 🇵🇾", b: "Australia 🇦🇺", g: "Group D" },
  { a: "Türkiye 🇹🇷", b: "USA 🇺🇸", g: "Group D" },

  // Group E
  { a: "Germany 🇩🇪", b: "Curaçao 🇨🇼", g: "Group E" },
  { a: "Côte d'Ivoire 🇨🇮", b: "Ecuador 🇪🇨", g: "Group E" },
  { a: "Germany 🇩🇪", b: "Côte d'Ivoire 🇨🇮", g: "Group E" },
  { a: "Ecuador 🇪🇨", b: "Curaçao 🇨🇼", g: "Group E" },
  { a: "Curaçao 🇨🇼", b: "Côte d'Ivoire 🇨🇮", g: "Group E" },
  { a: "Ecuador 🇪🇨", b: "Germany 🇩🇪", g: "Group E" },

  // Group F
  { a: "Netherlands 🇳🇱", b: "Japan 🇯🇵", g: "Group F" },
  { a: "Sweden 🇸🇪", b: "Tunisia 🇹🇳", g: "Group F" },
  { a: "Netherlands 🇳🇱", b: "Sweden 🇸🇪", g: "Group F" },
  { a: "Tunisia 🇹🇳", b: "Japan 🇯🇵", g: "Group F" },
  { a: "Japan 🇯🇵", b: "Sweden 🇸🇪", g: "Group F" },
  { a: "Tunisia 🇹🇳", b: "Netherlands 🇳🇱", g: "Group F" },

  // Group G
  { a: "Belgium 🇧🇪", b: "Egypt 🇪🇬", g: "Group G" },
  { a: "Iran 🇮🇷", b: "New Zealand 🇳🇿", g: "Group G" },
  { a: "Belgium 🇧🇪", b: "Iran 🇮🇷", g: "Group G" },
  { a: "New Zealand 🇳🇿", b: "Egypt 🇪🇬", g: "Group G" },
  { a: "Egypt 🇪🇬", b: "Iran 🇮🇷", g: "Group G" },
  { a: "New Zealand 🇳🇿", b: "Belgium 🇧🇪", g: "Group G" },

  // Group H
  { a: "Spain 🇪🇸", b: "Cape Verde 🇨🇻", g: "Group H" },
  { a: "Saudi Arabia 🇸🇦", b: "Uruguay 🇺🇾", g: "Group H" },
  { a: "Spain 🇪🇸", b: "Saudi Arabia 🇸🇦", g: "Group H" },
  { a: "Uruguay 🇺🇾", b: "Cape Verde 🇨🇻", g: "Group H" },
  { a: "Cape Verde 🇨🇻", b: "Saudi Arabia 🇸🇦", g: "Group H" },
  { a: "Uruguay 🇺🇾", b: "Spain 🇪🇸", g: "Group H" },

  // Group I
  { a: "France 🇫🇷", b: "Senegal 🇸🇳", g: "Group I" },
  { a: "Iraq 🇮🇶", b: "Norway 🇳🇴", g: "Group I" },
  { a: "France 🇫🇷", b: "Iraq 🇮🇶", g: "Group I" },
  { a: "Norway 🇳🇴", b: "Senegal 🇸🇳", g: "Group I" },
  { a: "Senegal 🇸🇳", b: "Iraq 🇮🇶", g: "Group I" },
  { a: "Norway 🇳🇴", b: "France 🇫🇷", g: "Group I" },

  // Group J
  { a: "Argentina 🇦🇷", b: "Algeria 🇩🇿", g: "Group J" },
  { a: "Austria 🇦🇹", b: "Jordan 🇯🇴", g: "Group J" },
  { a: "Argentina 🇦🇷", b: "Austria 🇦🇹", g: "Group J" },
  { a: "Jordan 🇯🇴", b: "Algeria 🇩🇿", g: "Group J" },
  { a: "Algeria 🇩🇿", b: "Austria 🇦🇹", g: "Group J" },
  { a: "Jordan 🇯🇴", b: "Argentina 🇦🇷", g: "Group J" },

  // Group K
  { a: "Portugal 🇵🇹", b: "DR Congo 🇨🇩", g: "Group K" },
  { a: "Uzbekistan 🇺🇿", b: "Colombia 🇨🇴", g: "Group K" },
  { a: "Portugal 🇵🇹", b: "Uzbekistan 🇺🇿", g: "Group K" },
  { a: "Colombia 🇨🇴", b: "DR Congo 🇨🇩", g: "Group K" },
  { a: "DR Congo 🇨🇩", b: "Uzbekistan 🇺🇿", g: "Group K" },
  { a: "Colombia 🇨🇴", b: "Portugal 🇵🇹", g: "Group K" },

  // Group L
  { a: "England 🏴", b: "Croatia 🇭🇷", g: "Group L" },
  { a: "Ghana 🇬🇭", b: "Panama 🇵🇦", g: "Group L" },
  { a: "England 🏴", b: "Ghana 🇬🇭", g: "Group L" },
  { a: "Panama 🇵🇦", b: "Croatia 🇭🇷", g: "Group L" },
  { a: "Croatia 🇭🇷", b: "Ghana 🇬🇭", g: "Group L" },
  { a: "Panama 🇵🇦", b: "England 🏴", g: "Group L" },
];

let selected = null;
let players = [];
let visible = [...MATCHES];

function renderMatches() {
  const grid = document.getElementById("matchGrid");
  const knockoutGrid = document.getElementById("knockoutGrid");
  if (!visible.length) {
    grid.innerHTML = '<p class="empty">No matches found.</p>';
    return;
  }
  grid.innerHTML = visible
    .filter((m) => m.g.toLowerCase().includes("group"))
    .map((m) => {
      const i = MATCHES.indexOf(m);
      return `<button class="match-card${selected === i ? " selected" : ""}" onclick="selectMatch(${i})">
      <div class="group-tag">${m.g}</div>
      <div class="teams">${m.a}<br><span class="vs">vs</span><br>${m.b}</div>
    </button>`;
    })
    .join("");

  roundOf32Grid.innerHTML = visible
    .filter((m) => m.g.toLowerCase().includes("round of 32"))
    .map((m) => {
      const i = MATCHES.indexOf(m);
      return `<button class="match-card${selected === i ? " selected" : ""}" onclick="selectMatch(${i})">
      <div class="group-tag">${m.g}</div>
      <div class="teams">${m.a}<br><span class="vs">vs</span><br>${m.b}</div>
    </button>`;
    })
    .join("");
  document.getElementById("toStep2Btn").disabled = selected === null;
}

function filterMatches() {
  const q = document.getElementById("matchSearch").value.toLowerCase();
  visible = q
    ? MATCHES.filter((m) => (m.a + m.b).toLowerCase().includes(q))
    : [...MATCHES];
  renderMatches();
}

function selectMatch(i) {
  selected = i;
  renderMatches();
}

function goStep2() {
  if (selected === null) return;
  const m = MATCHES[selected];
  const pill = `${m.a} <span>vs</span> ${m.b}`;
  document.getElementById("step2Pill").innerHTML = pill;
  document.getElementById("step3Pill").innerHTML = pill;
  showStep(2);
  document.getElementById("playerInput").focus();
}

function showStep(n) {
  document
    .querySelectorAll(".step")
    .forEach((s, i) => s.classList.toggle("active", i + 1 === n));
}

function addPlayer() {
  const inp = document.getElementById("playerInput");
  const name = inp.value.trim();
  const splitNames = name
    .split(",")
    .map((n) => n.trim())
    .filter((n) => n);
  if (!name) return;
  //   if (players.includes(",")) {
  console.warn(
    "Comma detected in player names. Splitting into multiple players.",
  );
  players.push(...splitNames);
  players = [...new Set(players)]; // Remove duplicates
  inp.value = "";
  inp.focus();
  renderPlayers();
  return;
  //   }
  //   players.push(name);
  //   inp.value = "";
  //   inp.focus();
  //   renderPlayers();
}

function shufflePlayers() {
  if (!players.length) {
    alert("Add at least one player first.");
    return;
  }
  players = shuffle(players);
  renderPlayers();
}

function removePlayer(i) {
  players.splice(i, 1);
  renderPlayers();
}

function renderPlayers() {
  const list = document.getElementById("playerList");
  list.innerHTML = players.length
    ? players
        .map(
          (p, i) => `
        <div class="player-item">
          <span class="player-num">${i + 1}</span>
          <input class="player-name" value="${p.replace(/"/g, "&quot;")}" onchange="players[${i}]=this.value" />
          <button class="del-btn" onclick="removePlayer(${i})" title="Remove">×</button>
        </div>`,
        )
        .join("")
    : '<p class="empty">No players yet.</p>';
  const n = players.length;
  document.getElementById("countNote").innerHTML =
    n === 0
      ? "0 players"
      : `<strong>${n}</strong> player${n > 1 ? "s" : ""} — will split <strong>${Math.ceil(n / 2)}</strong> vs <strong>${Math.floor(n / 2)}</strong>`;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateTeams() {
  if (!players.length) {
    alert("Add at least one player first.");
    return;
  }
  const s = shuffle(players);
  const half = Math.ceil(s.length / 2);
  const A = s.slice(0, half);
  const B = s.slice(half);
  const m = MATCHES[selected];
  document.getElementById("resultsGrid").innerHTML = `
    <div class="team-box a">
      <div class="team-title">Team A · ${A.length}</div>
      <div class="team-sub">${m.a} side</div>
      ${A.map((p) => `<div class="player-entry">${p}</div>`).join("")}
    </div>
    <div class="team-box b">
      <div class="team-title">Team B · ${B.length}</div>
      <div class="team-sub">${m.b} side</div>
      ${B.map((p) => `<div class="player-entry">${p}</div>`).join("")}
    </div>`;
  showStep(3);
}

function resetAll() {
  //   selected = null;
  players = [];
  visible = [...MATCHES];
  //   document.getElementById("matchSearch").value = "";
  //   document.getElementById("playerInput").value = "";
  //   renderMatches();
  renderPlayers();
  showStep(2);
}

renderMatches();
renderPlayers();
