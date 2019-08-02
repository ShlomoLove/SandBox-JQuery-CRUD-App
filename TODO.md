### Cruddy App Todo

#### Basic Improvments (requirements)

- [x] create indivdiual items
- [x] delete individual items
- [x] edit individual items


##### Notes
- [x] Keep DOM and localStorage matching 
- [x] Remember event Delegation when adding new items to .show-text
- [x] make sure we do not duplicate data
- [x] add different values to the item

- Create a Run Tracking App
- Input will be individual runs 
- Each run will have different categories: Distance, Time, Date, Pace (pace and time will be added after successfully adding the other categores)
// the input button with the different categories will put each element into an Object
// the object will store the data and the graph will call on the object  
- The Data set will be passed into a graph using C3.js
- On the App there will be buttons for Input, List, Daily, Monthly and Yearly View
- The Daily, Monthly and Yearly View buttons will pull up charts representing each those types of view
- the List View will pull up a list of the runs
- In the list view the individual runs can be either edited or deleted - This will accomplish the Basic Requirements of the App
- 

- The App will employ JQuery, JQuey UI and C3.js

  ex.
```javascript
 item =  {
  id: "thing used for key",
  text-value: "some text",
  categories: [ 'cat1', 'cat2' ],
  isComplete: boolean,
  dateCreated: dateCreated,
  dateCompleted: dateCompleted
  ...
  etc
  }
```

#### Potential Libraries
- [ ] lodash/underscore
- [x] jquery ui
- [x] bootstrap/material (css library)

#### My Spin
(to be filled out by you)
- will include charts for weeks, months, years
- take the input and store in object to call on later
