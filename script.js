// Silk N Siren Femme — site behaviour (static catalogue, no backend)

function money(n) {
  return "₦" + Number(n).toLocaleString("en-NG");
}

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const CATEGORIES = Array.from(new Set(PRODUCTS.map(p => p.category)));

const grid = document.getElementById("shop-grid");
const searchInput = document.getElementById("search-input");
const productSelect = document.getElementById("order-product");
const countLabel = document.getElementById("results-count");

let query = "";

function cardTemplate(p) {
  const msg = `Hi Silk N Siren Femme! I'd like to pre-order:\n\n${p.name} — ${money(p.price)}\nSize needed: \nName: \nDelivery to (Lagos/Benin City): `;
  return `
    <article class="card" data-id="${p.id}">
      <div class="card-media">
        <span class="card-cat">${p.category}</span>
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <p class="card-desc">${p.desc}</p>
        <div class="card-meta">
          <span class="card-price">${money(p.price)}</span>
          <span class="card-size">${p.sizes}</span>
        </div>
        <a class="card-btn" target="_blank" rel="noopener" href="${waLink(msg)}">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.6.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5C10.2 9.2 9.8 8 9.6 7.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.2L2 22l4.9-1.3C8.4 21.6 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3 .8.8-2.9-.2-.3C3.6 14.7 3.1 13.4 3.1 12c0-4.9 4-8.9 8.9-8.9s8.9 4 8.9 8.9-4 8.9-8.9 8.9z"/></svg>
          Order on WhatsApp
        </a>
      </div>
    </article>`;
}

const scrollArrowSvg = (dir) => dir === "left"
  ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>`
  : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>`;

function categoryBlock(category, items, rowId) {
  return `
    <div class="category-block">
      <div class="category-block-head">
        <h3>${category}</h3>
        <div style="display:flex; align-items:center; gap:14px;">
          <span class="cat-count">${items.length} piece${items.length !== 1 ? "s" : ""}</span>
          <div class="scroll-arrows">
            <button class="scroll-arrow" type="button" data-scroll="${rowId}" data-dir="-1" aria-label="Scroll left">${scrollArrowSvg("left")}</button>
            <button class="scroll-arrow" type="button" data-scroll="${rowId}" data-dir="1" aria-label="Scroll right">${scrollArrowSvg("right")}</button>
          </div>
        </div>
      </div>
      <div class="scroll-row" id="${rowId}">
        ${items.map(cardTemplate).join("")}
      </div>
    </div>`;
}

function render() {
  if (!grid) return;

  const filtered = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)
  );

  const limit = parseInt(grid.dataset.limit || "0", 10);

  if (limit) {
    // Homepage preview: one flat scroll row, no category grouping.
    const shown = filtered.slice(0, limit);
    grid.innerHTML = shown.length
      ? `<div class="scroll-row" id="preview-row">${shown.map(cardTemplate).join("")}</div>`
      : `<div class="empty-state">Nothing to show yet.</div>`;
    return;
  }

  // Full shop: one horizontally-scrolling row per category.
  if (!filtered.length) {
    grid.innerHTML = `<div class="empty-state">No pieces match “${query}” yet. Try another search or <a href="${waLink("Hi Silk N Siren Femme! I'm looking for: ")}" style="color:var(--wine); text-decoration:underline;">ask us on WhatsApp</a>.</div>`;
    if (countLabel) countLabel.textContent = "";
    return;
  }

  const blocks = CATEGORIES.map((cat, i) => {
    const items = filtered.filter(p => p.category === cat);
    if (!items.length) return "";
    return categoryBlock(cat, items, `row-${i}`);
  }).join("");

  grid.innerHTML = blocks || `<div class="empty-state">No pieces match “${query}” yet.</div>`;

  grid.querySelectorAll("[data-scroll]").forEach(btn => {
    btn.addEventListener("click", () => {
      const row = document.getElementById(btn.dataset.scroll);
      const cardWidth = row.querySelector(".card")?.offsetWidth || 240;
      row.scrollBy({ left: Number(btn.dataset.dir) * (cardWidth + 20) * 2, behavior: "smooth" });
    });
  });

  if (countLabel) countLabel.textContent = `${filtered.length} piece${filtered.length !== 1 ? "s" : ""} across ${CATEGORIES.filter(c => filtered.some(p => p.category === c)).length} categories`;
}

function buildProductSelect() {
  if (!productSelect) return;
  productSelect.innerHTML = `<option value="">Select a piece…</option>` +
    PRODUCTS.map(p => `<option value="${p.id}">${p.name} — ${money(p.price)}</option>`).join("");
}

searchInput?.addEventListener("input", (e) => {
  query = e.target.value.trim().toLowerCase();
  render();
});

function scrollToCategoryFromHash() {
  const hash = decodeURIComponent(location.hash.replace("#", ""));
  if (!hash || !grid) return;
  const heading = Array.from(grid.querySelectorAll(".category-block-head h3"))
    .find(h => h.textContent === hash);
  heading?.closest(".category-block")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
navToggle?.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

// order form -> whatsapp
const orderForm = document.getElementById("order-form");
orderForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(orderForm);
  const product = PRODUCTS.find(p => p.id === fd.get("product"));
  const productLine = product ? `${product.name} — ${money(product.price)}` : "—";

  const message =
`Hi Silk N Siren Femme! I'd like to pre-order:

Item: ${productLine}
Size: ${fd.get("size") || "—"}
Name: ${fd.get("name") || "—"}
Phone: ${fd.get("phone") || "—"}
Delivery city: ${fd.get("city") || "—"}
Note: ${fd.get("note") || "—"}`;

  window.open(waLink(message), "_blank");
});

// any element marked data-wa-cta gets a ready-made WhatsApp link
document.querySelectorAll("[data-wa-cta]").forEach(el => {
  el.href = waLink("Hi Silk N Siren Femme! I'd like to place a pre-order.");
});

if (grid) {
  buildProductSelect();
  render();
  scrollToCategoryFromHash();
}

document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());
