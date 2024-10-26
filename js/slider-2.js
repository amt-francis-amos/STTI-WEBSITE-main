const headings = [
    "We Offer Quality Education",
    "Achieve Your Dreams with Us",
    "Unlock a Brighter Future",
    "Empower Yourself Through Learning"
  ];
  
  const quotes = [
    "Education is the most powerful weapon which you can use to change the world.",
    "Learning is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    "Success is no accident,It is hard work, perseverance, and learning.",
    "The beautiful thing about learning is that no one can take it away from you."
  ];
  
  let currentIndex = 0;
  const headingElement = document.getElementById('dynamic-heading');
  const quoteElement = document.getElementById('dynamic-quote');
  
  function updateHeroContent() {
    headingElement.textContent = headings[currentIndex];
    quoteElement.innerHTML = quotes[currentIndex].split('.').join('.<br />');
  
    currentIndex = (currentIndex + 1) % headings.length; 
  }
  
  setInterval(updateHeroContent, 5000); 
  