const ICONS = {
  back: '<path d="M20 12H4M10 6l-6 6 6 6"/>',
  bell: '<path d="M6 10a6 6 0 0112 0v4.5l1.5 2.5h-15L6 14.5V10z"/><path d="M10 20a2.2 2.2 0 004 0"/>',
  income: '<rect x="3" y="3" width="18" height="18" rx="3.5"/><path d="M9 15l6-6M10 9h5v5"/>',
  expense: '<rect x="3" y="3" width="18" height="18" rx="3.5"/><path d="M9 9l6 6M15 10v5h-5"/>',
  calendar: '<rect x="4" y="5" width="16" height="15" rx="2.5"/><path d="M4 10h16M8.5 3v4M15.5 3v4"/>',
  check: '<rect x="3" y="3" width="18" height="18" rx="3.5"/><path d="M8 12.5l3 3 5-6"/>',
  close: '<path d="M7 7l10 10M17 7L7 17"/>',
  plus: '<path d="M12 4.5v15M4.5 12h15"/>',
  minus: '<path d="M4.5 12h15"/>',
  salary: '<rect x="2.5" y="7.5" width="16" height="10" rx="1.8"/><circle cx="10.5" cy="12.5" r="2.3"/><path d="M5.5 7.5V6a1 1 0 011-1h14a1 1 0 011 1v8a1 1 0 01-1 1h-2"/>',
  food: '<path d="M7 3v6.5a2 2 0 002 2 2 2 0 002-2V3M9 3v18"/><path d="M16.5 21V3c-2 1.2-3 3.8-3 7.5V14h3"/>',
  transport: '<rect x="5" y="3" width="14" height="15" rx="3"/><path d="M5 8h14M5 12.5h14M7.5 18v2.5M16.5 18v2.5"/><circle cx="8.5" cy="15.2" r=".9" fill="currentColor" stroke="none"/><circle cx="15.5" cy="15.2" r=".9" fill="currentColor" stroke="none"/>',
  medicine: '<g transform="rotate(-45 10 11)"><rect x="3" y="7.5" width="14" height="7" rx="3.5"/><path d="M10 7.5v7"/></g><circle cx="17.5" cy="17.5" r="3.5"/><path d="M15 20l5-5"/>',
  groceries: '<path d="M4.5 9h15l-1.3 10.2a2 2 0 01-2 1.8H7.8a2 2 0 01-2-1.8L4.5 9z"/><path d="M8.5 9l2-5M15.5 9l-2-5M9 13v4M12 13v4M15 13v4"/>',
  rent: '<circle cx="15.5" cy="6.5" r="3"/><path d="M13.4 8.6l-5 5M10.4 11.6l1.6 1.6"/><path d="M2.5 15.5h2.8l2.9 2.1h5.3a1.4 1.4 0 000-2.8h-2.9"/><path d="M2.5 21h10.3l6.9-4.6a1.4 1.4 0 00-1.6-2.3L13.5 17"/>',
  gifts: '<rect x="3.5" y="8" width="17" height="4" rx="1"/><path d="M5 12v8h14v-8M12 8v12"/><path d="M12 8c-1.5-3-5-3.5-5-1.3S10 8 12 8zM12 8c1.5-3 5-3.5 5-1.3S14 8 12 8z"/>',
  savings: '<ellipse cx="9" cy="6.5" rx="5.5" ry="2.5"/><path d="M3.5 6.5v10c0 1.4 2.5 2.5 5.5 2.5M3.5 11.5c0 1.4 2.5 2.5 5.5 2.5M14.5 6.5v2"/><circle cx="16" cy="15" r="5"/><path d="M17.6 13.2c-.3-.5-.9-.8-1.6-.8-.9 0-1.6.5-1.6 1.2s.7 1 1.6 1.2c.9.2 1.6.6 1.6 1.3s-.7 1.2-1.6 1.2c-.7 0-1.3-.3-1.6-.8M16 11.5v.9M16 17.6v.9"/>',
  entertainment: '<g transform="rotate(-35 12 12)"><path d="M3 8h18v2.5a1.5 1.5 0 000 3V16H3v-2.5a1.5 1.5 0 000-3V8z"/><path d="M15 9v6" stroke-dasharray="1.4 1.8"/></g>',
  travel: '<path d="M21 3L10 14M21 3l-6.5 18-3.5-7-7-3.5L21 3z"/>',
  bills: '<path d="M6 3h12v18l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5L6 21V3z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
  education: '<path d="M4 5.5A1.5 1.5 0 015.5 4H20v14H5.5A1.5 1.5 0 004 19.5v-14z"/><path d="M4 19.5A1.5 1.5 0 005.5 21H20M9 8.5h6"/>',
  nav_home: '<path d="M4 10.5L12 4l8 6.5V20h-5v-6h-6v6H4v-9.5z"/>',
  nav_analysis: '<circle cx="10.5" cy="10.5" r="7"/><path d="M15.5 15.5L21 21M7.3 12.6l2.2-2.2 1.8 1.4 2.5-3.1"/>',
  nav_transactions: '<path d="M4 8h15M15 4l4 4-4 4M20 16H5M9 12l-4 4 4 4"/>',
  nav_categories: '<path d="M12 3.5l8.5 4.5-8.5 4.5L3.5 8 12 3.5z"/><path d="M3.5 12l8.5 4.5 8.5-4.5M3.5 16l8.5 4.5 8.5-4.5"/>',
  nav_profile: '<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c0-4 3.4-6.5 7.5-6.5s7.5 2.5 7.5 6.5"/>',
};
const ic = (name) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

