const menu = [
  {
    id: 1,
    title: "Kestaneli Pasta",
    category: "Pastalar",
    price: 59.99,
    img:"https://www.pelit.com.tr/site/wp-content/uploads/napoliten-5-350x267.jpg",
    desc: ``,
  },
  {
    id: 2,
    title: "Trileçe",
    category: "Sütlü-Tatlılar",
    price: 32.99,
    img:"https://www.mutfagimdantarifler.com/wp-content/uploads/2017/02/trilece.jpg",
    desc: `Karamelli, Frambuazlı `,
  },
  {
    id: 3,
    title: "Keşkül",
    category: "Sütlü-Tatlılar",
    price: 30.99,
    img:"https://www.ardaninmutfagi.com/wp-content/uploads/2016/03/keskul-3.jpg",
    desc: ``,
  },
  {
    id: 4,
    title: "Karnaval Pasta",
    category: "Pastalar",
    price: 28.99,
    img:"https://cdn.getiryemek.com/products/1626528073165_500x375.jpeg",
    desc: ``,
  },
  {
    id: 5,
    title: "Kazandibi",
    category: "Sütlü-Tatlılar",
    price: 19.99,
    img:"https://img3.aksam.com.tr/imgsdisk/2021/08/17/t25_masterchef-kazandibi-tari-562.jpg",
    desc: ``,
  },
  {
    id: 6,
    title: "Magnolia",
    category: "Sütlü-Tatlılar",
    price: 33.99,
    img:"https://mutfaktaki.com/wp-content/uploads/2020/03/magnolia-740x740.jpeg",
    desc: ``,
  },
  {
    id: 7,
    title: "Klasik Ekler",
    category: "Ekler",
    price: 5.99,
    img:"https://imgrosetta.mynet.com.tr/file/9975304/9975304-900x900.jpg",
    desc: `/adet `,
  },
  {
    id: 8,
    title: "Fıstıklı Pasta",
    category: "Pastalar",
    price: 15.99,
    img:"https://www.nazeninfirin.com/wp-content/uploads/2019/09/fistikli-pasta-1-min.jpg",
    desc: `.`,
  },
  {
    id: 9,
    title: "Tiramusu",
    category: "Pastalar",
    price: 29.99,
    img:"https://cdn.yeniakit.com.tr/images/news/625/tiramisu-nasil-yapilir-en-pratik-tiramisu-tarifi-h1666182018-5c057b.jpeg",
    desc: `.`,
  },
  {
    id: 10,
    title: "Vişneli Ekler",
    category: "Ekler",
    price: 9.99,
    img:"https://i.pinimg.com/originals/3f/a0/51/3fa0517246a8a1d99b3ce9d2b7b4c17e.jpg",
    desc: `/adet`,
  },

  {
      id: 11,
      title: "Portakallı Ekler",
      category: "Ekler",
      price: 9.99,
      img:"https://www.birdilimlezzet.com/wp-content/uploads/2017/03/portakalli-ekler.jpg",
      desc: `/adet`,
  },

  {
      id: 12,
      title: "Böğürtlenli Ekler",
      category: "Ekler",
      price: 9.99,
      img:"https://cdn.getiryemek.com/products/1670243842574_500x375.jpeg",
      desc: `/adet`,
  },


];

const section = document.querySelector(".section-center")
const btnContainer = document.querySelector(".btn-container")

const categories = menu.reduce(
  (values, item) => {
      if(!values.includes(item.category)){
          values.push(item.category);
      }
      return values;
  },
  ["Menu"]
);

const categoryList = () => {
  const categoryBtns = categories.map(
      (category) => {
          return `<button class="btn btn btn-outline-info btn-item text-lg min-[0px]:max-sm:text-xs italic border-2 border-main px-4 py-2 rounded-lg hover:bg-main hover:text-white shadow-xl" data-id=${category}>${category}</button>`
      }
  ).join("")

  btnContainer.innerHTML = categoryBtns
  const filterBtns = document.querySelectorAll(".btn-item")

  filterBtns.forEach((btn) => {
      btn.addEventListener("click",(e) => {
          const category = e.currentTarget.dataset.id;
          console.log(category);
          const menuCategory = menu.filter((menuItem) => {
              if(menuItem.category === category){
                  return menuItem;
;                }
          });
          if(category === "Menu"){
              menuList(menu);
          }
          else{
              menuList(menuCategory);
          }

      });
  });
};

const menuList = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
      return `<div class="menu-items flex flex-row col-sm-12 min-[0px]:max-sm:w-full gap-4 border-2 min-[0px]:max-sm:border-0 rounded-md p-2 ">
      <img
              src=${item.img}
              alt=${item.title}
              class="photo img-thumbnail w-48 h-36 md:max-xl:w-24 md:max-xl:h-24 border-2 p-2 rounded-lg"
            />
            <div class="menu-info">
              <div class="menu-title">
                <p class="text-lg italic text-main border-b-2 border-main mb-2">${item.title}</p>
                <h4 class="price">${item.price}₺</h4>
              </div>
              <div class="menu-text text-xs mt-2 text-zinc-400">
                ${item.desc}
              </div>
            </div>
          </div>`;
  });

  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
};

menuList(menu)
categoryList();