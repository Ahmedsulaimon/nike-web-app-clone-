// function increaseCartQuantity(id: number) {
//     setCartItems((currItems) => {
//       if (currItems.find((item) => item.id === id) == null) {
//         return [...currItems, { id, quantity: 1, shoeSize: selectedSize }];
//       } else {
//         return currItems.map((item) => {
//           if (item.id === id && item.shoeSize === selectedSize) {
//             return {
//               ...item,
//               quantity: item.quantity + 1,
//               shoeSize: selectedSize,
//             };
//           } else {
//             return item;
//           }
//         });
//       }
//     });
//   }

// // import React, { useState } from "react";

// // const ProductPage = () => {
// //   const [images, setImages] = useState({
// //     img1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
// //     img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
// //     img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
// //     img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
// //   });

// //   const [activeImg, setActiveImage] = useState(images.img1);

// //   const [amount, setAmount] = useState(1);

// //   return (
// //     <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
// //       <div className="flex flex-col gap-6 lg:w-2/4">
// //         <img
// //           src={activeImg}
// //           alt=""
// //           className="w-full h-full aspect-square object-cover rounded-xl"
// //         />
// //         <div className="flex flex-row justify-between h-24">
// //           <img
// //             src={images.img1}
// //             alt=""
// //             className="w-24 h-24 rounded-md cursor-pointer"
// //             onClick={() => setActiveImage(images.img1)}
// //           />
// //           <img
// //             src={images.img2}
// //             alt=""
// //             className="w-24 h-24 rounded-md cursor-pointer"
// //             onClick={() => setActiveImage(images.img2)}
// //           />
// //           <img
// //             src={images.img3}
// //             alt=""
// //             className="w-24 h-24 rounded-md cursor-pointer"
// //             onClick={() => setActiveImage(images.img3)}
// //           />
// //           <img
// //             src={images.img4}
// //             alt=""
// //             className="w-24 h-24 rounded-md cursor-pointer"
// //             onClick={() => setActiveImage(images.img4)}
// //           />
// //         </div>
// //       </div>
// //       {/* ABOUT */}
// //       <div className="flex flex-col gap-4 lg:w-2/4">
// //         <div>
// //           <span className=" text-violet-600 font-semibold">
// //             Special Sneaker
// //           </span>
// //           <h1 className="text-3xl font-bold">Nike Invincible 3</h1>
// //         </div>
// //         <p className="text-gray-700">
// //           Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi
// //           chilometri, Invincible 3 offre un livello di comfort elevatissimo
// //           sotto il piede per aiutarti a dare il massimo oggi, domani e oltre.
// //           Questo modello incredibilmente elastico e sostenitivo, è pensato per
// //           dare il massimo lungo il tuo percorso preferito e fare ritorno a casa
// //           carico di energia, in attesa della prossima corsa.
// //         </p>
// //         <h6 className="text-2xl font-semibold">$ 199.00</h6>
// //         <div className="flex flex-row items-center gap-12">
// //           <div className="flex flex-row items-center">
// //             <button
// //               className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
// //               onClick={() => setAmount((prev) => prev - 1)}
// //             >
// //               -
// //             </button>
// //             <span className="py-4 px-6 rounded-lg">{amount}</span>
// //             <button
// //               className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
// //               onClick={() => setAmount((prev) => prev + 1)}
// //             >
// //               +
// //             </button>
// //           </div>
// //           <button className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full">
// //             Add to Cart
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductPage;
// const collection = [
//   {
//     id: 1,
//     img: "/../public/james-bm.webp",
//     title: "Jerseys",
//   },
//   {
//     id: 2,
//     img: "/../public/kid-bm.webp",
//     title: "Lifestyle Collection",
//   },
//   {
//     id: 3,
//     img: "/../public/england women player.webp",
//     title: "Sports Bra",
//   },
//   {
//     id: 4,
//     img: "/../public/sneakers-bm.webp",
//     title: "New in",
//   },
//   {
//     id: 5,
//     img: "/../public/boot-bm.webp",
//     title: "Football boots",
//   },
//   {
//     id: 6,
//     img: "/../public/ball-bm.webp",
//     title: "Accessories",
//   },
// ];

// const trends = [
//   {
//     id: 1,
//     img: "/../public/T-NIKE DUNK LOW women.webp",
//     title: "Nike Dunk Low",
//     desc: "Women's Shoes",
//     price: "109.95",
//     link: "/productpage",
//   },

