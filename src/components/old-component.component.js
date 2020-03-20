import React from 'react';
import axios from 'axios';
const OldComponent = props => {
    console.log("old ma aave che" + props.data);
    console.log(window.location.pathname.toString().substring(4));
    let a;
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
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6Imw1TzZrQmdTTzd1VFRnM1dMZzQ3cHpSNDFubHFmVmt4aTRoV2pNU1dYZlUiLCJhbGciOiJSUzI1NiIsIng1dCI6IllNRUxIVDBndmIwbXhvU0RvWWZvbWpxZmpZVSIsImtpZCI6IllNRUxIVDBndmIwbXhvU0RvWWZvbWpxZmpZVSJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zYjg1YTkwYS1kMGU0LTRmMmEtYmJjMS03OTExYzIzNmI2N2EvIiwiaWF0IjoxNTg0NzIzNjk1LCJuYmYiOjE1ODQ3MjM2OTUsImV4cCI6MTU4NDcyNzU5NSwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFTUUEyLzhPQUFBQXEvcWJTbFBkOE1OdmtTQ2pTVDUyNDhTcE5FYVE2eXF6Y3MrTkdjclA3QzQ9IiwiYW1yIjpbInB3ZCJdLCJhcHBfZGlzcGxheW5hbWUiOiJUZXN0IEFwcCIsImFwcGlkIjoiY2Q5MDJjYWUtMzYzMy00ZWViLTllY2UtOTgwODYyMDBiZTk5IiwiYXBwaWRhY3IiOiIxIiwiZmFtaWx5X25hbWUiOiJQYXRlbCIsImdpdmVuX25hbWUiOiJIYXJzaGlsIiwiaXBhZGRyIjoiOTkuMjUyLjQ2LjE2MSIsIm5hbWUiOiJIYXJzaGlsIFBhdGVsIiwib2lkIjoiZTZmYThiMDQtZTA0Yy00ZjdiLWFjZGItOTk4Y2E3NTE3NGQ4IiwicGxhdGYiOiIzIiwicHVpZCI6IjEwMDMyMDAwOUZGNUVEMkEiLCJzY3AiOiJDYWxlbmRhcnMuUmVhZCBDYWxlbmRhcnMuUmVhZC5TaGFyZWQgQ2FsZW5kYXJzLlJlYWRXcml0ZSBDYWxlbmRhcnMuUmVhZFdyaXRlLlNoYXJlZCBDb250YWN0cy5SZWFkIGVtYWlsIE1haWwuUmVhZCBNYWlsLlJlYWRXcml0ZSBNYWlsLlNlbmQgTWFpbGJveFNldHRpbmdzLlJlYWQgTWFpbGJveFNldHRpbmdzLlJlYWRXcml0ZSBvcGVuaWQgcHJvZmlsZSBVc2VyLlJlYWQiLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiIxbDk5NGVtWkRhQVVReHNPNHJDU205dG1KXzlxVUtrSXBoUUVvV19EcGp3IiwidGlkIjoiM2I4NWE5MGEtZDBlNC00ZjJhLWJiYzEtNzkxMWMyMzZiNjdhIiwidW5pcXVlX25hbWUiOiJwYXRlbGhhcnNoaWxAcGF0ZWxoYXJzaGlsLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6InBhdGVsaGFyc2hpbEBwYXRlbGhhcnNoaWwub25taWNyb3NvZnQuY29tIiwidXRpIjoicERISk1SamFma2lLSGUtck54OWJBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiNjJlOTAzOTQtNjlmNS00MjM3LTkxOTAtMDEyMTc3MTQ1ZTEwIl0sInhtc19zdCI6eyJzdWIiOiJseWpOZ1VHYnV4bnVJSk41MEhma3NCTXd2djRFbW52alRnZFlLRFJMSGZJIn0sInhtc190Y2R0IjoxNTgzMzc1OTQ5fQ.mTKK4q3SYKyZJOv8OrPreOVkcGeRQT3aw4IhC2X-2DdBb-qqCOzYUnqGpQedr6RhGSOodbdeyuAzAThXgEpH2dNuHNDxJOGB95cayUN_-Aw9Eb4cYfzt0o_aM3_wPHFp6DzBlK9JjF_cKEbByKlIDD3YXpGXBXuj-Q1AMlN7IPQvwG63yYf6Xjq9U3N5YAFVrdiOqZUyec_5ou8XQXe6z3MLEwtWayYHO_8RsqY7Y_4uzkwjU1a7D-sd6N0FJLwXI8c9os4RozSYhqEDYVtCo6CIIAu1ZizlGynvXgXyr-biGZbzjRQHqCd7zi3nPUlUV0i1IDHPMKfwafJgX5S0_w'
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