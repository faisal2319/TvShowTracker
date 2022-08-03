let Leads = []
const ulTracked = document.getElementById('Tracked-Shows')
let items = ""
function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }


//Getting data from the form 
  document.getElementById('btn1').onclick = function(){
    var showname = document.getElementById('Show-Name').value;
    var episodecount = document.getElementById('Episode-Count').value;
    var rating = document.getElementById('rating').value;
    var status = document.getElementById('Status').value;
    appendShow(showname, episodecount, rating, status)
    return false;
  }


//Function Used to Add shows to list
  function appendShow(name, count, rate, status){
    items += `
    <div>
        <img alt="Image here">
        <li>Name: ${name}</li>
        <li>Episode: ${count}</li> 
        <li>Rating: ${rate}</li>
        <li>Status${status}</li>
        <button class="editButton" onclick="edit()" >Edit</button>
    </div>
    `

    ulTracked.innerHTML = items
    
  }



  


  

