const form = document.getElementById("expense-form")
   
form.addEventListener("submit", (event)=>{
  event.preventDefault();

   const item1 = document.getElementById("item-name").value;
   const item2 = document.getElementById("item-price").value;

   const list = document.createElement("li");

    list.textContent =`${item1} -$ ${item2}`;
       
    document.getElementById("expense-list").appendChild(list);

    list.classList.add("rene");
  
      // Clear input fields
      document.getElementById("item-name").value = "";
      document.getElementById("item-price").value = "";

      const ali = document.querySelectorAll(".rene");
    // console.log(ali)
    ali.forEach( e=>{
      // const slice = e.innerHTML.slice(0,1)
      const total = document.createElement("p") 
      total.innerText =`total: ${[e.innerText]}`

      const energy = document.getElementById("expense-list-wrapper").appendChild(total);

    } )
});
 

