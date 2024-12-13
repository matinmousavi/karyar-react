import pc from '../assets/images/pc.webp'
import monitor from '../assets/images/monitor.jpg'
import mobile from '../assets/images/mobile.jpg'
import laptop from '../assets/images/laptop.webp'
import laptopBackpack from '../assets/images/laptop-backpack.jpg'
import keyboard from '../assets/images/keyboard.webp'
import headphonewebp from '../assets/images/headphonewebp.webp'
import coolpad from '../assets/images/coolpad.webp'
import camera from '../assets/images/camera.jpg'


let idNumber = 0

export const products = [
    {
        id: ++idNumber,
        img: pc,
        productName: "product name 1",
        price: "900.00",
        oldPrice: "990.00",
        rate: 5
    },
    {
        id: ++idNumber,
        img: monitor,
        productName: "product name 2",
        price: "80.00",
        oldPrice: "880.00",
        rate: 3
    },
    {
        id: ++idNumber,
        img: mobile,
        productName: "product name 3",
        price: "700.00",
        oldPrice: "770.00",
        rate: 0
    },
    {
        id: ++idNumber,
        img: laptop,
        productName: "product name 4",
        price: "600.00",
        oldPrice: "660.00",
        rate: 5
    },
    {
        id: ++idNumber,
        img: laptopBackpack,
        productName: "product name 5",
        price: "500.00",
        oldPrice: "550.00",
        rate: 2
    },
    {
        id: ++idNumber,
        img: keyboard,
        productName: "product name 6",
        price: "400.00",
        oldPrice: "440.00",
        rate: 1
    },
    {
        id: ++idNumber,
        img: headphonewebp,
        productName: "product name 7",
        price: "300.00",
        oldPrice: "330.00",
        rate: 4
    },
    {
        id: ++idNumber,
        img: coolpad,
        productName: "product name 8",
        price: "200.00",
        oldPrice: "220.00",
        rate: 0
    },
    {
        id: ++idNumber,
        img: camera,
        productName: "product name 9",
        price: "100.00",
        oldPrice: "110.00",
        rate: 5
    },

]