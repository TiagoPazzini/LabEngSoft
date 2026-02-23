// ============================================================
// DATA — 10 livros acadêmicos
// ============================================================

const BOOKS = [
  {
    id: 1,
    title: "Código de Processo Civil Comentado",
    author: "Nelson Nery Junior",
    publisher: "RT",
    area: "Direito",
    price: 189.90,
    tags: ["processo civil", "direito processual", "código", "lei", "jurisprudência", "litigância", "recurso"],
    description: "Comentários artigo por artigo do CPC 2015, com doutrina consolidada e jurisprudência atualizada dos tribunais superiores. Obra de referência indispensável para advogados, magistrados, procuradores e estudantes de Direito.",
    coverColor: ["#1E3A5F", "#2E4E7A"],
    edition: "4ª ed. 2024",
    pages: 2400,
    isbn: "978-65-5505-001-1"
  },
  {
    id: 2,
    title: "Harrison: Medicina Interna",
    author: "Fauci, Kasper et al.",
    publisher: "AMGH",
    area: "Medicina",
    price: 649.00,
    tags: ["medicina interna", "clínica médica", "diagnóstico", "tratamento", "harrison", "semiologia", "fisiopatologia"],
    description: "O tratado de medicina interna mais completo do mundo, em sua tradução brasileira. Dois volumes com mais de 4.000 páginas cobrindo desde a semiologia até o tratamento das principais doenças. Essencial para residência médica e prática clínica.",
    coverColor: ["#7B1E1E", "#A63232"],
    edition: "21ª ed. 2023",
    pages: 4100,
    isbn: "978-65-5768-021-3"
  },
  {
    id: 3,
    title: "Resistência dos Materiais",
    author: "Hibbeler, R. C.",
    publisher: "Pearson",
    area: "Engenharia Civil",
    price: 220.00,
    tags: ["estruturas", "resistência", "materiais", "tensão", "deformação", "mecânica", "cálculo estrutural"],
    description: "Obra padrão no ensino de resistência dos materiais em cursos de engenharia. Apresenta conceitos fundamentais de tensão, deformação e análise estrutural com exemplos práticos e centenas de exercícios resolvidos e propostos.",
    coverColor: ["#1B4332", "#2D6A4F"],
    edition: "10ª ed. 2022",
    pages: 720,
    isbn: "978-65-4321-100-4"
  },
  {
    id: 4,
    title: "Manual de Psicopatologia",
    author: "Dalgalarrondo, Paulo",
    publisher: "Artmed",
    area: "Psicologia",
    price: 195.00,
    tags: ["psicopatologia", "transtornos mentais", "semiologia", "psiquiatria", "diagnóstico", "clínica"],
    description: "Referência nacional para o estudo da psicopatologia descritiva. Aborda os fundamentos da semiologia psiquiátrica e os principais quadros clínicos com rigor científico e linguagem didática. Adotado em cursos de Psicologia e Medicina em todo o Brasil.",
    coverColor: ["#4A1D6B", "#6B2F9B"],
    edition: "3ª ed. 2023",
    pages: 520,
    isbn: "978-85-8271-402-7"
  },
  {
    id: 5,
    title: "Administração: Teoria e Prática",
    author: "Chiavenato, Idalberto",
    publisher: "Manole",
    area: "Administração",
    price: 155.00,
    tags: ["gestão", "administração", "organizações", "teoria", "liderança", "estratégia", "planejamento", "rh"],
    description: "O livro mais adotado em cursos de Administração no Brasil. Cobre as quatro funções administrativas — planejamento, organização, direção e controle — com casos reais do mercado brasileiro e exercícios de fixação.",
    coverColor: ["#7A4000", "#A05A00"],
    edition: "15ª ed. 2023",
    pages: 680,
    isbn: "978-85-204-3891-2"
  },
  {
    id: 6,
    title: "Projeto de Arquitetura: Método e Técnica",
    author: "Kowaltowski, Doris C. C. K.",
    publisher: "Oficina de Textos",
    area: "Arquitetura",
    price: 175.00,
    tags: ["projeto", "arquitetura", "método", "processo criativo", "design", "construção", "urbanismo", "espaço"],
    description: "Aborda metodologias contemporâneas para o processo de projeto arquitetônico, integrando aspectos técnicos, culturais e ambientais. Inclui estudo de casos de escritórios nacionais e internacionais.",
    coverColor: ["#2C4A52", "#3D6B77"],
    edition: "2ª ed. 2022",
    pages: 380,
    isbn: "978-85-7975-220-1"
  },
  {
    id: 7,
    title: "Farmacologia Básica e Clínica",
    author: "Katzung, Bertram G.",
    publisher: "AMGH",
    area: "Farmácia",
    price: 390.00,
    tags: ["farmacologia", "medicamentos", "farmacocinética", "farmácia", "drogas", "terapêutica", "fármacos"],
    description: "Texto de referência mundial em farmacologia. Cobre mecanismos de ação, farmacocinética, farmacodinâmica e aplicações clínicas dos principais grupos farmacológicos. Imprescindível para farmacêuticos, médicos e estudantes das ciências da saúde.",
    coverColor: ["#0D4F4F", "#147070"],
    edition: "14ª ed. 2023",
    pages: 1100,
    isbn: "978-65-5768-180-7"
  },
  {
    id: 8,
    title: "Pedagogia da Autonomia",
    author: "Freire, Paulo",
    publisher: "Paz e Terra",
    area: "Educação",
    price: 59.90,
    tags: ["pedagogia", "educação", "autonomia", "paulo freire", "ensino", "aprendizagem", "ética", "prática educativa"],
    description: "Uma das obras mais influentes da pedagogia mundial. Paulo Freire discute os saberes necessários à prática educativa, enfatizando a autonomia, a ética e o respeito à dignidade do educando em oposição à pedagogia bancária.",
    coverColor: ["#5C3317", "#7A4422"],
    edition: "80ª reimp. 2023",
    pages: 144,
    isbn: "978-85-219-0243-8"
  },
  {
    id: 9,
    title: "Economia: Princípios e Aplicações",
    author: "Mankiw, N. Gregory",
    publisher: "Cengage",
    area: "Economia",
    price: 265.00,
    tags: ["economia", "microeconomia", "macroeconomia", "mercado", "política econômica", "mankiw", "princípios"],
    description: "O livro-texto mais adotado em cursos de Economia no mundo. Apresenta os dez princípios da economia e os aplica sistematicamente a situações do mercado e da política econômica com linguagem acessível e exemplos atuais.",
    coverColor: ["#1A3A5C", "#244F7D"],
    edition: "8ª ed. 2022",
    pages: 860,
    isbn: "978-65-221-0099-8"
  },
  {
    id: 10,
    title: "Estruturas de Dados e Algoritmos em Java",
    author: "Goodrich, Michael T.",
    publisher: "Bookman",
    area: "Ciências da Computação",
    price: 230.00,
    tags: ["algoritmos", "estruturas de dados", "java", "programação", "computação", "software", "árvores", "grafos", "ordenação"],
    description: "Referência clássica para o ensino de estruturas de dados. Cobre arrays, listas encadeadas, árvores, grafos e os principais algoritmos de ordenação e busca, com implementações completas em Java e análise de complexidade.",
    coverColor: ["#0D3259", "#143F70"],
    edition: "5ª ed. 2022",
    pages: 734,
    isbn: "978-85-8260-483-9"
  }
];

