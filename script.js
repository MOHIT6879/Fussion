document.addEventListener("DOMContentLoaded", () => {
  const menuItems = [
    
    { name: "Apricot Delight", price: 140, category: "desserts", img: "", desc: "A smooth, fruity delight made from apricots and cream." },
    { name: "Arabian Velvet Pudding", price: 130, category: "desserts", img: "", desc: "A luxurious pudding with silky texture." },
    { name: "Mango Delight", price: 140, category: "desserts", img: "", desc: "Fresh mango cream blend for tropical dessert lovers." },
    { name: "Kubhani ka Meetha", price: 160, category: "desserts", img: "", desc: "A traditional Hyderabadi delight made from dried apricots." },
    { name: "Sitaphal Delight", price: 190, category: "desserts", img: "", desc: "Custard apple dessert with creamy texture." },
    { name: "Shandood Malai", price: 200, category: "desserts", img: "", desc: "Royal sweet malai dessert rich in flavor." },
    { name: "Classic TresLeches", price: 250, category: "desserts", img: "", desc: "Classic milk-soaked sponge dessert." },
    { name: "Rosemilk TresLeches", price: 270, category: "desserts", img: "", desc: "A floral twist to traditional Tres Leches." },

    
    { name: "Triple-Layer Fussion", price: 150, category: "chocolate", img: "", desc: "Three decadent layers of chocolate bliss." },
    { name: "Choco Biscoffe Bliss (CBB)", price: 190, category: "chocolate", img: "", desc: "Chocolate and Biscoff combo that melts in your mouth." },
    { name: "Chocolate Mousse Cake (Jar)", price: 260, category: "chocolate", img: "", desc: "Rich, creamy chocolate mousse in a jar." },
    { name: "Red Velvet (Jar)", price: 260, category: "chocolate", img: "", desc: "Velvety red sponge with creamy frosting." },
    { name: "Strawberry Delight (Seasonal)", price: 220, category: "chocolate", img: "", desc: "Sweet and fruity strawberry-infused dessert." },
    { name: "ChocoBerry Delight", price: 250, category: "chocolate", img: "", desc: "Chocolate meets berry for a tangy sweetness." },
    { name: "Blueberry Delight", price: 210, category: "chocolate", img: "", desc: "A sweet fusion of chocolate and blueberry." },
    { name: "Death By Chocolate (DBC)", price: 200, category: "chocolate", img: "", desc: "The ultimate chocolate lover’s fantasy." },

    
    { name: "Biscoff Cheese Cake", price: 270, category: "cheesecake", img: "", desc: "Creamy cheesecake topped with Biscoff crumbs." },
    { name: "Oreo Cheese Cake", price: 270, category: "cheesecake", img: "", desc: "Classic Oreo base with rich cheese layer." },
    { name: "Blueberry Cheese Cake", price: 270, category: "cheesecake", img: "", desc: "Tangy blueberry topping on a creamy base." },

    
    { name: "American Dry Fruit", price: "70 / 140", category: "icecream", img: "", desc: "Nutty, creamy and classic." },
    { name: "Fussion's Special", price: "70 / 140", category: "icecream", img: "", desc: "Signature in-house blend." },
    { name: "Chocolate", price: "60 / 120", category: "icecream", img: "", desc: "Smooth chocolate indulgence." },
    { name: "Vanilla", price: "60 / 120", category: "icecream", img: "", desc: "Classic vanilla richness." },
    { name: "Icecream Tali", price: 250, category: "icecream", img: "", desc: "A full plate of assorted ice creams!" },

    
    { name: "Ocean Blue Mojito", price: 120, category: "mocktail", img: "", desc: "Cool tropical blue mojito." },
    { name: "Bubblegum Mojito", price: 120, category: "mocktail", img: "", desc: "Sweet bubblegum flavored twist." },
    { name: "Black Current Mojito", price: 120, category: "mocktail", img: "", desc: "Rich blackcurrant freshness." },
    { name: "Mint Mojito", price: 120, category: "mocktail", img: "", desc: "The classic minty cooler." },
    { name: "Kiwi Mojito", price: 120, category: "mocktail", img: "", desc: "Refreshing kiwi mint fusion." },
    { name: "Litchi Mojito", price: 120, category: "mocktail", img: "", desc: "Sweet and exotic lychee cooler." },
    { name: "Blueberry Mojito", price: 120, category: "mocktail", img: "", desc: "Fruity blueberry with soda fizz." },
    { name: "Orange Mojito", price: 120, category: "mocktail", img: "", desc: "Citrus punch and mint magic." },
    { name: "Cranberry Mojito", price: 120, category: "mocktail", img: "", desc: "Zesty cranberry mojito with a tangy kick." },
  ];

  const menuContainer = document.getElementById("menu");
  const categories = ["desserts", "chocolate", "cheesecake", "icecream", "mocktail"];
  const categoryTitles = {
    desserts: "🍰 Authentic Desserts",
    chocolate: "🍫 Chocolate Loaded",
    cheesecake: "🧀 Cheese Cakes",
    icecream: "🍨 Ice Creams",
    mocktail: "🍹 Mocktails"
  };

  function renderMenu(selected = "all") {
    menuContainer.innerHTML = "";
    const filtered = selected === "all" ? menuItems : menuItems.filter(i => i.category === selected);

    if (selected === "all") {
      categories.forEach(cat => {
        const sectionItems = menuItems.filter(i => i.category === cat);
        if (sectionItems.length) {
          const sectionDiv = document.createElement("div");
          sectionDiv.innerHTML = `<h2 class="text-2xl font-bold text-pink-700 mb-3">${categoryTitles[cat]}</h2>`;
          const grid = document.createElement("div");
          grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6";
          sectionItems.forEach(item => grid.appendChild(createCard(item)));
          sectionDiv.appendChild(grid);
          menuContainer.appendChild(sectionDiv);
        }
      });
    } else {
      const grid = document.createElement("div");
      grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6";
      filtered.forEach(item => grid.appendChild(createCard(item)));
      menuContainer.appendChild(grid);
    }

    
    document.querySelectorAll('.bg-white').forEach(el => {
      el.style.display = 'block';
      el.style.opacity = '1';
    });

    if (window.AOS) AOS.refresh();
  }

  function createCard(item) {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer border border-pink-200 card-hover";
    card.setAttribute("data-aos", "fade-up");
    card.innerHTML = `
      <img src="${item.img || 'https://placehold.co/400x300?text=Fussion+Dessert'}" alt="${item.name}" class="w-full h-40 object-cover">
      <div class="p-3 text-center">
        <h3 class="text-lg font-semibold text-pink-900">${item.name}</h3>
        <p class="text-gray-700 font-medium mt-1">₹${item.price}</p>
      </div>
    `;
    card.addEventListener("click", () => openModal(item));
    return card;
  }

  
  const modal = document.getElementById("itemModal");
  const closeModalBtn = document.getElementById("closeModal");

  function openModal(item) {
    document.getElementById("modalTitle").innerText = item.name;
    document.getElementById("modalPrice").innerText = `₹${item.price}`;
    document.getElementById("modalImage").src = item.img || "https://placehold.co/400x300?text=Fussion+Dessert";
    document.getElementById("modalDescription").innerText = item.desc || "A delicious treat by Fussion.";
    modal.classList.remove("hidden");
  }

  closeModalBtn.addEventListener("click", () => modal.classList.add("hidden"));
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.add("hidden"); });

  
  const buttons = document.querySelectorAll(".category-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active", "bg-pink-600", "text-white"));
      btn.classList.add("active", "bg-pink-600", "text-white");
      renderMenu(btn.dataset.category);
    });
  });

  const allBtn = document.querySelector("[data-category='all']");
  if (allBtn) allBtn.classList.add("bg-pink-600", "text-white");

  
  renderMenu("all");
});
