import React, { useHooks, useState, useEffect } from 'react';
import axios from 'axios';
import image2base64 from 'image-to-base64';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
cookies.set('myCat', 'Pacman', { path: '/' });
console.log(cookies.get('myCat'));
const OldComponent = props => {
  const [event, setEvent] = useState("");
  const [phone, setPhone] = useState("");
  const [entrepreneurs, setEntrepreneurs] = useState("");
  const [twitter, setTwitter] = useState("");
  const [link, setLink] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [email, setEmail] = useState("");
  const [banner, setBanner] = useState("");
  // console.log("old ma aave che" + props.data);
  // console.log(window.location.pathname.toString().substring(4));
  let a = 'Bearer ' + window.location.pathname.toString().substring(4) + "";
  console.log(a);
  //let id="pateharshil737@gmail.com"
  let id = "thakorraj1998@gmail.com"
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': a
  }
  const cookies = new Cookies();
  cookies.set('Token', window.location.pathname.toString().substring(4), { path: '/' });
  console.log(cookies.get('Token'));


  const Level = props => (
    <p>
      {console.log(props.product)}
       
    </p>
  )




  let cat = "G304 – Boardroom";
  let link1;
  if (cat === "G306 - Session Room") {
    link1 = "AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbSAAA="
  }
  else if (cat === "G305 - Session Room") {
    link1 = "AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbTAAA=";
  }
  else if (cat === "G304 – Boardroom") {
    link1 = "AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbUAAA=";
  }
  else if (cat === "G303 - Media Production Space") {
    link1 = "AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbVAAA=";
  }
  else if (cat === "G206 - Multipurpose Room") {
    link1 = "AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbWAAA=";
  }
  else if (cat === "G204 – Boardroom") {
    link1 = "AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbXAAA=";
  }
  else if (cat === "G205 – Focus Group Control Room") {
    link1 = "AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbYAAA=";
  }
  else if (cat === "G105 - Focus Group Room") {
    link1 = "AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbZAAA=";
  }
  let accepted = "<!DOCTYPE html><html><head><title>Email Page</title><style type='text/css'></style></head><body><div align=justify><p>Hi Harsh,</p><p><b>Your room booking for G204 on Monday, Jan 20th at 4-5PM has been confirmed. </b>Please note, the confirmation applies to the first three hours of your request. Should the room be available following your booking, you are welcome to use it until the next scheduled room booking.<p>ROOM BOOKING TERMS AND CONDITIONS: Students, alumni, faculty, administration and community* members may request meeting room space in G-building under the following conditions:</p><ol><li>Requestors must be members of the CfE.</li><br><li>Same day requests are not processed. Forms received after 4:00pm, booking for the next business day, is considered a same day request.</li><br><li>Rooms can be booked up to two weeks in advance.</li><br><li>Rooms may be booked for up to three hours. Requests outside of the restriction will only be considered for the first three hours.</li><br><li>Rooms cannot be booked on a consecutive or recurring basis</li><br><li>Room bookings cannot exceed the seating capacity of the room.</li><br><li>Audio-visual equipment cannot be moved from the room. For all A/V issues contact IT at 416-675-6622 x8888.</li><br><li>Rooms must be left clean with no damage. Users agree to cover all damages and losses resulting from room use. Please advise the CfE team of any pre-existing damages within the first 10 minutes of the reservation.</li><br><li>Room bookings will be relinquished after the first 15 minutes if unoccupied.</li><br><li>Booking privileges will be suspended for contravention of these conditions or for no-show (15 minutes late)</li></ol><br><p>Please let us know if there are any changes.<br><br>Regards,<br><b style=color: #173F5F;>Centre for Entrepreneurship (CfE) Team</b><br>Humber Institute of Technology & Advanced Learning<br>17 Colonel Samuel Smith Park Drive, G-building<br>Toronto, ON M8V 4B6<br>Phone: 416-675-6622 x3490<br>Email:<a href=mailto:cfe@humber.ca>cfe@humber.ca</a><br> <a href=https://www.humber.ca/cfe>www.humber.ca/cfe</a></p><p><img src='cid:entrepreneurs'><br><br><a href=https://www.facebook.com/humbercfe><img src='cid:facebook'></a><a href=https://twitter.com/humbercfe><img src='cid:twitter'></a><a href=https://www.instagram.com/humbercfe/><img src='cid:instagram'></a><br><br><img src='cid:banner'></p><p style=color: #20639B; align=justify>CONFIDENTIALITY NOTICE:<br>This email and attached material are intended for the use of the individual or organization to whom they are addressed and may not be distributed, copied, or disclosed to other unauthorized persons. Thismaterial may contain confidential and/or personal information subject to the provisions of the Freedom of Information and Protection of Privacy Act, the Municipal Freedom of Information and Protection ofPrivacy Act, and/or the Personal Health Information Protection Act. If you receive this transmission in error, please notify me immediately and delete this message. Do not email, print, copy, distribute, or disclose this email or its contents further. Thank you for your co-operation and assistance.</p></div></body></html>";

  let decline = "<!DOCTYPE html> <html> <head> <title>Email Page</title> <style type='text/css'></style> </head> <body> <div align=justify> <p>Hi Jesse,</p> <p><b>Thank you for your room booking request</b>.<p>Unfortunately, one or more of our Terms and Conditions was not met:</p><ol> <li> Same day requests are not processed. Forms received after 4:00pm booking for the following day are considered same day requests.</li><br><li> Rooms may be booked for up to three hours.</li><br><li> Rooms may not be booked on a consecutive or recurring basis.</li><br><li> Rooms can be requested up to two weeks in advance. </li><br><li> Room bookings cannot exceed the seating capacity of the room.</li><br><li> Room has already been booked for the time period requested</li><br><li> The rooms in CfE (G-building) are designated for entrepreneurial activities, training or encouragement of entrepreneurship with a primary mandate to support student-led entrepreneurial ventures.</li><br></ol><br><p>To re-submit your request once it adheres to all terms and conditions outlined on the CfE Room Booking Request form, click <a href=https://humber.ca/cfe/room-booking>here</a>.<br><br>Regards,<br><b style=color: #173F5F;>Centre for Entrepreneurship (CfE) Team</b><br>Humber Institute of Technology & Advanced Learning<br>17 Colonel Samuel Smith Park Drive, G-building<br>Toronto, ON M8V 4B6<br>Phone: 416-675-6622 x3490<br>Email:<a href=mailto:cfe@humber.ca>cfe@humber.ca</a><br> <a href=https://www.humber.ca/cfe>www.humber.ca/cfe</a></p><p><img src='cid:entrepreneurs'><br><br><a href=https://www.facebook.com/humbercfe><img src='cid:facebook'></a><a href=https://twitter.com/humbercfe><img src='cid:twitter'></a><a href=https://www.instagram.com/humbercfe/><img src='cid:instagram'></a><br><br><img src='cid:banner'></p><p style=color: #20639B; align=justify>CONFIDENTIALITY NOTICE:<br>This email and attached material are intended for the use of the individual or organization to whom they are addressed and may not be distributed, copied, or disclosed to other unauthorized persons. Thismaterial may contain confidential and/or personal information subject to the provisions of the Freedom of Information and Protection of Privacy Act, the Municipal Freedom of Information and Protection ofPrivacy Act, and/or the Personal Health Information Protection Act. If you receive this transmission in error, please notify me immediately and delete this message. Do not email, print, copy, distribute, or disclose this email or its contents further. Thank you for your co-operation and assistance.</p></div></body></html>";

  let tentative = "<!DOCTYPE html><html><head><title>Email Page</title><style type='text/css'></style></head><body><div align=justify><p>Hi Harsh,</p><p><b>Your room booking has been tentatively confirmed. </b>Please note, the confirmation applies to the first three hours of your request. Should the room be available following your booking, you are welcome to use it until the next scheduled room booking.<p>ROOM BOOKING TERMS AND CONDITIONS: Students, alumni, faculty, administration and community* members may request meeting room space in G-building under the following conditions:</p><ol><li>Requestors must be members of the CfE.</li><br><li>Same day requests are not processed. Forms received after 4:00pm, booking for the next business day, is considered a same day request.</li><br><li>Rooms can be booked up to two weeks in advance.</li><br><li>Rooms may be booked for up to three hours. Requests outside of the restriction will only be considered for the first three hours.</li><br><li>Rooms cannot be booked on a consecutive or recurring basis</li><br><li>Room bookings cannot exceed the seating capacity of the room.</li><br><li>Audio-visual equipment cannot be moved from the room. For all A/V issues contact IT at 416-675-6622 x8888.</li><br><li>Rooms must be left clean with no damage. Users agree to cover all damages and losses resulting from room use. Please advise the CfE team of any pre-existing damages within the first 10 minutes of the reservation.</li><br><li>Room bookings will be relinquished after the first 15 minutes if unoccupied.</li><br><li>Booking privileges will be suspended for contravention of these conditions or for no-show (15 minutes late)</li></ol><br><p>Please let us know if there are any changes.<br><br>Regards,<br><b style=color: #173F5F;>Centre for Entrepreneurship (CfE) Team</b><br>Humber Institute of Technology & Advanced Learning<br>17 Colonel Samuel Smith Park Drive, G-building<br>Toronto, ON M8V 4B6<br>Phone: 416-675-6622 x3490<br>Email:<a href=mailto:cfe@humber.ca>cfe@humber.ca</a><br> <a href=https://www.humber.ca/cfe>www.humber.ca/cfe</a></p><p><img src='cid:entrepreneurs'><br><br><a href=https://www.facebook.com/humbercfe><img src='cid:facebook'></a><a href=https://twitter.com/humbercfe><img src='cid:twitter'></a><a href=https://www.instagram.com/humbercfe/><img src='cid:instagram'></a><br><br><img src='cid:banner'></p><p style=color: #20639B; align=justify>CONFIDENTIALITY NOTICE:<br>This email and attached material are intended for the use of the individual or organization to whom they are addressed and may not be distributed, copied, or disclosed to other unauthorized persons. Thismaterial may contain confidential and/or personal information subject to the provisions of the Freedom of Information and Protection of Privacy Act, the Municipal Freedom of Information and Protection ofPrivacy Act, and/or the Personal Health Information Protection Act. If you receive this transmission in error, please notify me immediately and delete this message. Do not email, print, copy, distribute, or disclose this email or its contents further. Thank you for your co-operation and assistance.</p></div></body></html>";
  function Accepted() {

    const Event = {

      subject: "Raj Thakor",
      body: {
        contentType: "HTML",
        content: accepted
      },
      categories: [cat],
      start: {
        dateTime: "2020-04-24T12:00:00",
        timeZone: "Pacific Standard Time"
      },
      end: {
        dateTime: "2020-04-24T14:00:00",
        timeZone: "Pacific Standard Time"
      },
      hasAttachments: true,
      location: {
        displayName: "Humber College"
      },
      attachments: [
        {
          "contentType": "image/png",
          "contentId": "email",
          "isInline": true,
          "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
          "contentBytes": email,
          "name": "name.jpg"
        },
        {
          "contentType": "image/png",
          "contentId": "facebook",
          "isInline": true,
          "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
          "contentBytes": facebook,
          "name": "name.jpg"
        },
        {
          "contentType": "image/png",
          "contentId": "instagram",
          "isInline": true,
          "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
          "contentBytes": instagram,
          "name": "name.jpg"
        },
        {
          "contentType": "image/png",
          "contentId": "link",
          "isInline": true,
          "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
          "contentBytes": link,
          "name": "name.jpg"
        },
        {
          "contentType": "image/png",
          "contentId": "phone",
          "isInline": true,
          "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
          "contentBytes": phone,
          "name": "name.jpg"
        },
        {
          "contentType": "image/png",
          "contentId": "twitter",
          "isInline": true,
          "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
          "contentBytes": twitter,
          "name": "name.jpg"
        },
        {
          "contentType": "image/png",
          "contentId": "enterpreneurs",
          "isInline": true,
          "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
          "contentBytes": entrepreneurs,
          "name": "name.jpg"
        },
        {
          "contentType": "image/png",
          "contentId": "banner",
          "isInline": true,
          "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
          "contentBytes": banner,
          "name": "name.jpg"
        }
      ],
      attendees: [
        {
          emailAddress: {
            address: id,
            name: "Raj Thakor"
          },
          type: "required"
        }
      ]
    }//,
    // attachments: [
    //   {
    //     contentType: "image/png",
    //     contentId: "yourcid",
    //     isInline: true,
    //     "@odata.type ": "#Microsoft.OutlookServices.FileAttachment",
    //     contentBytes: "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAGYktHRAD/AP8A/6C9p5MAAAPhSURBVEhL3ZVpbJVFFIbf6y3QAoUgCiJL3DAIiiAYDQYTjEswEn4IginhhxSxUKD8sDFgNalbgkSjmIBCUCyWPVAx2gpUrNBWrVop2oIU04VuoKYsbUl7eX1nueS23BJDTX/wJPN958w3M2fmnDnnC1CgG7nOv7uNa9/g/xbDVZ8Dm/OBv84BQR1jQG8g4SFg2TQ/IIwx2FUmLCVTPyYbm3yHaDxPvriBvD/Fd3i6bPCpl8ituV4RW/a7FsbIZkyYLsWwpBzopxWemQIcrwTGzAQqTwIVakYurwJmPQL01ZiiUjfnUgx3fQ1k7fO3KGAeVyYmCJyoBtKXAZPGA9OTgNVpwIib3feKGmDJa1pzDZBbCBwqAtKS9cEYzMomZ8wjz5wjq2vJqhqyto481dB5a1GM5il21RprmDrbvSN58ln3rjpJLkx1sj3Q9wf1OKNT7gSG3gQMGwK09gV+bgGOtEZvxWrBXsDfp80KQLz8FAo5OcxZndIQFyunNTnZGmyTsU82ADUVwHK5yBDfE/ihDMgrAfJ/v7ztlYtuuAU4kO3GL3gOSJqrWB5V07yU54Eh2vTBb4Ds3cBdt7pxNoavLAKSXwYG6WRZmRqwA3jvM6BnnPQ8oPGsYtbDTTBcuADcMQKYfC+QqDx78yM3t/SwvLRJi+oOPC3jd45RfiqufeK1mVQ/2Rh8fQFZX20kR1kxmTCRrKt0+k/5ZM5Oct8e8qvt5PFS1797PZk2l5w/hTyqOf8Fa/DtRLKhyurtWPggmScDhrpfySNbyKZ6p7+bpLbIyW2t2vQccvk08tN0MkOtptx964iNYa+2yzOhTBdp+GDgcA6QuQIYPFa5NUtjBwFvyY0D+yv29bo0uhjBGGBFBvDqViBWK7IZuF4ujoqx+qHcctq7z5DzDrnyca+IL1aSq54gc9eQ6Tp1yV7XX3tM8b+PPPad0w2HMsj8TV6JgjW4MUG1T/kXlrclOzmSBi1etJlsbvQdnoshufZh8sD7Ti/cSBaohnaGdWms/Nl8Clg3GRitMjVztT18O24cCUyYrbH9fIcnoBVSvpVrlT57dNtjlIs9rlSpjNUv55NrR6pqFNpNXDW/rCM/GEb+luk7omBPGPhHp1JyDn3A7uGqGZeoupoiQf/EzrCJv1+3bpKSN67DzQopwQuWykWqGO1QGQuqXE18w+sR/KGKFdItHSX3RsMaLF6i38xo4LYXfG8EDT+q/qlmtkMGA/pbDLzb6xEUTAduX6zK86jv6IA1eFFFumgq0PKnW+gSCr4p0FExxVoeiITK5wGPAfes9x1RsAa93C3YS9OdXOsGgX8BSggK5Mn13yYAAAAASUVORK5CYII=",
    //     name: "name.jpg"
    //   }
    // ]
    https://graph.microsoft.com/v1.0/me/calendars/AAMkAGViNDU7zAAAAAGtlAAA=/events

    axios.post('https://graph.microsoft.com/v1.0/me/calendars/' + link1 + '/events', Event, {
      headers: headers
    })
      .then(res => console.log(res.data));

    // axios.post('https://graph.microsoft.com/v1.0/me/events', Event, {
    //   headers: headers
    // })
    //   .then(res => console.log(res.data));
  }




  function Decline() {
    const Email = {
      "message": {
        "subject": "Booking Cancelled",
        "toRecipients": [{ "emailAddress": { "address": id } }],
        "body": {
          "contentType": "html",
          // "content": "<div>This is a small jpeg: <img src=\"cid:yourcid\" height='50' width='50'><img src=\"cid:yourcid2\" height='50' width='50'></div>"
          "content": decline
        },
        "attachments": [
          {
            "contentType": "image/png",
            "contentId": "email",
            "isInline": true,
            "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
            "contentBytes": email,
            "name": "name.jpg"
          },
          {
            "contentType": "image/png",
            "contentId": "facebook",
            "isInline": true,
            "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
            "contentBytes": facebook,
            "name": "name.jpg"
          },
          {
            "contentType": "image/png",
            "contentId": "instagram",
            "isInline": true,
            "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
            "contentBytes": instagram,
            "name": "name.jpg"
          },
          {
            "contentType": "image/png",
            "contentId": "link",
            "isInline": true,
            "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
            "contentBytes": link,
            "name": "name.jpg"
          },
          {
            "contentType": "image/png",
            "contentId": "phone",
            "isInline": true,
            "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
            "contentBytes": phone,
            "name": "name.jpg"
          },
          {
            "contentType": "image/png",
            "contentId": "twitter",
            "isInline": true,
            "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
            "contentBytes": twitter,
            "name": "name.jpg"
          },
          {
            "contentType": "image/png",
            "contentId": "enterpreneurs",
            "isInline": true,
            "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
            "contentBytes": entrepreneurs,
            "name": "name.jpg"
          },
          {
            "contentType": "image/png",
            "contentId": "banner",
            "isInline": true,
            "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
            "contentBytes": banner,
            "name": "name.jpg"
          }
        ]
      }
    }
    axios.post('https://graph.microsoft.com/v1.0/me/sendMail', Email, {
      headers: headers
    })
      .then(res => console.log(res.data));
  }


  function Tentative() {
    const Email = {
      "message": {
        "subject": "Booking Tentative Accepted",
        "toRecipients": [{ "emailAddress": { "address": id } }],
        "body": {
          "contentType": "html",
          // "content": "<div>This is a small jpeg: <img src=\"cid:yourcid\" height='50' width='50'><img src=\"cid:yourcid2\" height='50' width='50'></div>"
          "content": tentative
        },
        "attachments": [
          {
            "contentType": "image/png",
            "contentId": "email",
            "isInline": true,
            "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
            "contentBytes": email,
            "name": "name.jpg"
          },
          {
            "contentType": "image/png",
            "contentId": "facebook",
            "isInline": true,
            "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
            "contentBytes": facebook,
            "name": "name.jpg"
          },
          {
            "contentType": "image/png",
            "contentId": "instagram",
            "isInline": true,
            "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
            "contentBytes": instagram,
            "name": "name.jpg"
          },
          {
            "contentType": "image/png",
            "contentId": "link",
            "isInline": true,
            "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
            "contentBytes": link,
            "name": "name.jpg"
          },
          {
            "contentType": "image/png",
            "contentId": "phone",
            "isInline": true,
            "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
            "contentBytes": phone,
            "name": "name.jpg"
          },
          {
            "contentType": "image/png",
            "contentId": "twitter",
            "isInline": true,
            "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
            "contentBytes": twitter,
            "name": "name.jpg"
          },
          {
            "contentType": "image/png",
            "contentId": "enterpreneurs",
            "isInline": true,
            "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
            "contentBytes": entrepreneurs,
            "name": "name.jpg"
          },
          {
            "contentType": "image/png",
            "contentId": "banner",
            "isInline": true,
            "@odata.type": "#Microsoft.OutlookServices.FileAttachment",
            "contentBytes": banner,
            "name": "name.jpg"
          }
        ]
      }
    }
    axios.post('https://graph.microsoft.com/v1.0/me/sendMail', Email, {
      headers: headers
    })
      .then(res => console.log(res.data));
  }



  function Event() {
    axios.get('https://graph.microsoft.com/v1.0/me/calendars/AAMkAGU5OTZlNDk1LTJlNmUtNGY1Ny1iYmMwLTU1ZmIzM2ZhNmJlMwBGAAAAAACKGeDzotHGRajMauDc_qmOBwBqw_J8OsbUQLCfJtoX9jrqAAAAAAEGAABqw_J8OsbUQLCfJtoX9jrqAAAOEcbUAAA=/events', {
      headers: headers
    })
   //   .then(res => setEvent(res.data));
      .then(res =>res.data.value.map((cal) => { 
        console.log(cal);
        return <Level product={cal} key={cal.id}/>;
      }));
    //  console.log(event.map(()))
    //console.log(res.data)
  }






  useEffect(() => {
    // Update the document title using the browser API
    console.log("Hello");
    // axios.post('http://localhost:4000/img', { img: 'icons8-phone-64.png' })
    //   .then(res => setPhone(res.data));
    axios.post('http://localhost:4000/img', { img: 'We are Entrepreneurs.png' })
      .then(res => setEntrepreneurs(res.data));
    axios.post('http://localhost:4000/img', { img: 'twitter.png' })
      .then(res => setTwitter(res.data));
    // axios.post('http://localhost:4000/img', { img: 'icons8-link-64.png' })
    //   .then(res => setLink(res.data));
    axios.post('http://localhost:4000/img', { img: 'instagram.png' })
      .then(res => setInstagram(res.data));
    axios.post('http://localhost:4000/img', { img: 'facebook.png' })
      .then(res => setFacebook(res.data));
    // axios.post('http://localhost:4000/img', { img: 'icons8-email-64.png' })
    //   .then(res => setEmail(res.data));
    axios.post('http://localhost:4000/img', { img: 'Eventbrite Banner Career Recharge.png' })
      .then(res => setBanner(res.data, console.log(res.data)));




  });



  return (
    <div>
      <button onClick={Accepted}>
        Create Event!
    </button>
      <button onClick={Decline}>
        Decline!
      </button>

      <button onClick={Tentative}>
        Tentative!
      </button>

      <button onClick={Event}>
        Event!
      </button>
      {/* {console.log(event.value)} */}


      {/* {
        event.value.map(customer => {
          console.log(customer);
        })
      } */}


    </div>
  )
};

export default OldComponent;