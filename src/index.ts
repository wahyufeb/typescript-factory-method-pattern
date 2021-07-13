import EmployeeFactory from "./Factory/EmployeeFactory";

// web developer
const juneDev = new EmployeeFactory().createWebDevFullTime("June Wanwimol Jaenasavamethee", "GMMTV");
const puimekDev = new EmployeeFactory().createWebDevFullTime("Puimek Napasorn Weerathuvilai", "GDH Production");
const chayadaDev = new EmployeeFactory().createWebDevFullTime("Chaya Panyathon", "YUPP Studio");

// mobile dev
const nutdaoDev = new EmployeeFactory().createMobileDevInternship("Nutdao Thonebundit", "GOJEK", ["Kotlin", "Agile Framework", "Integration API"]);
const pemikaDev = new EmployeeFactory().createMobileDevInternship("Pemika Panyathon", "Tokopedia", ["React Native", "UI Design", "Integration API"]);
const chatkamonDev = new EmployeeFactory().createMobileDevInternship("Chatkamon Sukkasem", "Shopee", ["Flutter", "Scrum", "UI Design"]);

// Winamore Studio developer
const frameDev = new EmployeeFactory().createWinamoreStdDevContract("Frame Supakchaya", "Fullstack Developer", 7000000, ["HTML", "CSS", "NodeJS", "Typescript", "PostreSQL"]);
const patchananDev = new EmployeeFactory().createWinamoreStdDevContract("Pachanan Jiajirachote", "Android Developer", 5000000, ["Kotlin", "UI Design"]);
const nongDev = new EmployeeFactory().createWinamoreStdDevContract("Nong Phaytaykham", "IOS Developer", 5000000, ["Swift", "UI Design"]);

console.log("=== Web Developer ===")
console.log({ juneDev, puimekDev, chayadaDev })
console.log("=====================")

console.log("=== Mobile Developer ===")
console.log({ nutdaoDev, pemikaDev, chatkamonDev })
console.log("========================")

console.log("=== Winamore Studio Developer ===")
console.log({ frameDev, patchananDev, nongDev })
console.log("==================================")