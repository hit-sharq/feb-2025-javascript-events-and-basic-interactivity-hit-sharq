const changeTextButton = document.getElementById('changeTextButton');
const textElement = document.getElementById('text');

changeTextButton.addEventListener('click', () => {
    textElement.textContent = 'Text and style changed!';
    textElement.style.color = 'red';
    textElement.style.fontSize = '20px';
});

const toggleElementButton = document.getElementById('toggleElementButton');
const newElement = document.getElementById('newElement');

toggleElementButton.addEventListener('click', () => {
    newElement.style.display = newElement.style.display === 'none' ? 'block' : 'none';
});

const addElementButton = document.getElementById('addElementButton');
const section = document.querySelector('section');

addElementButton.addEventListener('click', () => {
    const dynamicElement = document.createElement('p');
    dynamicElement.textContent = 'This is a newly added element!';
    dynamicElement.id = 'dynamicElement';
    section.appendChild(dynamicElement);
});

const removeElementButton = document.getElementById('removeElementButton');

removeElementButton.addEventListener('click', () => {
    const elementsToRemove = [
        document.getElementById('newElement'),
        document.getElementById('dynamicElement')
    ];
    
    elementsToRemove.forEach(element => {
        if (element) element.remove();
    });
});

const form = document.getElementById('myForm');
const inputField = document.getElementById('inputField');

form.addEventListener('submit', (event) => {
    if (inputField.value.trim() === '') {
        alert('Please enter something in the input field!');
        event.preventDefault();
    } else {
        alert('Form submitted successfully!');
    }
});
