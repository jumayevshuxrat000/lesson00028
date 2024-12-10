const addUserBtn = document.querySelector('.add-user-btn');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close');
const userForm = document.querySelector('.user-form');
const cardContainer = document.querySelector('.card-container');

addUserBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

userForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('.name').value;
  const work = document.querySelector('.work').value;
  const university = document.querySelector('.university').value;
  const image = document.querySelector('.image').value;
  const newCard = document.createElement('div');
  newCard.classList.add('card');
  newCard.innerHTML = `
    <img src="${image}" alt="${name}" class="profile-pic">
    <h3>${name}</h3>
    <p>${work}</p>
    <p>${university}</p>
    <div class="social-icons">
      <i class="fa fa-instagram"></i>
      <i class="fa fa-globe"></i>
      <i class="fa fa-facebook"></i>
    </div>
    <button>Contact</button>
  `;

  cardContainer.appendChild(newCard);
  userForm.reset();
  modal.style.display = 'none';
});