// ============================================================
// STATE
// ============================================================

const state = {
  query: "",
  area: "all",
  filters: { publisher: [], author: [] },
  cart: JSON.parse(localStorage.getItem("liber_cart") || "[]"),
  history: JSON.parse(localStorage.getItem("liber_history") || "[]"),
};

// ============================================================
// UTILS
// ============================================================

const saveCart = () => localStorage.setItem("liber_cart", JSON.stringify(state.cart));
const saveHistory = () => localStorage.setItem("liber_history", JSON.stringify(state.history));

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 2400);
}

const fmt = (price) =>
  price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const gradient = (book) =>
  `linear-gradient(150deg, ${book.coverColor[0]}, ${book.coverColor[1]})`;

// ============================================================
// SEMANTIC SEARCH (simulada — matching por tokens)
// ============================================================

function semanticMatch(book, query) {
  if (!query.trim()) return true;
  const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
  const haystack = [
    book.title, book.author, book.area,
    book.publisher, book.description, ...book.tags
  ].join(" ").toLowerCase();

  // Match se QUALQUER token bater (busca inclusiva)
  return tokens.some(t => haystack.includes(t));
}

// ============================================================
// FILTER + SEARCH → LIVROS FILTRADOS
// ============================================================

function getFiltered() {
  return BOOKS.filter(book => {
    if (state.area !== "all" && book.area !== state.area) return false;
    if (state.filters.publisher.length && !state.filters.publisher.includes(book.publisher)) return false;
    if (state.filters.author.length && !state.filters.author.includes(book.author)) return false;
    if (!semanticMatch(book, state.query)) return false;
    return true;
  });
}