const SYS_ICONS =
  '<svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor" aria-hidden="true"><rect x="0" y="7" width="3" height="4" rx=".8"/><rect x="4.6" y="5" width="3" height="6" rx=".8"/><rect x="9.2" y="2.6" width="3" height="8.4" rx=".8"/><rect x="13.8" y="0" width="3" height="11" rx=".8"/></svg>' +
  '<svg width="15" height="11" viewBox="0 0 15 11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M1 4a9.5 9.5 0 0113 0M3.4 6.6a6 6 0 018.2 0"/><circle cx="7.5" cy="9.3" r="1.2" fill="currentColor" stroke="none"/></svg>' +
  '<svg width="25" height="12" viewBox="0 0 25 12" fill="none" aria-hidden="true"><rect x=".6" y=".6" width="21" height="10.8" rx="3.2" stroke="currentColor" stroke-opacity=".45" stroke-width="1.1"/><rect x="2.4" y="2.4" width="17.4" height="7.2" rx="1.8" fill="currentColor"/><path d="M23.4 4v4" stroke="currentColor" stroke-opacity=".45" stroke-width="1.4" stroke-linecap="round"/></svg>';

const CATEGORIES = [
  { key: 'food', label: 'Food' },
  { key: 'transport', label: 'Transport' },
  { key: 'medicine', label: 'Medicine' },
  { key: 'groceries', label: 'Groceries' },
  { key: 'rent', label: 'Rent' },
  { key: 'gifts', label: 'Gifts' },
  { key: 'savings', label: 'Savings' },
  { key: 'entertainment', label: 'Entertainment' },
];
const EXTRA_CATEGORIES = [
  { key: 'travel', label: 'Travel' },
  { key: 'bills', label: 'Bills' },
  { key: 'education', label: 'Education' },
];
const catLabel = (key) => [...CATEGORIES, ...EXTRA_CATEGORIES].find((c) => c.key === key)?.label ?? key;

