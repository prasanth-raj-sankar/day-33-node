import fs from "fs";

export const createFile = (folderPath, fileName, contents, cbFN = () =>{}) =>{

    if (!fs.existsSync(folderPath)){
        fs.mkdir(folderPath,()=>console.log("Folder created"));
    }

    fs.writeFile(`${folderPath}/${fileName}`,contents,cbFN);

};


//get all files 

export const getFiles = (folderPath, successFn, errorFn) =>{
    fs.readdir(folderPath, (err,data)=>{
        if (err){
            errorFn();
        } else successFn(data);
    });
};