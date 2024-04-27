// File name: PascalCasing

// class= => className=

// import { Fragment } from "react/jsx-runtime";

// function ListGroup() {
//   return (

//     <Fragment>
//         <h1>List</h1>
//         <ul className="list-group">
//           <li className="list-group-item">Cras justo odio</li>
//           <li className="list-group-item">Dapibus ac facilisis in</li>
//           <li className="list-group-item">Morbi leo risus</li>
//           <li className="list-group-item">Porta ac consectetur ac</li>
//           <li className="list-group-item">Vestibulum at eros</li>
//         </ul>
//     </Fragment>
//   );
// }

// function ListGroup() {
//     let items = [
//         'Madrid',
//         'Alicante',
//         'Burgos',
//         'Málaga',
//         'Ávila'
//     ];

//     // items = [];

//     // if (items.length === 0){
//     //     return
//     //     <>
//     //         <h1>List</h1>
//     //         <p>No item found</p>
//     //     </>
//     // }

//     return (
//     <>
//         <h1>List</h1>
//         { items.length == 0 ? <p>No items found</p> : null}
//         <ul className="list-group">
//         {items.map(item => <li key={item}>{ item }</li>)}
//         </ul>
//     </>
//   );
// }



// import { MouseEvent } from "react";

// function ListGroup() {
//   let items = ["Madrid", "Alicante", "Burgos", "Málaga", "Ávila"];

//   //Event handler
//   const handleClick = (event: MouseEvent) => console.log(event);

//   return (
//     <>
//       <h1>List</h1>
//       {items.length === 0 ? <p>No item found</p> : null}
//       {items.length === 0 && <p>No item found</p>}
//       <ul className="list-group">
//         {items.map((item, index) => (
//           <li
//             className="list-group-item"
//             key={ item }
//             // onClick={() => console.log("Clicked", item, index)}
//             // onClick={(event) => console.log(event)}
//             onClick = { handleClick }
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }



import { useState } from "react";

function ListGroup() {
  let items = ["Madrid", "Alicante", "Burgos", "Málaga", "Ávila"];
  let selectedIndex = 0;
  // Hook
  useState()

  //Event handler

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className= { selectedIndex === index ? 'list-group-item active' : 'list-group-item' }
            key={ item }
            // onClick={() => console.log("Clicked", item, index)}
            // onClick={(event) => console.log(event)}
            onClick = {() =>  { selectedIndex = index; }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