// Example data. The sums match the design's totals: $4,120.00 in, $1,187.40 out.
const MONTHS = ['April', 'March'];
const TX = [
  { id: 't1', title: 'Salary', time: '18:27', month: 'April', day: 30, tag: 'Monthly', cat: 'salary', amount: 4000 },
  { id: 't2', title: 'Groceries', time: '17:00', month: 'April', day: 24, tag: 'Pantry', cat: 'groceries', amount: -100 },
  { id: 't3', title: 'Rent', time: '8:30', month: 'April', day: 15, tag: 'Rent', cat: 'rent', amount: -674.4 },
  { id: 't4', title: 'Transport', time: '7:30', month: 'April', day: 8, tag: 'Fuel', cat: 'transport', amount: -4.13 },
  { id: 't5', title: 'Food', time: '19:30', month: 'March', day: 31, tag: 'Dinner', cat: 'food', amount: -70.4 },
  { id: 't6', title: 'Concert', time: '21:00', month: 'March', day: 26, tag: 'Tickets', cat: 'entertainment', amount: -230.4 },
  { id: 't7', title: 'Medicine', time: '11:15', month: 'March', day: 19, tag: 'Pharmacy', cat: 'medicine', amount: -23.07 },
  { id: 't8', title: 'Gifts', time: '16:45', month: 'March', day: 12, tag: 'Birthday', cat: 'gifts', amount: -85 },
  { id: 't9', title: 'Savings', time: '9:00', month: 'March', day: 1, tag: 'Interest', cat: 'savings', amount: 120 },
];
const OPENING_BALANCE = 4850.4;
const BUDGET = 20000;
const BUDGET_USED_PCT = 30; // as shown in the design

const sum = (list) => Math.round(list.reduce((a, t) => a + t.amount, 0) * 100) / 100;
const INCOME = sum(TX.filter((t) => t.amount > 0));
const EXPENSE = sum(TX.filter((t) => t.amount < 0));
const BALANCE = Math.round((OPENING_BALANCE + INCOME + EXPENSE) * 100) / 100;

const money = (n) =>
  (n < 0 ? '-' : '') + '$' + Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const NAV = [
  ['home', 'Home'],
  ['analysis', 'Analysis'],
  ['transactions', 'Transactions'],
  ['categories', 'Categories'],
  ['profile', 'Profile'],
];

function statusBar() {
  return `<div class="status"><span>16:04</span><span class="sys">${SYS_ICONS}</span></div>`;
}

function header(title, s) {
  return `<header class="top">
    <button class="hdr-btn" data-key="back" aria-label="Back">${ic('back')}</button>
    <h1>${title}</h1>
    <button class="bell" data-key="bell" aria-label="Notifications" aria-expanded="${s.bell}">${ic('bell')}</button>
  </header>`;
}

function nav(s) {
  return `<nav class="tabs" aria-label="Main">${NAV.map(
    ([k, l]) => `<button data-key="nav:${k}" aria-label="${l}"${s.screen === k ? ' aria-current="page"' : ''}>${ic('nav_' + k)}</button>`
  ).join('')}</nav>`;
}

function notifications() {
  return `<div class="pop" role="dialog" aria-label="Notifications">
    <h3>Notifications</h3>
    <ul>
      <li><strong>Salary received</strong><span>${money(4000)} arrived on April 30.</span></li>
      <li><strong>Rent paid</strong><span>${money(674.4)} went out on April 15.</span></li>
      <li><strong>Budget check</strong><span>You have used ${BUDGET_USED_PCT}% of your ${money(BUDGET)} limit.</span></li>
    </ul>
  </div>`;
}

function txRow(t, s) {
  const day = String(t.day).padStart(2, '0');
  return `<li><button class="row" data-key="row:${t.id}" aria-pressed="${s.selected === t.id}">
    <span class="row-ic">${ic(t.cat)}</span>
    <span class="row-main"><span class="row-title">${t.title}</span><span class="row-time">${t.time} - ${t.month} ${day}</span></span>
    <span class="row-tag">${t.tag}</span>
    <span class="row-amt${t.amount < 0 ? ' neg' : ''}">${money(t.amount)}</span>
  </button></li>`;
}

