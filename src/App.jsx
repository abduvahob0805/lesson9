import './App.css'
import Usercard from './components/UserCard/Usercard'
import Info from './components/InfoCard/info'

function App() {
  return (
    <div>
       <h1 className='userh1'>User Card</h1>
      <div className='ota container'>
        <Usercard 
        props={{
          ism: "Emily Johnson",
          lavozim: "product Manager",
          kasbi: "product development"
        }}/>
        <Usercard 
        props={{
          ism: "Mirabbos Sobitjonov",
          lavozim: "Senior",
          kasbi: "developer"
        }}/>
        <Usercard 
        props={{
          ism: "Kamron Otabekov",
          lavozim: "Junior",
          kasbi: "Mini Developer"
        }}/>
        <Usercard 
        props={{
          ism: "Arjun Patel",
          lavozim: "Software Engineer",
          kasbi: "Technology"
          
        }}/>
        <Usercard 
        props={{
          ism: "Arjun Patel",
          lavozim: "Software Engineer",
          kasbi: "Technology",
          bg: "#FFFFFF"
        }}/>
        <Usercard 
        props={{
          ism: "Arjun Patel",
          lavozim: "Software Engineer",
          kasbi: "Technology",
          bg: "#FFFFFF"
        }}/>
        <Usercard 
        props={{
          ism: "Arjun Patel",
          lavozim: "Software Engineer",
          kasbi: "Technology",
          bg: "#FFFFFF"
        }}/>
        <Usercard 
        props={{
          ism: "Arjun Patel",
          lavozim: "Software Engineer",
          kasbi: "Technology",
          bg: "#FFFFFF"
        }}/>
        
      </div>
      <h1 className='infoh1'>User Card</h1>
      <div className="ota2 container">
        <Info 
        props={{
           nomi: "Unraveling the Mysteries of the Ocean",
           malumot: "From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration."
        }}/>
        <Info 
        props={{
           nomi: "Discovering the World of Mountains",
           malumot: "In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration. "
        }}/>
        <Info 
        props={{
           nomi: "Discovering the World of Mountains",
           malumot: "In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration. "
        }}/>
        <Info 
        props={{
           nomi: "Discovering the World of Mountains",
           malumot: "In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration. "
        }}/>
        <Info 
        props={{
           nomi: "Exploring the Secrets of the Forest",
           malumot: "Step into the mesmerizing realm of the forest, a sanctuary of life teeming with a symphony of sounds, scents, and vibrant green hues."
        }}/>
      </div>
    </div>
  )
}

export default App
