export const helpCommandOutput = [
  { type: "output", content: "Available commands:" },
  { type: "output", content: "  projects - see our projects" },
  { type: "output", content: "  about    - learn about us" },
  { type: "output", content: "  social   - view our social media" },
  { type: "output", content: "  clear    - clear the terminal" },
  { type: "output", content: "  help     - show this help message" },
];
export const projectsCommandOutput = [
  { type: "output", content: "Our Projects:" },
  { type: "output", content: "  - React App" },
  { type: "output", content: "  - Node.js API" },
  { type: "output", content: "  - Next.js Website" },
];
export const aboutCommandOutput = [
  { type: "output", content: "About Us:" },
  {
    type: "output",
    content:
      "  We are a team of developers passionate about building web applications.",
  },
  {
    type: "output",
    content:
      "  Our mission is to create user-friendly and efficient software solutions.",
  },
  {
    type: "output",
    content: "  We believe in continuous learning and improvement.",
  },
];
export const socialCommandOutput = [
  { type: "output", content: "Our Socials:" },
  { type: "output", content: "  Twitter: @ourteam" },
  { type: "output", content: "  GitHub: github.com/ourteam" },
  {
    type: "output",
    content: "  LinkedIn: linkedin.com/company/ourteam",
  },
];
export const AndroidClubLogo = {
  type: "ascii",
  content: `                        /                                                       
                        //                             /* .                     
                         //  (                        /.                        
                        /  //        //////*        //                            
                            /////////////////////////                           
                     (   ///////////////////////////////                        
                      /////////////////////////////////////                     
                    ///////,  *///////////////////   ////////                   
                  /////////    ///////////////////    /////////                 
                 ///////////////////////////////////////////////                
                ////////////////////////////////////////////////*               
                /////////////////////////////////////////////////               
                *************************************************           ,   
 &  ////////    /////////////////////////////////////////////////    ///////,   
   //////////   /////////////////////////////////////////////////  ,//////////  
  ,///////////  /////////////////////////////////////////////////  ///////////  
  ,///////////  /////////////////////////////////////////////////  ///////////  
  ,///////////  /////////////////////////////////////////////////  ///////////  
  ,///////////  /////////////////////////////////////////////////  ///////////  
  ,///////////  /////////////////////////////////////////////////  ///////////  
  ,///////////  /////////////////////////////////////////////////  ///////////  
  ,///////////  /////////////////////////////////////////////////  ///////////  
  ,///////////  /////////////////////////////////////////////////  ///////////  
  ,//////////*  /////////////////////////////////////////////////  ///////////  
   //////////   /////////////////////////////////////////////////   /////////*  
  #   ,//,   (  /////////////////////////////////////////////////  .   *//.     
             &  /////////////////////////////////////////////////               
                /////////////////////////////////////////////////               
                  /////////////////////////////////////////////                 
                          ///////////       ///////////                         
                          ///////////       ///////////                         
                          ///////////       ///////////                         
                          ///////////       ///////////                         
                          ///////////       ///////////                         
                          //////////* .     ///////////                         
                           ////////           ///////*                          
`,
};
export const StartCommands = [
  {
    type: "output",
    content: "Welcome to Android Club VITC's Terminal Interface",
  },
  { type: "output", content: "" },
  { type: "output", content: ">>> Boot sequence initialized..." },
  { type: "output", content: ">>> Environment loaded. Ready for commands." },
  { type: "output", content: "Type 'help' to see available commands" },
];
export const InvalidCommandOutput = (command) => {
  return [
    {
      type: "output",
      content: `'${command}' is not recognized as a valid command.`,
    },
    { type: "output", content: "Type 'help' for available commands." },
  ];
};
