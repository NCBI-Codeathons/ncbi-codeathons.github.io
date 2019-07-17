const show = () => {
  const hiddenUpcomingEvents = [...document.querySelectorAll('.upcoming.hidden')];
  const upcomingToggle = document.querySelector('.upcoming.toggle');

  if (hiddenUpcomingEvents.length <= 4) {
    upcomingToggle.style.display = 'none';
  } else {
    upcomingToggle.style.display = 'block';
  }

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

  // const hiddenPreviousEvents = [...document.querySelectorAll('.previous.hidden')];
  // const previousToggle = document.querySelector('.previous.toggle');
  
  // previousToggle.addEventListener('click',() => { 
  //   hiddenPreviousEvents.forEach((event) => {
  //     if(event.classList.contains("hidden")) {
  //       event.classList.remove("hidden");
  //       previousToggle.textContent="Show Less Previous Events";
  //     } else {
  //       event.classList.add("hidden");
  //       previousToggle.textContent="Show More Previous Events";
  //     } 
  //   })
  // })

  // const hiddenProducts = [...document.querySelectorAll('.product.hidden')];
  // const productToggle = document.querySelector('.product.toggle');
  
  // productToggle.addEventListener('click',() => { 
  //   hiddenProducts.forEach((event) => {
  //     if(event.classList.contains("hidden")) {
  //       event.classList.remove("hidden");
  //       productToggle.textContent="Show Less Products";
  //     } else {
  //       event.classList.add("hidden");
  //       productToggle.textContent="Show More Products";
  //     } 
  //   })
  // })
  

  return
}
show();