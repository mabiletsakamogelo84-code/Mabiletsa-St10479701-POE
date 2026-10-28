document.addEventListener("DOMContentLoaded", function () {
    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date ().getFullYear();
    }

    const toggle = document.querySelector(".nav__toggle");
    const links = document.querySelector(".nav__links");
    if (toggle && links)  {
        toggle.addEventListener("click", function () {
            const open = links.classList.toggle ("is-open");
            toggle.setAttribute("aria-expanded", open);
            toggle.setAttribute("aria-label",open ? "Close menu" : "Open menu");
        });
    
}
}); 

const galleryImages = document. querySelectorAll (".gallery-card img");
if (galleryImages.length) {
    const Lightbox = document.createElement("div");
    Lightbox.className = "lightbox";
    Lightbox.SetAttribute("role", "dialog");
    Lightbox.setAttribute("aria-modal", "true");
    Lightbox.setAttribute("aria-label", "Image viewer");

    lightbox.innerHTML =
'<button class="lightbox__close" aria-label="Close image">&times;</button>' +
'<figure class="lightbox__figure">' +
'<img class="lightbox__img" src="" alt="">' 
'<figcaption class="lightbox__caption"></figcaption>' +
 '</figure>';
 document.body.appendChild(lightbox);

    const bigImg = lightbox.querySelector(".lightbox__img");
    const caption = lightbox.querySelector(".lightbox__caption");

    function openLightbox(img) {

      bigImg.src = img.src;
      bigImg.alt = img.alt;
      caption.textContent = img.alt;
      Lightbox.classList.add("is-open");

    }



    function closeLightbox() {
      lightbox.classList.remove("is-open");

    }



    galleryImages.forEach(function (img) {

      img.setAttribute("tabindex", "0");
      img.addEventListener("click", function () { openLightbox(img); });
      img.addEventListener("keydown", function (e) {

        if (e.key === "Enter") openLightbox(img);

      });

    });


    lightbox.addEventListener("click", function (e) {

      if (e.target === lightbox || e.target.classList.contains("lightbox__close")) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", function (e) {

      if (e.key === "Escape") closeLightbox();

    });
  }
 
  const accordionHeaders = document.querySelectorAll(".accordion__header");

  accordionHeaders.forEach(function (header) {

    header.addEventListener("click", function () {

      const item = header.parentElement;

      const isOpen = item.classList.toggle("is-open");

      header.setAttribute("aria-expanded", isOpen);


    });

  });

  /* ===== Products page: dynamic menu + search/filter/sort ===== */

const menuItems = [

  { name: "Classic Kota", category: "Kotas", price: 45, desc: "Chips, polony, a fried egg and a spoon of atchar in a toasted quarter loaf." },
  { name: "The Rush Special", category: "Kotas", price: 65, desc: "Chips, polony, viennas, melted cheese, egg and extra atchar." },
  { name: "Rib Kota", category: "Kotas", price: 75, desc: "Saucy rib meat piled onto chips and cheese with house sauce." },
  { name: "Veggie Kota", category: "Kotas", price: 42, desc: "Chips, cheese, fried egg and atchar, meat-free." },
  { name: "6-Piece Wings & Chips", category: "Wings", price: 70, desc: "Hot Rush, Peri-Peri, BBQ or Lemon & Herb, with chips." },
  { name: "10-Piece Wings & Chips", category: "Wings", price: 105, desc: "The bigger portion, same flavour choices." },
  { name: "Quarter Chicken & Chips", category: "Grilled Chicken", price: 60, desc: "Grilled and basted, with chips." },
  { name: "Half Chicken & Chips", category: "Grilled Chicken", price: 95, desc: "Perfect for one hungry person." },
  { name: "Whole Chicken & Chips", category: "Grilled Chicken", price: 170, desc: "A full flame-grilled chicken built for the table." },
  { name: "Regular Chips", category: "Sides", price: 25, desc: "" },
  { name: "Russian & Chips", category: "Sides", price: 38, desc: "" },
  { name: "Extra Atchar", category: "Sides", price: 10, desc: "" },
  { name: "Extra Cheese", category: "Sides", price: 12, desc: "" },
  { name: "Milkshake", category: "Drinks", price: 35, desc: "Chocolate, vanilla or strawberry." },
  { name: "Soft Drink (330ml)", category: "Drinks", price: 18, desc: "" },
  { name: "Bottled Water", category: "Drinks", price: 15, desc: "" }

];

function initMenu() {
  const list = document.getElementById("menu-list");
  if (!list) return; // not the products page, do nothing

  const search = document.getElementById("menu-search");
  const category = document.getElementById("menu-category");
  const sort = document.getElementById("menu-sort");
  const count = document.getElementById("menu-count");

  function render() {

    const term = search.value.trim().toLowerCase();

    // 1. FILTER + SEARCH: keep only items that match both

    let items = menuItems.filter(function (item) {
      const inCategory = category.value === "all" || item.category === category.value;
      const matchesText = (item.name + " " + item.desc).toLowerCase().includes(term);
      return inCategory && matchesText;

    });

    // 2. SORT

    if (sort.value === "low") items.sort((a, b) => a.price - b.price);
    if (sort.value === "high") items.sort((a, b) => b.price - a.price);
    if (sort.value === "az") items.sort((a, b) => a.name.localeCompare(b.name));

    // 3. DRAW

    list.innerHTML = items.map(function (item) {
      return '<div class="menu-item"><div>' +
        '<div class="menu-item__name">' + item.name +
        ' <span class="tag">' + item.category + '</span></div>' +
        (item.desc ? '<div class="menu-item__desc">' + item.desc + '</div>' : '') +
        '</div><div class="menu-item__price">R' + item.price + '</div></div>';
    }).join("");

    count.textContent = items.length === 0
      ? "No items match your search."
      : "Showing " + items.length + " of " + menuItems.length + " items";

  }

  search.addEventListener("input", render);
  category.addEventListener("change", render);
  sort.addEventListener("change", render);
  render(); // draw once when the page loads

}

