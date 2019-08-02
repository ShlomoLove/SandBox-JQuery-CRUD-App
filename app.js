document.getElementById('taskInputForm').addEventListener('submit', saveTask);

function saveTask(e) {
  var toDoItem = document.getElementById('toDoItem').value;
  var toDoCategory = document.getElementById('categoryInput').value;
  var toDoUrgency = document.getElementById('urgencyInput').value;
  var taskId = chance.guid();
  var itemStatus = 'In Progress';
  var itemNotes = document.getElementById('itemNotes').value;

  var task = {
    id: taskId,
    item: toDoItem,
    category: toDoCategory,
    urgency: toDoUrgency,
    status: itemStatus,
    notes: itemNotes
  }

  if (localStorage.getItem('tasks') === null){
    var tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    var tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  document.getElementById('taskInputForm').reset();

  getItems(); 

  e.preventDefault();
}

var progress = function (id){
  var tasks = JSON.parse(localStorage.getItem('tasks'));

  for (var i = 0; i < tasks.length; i++){
    if (tasks[i].id === id) {
      if (tasks[i].status === 'In Progress'){
        tasks[i].status = 'Completed';
      } else {
        tasks[i].status = 'In Progress'
      }
    }
  }
  var value = 0;
  for (var x = 0; x < tasks.length; x++){
    if (tasks[x].status === 'Completed'){
      value ++
    }
  }
  
  var percent = Math.floor((value / tasks.length) * 100);
  // var progressBar = document.getElementsByClassName("progress-bar");
  // progressBar.style.width = percent + %
  $('.progress-bar').css('width', percent + '%');
  // $('#theprogressbar').attr('aria-valuenow', percent + '%').css('width', percent + '%');    
  localStorage.setItem('tasks', JSON.stringify(tasks)); 

  getItems();
}


var moveItemUp = function (id) {
  var tasks = JSON.parse(localStorage.getItem('tasks'));
  for (var i = 0; i < tasks.length; i++) {
    console.log(tasks[i].id)
    if (tasks[i].id === id) {
      var oldIndex = i;
      var newIndex = i - 1
      // remove `from` item and store it
      var x = tasks.splice(oldIndex, 1)[0];
      // insert stored item into position `to`
      tasks.splice(newIndex, 0, x);
    }
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getItems()
}

var moveItemDown = function (id) {
  var tasks = JSON.parse(localStorage.getItem('tasks'));
  for (var i = 0; i < tasks.length; i++) {
    console.log(tasks[i].id)
    if (tasks[i].id === id) {
      var oldIndex = i;
      var newIndex = i + 1
      // remove `from` item and store it
      var x = tasks.splice(oldIndex, 1)[0];
      // insert stored item into position `to`
      tasks.splice(newIndex, 0, x);
    }
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getItems()
}

var deleteItem = function (id){
  var tasks = JSON.parse(localStorage.getItem('tasks'));

  for (var i = 0; i < tasks.length; i++){
    if (tasks[i].id === id) {
      tasks.splice(i, 1);
    }
  }
  localStorage.setItem('tasks', JSON.stringify(tasks)); 

  getItems();
}

var divItemBox = '<div class="border border-dark" id="taskBox">' + '<li class="list-group-item list-group-item-primary">'

var editForm ='<div class="form-group">' +
              '<label for="progressNotes"></label>' +
              '<input type="text" class="form-control" id="progressNotes" placeholder="Update Notes">'
              '</div>'

var editNotes  = function (id){
  var progressNotes = document.getElementById('progressNotes').value;
  var tasks = JSON.parse(localStorage.getItem('tasks'));
  for (var i = 0; i < tasks.length; i++){
    if (tasks[i].id === id) {
      tasks[i].notes = progressNotes;
    }
  }
  localStorage.setItem('tasks', JSON.stringify(tasks)); 

  getItems();
}

var getItems = function(){
  var tasks = JSON.parse(localStorage.getItem('tasks'));
  var tasksList = document.getElementById('tasksList');

  tasksList.innerHTML = '';

  for (var i = 0; i < tasks.length; i++){
    var id = tasks[i].id;
    var item = tasks[i].item;
    var category = tasks[i].category;
    var urgency = tasks[i].urgency;
    var status = tasks[i].status;
    var notes = tasks[i].notes;

    tasksList.innerHTML +=  divItemBox + item + '</li>'+
                            '<p><span>' + status + '</span></p>'+
                            '<p><span></span>' + category + '</p>' +
                            '<p><span></span>' + urgency + '</p>' +
                            '<p><span></span>' + notes + '</p>' +
                            editForm + 
                            '<a href="#" onclick="progress(\''+ id + '\')" class="btn btn-success btn-sm">Complete</a>' +
                            '<a href="#" onclick="moveItemUp(\''+ id + '\')" class="btn btn-secondary btn-sm">Move Up</a>' +
                            '<a href="#" onclick="moveItemDown(\''+ id + '\')" class="btn btn-dark btn-sm">Move Down</a>' +
                            '<a href="#" onclick="deleteItem(\''+ id + '\')" class="btn btn-danger btn-sm">Delete</a>' +
                            '<a href="#" onclick="editNotes(\''+ id + '\')" class="btn btn-primary btn-sm">Edit</a>' +
                            '</div>';
  }
} 

$('#clear-tasks').on('click', function(){
   localStorage.clear();
    delete localStorage.tasks;
   // localStorage.setItem('tasks', JSON.stringify(tasks));
   $(".tasksList").empty();
   var tasks = JSON.parse(localStorage.getItem('tasks'));

    for (var i = 0; i < tasks.length; i++){
      if (tasks[i].id) {
        tasks.splice(i, 1);
     }
   }
  localStorage.setItem('tasks', JSON.stringify(tasks)); 

  getItems();
});
// '<li class="list-group-item list-group-item-dark">' + desc + '</li>'+




function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    return values;
   }

  


/*
listen for click event (edit)
update text in local storage (with key)
update display with new text value
 */


    // $(".list-runs").empty();
    // var singleRun = $('#runDetails').serializeArray();
    // console.log(singleRun, 'howdy')
    // console.log (singleRun) 
    // Date
    // Distance
    // Time
    // Pace
    // runHoldingArray.push()
    // var curTextValue = $('#theKey').val(); // reading from <input>
    // var curKeyValue = "theKey"; // change to dynamic key?
    // localStorage.setItem(curKeyValue, curTextValue);
    // $(".list-runs").append(curTextValue);

  // remove item from app

  // listen for click event (del)



