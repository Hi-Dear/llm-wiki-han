const COLUMNS = [
  { key: "name", label: "종목", numeric: false },
  { key: "ticker", label: "티커", numeric: false, hidden: true },
  { key: "per", label: "PER", group: 2 },
  { key: "pbr", label: "PBR", group: 2 },
  { key: "peg", label: "PEG", group: 2 },
  { key: "psr", label: "PSR", group: 2 },
  { key: "evEbitda", label: "EV/EBITDA", group: 2 },
  { key: "debtRatio", label: "부채비율(%)", group: 3 },
  { key: "roe", label: "ROE(%)", group: 3 },
  { key: "fcf", label: "FCF", group: 3, numeric: false },
  { key: "maPosition", label: "이동평균선", group: 4, numeric: false },
  { key: "rsi", label: "RSI", group: 4 },
  { key: "volumeSpike", label: "거래량", group: 4, numeric: false },
];

const state = {
  data: null,
  market: "전체",
  sortKey: "name",
  sortDir: "asc",
};

function fmt(v, digits = 1) {
  if (v === null || v === undefined || v === "") {
    return '<span class="empty-val">—</span>';
  }
  if (typeof v === "number") return v.toFixed(digits);
  return String(v);
}

function statusClass(interpretation) {
  if (!interpretation) return "neutral";
  if (interpretation.includes("과열")) return "critical";
  if (interpretation.includes("저평가")) return "good";
  if (interpretation.includes("중립")) return "neutral";
  return "neutral";
}

function renderUpdated() {
  const el = document.getElementById("updated-at");
  const ts = state.data.updatedAt;
  el.textContent = ts
    ? `마지막 갱신: ${new Date(ts).toLocaleString("ko-KR", { dateStyle: "medium", timeStyle: "short" })} (KST)`
    : "아직 자동 갱신 전입니다 (첫 실행 대기 중)";
}

function renderMacro() {
  const wrap = document.getElementById("macro-tiles");
  wrap.innerHTML = "";
  for (const m of state.data.macro) {
    const cls = statusClass(m.interpretation);
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.innerHTML = `
      <div class="tile-head">
        <div>
          <div class="tile-name">${m.indicator}</div>
          <div class="tile-sub">${m.sub || ""}</div>
        </div>
      </div>
      <div class="tile-value">${fmt(m.value, 2)}</div>
      <span class="status-pill ${cls}"><span class="dot"></span>${m.interpretation || "확인 필요"}</span>
      <div class="tile-meta">${m.asOf ? `기준일 ${m.asOf}` : ""}${m.source ? ` · ${m.source}` : ""}</div>
    `;
    wrap.appendChild(tile);
  }
}

function sortedFilteredStocks() {
  let rows = state.data.stocks.slice();
  if (state.market !== "전체") {
    rows = rows.filter((s) => s.market === state.market);
  }
  const { sortKey, sortDir } = state;
  rows.sort((a, b) => {
    let av = a[sortKey];
    let bv = b[sortKey];
    if (av === null || av === undefined) av = sortDir === "asc" ? Infinity : -Infinity;
    if (bv === null || bv === undefined) bv = sortDir === "asc" ? Infinity : -Infinity;
    if (typeof av === "string") av = av.toLowerCase();
    if (typeof bv === "string") bv = bv.toLowerCase();
    if (av < bv) return sortDir === "asc" ? -1 : 1;
    if (av > bv) return sortDir === "asc" ? 1 : -1;
    return 0;
  });
  return rows;
}

function renderTableHead() {
  const thead = document.getElementById("stocks-thead");
  thead.innerHTML = "";
  const tr = document.createElement("tr");
  const visible = COLUMNS.filter((c) => !c.hidden);
  let lastGroup = null;
  for (const col of visible) {
    const th = document.createElement("th");
    th.textContent = col.label;
    th.dataset.key = col.key;
    if (col.group && col.group !== lastGroup) {
      th.classList.add("group-start");
      lastGroup = col.group;
    }
    if (state.sortKey === col.key) {
      th.setAttribute("aria-sort", state.sortDir === "asc" ? "ascending" : "descending");
    }
    th.addEventListener("click", () => {
      if (state.sortKey === col.key) {
        state.sortDir = state.sortDir === "asc" ? "desc" : "asc";
      } else {
        state.sortKey = col.key;
        state.sortDir = col.numeric === false ? "asc" : "desc";
      }
      render();
    });
    tr.appendChild(th);
  }
  const noteTh = document.createElement("th");
  noteTh.textContent = "비고";
  tr.appendChild(noteTh);
  thead.appendChild(tr);
}

function rsiCell(rsi) {
  if (rsi === null || rsi === undefined) return fmt(rsi);
  let cls = "";
  let flag = "";
  if (rsi >= 70) { cls = "overbought"; flag = " (과매수)"; }
  else if (rsi <= 30) { cls = "oversold"; flag = " (과매도)"; }
  return `<span class="cell-flag ${cls}">${rsi.toFixed(1)}${flag}</span>`;
}

function renderTableBody() {
  const tbody = document.getElementById("stocks-tbody");
  tbody.innerHTML = "";
  const rows = sortedFilteredStocks();
  for (const s of rows) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="name-cell">${s.name}<span class="ticker">${s.ticker}</span></td>
      <td>${fmt(s.per, 1)}</td>
      <td>${fmt(s.pbr, 1)}</td>
      <td>${fmt(s.peg, 2)}</td>
      <td>${fmt(s.psr, 1)}</td>
      <td>${fmt(s.evEbitda, 1)}</td>
      <td>${fmt(s.debtRatio, 1)}</td>
      <td>${fmt(s.roe, 1)}</td>
      <td>${fmt(s.fcf)}</td>
      <td style="text-align:left">${fmt(s.maPosition)}</td>
      <td>${rsiCell(s.rsi)}</td>
      <td>${s.volumeSpike ? '<span class="badge-vol">급증</span>' : ""}</td>
      <td class="note-cell" title="${(s.note || "").replace(/"/g, "&quot;")}">${s.note || ""}</td>
    `;
    tbody.appendChild(tr);
  }
}

function renderFilters() {
  const wrap = document.getElementById("market-filters");
  wrap.innerHTML = "";
  for (const m of ["전체", "미국", "국내"]) {
    const btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.textContent = m;
    btn.setAttribute("aria-pressed", String(state.market === m));
    btn.addEventListener("click", () => {
      state.market = m;
      render();
    });
    wrap.appendChild(btn);
  }
}

function render() {
  renderUpdated();
  renderMacro();
  renderFilters();
  renderTableHead();
  renderTableBody();
}

fetch("data/dashboard.json", { cache: "no-store" })
  .then((r) => r.json())
  .then((data) => {
    state.data = data;
    render();
  })
  .catch((err) => {
    document.getElementById("updated-at").textContent = "데이터를 불러오지 못했습니다.";
    console.error(err);
  });
