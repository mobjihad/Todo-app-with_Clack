import * as p from '@clack/prompts';
import color from 'picocolors';


let Todos = [


   {
      Title: "Complete CLack Task",
      description: " Blanks",
      Deadline: "21-12-2024",
      Severity: "High",
      Tag: "Hackademy",
      CompletionStatus: false,

   },
   {

      Title: "Submit Project Proposal",
      description: "No Desc",
      Deadline: "23-12-2024",
      Severity: "Medium",
      Tag: "Uni",
      CompletionStatus: false,

   },
];


const commands = [

   { value: "A", label: "Add a new Todo" },
   { value: "T", label: "Add a New Tag" },
   { value: "U", label: "Update a Todo" },
   { value: "D", label: "Delete a Todo" },
   { value: "V", label: "View All Todo" },
   { value: "Q", label: "Exit" },

];
const severities = [

   { value: "Normal", label: "Normal" },
   { value: "Medium", label: "Medium" },
   { value: "High", label: "High" },


];

const Tags = [
   { value: "Hackademy", label: "Hackademy" },
   { value: "Uni", label: "Uni" },
   { value: "WRO", label: "WRO" }
];

const addTags = ({ value, label }) => {
   Tags.push({ value, label, });
};

const deleteTodos = (index) => {
   Todos = Todos.filter((_, i) => i !== index);
};

const updateTodos = (index) => {
   Todos[index] = { ...Todos[index], CompletionStatus: !Todos[index].CompletionStatus };
};


const addTodo = ({ Title, description, Deadline, Severity, Tag }) => {

   Todos.push({ Title, description, Deadline, Severity, Tag, CompletionStatus: false, });
}
async function main() {


   p.intro(`${color.bgCyan(color.black(' Welcome To The Todo App '))}`);
   while (true) {
      console.clear();
      p.note(`${color.black('Your Todos : ')}`);
      p.note(
         Todos.map((x) =>
            x.CompletionStatus
               ? `${color.bgGreen(color.black(x.Title))}- ${x.description}`
               : `${color.bgRed(color.black(x.Title))}- ${x.description}`)
            .join("\n\n")
      );
      // p.note(Tags.map((y) => y.value).join("\n\n"));
      const command = await p.select({

         message: "Select An Option",
         options: commands,

      });

      switch (command) {


         case "A":

            const Title = await p.text({

               message: "Provide a Titile ",
               placeholder: " Summit Evarest :( ",
               validate: (value) => {
                  if (value.length < 1) return "Can't leave the titile Empty";

               },

            });
            const description = await p.text({

               message: "Provide a Description",
            });

            const Deadline = await p.text({
               message: "What is the Deadline of your Task ? ",
               placeholder: "22-12-2024",

            });

            const Severity = await p.select({


               message: "Select a Severity Label",
               options: severities,
            });
            const Tag = await p.multiselect({

               message: "Mark a Tag related to your task",
               options: Tags,

            });

            addTodo({ Title, description, Deadline, Severity, Tag });


            break;

         case "T":
            const value = await p.text({

               message: "Provide a tag Title ",
               placeholder: " Office ",
               validate: (value) => {
                  if (value.length < 1) return "Can't leave the titile Empty";

               },

            });
            const label = await p.text({

               message: "Provide a Tag Label",
            });
            addTags({ value, label });
            break;

         case "U":

            const index = await p.select({
               message: "Select a Severity Label",
               options: Todos.map((Z, index) => ({
                  value: index,
                  label: Z.Title

               })


               )
            });
            updateTodos(index);
            break;

         case "D":
            const delIndex = await p.select({
               message: "Select a Todo to delete",
               options: Todos.map((x, index) => ({
                  value: index,
                  label: x.Title
               })


               )
            });
            deleteTodos(delIndex);
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