function transactionsScreen(s) {
  const list = TX.filter(
    (t) =>
      (s.type === 'all' || (s.type === 'income' ? t.amount > 0 : t.amount < 0)) &&
      (!s.cat || t.cat === s.cat) &&
      (s.month === 'all' || t.month === s.month)
  );
  const groups = MONTHS.map((m) => ({ m, rows: list.filter((t) => t.month === m) })).filter((g) => g.rows.length);

  const chips = [];
  if (s.type !== 'all') chips.push(['type', s.type === 'income' ? 'Income only' : 'Expenses only']);
  if (s.cat) chips.push(['cat', catLabel(s.cat)]);
  if (s.month !== 'all') chips.push(['month', s.month]);

  const firstLabel = groups[0]?.m ?? (s.month !== 'all' ? s.month : 'Transactions');
  const monthPicker = s.monthOpen
    ? `<div class="months" role="group" aria-label="Month">${['all', ...MONTHS]
        .map((m) => `<button data-key="month:${m}" aria-pressed="${s.month === m}">${m === 'all' ? 'All' : m}</button>`)
        .join('')}</div>`
    : '';
  const chipRow = chips.length
    ? `<div class="chips">${chips
        .map(([k, l]) => `<button class="chip" data-key="clear:${k}" aria-label="Remove filter: ${l}">${l}${ic('close')}</button>`)
        .join('')}</div>`
    : '';

  const body = groups.length
    ? groups
        .map(
          (g, i) =>
            (i === 0 ? '' : `<h2 class="month">${g.m}</h2>`) +
            `<ul class="rows">${g.rows.map((t) => txRow(t, s)).join('')}</ul>`
        )
        .join('')
    : `<div class="empty"><p>No transactions match these filters.</p><button data-key="clear:all">Clear filters</button></div>`;

  return `${header(s.cat ? catLabel(s.cat) : 'Transaction', s)}
  <section class="summary">
    <div class="balance"><span>Total Balance</span><strong>${money(BALANCE)}</strong></div>
    <div class="split">
      <button class="stat" data-key="type:income" aria-pressed="${s.type === 'income'}">${ic('income')}<span>Income</span><strong>${money(INCOME)}</strong></button>
      <button class="stat expense" data-key="type:expense" aria-pressed="${s.type === 'expense'}">${ic('expense')}<span>Expense</span><strong>${money(Math.abs(EXPENSE))}</strong></button>
    </div>
  </section>
  <section class="sheet" aria-label="Transactions">
    <div class="month-head"><h2>${firstLabel}</h2><button class="cal" data-key="cal" aria-label="Choose month" aria-expanded="${s.monthOpen}">${ic('calendar')}</button></div>
    ${monthPicker}${chipRow}${body}
  </section>`;
}

function categoriesScreen(s) {
  const cats = s.more ? [...CATEGORIES, ...EXTRA_CATEGORIES] : CATEGORIES;
  const tiles = cats
    .map(
      (c) => `<button class="cat" data-key="cat:${c.key}" aria-pressed="${s.activeCat === c.key}">
        <span class="cat-ic">${ic(c.key)}</span><span class="cat-label">${c.label}</span></button>`
    )
    .join('');
  const moreTile = `<button class="cat" data-key="more" aria-expanded="${s.more}">
    <span class="cat-ic">${ic(s.more ? 'minus' : 'plus')}</span><span class="cat-label">${s.more ? 'Less' : 'More'}</span></button>`;

  return `${header('Categories', s)}
  <section class="summary cat-summary">
    <div class="totals">
      <div><span class="lbl">${ic('income')}Total Balance</span><strong>${money(BALANCE)}</strong></div>
      <div class="vr"></div>
      <div><span class="lbl">${ic('expense')}Total Expense</span><strong class="neg">${money(EXPENSE)}</strong></div>
    </div>
    <div class="progress" role="progressbar" aria-label="Budget used" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${BUDGET_USED_PCT}">
      <span class="fill" style="width:${BUDGET_USED_PCT}%">${BUDGET_USED_PCT}%</span>
      <span class="limit">${money(BUDGET)}</span>
    </div>
    <p class="note">${ic('check')}${BUDGET_USED_PCT}% Of Your Expenses, Looks Good.</p>
  </section>
  <section class="sheet cat-sheet" aria-label="Categories">
    <div class="grid">${tiles}${moreTile}</div>
  </section>`;
}

