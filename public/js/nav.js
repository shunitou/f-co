const createNav =() =>
{
    let nav = document.querySelector('.navbar');

    nav.innerHTML= `
    <div class="nav"><a href="index.html">
    <img class="brand-logo" src="img/dark-logo.png" href="index.html"></a>
    <div class="nav-items">
        <div class="search">
           <input type="text" class="search-box" placeholder="marque, produit">
           <button type="button" class="search-btn">Search</button>
       </div>
       <a href="#"><img src="img/notif.png"></a>
       <a href="#"><img src="img/blog.png" ></a>  
   <a href="login.html"><img src="img/user.png" alt="userimage"></a>     
   <a href="#"><img src="img/cart.png" alt="cardimage"></a>    

  
</div>

</div>

    `;
}

createNav();