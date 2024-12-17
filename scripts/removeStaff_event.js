import { ObjInfWorkClass } from "./ObjWorkClass.js";
import { staff } from "./data.js";
import { fillStaffInfo_function } from "./fill_Staff_Info.js";


const oiwc = new ObjInfWorkClass(staff);

const mainBlock = document.getElementById("Main_block");



function clearAllChildNodesInMainBlock() {
    while (mainBlock.firstChild) {
        mainBlock.removeChild(mainBlock.firstChild);
    }
    console.log("All child nodes removed.");
}

function removeButtonLogic() {

    const form = document.createElement("div");
    form.className = "INFO";
    const input = document.createElement("input");
    input.defaultValue = "id";
    form.appendChild(input);

    const button = document.createElement("input");
    button.type = "button";
    button.value = "ok";

    button.addEventListener('click', () => {
        
        const deletion_id = input.value;
        console.log("deleting staff with id " + deletion_id + " :" + oiwc.removeObj(deletion_id));
        clearAllChildNodesInMainBlock();
        fillStaffInfo_function();

    })



    form.appendChild(button);




    mainBlock.appendChild(form);

}

function addButtonLogic() {
    const form = document.createElement("div");
    form.className = "INFO";

    const inputDescription = document.createElement("input");
    inputDescription.defaultValue = "description";
    form.appendChild(inputDescription);

    const inputAuthor = document.createElement("input");
    inputAuthor.defaultValue = "author";
    form.appendChild(inputAuthor);

    const inputFullName = document.createElement("input");
    inputFullName.defaultValue = "FullName";
    form.appendChild(inputFullName);

    const inputScienceDegree = document.createElement("input");
    inputScienceDegree.defaultValue = "scienceDegree";
    form.appendChild(inputScienceDegree);
    
    const inputAcademicTitle = document.createElement("input");
    inputAcademicTitle.defaultValue = "academicTitle";
    form.appendChild(inputAcademicTitle);

    
    const inputJobStartDate = document.createElement("input");
    inputJobStartDate.defaultValue = "jobStartDate (yyyy-mm-dd)";
    form.appendChild(inputJobStartDate);
    
    const inputPhotoLink = document.createElement("input");
    inputPhotoLink.defaultValue = "photoLink";
    form.appendChild(inputPhotoLink);


    const button = document.createElement("input");
    button.type = "button";
    button.value = "ok";
    form.appendChild(button)

    mainBlock.appendChild(form);




    button.addEventListener('click', () => {

        const id = "" + (Number(staff[staff.length - 1].id) + 1);
        const description = inputDescription.value;
        const createdAt = new Date();
        const author = inputAuthor.value;
        const fullName = inputFullName.value;
        const scienceDegree = inputScienceDegree.value;
        const academicTitle = inputAcademicTitle.value;
        const jobStartDate = new Date(inputJobStartDate.value);
        const jobEndDate = null;
        const photoLink = inputPhotoLink.value;

        const obj = {
            id,
            description,
            createdAt,
            author,
            fullName,
            scienceDegree,
            academicTitle,
            jobStartDate,
            jobEndDate,
            photoLink
        }

        if (oiwc.addObj(obj)) {
            console.log("staff added succesfully");
        }
        else {
            console.log("!!!error!!!    staff was not added");
        }

        clearAllChildNodesInMainBlock();
        fillStaffInfo_function();

    })



    
}

function createButtons() {

    const buttonsLine = document.createElement("div");
    buttonsLine.className = "Main_block_line";

    const buttonAdd = document.createElement("div");
    buttonAdd.className = "Infoblock";
    buttonAdd.id = "addStaffButton";
    const t1 = document.createElement("h5");
    t1.textContent = "ADD";
    buttonAdd.appendChild(t1);

    const buttonRemove = document.createElement("div");
    buttonRemove.className = "Infoblock";
    buttonRemove.id = "removeStaffButton";
    const t2 = document.createElement("h5");
    t2.textContent = "REMOVE";
    buttonRemove.appendChild(t2);

    buttonsLine.appendChild(buttonAdd);
    buttonsLine.appendChild(buttonRemove);

    mainBlock.appendChild(buttonsLine);

    // 🛠️ Add event listener after button is created
    buttonRemove.addEventListener('click', async () => {
        
        clearAllChildNodesInMainBlock();
        removeButtonLogic();
    });

    buttonAdd.addEventListener('click', async () => {
        clearAllChildNodesInMainBlock();
        addButtonLogic();
    });


    buttonRemove.addEventListener('mouseover', () => {
        buttonRemove.classList.add('InfoblockOnMouseVersion');
    });

    buttonAdd.addEventListener('mouseover', () => {
        buttonAdd.classList.add('InfoblockOnMouseVersion');
    });



    buttonRemove.addEventListener('mouseout', () => {
        buttonRemove.classList.remove('InfoblockOnMouseVersion');
    });

    buttonAdd.addEventListener('mouseout', () => {
        buttonAdd.classList.remove('InfoblockOnMouseVersion');
    });



}


export { clearAllChildNodesInMainBlock, removeButtonLogic, addButtonLogic, createButtons };