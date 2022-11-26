import React, {useState} from 'react';

import './App.css';
import {NewComponent} from "./NewComponent";
import {Cars} from "./Cars";
import {Button} from "./Button";



function App() {
    const [students, setStudents] = useState([
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ])
    const topCars = [

        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    const Foo1=(subscriber:string)=>{
        console.log(subscriber)
    }

    const Foo2=(subscriber:string)=>{
        console.log(subscriber)
    }
    const Foo3=()=>{
        console.log('i am stupid button')
    }
    return (
        <div className="App">
            <Cars topCars={topCars}/>
            <NewComponent students={students}/>
            <Button title={'Cartoons'} callback={()=>Foo1('yo')}/>
            <Button title={"Tiji"} callback={()=>Foo2('hi')}/>
            <Button title={"Dump"} callback={Foo3}/>
        </div>
    );
}

export default App;
