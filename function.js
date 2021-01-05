


const fs = require('fs')
const colors = require('colors') //decorate the string

//get data from json and convert to object

const getData=()=>{

    let data =fs.readFileSync('data.json').toString();
    return JSON.parse(data)//return object
}

//save data  to the json file

const saveData=(data)=>{
    data = JSON.stringify(data)
    fs.writeFileSync('data.json',data);
}

//////////////////////////////////  <  add student function >  ///////////////////////////////////////////////////

const addFunction=(id,name,grade,comment)=>{

       let data = getData()
       //check if id exist
       let isduplicated;
       //made isduplicated true if found id
       data.forEach(
           (student)=>{
               if(student.id===id){
                   isduplicated=true;
                 }
           }
       )

    if(isduplicated){
        console.log("this \"id\" already exist try another id".red)
    }
    else {
        data.push({id: id, name: name, grade: grade, comment: comment})
        saveData(data)
        console.log("new student have been added".green)

    }


}
/////////////////////////////   <  delete function  >   ///////////////////////////////


const deleteStudent=(id)=>{

    let data = getData();

     let remData= data.filter((student)=>{
        if(student.id !==id ){
            return student;

        }
     } )

    if (remData.length <data.length){
        saveData(remData);
        console.log("student record have been deleted succefuly ".yellow);
    }
    else
    {
        console.log("there is no such student with this \"id\" please check and try again".bgMagenta)
    }


}



/////////////////////////  < list all student > /////////////////////

const lestAll=()=>{

    let data=getData();
    console.log("list of all student".bgGreen)
    let tabldata=[];
    let st_Comment;
    data.forEach((student)=>{
        if(student.comment==null){
            st_Comment =" no comment"
        }
        else{
            st_Comment=student.comment;
        }
        tabldata.push({student_id:student.id,student_Name:student.name,student_Gread:student.grade,comment:st_Comment})

    })

    console.table(tabldata);
}





module.exports={
    addFunction :addFunction,
    deleteStudent:deleteStudent,
    lestAll:lestAll

}