function createApp(phone, initialScreen) {
  const host = phone.querySelector('.host');
  const toastEl = phone.querySelector('.toast');
  let toastTimer;
  // The phone's back gesture moves between screens too, except inside an embedded frame.
  const useHistory = window.self === window.top;
  const saved = useHistory ? history.state : null;
  const ORDER = NAV.map(([k]) => k);
  const s = {
    screen: saved?.screen || initialScreen,
    prev: null,
    type: 'all',
    cat: saved?.cat ?? null,
    month: 'all',
    monthOpen: false,
    selected: 't3',
    activeCat: 'food',
    more: false,
    bell: false,
  };

  function render(dir = null) {
    const oldSheet = host.querySelector('.sheet');
    const scrollTop = !dir && oldSheet ? oldSheet.scrollTop : 0;
    const focused = host.contains(document.activeElement) ? document.activeElement.dataset.key : null;

    host.innerHTML =
      statusBar() +
      (s.screen === 'transactions' ? transactionsScreen(s) : categoriesScreen(s)) +
      nav(s) +
      (s.bell ? notifications() : '');

    host.classList.remove('fwd', 'back');
    if (dir) {
      void host.offsetWidth;
      host.classList.add(dir);
    }
    const sheet = host.querySelector('.sheet');
    if (sheet) sheet.scrollTop = scrollTop;
    if (focused) host.querySelector(`[data-key="${CSS.escape(focused)}"]`)?.focus({ preventScroll: true });
  }

  function show(screen, dir) {
    if (screen !== s.screen) {
      s.prev = s.screen;
      s.screen = screen;
    }
    s.bell = false;
    s.monthOpen = false;
    render(dir);
  }

  function go(screen, dir = ORDER.indexOf(screen) > ORDER.indexOf(s.screen) ? 'fwd' : 'back') {
    show(screen, dir);
    if (useHistory) history.pushState({ screen: s.screen, cat: s.cat, depth: (history.state?.depth ?? 0) + 1 }, '');
  }

  function goBack() {
    if (useHistory && history.state?.depth > 0) return history.back();
    show(s.prev || (s.screen === 'transactions' ? 'categories' : 'transactions'), 'back');
  }

  if (useHistory) {
    if (!saved) history.replaceState({ screen: s.screen, cat: s.cat, depth: 0 }, '');
    window.addEventListener('popstate', (e) => {
      if (!e.state) return;
      s.cat = e.state.cat;
      show(e.state.screen, 'back');
    });
  }

  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2200);
  }

  host.addEventListener('click', (e) => {
    const b = e.target.closest('[data-key]');
    const key = b?.dataset.key;
    if (s.bell && key !== 'bell' && !e.target.closest('.pop')) {
      s.bell = false;
      if (!b) return render();
    }
    if (!b) return;
    const [act, v] = key.split(':');

    switch (act) {
      case 'back':
        return goBack();
      case 'bell':
        s.bell = !s.bell;
        break;
      case 'type':
        s.type = s.type === v ? 'all' : v;
        break;
      case 'cal':
        s.monthOpen = !s.monthOpen;
        break;
      case 'month':
        s.month = v;
        break;
      case 'clear':
        if (v === 'all' || v === 'type') s.type = 'all';
        if (v === 'all' || v === 'cat') s.cat = null;
        if (v === 'all' || v === 'month') s.month = 'all';
        break;
      case 'row':
        s.selected = s.selected === v ? null : v;
        break;
      case 'cat':
        s.activeCat = v;
        s.cat = v;
        s.type = 'all';
        s.month = 'all';
        return go('transactions', 'fwd');
      case 'more':
        s.more = !s.more;
        break;
      case 'nav':
        if (v === s.screen) return;
        if (v === 'transactions' || v === 'categories') return go(v);
        return toast(`${NAV.find(([k]) => k === v)[1]} isn't part of this design yet.`);
    }
    render();
  });

  phone.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && s.bell) {
      s.bell = false;
      render();
      host.querySelector('[data-key="bell"]')?.focus();
    }
  });

  render();
}

createApp(document.querySelector('[data-phone]'), 'transactions');
