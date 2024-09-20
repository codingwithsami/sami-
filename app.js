// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
// import { getDatabase, set, ref, get, remove, update } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyCej5bSseowFFwgAIUHqKkQat5j6CQ6gpU",
//   authDomain: "realtime-96e15.firebaseapp.com",
//   databaseURL: "https://realtime-96e15-default-rtdb.firebaseio.com",
//   projectId: "realtime-96e15",
//   storageBucket: "realtime-96e15.appspot.com",
//   messagingSenderId: "676667080626",
//   appId: "1:676667080626:web:a9a91c83659ef3cb2f2eab"
// };

// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

// const add_data = document.getElementById("add_data");
// const notification = document.getElementById("notification");

// function addStudent() {
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const rollNumber = document.getElementById("rollNumber").value;

//   console.log(name, email, rollNumber);

//   set(ref(db, "student/" + rollNumber), {
//     name: name,
//     email: email,
//     rollNumber: rollNumber,
//   }).then(() => {
//     notification.innerText = "Added Successfully";
//     document.getElementById("name").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("rollNumber").value = "";
//     readData(); // Refresh the table after adding a student
//   }).catch((error) => {
//     notification.innerText = "Error: " + error.message;
//   });
// }

// add_data.addEventListener("click", addStudent);

// function readData() {
//   const userRef = ref(db, 'student/');
//   get(userRef).then((snapshot) => {
//     const data = snapshot.val();
//     const table = document.querySelector('table');
//     let html = "";

//     for (const key in data) {
//       const { name, email, rollNumber } = data[key];
//       html += `
//         <tr>
//           <td>${name}</td>
//           <td>${email}</td>
//           <td>${rollNumber}</td>
//           <td><button class="de" onclick="deleteData('${key}')">Delete</button></td>
//           <td><button class="up" onclick="updateData('${key}', '${name}', '${email}', ${rollNumber})">Update</button></td>
//         </tr>
//       `;
//     }

//     table.innerHTML = html;
//   });
// }

// function deleteData(key) {
//   const userRef = ref(db, 'student/' + key);
//   remove(userRef).then(() => {
//     console.log('Record deleted successfully');
//     notification.innerText = "Deleted Successfully";
//     readData(); // Refresh the table after deletion
//   }).catch((error) => {
//     console.error('Error deleting record:', error);
//   });
// }
// window.deleteData = deleteData;


// function updateData(key, name, email, rollNumber) {
//   const newName = prompt("Enter new name:", name);
//   const newEmail = prompt("Enter new email:", email);
//   const newRollNumber = prompt("Enter new roll number:", rollNumber);

//   if (newName && newEmail && newRollNumber) {
//     const userRef = ref(db, 'student/' + key);
//     update(userRef, {
//       name: newName,
//       email: newEmail,
//       rollNumber: newRollNumber,
//     }).then(() => {
//       console.log('Record updated successfully');
//       notification.innerText = "Updated Successfully";
//       readData(); // Refresh the table after update
//     }).catch((error) => {
//       console.error('Error updating record:', error);
//     });
//   }
// }
// window.updateData = updateData;
// readData();

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
// import { set, ref, get, remove, update } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";




// const firebaseConfig = {
//   apiKey: "AIzaSyCej5bSseowFFwgAIUHqKkQat5j6CQ6gpU",
//   authDomain: "realtime-96e15.firebaseapp.com",
//   databaseURL: "https://realtime-96e15-default-rtdb.firebaseio.com",
//   projectId: "realtime-96e15",
//   storageBucket: "realtime-96e15.appspot.com",
//   messagingSenderId: "676667080626",
//   appId: "1:676667080626:web:a9a91c83659ef3cb2f2eab"
// };

// const app = initializeApp(firebaseConfig);
// // const db = getDatabase(app);

// const add_data = document.getElementById("add_data");
// const notification = document.getElementById("notification")

// function addStudent() {
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const rollNumber = document.getElementById("rollNumber").value;
//   console.log(name, email, rollNumber);
//   set(ref(db, "student/" + rollNumber), {
//     name: name,
//     email: email,
//     rollNumber: rollNumber,
//   })
//   notification.innerText = "Added Succesfully"
//   document.getElementById("name").value = " ";
//   document.getElementById("email").value = " ";
//   document.getElementById("rollNumber").value = " ";

// }
// add_data.addEventListener("click", addStudent)

// function readData() {
//   const userRef = ref(db, 'student/')
//   get(userRef).then((snapshot) => {
//     const data = snapshot.val()
//      const table = document.querySelector('table');

//     let html = " ";
//     for (const key in data) {
//       const { name, email, rollNumber } = data[key];
//       html += `
// <tr>
// <td>${name}</td>
// <td>${email}</td>
// <td>${rollNumber}</td>
// <td><button class="de" onclick="deleteData('${key}')">Delete</button></td>
// <td><button class="up" onclick="updateData('${rollNumber}')">Update</button></td>
// </tr>
// `
//  }

//      table.innerHTML = html

//   })
// }
// readData();

// function deleteData(key){
//   const userRef = ref(db, 'student/' + key)
// remove(userRef).then(() =>{
//   notification.innerText = "Data deleted Successfully"
// readData()
// }).catch((error) =>{
//   console.log(error.message)
// })


// }
// window.deleteData = deleteData;


// function updateData(rollNumber) {
//   const userRef = ref(db, 'student/' + rollNumber);
//    get(userRef).then((item) => {
//     document.getElementById("name").value = item.val().name;
//     document.getElementById("email").value = item.val().email;
//     document.getElementById("rollNumber").value = item.val().rollNumber;
//   console.log(item.val())
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// document.querySelector('.update_data').classList.add('show')

// const update_btn = document.querySelector('#update_data')
// update_btn.addEventListener('click',() =>{
// const name = document.getElementById("name").value
// const email = document.getElementById("email").value
// const rollNumber = document.getElementById("rollNumber").value
// update(ref(db),{
//   [`student/ ${rollNumber} /name`] : name, 
//   [`student/ ${rollNumber}/email`] : email,
//   [`student/ ${rollNumber}/rollNumber`] : rollNumber, 
// }).then(() =>{
//   notification.innerText = "Data Updated Successfully";
//   document.querySelector('.update_data').classList.remove('show')
//   document.getElementById("name").value = " ";
//   document.getElementById("email").value = " ";
//   document.getElementById("rollNumber").value = " ";

//   readData()
// })
// } )

//  }
// window.updateData = updateData;
