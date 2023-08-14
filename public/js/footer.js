const createFooter=()=>{

let footer = document.querySelector('footer');


footer.innerHTML = 

`<div class="footer-content">
<img src="img/light-logo.png" alt="" class="logo">
<div class="footer-ul-container">
    <ul class="category">
        <li class="category-title">homme</li>
        <li><a href="" class="footer-link">t-shirt</a></li>
        <li><a href="" class="footer-link">sweatshirts</a></li>
        <li><a href="" class="footer-link">jeans</a></li>
        <li><a href="" class="footer-link">shoes</a></li>
    </ul>
    <ul class="category">
        <li class="category-title">femme</li>
        <li><a href="" class="footer-link">t-shirt</a></li>
        <li><a href="" class="footer-link">sweatshirts</a></li>
        <li><a href="" class="footer-link">jeans</a></li>
        <li><a href="" class="footer-link">shoes</a></li>
    </ul>
</div>

</div>
<p class="footer-title">Conditions général | Aide & assistance | Éco-responsable | Qui sommes nous ?</p>
    </div>
<p class="footer-credit">Copyright © 2023. Tout les droits sont reservé</p>`;




}
createFooter();

