import ChatBot from 'react-simple-chatbot';

function Chatbot() {
 
    const steps = [
        {
          id: "Greet",        
          message: "Hello, welcome to our Wellness Wave",        
          trigger: "Done",        
        },        
        {       
          id: "Done",        
          message: "Please enter your name!",        
          trigger: "waiting1",        
        },      
        
        {      
          id: "waiting1",      
          user: true,      
          trigger: "Name",      
        },      
        {       
          id: "Name",     
          message: "Hi {previousValue}, What do you want to work on?",     
          trigger: "issues",     
        },      
        {      
          id: "issues",   
          options: [   
            {    
              value: "Health",   
              label: "Health",
              trigger: "Health",       
            },       
            { value: "Exercise", label: "Exercise", trigger: "Exercise" },       
          ],       
        },       
        {       
          id: "Exercise",       
          message:        
            "Now loading excerise tips:",        
          end: true,       
        },       
        {       
          id: "Health",       
          message:       
            "Now loading wellness tips:",       
          end: true,       
        },       
      ]; 
    
    return (
        <div className="app">
          <h1 className="header text-center">Wellness Wave</h1>
          <div className="center">
            <ChatBot steps={steps} />
          </div>
        </div>
         )
       
       }

export default Chatbot;


  