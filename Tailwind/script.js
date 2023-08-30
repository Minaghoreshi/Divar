const items = [
  {
    img: "./img/img2.png",
    title: "بازی کال آف دیوتی",
    description: "توضیحات بیشتر در مورد آگهی در اینجا ثبت شده است",
  },
  {
    img: "./img/img3.png",
    title: "مبل هفت نفره",
    description: "توضیحات بیشتر در مورد آگهی در اینجا ثبت شده است",
  },
  {
    img: "./img/img4.png",
    title: "شکلات خوری",
    description: "توضیحات بیشتر در مورد آگهی در اینجا ثبت شده است",
  },
  {
    img: "./img/img5.png",
    title: "دمپایی نو سایز ۴۰",
    description: "توضیحات بیشتر در مورد آگهی در اینجا ثبت شده است",
  },
  {
    img: "./img/img6.png",
    title: "پلت سایه وارداتی",
    description: "توضیحات بیشتر در مورد آگهی در اینجا ثبت شده است",
  },
  {
    img: "./img/img7.png ",
    title: "فروش یخچال سایدبای ساید",
    description: "توضیحات بیشتر در مورد آگهی در اینجا ثبت شده است",
  },
  {
    img: "./img/img8.png ",
    title: "واحد ۱۲۰ متری سهروردی ",
    description: "توضیحات بیشتر در مورد آگهی در اینجا ثبت شده است",
  },
  {
    img: "./img/img9.png ",
    title: "ست قهوه خوری",
    description: "توضیحات بیشتر در مورد آگهی در اینجا ثبت شده است",
  },
  {
    img: "./img/img10.png",
    title: "چادر برزنتی طبیعت گردی",
    description: "توضیحات بیشتر در مورد آگهی در اینجا ثبت شده است",
  },
  {
    img: "./img/img11.png",
    title: "رادیاتور آهنی نو وسالم",
    description: "توضیحات بیشتر در مورد آگهی در اینجا ثبت شده است",
  },
  {
    img: "./img/img12.png",
    title: "گوشی سامسونگ آ۲۴ در حد نو",
    description: "توضیحات بیشتر در مورد آگهی در اینجا ثبت شده است",
  },
  {
    img: "./img/img2.png",
    title: "بازی کال آف دیوتی",
    description: "توضیحات بیشتر در مورد آگهی در اینجا ثبت شده است",
  },
  {
    img: "./img/img3.png",
    title: "مبل هفت نفره",
    description: "توضیحات بیشتر در مورد آگهی در اینجا ثبت شده است",
  },
  {
    img: "./img/img4.png",
    title: "شکلات خوری",
    description: "توضیحات بیشتر در مورد آگهی در اینجا ثبت شده است",
  },
  {
    img: "./img/img5.png",
    title: "دمپایی نو سایز ۴۰",
    description: "توضیحات بیشتر در مورد آگهی در اینجا ثبت شده است",
  },
  {
    img: "./img/img6.png",
    title: "پلت سایه وارداتی",
    description: "توضیحات بیشتر در مورد آگهی در اینجا ثبت شده است",
  },
  {
    img: "./img/img7.png ",
    title: "فروش یخچال سایدبای ساید",
    description: "توضیحات بیشتر در مورد آگهی در اینجا ثبت شده است",
  },
  {
    img: "./img/img8.png ",
    title: "واحد ۱۲۰ متری سهروردی ",
    description: "توضیحات بیشتر در مورد آگهی در اینجا ثبت شده است",
  },
  {
    img: "./img/img9.png ",
    title: "ست قهوه خوری",
    description: "توضیحات بیشتر در مورد آگهی در اینجا ثبت شده است",
  },
  {
    img: "./img/img10.png",
    title: "چادر برزنتی طبیعت گردی",
    description: "توضیحات بیشتر در مورد آگهی در اینجا ثبت شده است",
  },
  {
    img: "./img/img11.png",
    title: "رادیاتور آهنی نو وسالم",
    description: "توضیحات بیشتر در مورد آگهی در اینجا ثبت شده است",
  },
  {
    img: "./img/img12.png",
    title: "گوشی سامسونگ آ۲۴ در حد نو",
    description: "توضیحات بیشتر در مورد آگهی در اینجا ثبت شده است",
  },
];

const cardscontainer = document.querySelector(".cardscontainer");
items.forEach((item) => additems(item));

function additems(item) {
  const newdiv = document.createElement("div");
  const imgdiv = document.createElement("div");
  imgdiv.classList.add("product--image");
  let img = document.createElement("img");
  img.setAttribute("src", item.img);
  console.log(img.src);
  imgdiv.append(img);

  newdiv.classList.add("testcard");
  newdiv.innerHTML = `
  <div class="text relative">
  <span class="title">${item.title}</span>
  <p class="description">
  ${item.description}  </p>
  <i
  class="fa-sharp fa-regular fa-comment absolute -left-6 bottom-0"
  style="color: #2f2f2f"
  ></i>
  </div>
  `;
  newdiv.append(imgdiv);
  cardscontainer.append(newdiv);
}
