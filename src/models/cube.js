// import * as THREE from 'three'
// console.log("it works");
// console.log(THREE);
//
// // Canvas, Scene, Objects, Geometry, Materials, Camera
//
// const scene = new THREE.Scene();
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({color: 0x00FFFF});
// const mesh = new THREE.Mesh(geometry, material);
//
// //Position and Scale
// mesh.position.y = -1;
// mesh.scale.set(0.5, 2, 0.5);
// mesh.rotation.reorder('YXZ');
// mesh.rotation.set(.50,1,2);
// scene.add(mesh);
//
//
// //Camera settings
// const sizes = {
//     width: 800,
//     height: 600
// }
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// camera.position.z = 3;
// scene.add(camera);
//
// //Groups: Move multiple meshes at once.
// const group = new THREE.Group();
// scene.add(group);
//
// const cube1 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({color: 0xff0000})
// )
// const cube2 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({color: 0xff0000})
// )
// const cube3 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({color: 0xff0000})
// )
// group.add(cube1, cube2, cube3);
// cube1.position.x = -2;
// cube3.position.x = 2;
// group.position.y = 1;
//
// // Renderer
// // Create a canvas on the HTML document
// const canvas = document.querySelector('canvas.cube');
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
//
// renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene, camera);
//
//
//
// export function mount( container ) {
//     if( container ) {
//         container.insertBefore( renderer.domElement, container.firstChild );
//         resize();
//     } else {
//         renderer.domElement.remove();
//     }
// }
