import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState(""); //Hook
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>

//         <SearchBox
//           className="search-box"
//           onChangeHandler={onSearchChange}
//           placeholder="Search Monsters"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
//-------------------------------------------------------------------------------------
//UseState()
//will give us back 2 things
//[value that we want to store, setValue Function]

//For example :
//const [searchField, setSearchField] = useState("");

//in this case we call useState('')
//we put an empty string inside of the () because we want the initial value of the seachField
//TO BE EMPTY

//then we deconstruct the values and store them into 2 variables
//inside of searchField we will get the value
//and inside of setSearchField we will get a function
//-------------------------------------------------------------------------------------
//Notice when u work with function components THE WHOLE FUNCTION GET RE-RENDERD
//WHEN A PROP IS CHANGING OR A STATE UPDATED
//-------------------------------------------------------------------------------------
//Trigger side effects
// useEffect(
//   () => {
//     //Effect we want to happen
//   },
//   [] //contain differnet state values or prop values
// );

//Notice When ever the valus inside of the array changes then it will trigger the callback function
//Notice useEffect will be mounted once when the function first time rendered
//So in our example :

// useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) => setMonsters(users));
// }, []);

//We call use effect with fetch and empty array
//Because we want to fetch ONLY ONCE ! [when the function get first render]
//and for it to run only once we pass to it an empty array
//So there will no be any case that will trigget this function again!
//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------

// import { Component } from "react";
// import CardList from "./components/card-list/card-list.component";
// import SearchBox from "./components/search-box/search-box.component";
// import "./App.css";

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>

//         <SearchBox
//           className="search-box"
//           onChangeHandler={onSearchChange}
//           placeholder="Search Monsters"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

//export default App;

//-------------------------------------------------------------------------------------

//.setState will shallow merge the object we send with the current state
//which is in the code above
//in other words this will search in the state the key we sent
//and if it find a match(a key match in this example: name) this will update the name value to the value we sent
//under the hood what react does is updating the state to a different object
//and as sonn as React detects its a differenct object in memory it will rerender the app UI
//Notice .SetState() works in async way

//Super will call the constructor of Component class

//Constructor will basiclly execute all the code as soon as this object initialized

//So to avoid the issue in LEC 31 we set 2 call back functions :
//1. is the function itself which is updating the state
//2. is another call back function which will run only when set is updated

//In other words we pass into SetState 2 callback fucntions !
//1. is the state update
//2. is the console log to see the state only after its updated

//Mounting is the first time a component get placed on to the DOM
//The first time React renders a component to the page
//It only happens once in a component LIFE
//The ONLY TIME WHEN A COMPONENT MIGHT RE-MOUNT
//IF ITS BEEN UN-MOUNTED - its mean its been completely removed from the DOM

//The moment your component is get placed in the DOM thats the moment u want to make an API request

//-------------------------------------------------------------------------------------

//This run first
//constructor()

//this run second
//This will run again as soon as data fetched[after step 3] which is called Re-render
//render()

//this run third
//componentDidMount()

//-------------------------------------------------------------------------------------
//Notice whenever Setstate been called render method willb e called again
//-------------------------------------------------------------------------------------
//Pure function
// const pureFunc = (a,b) => { return a + b; }
// pureFunc(2,4) this will return 6
//Notice In other words pure function RELAYS ONLY ON the value u sending to it [NO EXTERNAL VARIABLES]
//So the output will not change
//Notice One more thing is that for function to be considered a PURE FUNCTION
//is that inside the function we DONT CREATE SIDE EFFECTS
//which means we dont change a variables values that "lives" outside the function

//-------------------------------------------------------------------------------------

//Unpurefunction
//let c = 3
// const funcA = (a,b) => { return a + b + c; }
// funcA(2,4) this will return 9
//BUT what if C will no longer will be = 3 ?
//c = 5 for example
//this will return us 11
//in other words unpure function is a function that DO RELAY ON OTHER VARIABLES