document.addEventListener("DOMContentLoaded", initMenu);

/* ===== Contact page: Leaflet map ===== */
function initMap() {
  const mapBox = document.getElementById("map");
  if (!mapBox || typeof L === "undefined") return; // not the contact page

  const map = L.map("map").setView([-25.7479, 28.1950], 14);

  L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 19,
    attribution: "Tiles &copy; Esri &mdash; Source: Esri, HERE, Garmin, OpenStreetMap contributors"
  }).addTo(map);

  const locations = [
    { name: "Thuba Rush: Opera Plaza", address: "230 Pretorius Street, Pretoria Central, 0002", coords: [-25.7466, 28.1880] },
    { name: "Thuba Rush: Arcadia", address: "Arcadia, Pretoria", coords: [-25.7478, 28.2065] }

  ];

  locations.forEach(function (place) {
    L.marker(place.coords)
      .addTo(map)
      .bindPopup("<strong>" + place.name + "</strong><br>" + place.address);

  });

}

document.addEventListener("DOMContentLoaded", initMap);

/* ===== Enquiry form: validation + response ===== */
function initEnquiry() {
  const form = document.getElementById("enquiry-form");
  if (!form) return; // not the enquiry page
  const get = (id) => document.getElementById(id);
  const orderBox = get("order-fields");

  // earliest date to pick = tomorrow
  get("event-date").min = new Date(Date.now() + 86400000).toISOString().split("T")[0];

  // show the menu/quantity/date fields only for catering and menu orders

  function showOrderFields() {
    const t = get("type").value;
    orderBox.hidden = !(t === "catering" || t === "products");

  }

  get("type").addEventListener("change", showOrderFields);
  showOrderFields();

  // each rule: [field id, is it valid?, error message]

  function rules() {
    const list = [
      ["name", /^[A-Za-z' -]{2,}$/.test(get("name").value.trim()), "Enter your full name (letters only)."],
      ["phone", /^(\+27|0)\d{9}$/.test(get("phone").value.replace(/[\s-]/g, "")), "Enter a valid SA number, e.g. 071 234 5678."],
      ["email", /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(get("email").value.trim()), "Enter a valid email address."],
      ["type", get("type").value !== "", "Please choose an enquiry type."],
      ["contact-pref", form.querySelector('input[name="contactPref"]:checked') !== null, "Please choose how we should reply."],
      ["message", get("message").value.trim().length >= 10, "Message must be at least 10 characters."],
      ["consent", get("consent").checked, "Please tick the box to continue."]

    ];

    if (!orderBox.hidden) {
      list.push(
        ["product", get("product").value !== "", "Please choose a menu item."],
        ["quantity", get("quantity").value >= 1 && get("quantity").value <= 500, "Enter a quantity from 1 to 500."],
        ["event-date", new Date(get("event-date").value) > new Date(), "Choose a date in the future."]

      );

    }

    return list;

  }

  function setError(id, msg) {
    get(id + "-error").textContent = msg;
    get(id).classList.toggle("is-invalid", msg !== "");

  }

  // the on-page reply: cost, availability, next steps

  function reply() {
    const type = get("type").value;
    const text = "Thank you, " + get("name").value.trim().split(" ")[0] +
      "! Reference: TR-" + Math.floor(1000 + Math.random() * 9000) + ". ";
    if (type === "volunteering") return text + "We need volunteers on weekends and event days. We'll contact you within 2 working days about shifts.";
    if (type === "sponsorship") return text + "We'll send our sponsorship packages within 3 working days.";
    const item = get("product").selectedOptions[0];
    const qty = Number(get("quantity").value);
    const total = item.dataset.price * qty * (qty >= 20 ? 0.9 : 1);
    const needed = qty >= 50 ? 5 : qty >= 20 ? 2 : 1;
    const days = Math.ceil((new Date(get("event-date").value) - new Date()) / 86400000);
    return text + "Estimated cost for " + qty + " x " + item.dataset.name + ": R" + total.toFixed(2) +
      (qty >= 20 ? " (10% bulk discount included)" : "") + ". " +
      (days >= needed ? "We can fulfil this by your date."

                      : "We need at least " + needed + " day(s) notice, so please choose a later date.") +

      " Our team will confirm the final price.";

  }



  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const out = get("enquiry-response");
    let first = null;
    rules().forEach(function (r) {
      setError(r[0], r[1] ? "" : r[2]);
      if (!r[1] && !first) first = r[0];

    });

    out.className = "form__success";
    if (first) {
      const target = first === "contact-pref" ? form.querySelector('input[name="contactPref"]') : get(first);
      target.focus();
      return;

    }

    out.textContent = reply();         
    out.className = "form__success is-visible";
    form.reset();
    showOrderFields();

  });

  form.addEventListener("input", function (e) {
    const id = e.target.name === "contactPref" ? "contact-pref" : e.target.id;
    if (id && get(id + "-error")) setError(id, "");

  });

}

document.addEventListener("DOMContentLoaded", initEnquiry);









