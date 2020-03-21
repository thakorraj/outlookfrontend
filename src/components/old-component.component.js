import React from 'react';
import axios from 'axios';
const OldComponent = props => {
    console.log("old ma aave che" + props.data);
    console.log(window.location.pathname.toString().substring(4));
    let a='Bearer '+window.location.pathname.toString().substring(4)+"";
    console.log(a);
    function sayHello() {
        
        const product = {

            
                id:"AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAA9ondAAA=",
              subject: "Let's go for lunch",
              body: {
                contentType: "HTML",
                content: "Does late morning work for you?"
              },
              start: {
                  dateTime: "2020-09-15T12:00:00",
                  timeZone: "Pacific Standard Time"
              },
              end: {
                  dateTime: "2020-09-15T14:00:00",
                  timeZone: "Pacific Standard Time"
              },
              location:{
                  displayName:"Harry's Bar"
              },
              attendees: [
                {
                  emailAddress: {
                    address:"thakorraj1998@gmail.com",
                    name: "Raj Thakor"
                  },
                  type: "required"
                }
              ]
            

        }
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': a
          }

        // console.log(store);
        axios.post('https://graph.microsoft.com/v1.0/me/events', product,{
                headers: headers
              })
            .then(res => console.log(res.data));
      }


    return (
        <div>
             <button onClick={sayHello}>
      Click me!
    </button>
        </div>
    )
};

export default OldComponent;