// ============================================================
// SIMILARES — score por área + tags em comum
// ============================================================

function getSimilar(book, excludeIds = []) {
  return BOOKS
    .filter(b => b.id !== book.id && !excludeIds.includes(b.id))
    .map(b => {
      let score = 0;
      if (b.area === book.area) score += 3;
      score += b.tags.filter(t => book.tags.includes(t)).length;
      return { book: b, score };
    })
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(x => x.book);
}

// ============================================================
// CART
// ============================================================

function cartAdd(bookId) {
  const item = state.cart.find(i => i.id === bookId);
  if (item) item.qty++;
  else state.cart.push({ id: bookId, qty: 1 });
  saveCart();
  renderCartCount();
  renderCart();
}

function cartRemove(bookId) {
  state.cart = state.cart.filter(i => i.id !== bookId);
  saveCart();
  renderCartCount();
  renderCart();
}

function cartChangeQty(bookId, delta) {
  const item = state.cart.find(i => i.id === bookId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cartRemove(bookId);
  else { saveCart(); renderCartCount(); renderCart(); }
}

const cartTotal = () =>
  state.cart.reduce((sum, i) => {
    const b = BOOKS.find(b => b.id === i.id);
    return sum + (b ? b.price * i.qty : 0);
  }, 0);

const isInCart = (id) => state.cart.some(i => i.id === id);

// ============================================================
// HISTORY
// ============================================================

function addHistory(q) {
  if (!q.trim()) return;
  state.history = [q, ...state.history.filter(h => h !== q)].slice(0, 6);
  saveHistory();
  renderHistory();
}

// ============================================================
// RENDER — SIDEBAR FILTROS
// ============================================================

function renderFilters(visibleBooks) {
  const buildGroup = (containerId, allItems, key) => {
    const el = document.getElementById(containerId);
    el.innerHTML = allItems.map(val => {
      const count = visibleBooks.filter(b => b[key] === val).length;
      const checked = state.filters[key].includes(val);
      const uid = `f-${key}-${val.replace(/\s+/g, "_")}`;
      return `
        <div class="filter-option">
          <input type="checkbox" id="${uid}" data-key="${key}" data-val="${val}" ${checked ? "checked" : ""}>
          <label for="${uid}">${val}</label>
          <span class="filter-count">${count}</span>
        </div>
      `;
    }).join("");

    el.querySelectorAll("input[type=checkbox]").forEach(cb => {
      cb.addEventListener("change", () => {
        const { key, val } = cb.dataset;
        if (cb.checked) {
          if (!state.filters[key].includes(val)) state.filters[key].push(val);
        } else {
          state.filters[key] = state.filters[key].filter(x => x !== val);
        }
        render();
      });
    });
  };

  buildGroup("filter-publisher", [...new Set(BOOKS.map(b => b.publisher))], "publisher");
  buildGroup("filter-author", [...new Set(BOOKS.map(b => b.author))], "author");
}

// ============================================================
// RENDER — CARD HTML
// ============================================================

function cardHTML(book) {
  const added = isInCart(book.id);
  return `
    <div class="book-card" data-book-id="${book.id}">
      <div class="book-cover" style="background:${gradient(book)}">
        <div class="book-cover-spine"></div>
        ${book.title}
      </div>
      <div class="book-info">
        <span class="book-area-badge">${book.area}</span>
        <div class="book-title">${book.title}</div>
        <div class="book-author">${book.author}</div>
        <div class="book-footer">
          <span class="book-price">${fmt(book.price)}</span>
          <button class="btn-add ${added ? "added" : ""}" data-add-id="${book.id}">
            ${added ? "✓ No carrinho" : "+ Carrinho"}
          </button>
        </div>
      </div>
    </div>
  `;
}

// ============================================================
// RENDER — GRID (reutilizável para main e similar)
// ============================================================

function bindGrid(gridEl) {
  gridEl.querySelectorAll(".book-card").forEach(card => {
    card.addEventListener("click", e => {
      if (e.target.closest(".btn-add")) return;
      openModal(parseInt(card.dataset.bookId));
    });
  });

  gridEl.querySelectorAll(".btn-add").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.addId);
      cartAdd(id);
      btn.textContent = "✓ No carrinho";
      btn.classList.add("added");
      showToast("Livro adicionado ao carrinho");
    });
  });
}

