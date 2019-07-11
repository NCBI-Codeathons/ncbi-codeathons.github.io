const show = () => {
  const hiddenUpcomingEvents = [...document.querySelectorAll('.upcoming.hidden')];
  const hiddenPreviousEvents = [...document.querySelectorAll('.previous.hidden')];
  const hiddenProducts = [...document.querySelectorAll('.product.hidden')];
  const upcomingToggle = document.querySelector('.upcoming.toggle');
  const previousToggle = document.querySelector('.previous.toggle');
  const productToggle = document.querySelector('.product.toggle');

  upcomingToggle.addEventListener('click',() => { 
    hiddenUpcomingEvents.forEach((event) => {
      if(event.classList.contains("hidden")) {
        event.classList.remove("hidden");
        upcomingToggle.textContent="Show Less Events";
      } else {
        event.classList.add("hidden");
        upcomingToggle.textContent="Show More Events";
      } 
    })
  })
  
  previousToggle.addEventListener('click',() => { 
    hiddenPreviousEvents.forEach((event) => {
      if(event.classList.contains("hidden")) {
        event.classList.remove("hidden");
        previousToggle.textContent="Show Less Previous Events";
      } else {
        event.classList.add("hidden");
        previousToggle.textContent="Show More Previous Events";
      } 
    })
  })
  
  productToggle.addEventListener('click',() => { 
    hiddenProducts.forEach((event) => {
      if(event.classList.contains("hidden")) {
        event.classList.remove("hidden");
        productToggle.textContent="Show Less Products";
      } else {
        event.classList.add("hidden");
        productToggle.textContent="Show More Products";
      } 
    })
  })
  

  return
}
show();