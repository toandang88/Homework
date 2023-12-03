import { loadTXTContent } from "./common.js";

const confirmationContentPath = "/week4_homework/docs/contact.txt";

window.loadMenu();

// Get the span element
const confirmationContentElement = document.getElementById("lbl_contact");

loadTXTContent(confirmationContentPath, confirmationContentElement);