//   {
//     id: 2,
//     img: "/../public/T-Nike Air Force 1 LE.webp",
//     title: "Nike Air Force 1 '07",
//     desc: "Men's Shoes",
//     price: "69.95",
//     link: "/productpage",
//   },

//   {
//     id: 3,
//     img: "/../public/T-nike dunk pink.webp",
//     title: "Nike Dunk Low",
//     desc: "Younger Kids'",
//     price: "52.95",
//     link: "/productpage",
//   },

//   {
//     id: 4,
//     img: "/../public/T-NIKE AIR FORCE 1 '07 LV8.webp",
//     title: "Nike Air Force 1'07 LV8",
//     desc: "Men's Shoes",
//     price: "119.95",
//     link: "/productpage",
//   },

//   {
//     id: 5,
//     img: "/../public/T-Air Jordan 1 Low SE.webp",
//     title: "Air Jordan 1 Low",
//     desc: "Older Kids' Shoes",
//     price: "69.95",
//     link: "/productpage",
//   },

//   {
//     id: 6,
//     img: "/../public/T-NIKE AIR FORCE 1 LE WHITE.webp",
//     title: "Nike Air Force 1'07",
//     desc: "Men's Shoes",
//     price: "109.95",
//     link: "/productpage",
//   },
// ];

// const dunkSizes = [
//   {
//     size: "UK 2.5",
//     quantity: 15,
//   },
//   {
//     size: "UK 3",
//     quantity: 25,
//   },
//   {
//     size: "UK 3.5",
//     quantity: 35,
//   },
//   {
//     size: "UK 4",
//     quantity: 60,
//   },
//   {
//     size: "UK 4.5",
//     quantity: 15,
//   },
//   {
//     size: "UK 5",
//     quantity: 10,
//   },
//   {
//     size: "UK 5.5",
//     quantity: 15,
//   },
//   {
//     size: "UK 6",
//     quantity: 15,
//   },
//   {
//     size: "UK 6.5",
//     quantity: 5,
//   },
//   {
//     size: "UK 7",
//     quantity: 18,
//   },
//   {
//     size: "UK 7.5",
//     quantity: 39,
//   },
//   {
//     size: "UK 8",
//     quantity: 15,
//   },
//   {
//     size: "UK 8.5",
//     quantity: 15,
//   },
//   {
//     size: "UK 9",
//     quantity: 7,
//   },
//   {
//     size: "UK 9.5",
//     quantity: 7,
//   },
// ];
// const Icons = [
//   {
//     id: 1,
//     img: "/../public/D-air force 1.webp",
//     title: "Air Force 1",
//   },

//   {
//     id: 2,
//     img: "/../public/D-jordan.webp",
//     title: "Jordan",
//   },

//   {
//     id: 3,
//     img: "/../public/D-dunk.webp",
//     title: "Dunk",
//   },

//   {
//     id: 4,
//     img: "/../public/D-air max.webp",
//     title: "Air Max",
//   },
//   {
//     id: 5,
//     img: "/../public/D-corteiz.webp",
//     title: "Cortez",
//   },
//   {
//     id: 6,
//     img: "/../public/D-blazers.webp",
//     title: "Blazer",
//   },
//   {
//     id: 7,
//     img: "/../public/D-pagasus running.webp",
//     title: "Pegasus Running",
//   },
// ];

// const explore = [
//   {
//     id: 1,
//     img: "/../public/M-women.webp",
//     btnOne: "Women",
//     btntwo: "Shop The Look",
//   },
//   {
//     id: 2,
//     img: "/../public/M-men.webp",
//     btnOne: "Men",
//     btntwo: "Shop The Look",
//   },
//   {
//     id: 3,
//     img: "/../public/M-kids.webp",
//     btnOne: "Kids",
//     btntwo: "Shop The Look",
//   },
// ];
// const sport = [
//   {
//     id: 1,
//     img: "/../public/S-running.webp",
//     title: "Running",
//   },
//   {
//     id: 2,
//     img: "/../public/S-football.webp",
//     title: "Football",
//   },
//   {
//     id: 3,
//     img: "/../public/S-basketball.webp",
//     title: "Basketball",
//   },
//   {
//     id: 4,
//     img: "/../public/S-training.webp",
//     title: "Training",
//   },
//   {
//     id: 5,
//     img: "/../public/S-tennis.webp",
//     title: "Tennis",
//   },
//   {
//     id: 6,
//     img: "/../public/S-dance.webp",
//     title: "Dance",
//   },
//   {
//     id: 7,
//     img: "/../public/S-yoga.webp",
//     title: "Yoga",
//   },
//   {
//     id: 8,
//     img: "/../public/S-skateboarding.webp",
//     title: "Skateboarding",
//   },
// ];

