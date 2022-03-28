let data  = [];

let userInput  = document.getElementById("user");
let typeInput   = document.getElementById("type");
let conditionInput = document.getElementById("condition");
let messageBox  = document.getElementById("display");

function insert ( ) {
  let user = userInput.value;
  let type = typeInput.value;
  let condition = conditionInput.value;

	data.push({
  	user: user,
    type: type,
    condition: condition
  });

  clearAndShow();
}

function clearAndShow () {
  // Clear our fields
  userInput.value = "";
  typeInput.value = "";
  conditionInput.value = "";

  let html = "";

  // Show our output
  html += "<tr>";
  html += "<td>user</td>";
  html += "<td>type</td>";
  html += "<td>condition</td>";
  html += "</tr>";
  for(i = 0; i <= data.length - 1; i++)
  {
    html += "<tr>";
    html += "<td>" + data[i].user + "</td>";
    html += "<td>" + data[i].type + "</td>";
    html += "<td>" + data[i].condition + "</td>";
    html += "</tr>";
  }
  messageBox.innerHTML = html;
}