function renderGrid(books) {
  const grid = document.getElementById("book-grid");
  grid.innerHTML = books.length
    ? books.map(cardHTML).join("")
    : `<div class="empty-state">
        <h3>Nenhum livro encontrado</h3>
        <p>Tente termos diferentes ou limpe os filtros.</p>
      </div>`;
  bindGrid(grid);
}

function renderSimilar(books) {
  const section = document.getElementById("similar-section");
  const grid = document.getElementById("similar-grid");

  const hasContext = state.query.trim() || state.area !== "all";
  if (!hasContext || !books.length) { section.style.display = "none"; return; }

  const shownIds = books.map(b => b.id);
  const similars = getSimilar(books[0], shownIds);

  if (!similars.length) { section.style.display = "none"; return; }

  section.style.display = "block";
  grid.innerHTML = similars.map(cardHTML).join("");
  bindGrid(grid);
}

// ============================================================
// RENDER — COUNT
// ============================================================

function renderCount(n) {
  document.getElementById("results-count").innerHTML =
    `<strong>${n}</strong> livro${n !== 1 ? "s" : ""} encontrado${n !== 1 ? "s" : ""}`;
}

// ============================================================
// RENDER — HISTORY CHIPS
// ============================================================

function renderHistory() {
  const row = document.getElementById("history-row");
  const chips = document.getElementById("history-chips");
  if (!state.history.length) { row.style.display = "none"; return; }
  row.style.display = "flex";
  chips.innerHTML = state.history
    .map(h => `<span class="chip" data-hist="${h}">${h}</span>`)
    .join("");
  chips.querySelectorAll(".chip").forEach(c => {
    c.addEventListener("click", () => {
      document.getElementById("search-input").value = c.dataset.hist;
      state.query = c.dataset.hist;
      render();
    });
  });
}

// ============================================================
// RENDER — CART COUNT
// ============================================================

function renderCartCount() {
  const total = state.cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById("cart-count");
  badge.textContent = total;
  badge.style.transform = "scale(1.3)";
  setTimeout(() => badge.style.transform = "", 200);
}

// ============================================================
// RENDER — CART DRAWER
// ============================================================