// const apps = [
//   {
//     id: 1,
//     img: "/../public/DOA1.jpg",
//     desktopImg: "/../public/DOA1-desktop.webp",
//     desc: "Discover What Moves you",
//     btn: "Nike App",
//   },
//   {
//     id: 2,
//     img: "/../public/DOA2.jpg",
//     desktopImg: "/../public/DOA2-desktop.webp",
//     desc: "Hundreds of Workout, Breathout and More",
//     btn: "Nike Training Club",
//   },
// ];

// const nikeMembership = [
//   {
//     id: 1,
//     img: "/../public/NM-Acces member product.webp",
//     title: "Access Member product",
//   },
//   {
//     id: 2,
//     img: "/../public/NM-Enjoy sport and wellness.webp",
//     title: "Enjoy Sport & Wellness",
//   },
//   {
//     id: 3,
//     img: "/../public/NM-join member experiences.webp",
//     title: "Join Member Experiences",
//   },
//   {
//     id: 4,
//     img: "/../public/NM-customize with nike by you.webp",
//     title: "Customise with Nike By You",
//   },
//   {
//     id: 5,
//     img: "/../public/NM-access member only offer.webp",
//     title: "Access Member-only Offers",
//   },
//   {
//     id: 6,
//     img: "/../public/NM-more of membership.webp",
//     title: "More of Membership",
//   },
// ];
// const general = [
//   "GIFT CARDS",
//   "FIND A STORE",
//   "NIKE JOURNAL",
//   "BECOME A MEMBER",
//   "STUDENT DISCOUNT",
//   "FEEDBACK",
//   "PROMO CODES",
// ];
// const getHelp = [
//   "Order Status",
//   "Shipping and Delivery",
//   "Returns",
//   "Payment Options ",
//   "Contact Us ",
//   "Nike Promo Codes Help ",
// ];
// const aboutNike = [
//   "News",
//   "Careers",
//   "Investors",
//   "Sustainability",
//   "UK Tax",
//   "UK Pension Statement",
//   "UK Pension SIP",
// ];
// const moreInformation = [
//   "Terms of Use",
//   "Terms of Sale",
//   "Company Details",
//   "UK Modern Slavery Act Disclosure",
//   "Privacy & Cookie Policy",
//   "Cookie Settings",
// ];
// const categories = {
//   new: " New & Featured",
//   men: "Men",
//   women: "Women",
//   kids: " Kids",
//   sale: " Sale",
// };
// const NewFeature = [
//   "Featured",
//   "Shop All New Arrivals",
//   "New Shoes",
//   "New Clothing",
//   "SNKRS Launch Calendar",
//   "Back To School",
//   "Member Shop",
//   "Bestsellers",
// ];
// const bestRead = [
//   ".Swooch",
//   "Jordan Collection",
//   "Nike SB-The Vault",
//   "Sustainability",
//   "Nike Store",
// ];
// const guide = [
//   "All Buying Guides",
//   "Nike Running Shoe Finder",
//   "Bra Size Finder",
//   "Nike Activity Finder",
// ];

// const dunkLow = [
//   "/../public/product-page-img/Nike DUNK LOW kids.webp",
//   "/../public/product-page-img/dunk-img-3.webp",
//   "/../public/product-page-img/dunk-img-4.webp",
//   "/../public/product-page-img/dunk-img-5.webp",
//   "/../public/product-page-img/dunk-img-6.webp",
//   "/../public/product-page-img/dunk-img-7.webp",
//   "/../public/product-page-img/dunk-img-8.webp",
//   "/../public/product-page-img/dunk-img-9.webp",
// ];

// const joinUs = ["Nike App", "Nike Run Club", "Nike Training Club", "SNKRS"];
// const nikeStoreData = {
//   collection,
//   trends,
//   Icons,
//   explore,
//   sport,
//   apps,
//   nikeMembership,
//   general,
//   getHelp,
//   aboutNike,
//   moreInformation,
//   joinUs,
//   categories,
//   NewFeature,
//   bestRead,
//   guide,
//   dunkLow,
//   dunkSizes,
// };
// export default nikeStoreData;
