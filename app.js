
let fun =require('./function');
const yargs = require('yargs');


yargs.command(
    {
       command:'add' ,
        describe:'this to add new student',
        builder:{
           id:{
               describe:"id of the student",
               demandOption:true,
               type:'number'
           },
            grade:{
                describe:"id of the student",
                demandOption:true,
                type:'number'
            },
            comment:{
                describe:"id of the student",
                demandOption:false,
                type:'string'
            },
           name:{
               describe:'the name of the student',
               demandOption:true,
               type:'string'

           }
        },
        handler:(argv)=>{
           fun.addFunction(argv.id,argv.name,argv.grade,argv.comment);
        }
    }
)

yargs.command(
    {
        command:'delete' ,
        describe:'this to delete new student',
        builder:{
            id:{
                describe:"id of the student",
                demandOption:true,
                type:'number'
            }

        },
        handler:(argv)=>{
            fun.deleteStudent(argv.id);
        }
    }
)

yargs.command(
    {
        command:'list' ,
        describe:'list all student ',

        handler:(argv)=>{
            fun.lestAll();
        }
    }
)


yargs.command(
    {
        command:'read' ,
        describe:'read  student by id ',
        builder:{
            id:{
                describe:"id of the student",
                demandOption:true,
                type:'number'
            }

        },

        handler:(argv)=>{
            fun.read(argv.id);
        }
    }
)

yargs.parse();







