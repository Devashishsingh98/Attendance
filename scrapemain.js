//##################################-LOGIN-############################################

const puppeteer = require("puppeteer");
let date = new Date();
// const cid = Number(document.querySelector("#CID"));
// const password = Number(document.querySelector("#password"));
//const rollNo = document.querySelector();
const cid = "";
const password = "";

const login = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 900 });
  await page.goto("http://45.124.144.116/www/stu/stu_login.php", {
    waitUntil: "networkidle0",
  });
  await page.type("#t1", cid);
  await page.type("#t2", password);
  await page.click(".btn");
  await console.log("signing in");
  await page.waitForNavigation({ waitUntil: "networkidle0" });
  await page.click(".collapsed");
  await page.click(".orange");
  await console.log("date is enterning");
  await page.type("#dt1", "13/07/2020");
  await page.type(
    "#dt2",
    `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  );
  await console.log("date is entered");
  await page.click("[value=Show]");
  await page.screenshot({ path: "test.png" });
  await console.log("Screenshot Taken");
  await console.log("Please check Your Cloned Directory");
  await browser.close();
};
login();
