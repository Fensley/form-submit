const form = document.getElementById("expense-form")
   
form.addEventListener("submit", (event)=>{
  event.preventDefault();

   const item1 = document.getElementById("item-name").value;
   const item2 = document.getElementById("item-price").value;

   const list = document.createElement("li");

    list.textContent =`${item1} -$ ${item2}`;

    const orderL= document.getElementById("expense-list").appendChild(list);

      // Clear input fields
      document.getElementById("item-name").value = "";
      document.getElementById("item-price").value = "";
} );
