import './js/pixabay-api';
import { searchImg } from "./js/pixabay-api";


const form = document.querySelector('.search'); // Вибираємо форму
const input = document.querySelector('.input');
form.addEventListener('submit', handleSubmit); // Додаємо обробник події до форми

function handleSubmit(event) {
    event.preventDefault();
    if (!input.value) {
        alert('alert')
    }

    searchImg(input.value);
    
}