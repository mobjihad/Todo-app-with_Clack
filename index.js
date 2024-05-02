import * as p from '@clack/prompts';
import color from 'picocolors';


const Todos = [


       { 
          Title : "Complete CLack Task",
          description:" Blanks",
          Deadline: "21-12-2024",
          Severity: "High",
          Tag:"Hackademy",
          CompletionStatus:false,
         
       },
       {

        Title : "Submit Project Proposal",
        description:"No Desc",
        Deadline: "23-12-2024",
        Severity: "Medium",
        Tag:"Uni",
        CompletionStatus:false,

       }
]; 


const commands = [

    {value:"A", label:"Add a new Todo"},
    {value:"U", label:"Update a Todo"},
    {value:"D", label:"Delete a Todo"},
    {value:"V", label:"View All Todo"},
    {value:"Q", label:"Exit"},
    
    ];

    
const addTodo =({Title,description,Deadline,Severity,Tag})=> {

     Todos.push({Title,description,Deadline,Severity,Tag,CompletionStatus:false,});
}
async function main() {
	
 
	p.intro(`${color.bgCyan(color.black(' Welcome To The Todo App '))}`);
     while(true){
        //console.clear();
        p.note(Todos.map((x)=>x.Title).join("\n\n"));
        const command = await p.select({ 

               message:"Select An Option" ,
               options: commands,

     });

     switch(command){


        case "A" :
            
        const Title = await p.text({

            message: "Provide a Titile ",
            placeholder:" Summit Evarest :( ",
            validate:(value)=>{
          if(value.length<1) return "Can't leave the titile Empty";
    
            },
    
    });
    const description = await p.text({
    
              message:"Provide a Description",
    });
    
    const Deadline = await p.text({
      message:"What is the Deadline of your Task ? ",
      placeholder:"22-12-2024",
    
    });
    
    const Severity = await p.select({
    
    
       message:"Select a Severity Label",
       options:[
    
          {value:"Normal", label:"Normal"},
          {value:"Medium", label:"Medium"},
          {value:"High", label:"High"},
    
    
       ],
    });
    const Tag = await p.multiselect({
     
      message:"Mark a Tag related to your task",
      options:[
          {value:"Hackademy", label:"Hackademy"},
          {value:"Uni", label:"Uni"},
          {value:"WRO", label:"WRO"},
    
    
      ],
    
    });
    
    addTodo({Title,description,Deadline,Severity,Tag});
    

          break;


        case "Q":

            p.outro("Done");
            return process.exit(0);
            break;

            default:
                p.outro("Invalid Input")
                break;

     };

     };
     
	p.outro(` ${color.bgCyan(color.cyan('Tata'))}`);
}

main().catch(console.error);