import React from "react";




  
class Clock extends React.Component {
   state = {
       date: new Date()
   }

   render(){
       const { date } = this.state;

       return(
           <div>
               <h1>
                   {date.getFullYear()}{'  '}
                   {date.getMonth() + 1}{'  '}
                   {date.getDate()}
               </h1>
               <h2>
                    {date.getDay() === 0 ? "Sunday"
                    : date.getDay() === 1 ? "Monday"
                    : date.getDay() === 2 ? "Thesday"
                    : date.getDay() === 3 ? "Wednesday"
                    : date.getDay() === 4 ? "Thursday"
                    : date.getDay() === 5 ? "Friday"
                    : "Saturday"
                    }   
               </h2>
               <h2>
                   {date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}{'  '}
                   {date.getMinutes() < 10 ? "0" + date.getMinutes(): date.getMinutes()}
               </h2>
               
           </div>
       )
   }
   
   getDate = () => {
       this.setState({
           date: new Date()
       });
   };

   componentDidMount(){
       this.oneMinuteCall = setInterval(() => this.getDate(), 1);
   }

   componentWillUnmount(){
       clearInterval(this.oneMinuteCall);
   }


}

export default Clock;