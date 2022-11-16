// import React from 'react'
// const File = () => {
//   return (
//     <> 
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloremque autem at laboriosam consequuntur expedita rem magni sapiente numquam id consequatur, nam quod ut deleniti quas officiis adipisci impedit corrupti voluptates tenetur cupiditate velit perferendis! Fuga recusandae iste explicabo odio praesentium ipsam saepe facere? Sequi nihil voluptate ullam sunt distinctio reiciendis sed perferendis facilis voluptas provident?</p>
// <button onclick={()=>window.print()}>click me</button>
//     </>
//   )
// }

// export default File
 
let num = prompt("What is your age?")
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divisible by 2 and 3")
}
else{
  console.log("Your number is not divisible by 2 or 3")
}

