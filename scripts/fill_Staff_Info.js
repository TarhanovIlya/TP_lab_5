import { ObjInfWorkClass } from "./ObjWorkClass.js";
import { staff } from "./data.js";
import { createButtons } from "./removeStaff_event.js";

const mainBlock = document.getElementById("Main_block");





function fillStaffInfo_function() {

    createButtons();
       
    const staffNumber = staff.length;

    let mainbBockLine = document.createElement("div");
    mainbBockLine.className = "Main_block_line";

    for (let i = 0; i < staffNumber; i++) {

        const infoBlock = document.createElement("div");
        infoBlock.className = "INFO";

        const object = staff[i];


        const image = document.createElement("img");
        image.setAttribute("src", object.photoLink);
        infoBlock.appendChild(image);


        const name = document.createElement("h5");
        name.textContent = object.fullName;
        infoBlock.appendChild(name);


        const scienceDegree = document.createElement("h5");
        scienceDegree.textContent = object.scienceDegree;
        infoBlock.appendChild(scienceDegree);

        const jobStartDate = document.createElement("h5");
        jobStartDate.textContent = "Работает с " + object.jobStartDate.getFullYear();
        infoBlock.appendChild(jobStartDate);

        const id = document.createElement("h5");
        id.textContent = object.id;
        infoBlock.appendChild(id);
        

        mainbBockLine.appendChild(infoBlock);


        if ((i + 1) % 2 === 0 || i === staffNumber - 1) {
            mainBlock.appendChild(mainbBockLine);


            mainbBockLine = document.createElement("div");
            mainbBockLine.className = "Main_block_line";
        }
    }
}



export { fillStaffInfo_function }