function renderCart() {
  const itemsEl = document.getElementById("cart-items");
  const footerEl = document.getElementById("cart-footer");

  if (!state.cart.length) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">
          <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
        </div>
        <p>Seu carrinho está vazio.</p>
      </div>`;
    footerEl.innerHTML = "";
    return;
  }

  itemsEl.innerHTML = state.cart.map(({ id, qty }) => {
    const book = BOOKS.find(b => b.id === id);
    if (!book) return "";
    return `
      <div class="cart-item">
        <div class="cart-item-cover" style="background:${gradient(book)};"></div>
        <div class="cart-item-info">
          <div class="cart-item-title">${book.title}</div>
          <div class="cart-item-author">${book.author}</div>
          <div class="cart-qty">
            <button data-qty-id="${book.id}" data-delta="-1">−</button>
            <span>${qty}</span>
            <button data-qty-id="${book.id}" data-delta="1">+</button>
          </div>
        </div>
        <div class="cart-item-right">
          <div class="cart-item-price">${fmt(book.price * qty)}</div>
          <button class="btn-remove-item" data-remove-id="${book.id}">remover</button>
        </div>
      </div>
    `;
  }).join("");

  footerEl.innerHTML = `
    <div class="cart-total">
      <span>Total</span>
      <span>${fmt(cartTotal())}</span>
    </div>
    <div class="cart-shipping">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
      Frete calculado no checkout
    </div>
    <button class="btn-checkout" id="btn-checkout">Finalizar pedido →</button>
  `;

  itemsEl.querySelectorAll("[data-qty-id]").forEach(btn => {
    btn.addEventListener("click", () =>
      cartChangeQty(parseInt(btn.dataset.qtyId), parseInt(btn.dataset.delta))
    );
  });

  itemsEl.querySelectorAll("[data-remove-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      cartRemove(parseInt(btn.dataset.removeId));
      showToast("Item removido do carrinho");
    });
  });

  document.getElementById("btn-checkout")?.addEventListener("click", () => {
    showToast("🎉 Pedido simulado realizado com sucesso!");
    state.cart = [];
    saveCart();
    renderCartCount();
    renderCart();
    closeCart();
  });
}

// ============================================================
// MODAL
// ============================================================

function openModal(bookId) {
  const book = BOOKS.find(b => b.id === bookId);
  if (!book) return;

  const header = document.getElementById("modal-header");
  const body = document.getElementById("modal-body");

  header.innerHTML = `
    <div class="modal-cover" style="background:${gradient(book)}">
      <div class="modal-cover-spine"></div>
      ${book.title}
    </div>
    <div class="modal-meta">
      <h2>${book.title}</h2>
      <div class="author">${book.author} &mdash; ${book.publisher}</div>
      <div class="meta-row">
        <span class="meta-tag">${book.area}</span>
        <span class="meta-tag">${book.edition}</span>
        <span class="meta-tag">${book.pages} págs.</span>
        <span class="meta-tag">ISBN ${book.isbn}</span>
      </div>
      <div class="modal-tags">
        ${book.tags.map(t => `<span class="chip">${t}</span>`).join("")}
      </div>
      <div class="modal-price">${fmt(book.price)}</div>
      <button class="btn-add-modal ${isInCart(book.id) ? "added" : ""}" id="modal-add-btn">
        ${isInCart(book.id) ? "✓ Já no carrinho" : "Adicionar ao carrinho"}
      </button>
    </div>
  `;

  const similars = getSimilar(book, [book.id]);
  body.innerHTML = `
    <h3>Sobre o livro</h3>
    <p>${book.description}</p>
    ${similars.length ? `
      <h3>Similares</h3>
      <div class="similar-grid" id="modal-similar-grid">
        ${similars.map(cardHTML).join("")}
      </div>
    ` : ""}
  `;

  document.getElementById("modal-overlay").classList.add("open");

  document.getElementById("modal-add-btn").addEventListener("click", function() {
    cartAdd(book.id);
    this.textContent = "✓ Já no carrinho";
    this.classList.add("added");
    showToast("Livro adicionado ao carrinho");
  });

  const simGrid = document.getElementById("modal-similar-grid");
  if (simGrid) bindGrid(simGrid);
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
}

// ============================================================
// CART OPEN/CLOSE
// ============================================================

function openCart() {
  renderCart();
  document.getElementById("cart-drawer").classList.add("open");
  document.getElementById("cart-overlay").classList.add("open");
}

function closeCart() {
  document.getElementById("cart-drawer").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("open");
}

// ============================================================
// RENDER PRINCIPAL
// ============================================================

function render() {
  const books = getFiltered();
  renderFilters(books);
  renderGrid(books);
  renderSimilar(books);
  renderCount(books.length);
}

// ============================================================
// EVENT LISTENERS
// ============================================================

// Busca
const searchInput = document.getElementById("search-input");
const btnSearch = document.getElementById("btn-search");

function doSearch() {
  const q = searchInput.value.trim();
  state.query = q;
  if (q) addHistory(q);
  render();
}

btnSearch.addEventListener("click", doSearch);
searchInput.addEventListener("keydown", e => { if (e.key === "Enter") doSearch(); });
searchInput.addEventListener("input", e => {
  if (!e.target.value) { state.query = ""; render(); }
});

// Nav por área
document.getElementById("area-nav").querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll("#area-nav a").forEach(a => a.classList.remove("active"));
    link.classList.add("active");
    state.area = link.dataset.area;
    render();
  });
});

// Limpar filtros
document.getElementById("btn-clear-filters").addEventListener("click", () => {
  state.filters = { publisher: [], author: [] };
  state.query = "";
  state.area = "all";
  searchInput.value = "";
  document.querySelectorAll("#area-nav a").forEach(a => a.classList.remove("active"));
  document.querySelector('#area-nav a[data-area="all"]').classList.add("active");
  render();
});

// Modal
document.getElementById("modal-close").addEventListener("click", closeModal);
document.getElementById("modal-overlay").addEventListener("click", e => {
  if (e.target === document.getElementById("modal-overlay")) closeModal();
});

// Cart
document.getElementById("btn-open-cart").addEventListener("click", openCart);
document.getElementById("btn-close-cart").addEventListener("click", closeCart);
document.getElementById("cart-overlay").addEventListener("click", closeCart);

// Fechar modal com ESC
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeModal(); closeCart(); }
});

// ============================================================
// INIT
// ============================================================

renderHistory();
renderCartCount();
render();
