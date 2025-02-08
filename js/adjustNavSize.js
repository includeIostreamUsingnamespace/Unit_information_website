// // adjustNavSize.js
//
// /**
//  * 调整导航条的宽度和字体大小
//  */
// function adjustNavSize() {
//     const nav = document.getElementById('nav');
//
//     if (nav) {
//         // 获取当前窗口的宽度
//         const windowWidth = window.innerWidth;
//
//         // 设置导航条的宽度为100%
//         nav.style.width = '100%';
//
//         // 设置字体大小为16px（确保不受缩放影响）
//         const menuLinks = document.querySelectorAll('.menu-link');
//         menuLinks.forEach(function(link) {
//             link.style.fontSize = '16px'; // 确保字体大小保持16px
//         });
//
//         // 获取导航条的原始宽度
//         const navOriginalWidth = nav.offsetWidth;
//
//         // 计算缩放比例
//         const scale = windowWidth / navOriginalWidth;
//
//         // 设置导航条的缩放
//         nav.style.transform = `scale(${scale})`;
//         nav.style.transformOrigin = 'top left'; // 设置缩放的基准点为左上角
//     }
// }
//
// /**
//  * 确保页面加载后最后执行这个函数
//  * 延迟100毫秒，确保其他脚本加载完毕后执行
//  */
// window.onload = function() {
//     setTimeout(function() {
//         adjustNavSize(); // 延迟执行，确保其他脚本加载完毕
//     }, 100); // 延迟100毫秒执行调整
// };
