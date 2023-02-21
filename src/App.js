import React, {useState, useEffect,} from 'react';
//import logo from './logo.svg';
import './App.css';



function App() {
  const productName = [
    {name: "Lotion", price:"$250"},
    {name: "LIpstick", price:"$100"},
    {name: "Maskara", price:"$150"}
  ];

  const friendName = [
    {name: "Sagorika", age:"33"},
    {name: "Sultana", age: "35"},
    {name: "Mahbuba", age: "38"} 
  ];

  const flowerName = ['Rose','Sunflower','Marigold','Water lily','Lotus'];
  
  const foodName = [
    {name:'Sandwich', price:'$100'},
    {name:'Tuna Stick', price:'$150'},
    {name:'Shrimp', price:'$200'},
    {name:'Salad', price:'$50'},
    {name:'Rice', price:'$80'}
  ];

  const fruitName = [
    {name:'Papaya', price:'$100'},
    {name:'Pomegranate', price:'$150'},
    {name:'Raspberry', price:'$200'},
    {name:'Strawberry', price:'$50'},
    {name:'Watermelon', price:'$80'}
  ];
  return(
    <div className='App'>
      <header className='App-header'>
        <h1>I am a react person</h1>
        <Counter></Counter>
        <Users></Users>

        <Person name="Rumi Khan" profession="Business" ></Person>
        <Person name="Momy Khan" profession="Web Design" ></Person>
        <Person name="Sumi Khan" profession="Teaching"></Person>
        <Person name="Parish Khan" profession="Programming"></Person>

        <Product name={productName[0].name} price={productName[0].price}></Product>
        <Product name={productName[1].name} price={productName[1].price}></Product>
        <Product name={productName[2].name} price={productName[2].price}></Product>
        
        <Friends friend={friendName[0]}></Friends>
        <Friends friend={friendName[1]}></Friends>
        <Friends friend={friendName[2]}></Friends>

        <ul>
          {
            flowerName.map(flower=><li>{flower}</li>)
          }
        </ul>

        <ul>
          {
            foodName.map(food => <li>{food.name}</li>)
          }
        </ul>

        {
          fruitName.map(fruit => <Fruits fruit={fruit}></Fruits>)
        }
      </header>
    </div>
  )
}
/* *******************App Component End********************** */
function Counter() {
  const styleButton = {
    padding:'8px',
    fontSize:'20px',
    border:'1px solid gray',
    borderRadius:'5px',
    margin:'10px'
  }
  const [count, setCount] = useState(5);
  function increase() {
    const newCount = (count+1);
    setCount(newCount);
  }
  function dicrease() {
    const newCount = (count-1);
    setCount(newCount);
  }
  return(
    <div>
      <h2>Count:{count}</h2>
      <button style={styleButton} onClick={increase}>Increase</button>
      <button style={styleButton} onClick={dicrease}>Dicrease</button>
    </div>
  )
}
/* *******************Counter Component End********************** */
function Users() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => setUsers(json));
  }, [])
  
  return(
    <div>
      <h3>Users:{users.length}</h3>
      <ul>
        {
          users.map((object)=><li>{object.username}</li>)
        }
      </ul>
    </div>
  )
}
/* *******************Users Component End********************** */
function Person(props) {
  const personStyle={
    border: "2px solid red",
    
    margin:"10px",
    width: "400px",
    marginTop:'50px'
  }
  return(
    <div style={personStyle}>
      <h2>Name: {props.name}</h2>
      <h3>profession: {props.profession} </h3>
    </div>
  )
}
/* *******************Person Component End********************** */
function Product(props){
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'180px',
    paddingBottom:'60px',
    width:'300px',
    //float:'left',
    margin:'20px'
  }
  
  return(
    <div style={productStyle}>
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
      <button>Buy now</button>
    </div>
  )
}
/* *******************Product Component End********************** */
function Friends(props) {
  const friendstyle = {
    border:'1px solid red',
    borderRadius:'5px',
    backgroundColor:'red',
    width:'200px',
    height:'150px',
    marginTop:'20px'
  }
  /*const {name,age}= props.friend;*/
  return(
    <div style={friendstyle}>
      <h2>{props.friend.name}</h2>
      <h3>{props.friend.age}</h3>
    </div>
  )
}
/* *******************Friend Component End********************** */
function Fruits(props){
  const fruitStyle = {
    border:'5px dotted green',
    borderRadius:'8px',
    width:'250px',
    marginTop:'10px',
    marginBottom:'20px'
  };
  return(
    <div style={fruitStyle}>
      <h2>{props.fruit.name}</h2>
      <h3>{props. fruit.price}</h3>
    </div>
  )
}
/* *******************Fruits Component End********************** */
export default App;
