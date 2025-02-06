import List from './assets/List'

function App() {
  
  const fruits = [{id:1, name: "apple",calories:95},
    {id:2, name: "orange",calories:45},
    {id:3, name: "banana",calories:15},
    {id:4, name: "coconut",calories:295},
    {id:5, name: "pineapple",calories:35}];

    const Vegetables = [{id:6, name: "potatoes",calories:55},
                        {id:7, name: "carrot",calories:35},
                        {id:8, name: "concombre",calories:51},
                        {id:9, name: "celery",calories:32},
                        {id:10, name: "radit",calories:5}];

  return(
 

    <>
        <List items={fruits} category="fruits"/>
        <List items={Vegetables} category="vegetables"/>
    </>
  );
}

export default App