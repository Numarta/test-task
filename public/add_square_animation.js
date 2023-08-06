// /* eslint-disable no-restricted-globals */
// const head = document.getElementsByTagName('head')[0];
// // var js1 = document.createElement('script');
// // var js2 = document.createElement('script');

// // const js1 = document.getElementById('myscript1');
// // const js2 = document.getElementById('myscript2');
// const w = window.innerWidth;
// // console.log(js1);
// // console.log(js2);
// // js1.type = 'text/javascript';
// // js2.type = 'text/javascript';
// const js1 = document.createElement('script');
// const js2 = document.createElement('script');
// setInterval(() => {
//   if (w > 1100) {
//     js2.src = './logoComputerBig.js';
//     js1.src = './logoComputer.js';
//     js1.setAttribute('defer', 'true');
//     js2.setAttribute('defer', 'true');
//   } else {
//     console.log(w);
//     js2.src = './logoTabletBig.js';
//     js1.src = './logoTablet.js';
//     js1.setAttribute('defer', 'true');
//     js2.setAttribute('defer', 'true');
//   }
// }, 1000);
// // setInterval(() => {
// //   if (document.documentElement.scrollWidth > 1000) {
// //     // document.write('<script src="./logoComputer.js"></script>');
// //     // document.write('<script src="./logoComputerBig.js"></script>');
// //     js1.src = './logoComputer.js';
// //     js2.src = './logoComputerBig.js';
// //     js1.setAttribute('defer', 'true');
// //     js2.setAttribute('defer', 'true');
// //     console.log(js1.src);
// //     init();
// //   } else {
// //     js1.src = './logoTablet.js';
// //     js2.src = './logoTabletBig.js';
// //     js1.setAttribute('defer', 'true');
// //     js2.setAttribute('defer', 'true');
// //     console.log(js1.src);
// //     console.log(js2.src);
// //   }
// // }, 4000);

// // head.appendChild(js1);
// // head.appendChild(js2);

// // function someFunc() {
// //   // Выполняем действие, если ширина меньше 1000px

// //   if (w < 1100) {
// //     js1.src = './logoComputer.js';
// //     js2.src = './logoComputerBig.js';
// //     // js1.setAttribute('defer', 'true');
// //     // js2.setAttribute('defer', 'true');
// //   } else {
// //     js1.src = './logoTablet.js';
// //     js2.src = './logoTabletBig.js';
// //     // js1.setAttribute('defer', 'true');
// //     // js2.setAttribute('defer', 'true');
// //   }
// // }

// window.addEventListener('resize', function () {
//   head.appendChild(js1);
//   head.appendChild(js2);
// });
