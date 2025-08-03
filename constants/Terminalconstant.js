import Link from "next/link";

export const helpCommandOutput = [
  { type: "output", content: "Available commands:" },
  { type: "output", content: "  cd - change present working directory" },
  { type: "output", content: "  ls - list contents of current directory" },
  { type: "output", content: "  pwd - print current working directory" },
  { type: "output", content: "  echo - print string" },
  { type: "output", content: "  notification - display notification" },
  { type: "output", content: "  start - run an application" },
  { type: "output", content: "  projects - see our projects" },
  { type: "output", content: "  about    - learn about us" },
  { type: "output", content: "  social   - view our social media" },
  { type: "output", content: "  quote    - get a random programming quote" },
  { type: "output", content: "  join     - how to join our club" },
  { type: "output", content: "  clear    - clear the terminal" },
  { type: "output", content: "  help     - show this help message" },
];

export const homeLsOutput = [
  {
    type: "output",
    content: (
      <span>
        -{" "}
        <a
          href="https://www.instagram.com/androidvitc/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-400"
        >
          Instagram
        </a>
      </span>
    ),
  },
  {
    type: "output",
    content: (
      <span>
        -{" "}
        <a
          href="https://www.linkedin.com/company/android-club-vitc/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-400"
        >
          LinkedIn
        </a>
      </span>
    ),
  },
  {
    type: "output",
    content: (
      <span>
        -{" "}
        <Link href="/about" className="underline hover:text-blue-400">
          About
        </Link>
      </span>
    ),
  },
  {
    type: "output",
    content: (
      <span>
        -{" "}
        <Link href="/mail" className="underline hover:text-blue-400">
          Mail
        </Link>
      </span>
    ),
  },
  {
    type: "output",
    content: (
      <span>
        -{" "}
        <Link href="/gallery" className="underline hover:text-blue-400">
          Gallery
        </Link>
      </span>
    ),
  },
  {
    type: "output",
    content: (
      <span>
        -{" "}
        <Link href="/teams" className="underline hover:text-blue-400">
          Teams
        </Link>
      </span>
    ),
  },
  {
    type: "output",
    content: (
      <span>
        -{" "}
        <Link href="/past-events" className="underline hover:text-blue-400">
          Past Events
        </Link>
      </span>
    ),
  },
  {
    type: "output",
    content: (
      <span>
        -{" "}
        <Link
          href="/upcomming-events"
          className="underline hover:text-blue-400"
        >
          New Events
        </Link>
      </span>
    ),
  },
  {
    type: "output",
    content: (
      <span>
        -{" "}
        <Link href="/camera" className="underline hover:text-blue-400">
          Camera
        </Link>
      </span>
    ),
  },
  {
    type: "output",
    content: (
      <span>
        -{" "}
        <Link href="/github" className="underline hover:text-blue-400">
          Github
        </Link>
      </span>
    ),
  },
  {
    type: "output",
    content: (
      <span>
        -{" "}
        <Link href="/contributors" className="underline hover:text-blue-400">
          Contributors
        </Link>
      </span>
    ),
  },
];

export const socialCommandOutput = [
  { type: "output", content: "Our Socials:" },
  {
    type: "output",
    content: (
      <span>
        -{" "}
        <a
          href="https://github.com/Android-Club-VITC"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-400"
        >
          Github
        </a>
      </span>
    ),
  },
  {
    type: "output",
    content: (
      <span>
        -{" "}
        <a
          href="https://www.linkedin.com/company/android-club-vitc"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-400"
        >
          LinkedIn
        </a>
      </span>
    ),
  },
  {
    type: "output",
    content: (
      <span>
        -{" "}
        <a
          href="https://www.instagram.com/androidvitc/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-400"
        >
          Instagram
        </a>
      </span>
    ),
  },
];

export const emptyDir = [{ type: "output", content: "The directory is empty." }];

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

export const joinCommandOutput = [
  {
    type: "output",
    content:
      "Hi , everyone! We're so happy that you're curious as to how to join our club. Here are a few tips on how you can make it in :",
  },
  {
    type: "output",
    content:
      "1) Attend a few of our events , workshops , hackathons! this will help you get an idea on what our club stands for and how we work.",
  },
  {
    type: "output",
    content:
      "2) follow our social media (p.s: you can find it on our website too!) and check our updates to know when we open our recruitment forms!",
  },
  {
    type: "output",
    content:
      "3) Develop your skills in whichever department you wish to apply and be ready to showcase them when you're pulled in for an interview.",
  },
  { type: "output", content: "Keep building , Stay Happy!" },
];
;

export const quotesList = [
  "There’s no place like 127.0.0.1. 🏠",
  "Talk is cheap. Show me the code. – Linus Torvalds",
  "I don’t care if it works on your machine! We are not shipping your machine! 😜",
  "To err is human. To really foul things up you need a computer. 🤖",
  "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25.",
  "A day without coding is like… just kidding, I have no idea. 💻",
  "Real programmers count from 0.",
  "I'm not lazy, I'm just highly optimized. ⚙️",
  "Weeks of coding can save you hours of planning. 🙃",
  "It compiles? Ship it! 🚢",
  "If debugging is the process of removing bugs, then programming must be the process of putting them in. 🐞",
  "Never trust a computer you can’t throw out a window. – Steve Wozniak",
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

export const InvalidCommandOutput = (command) => [
  {
    type: "output",
    content: `'${command}' is not recognized as a valid command.`,
  },
  { type: "output", content: "Type 'help' for available commands." },
];
