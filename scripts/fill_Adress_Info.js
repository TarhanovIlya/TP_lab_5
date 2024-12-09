import { ObjInfWorkClass } from "./ObjWorkClass.js";
import { addresses } from "./data.js";

const mainBlock = document.getElementById("Main_block");


const addressesNumber = addresses.length;


let mainbBockLine = document.createElement("div");
mainbBockLine.className = "Main_block_line";

for (let i = 0; i < addressesNumber; i++) {

    const infoBlock = document.createElement("div");
    infoBlock.className = "INFO";

    const object = addresses[i];


    const image = document.createElement("img");
    image.setAttribute("src", object.photoLink);
    infoBlock.appendChild(image);


    const description = document.createElement("h5");
    description.textContent = object.description;
    infoBlock.appendChild(description);


    const address = document.createElement("h5");
    address.textContent = object.address;
    infoBlock.appendChild(address);

    


    mainbBockLine.appendChild(infoBlock);


    if ((i + 1) % 2 === 0 || i === addressesNumber - 1) {
        mainBlock.appendChild(mainbBockLine);
        console.log(`Appended a mainbBockLine with ${mainbBockLine.children.length} elements. i = ${i + 1}`);


        mainbBockLine = document.createElement("div");
        mainbBockLine.className = "Main_block_line";
    }
}
