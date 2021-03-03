document.getElementById("consoleLog").addEventListener("click", function(){
    alert('console.log() позволяет выводит сообщения в консоль. Для отображения примера нажмите, на строку с примером')
});
document.getElementById("alert").addEventListener("click", function(){
    alert('alert() позволяет выводит сообщения во всплывающее окно. Для отображения примера нажмите, на строку с примером')
});
document.getElementById("prompt").addEventListener("click", function(){
    alert('prompt() позволяет выводить сообщение, с запросом на ввод от пользователя. Для отображения примера, нажмите на строку с примером')
});



let elementSelected = document.getElementsByTagName('p');

//Добавляем отклик на клик мыши на строке с описанием функции
elementSelected[0].nextElementSibling.addEventListener('click', () => {console.log('Привет, Мир!')});
elementSelected[1].nextElementSibling.addEventListener('click', () => {alert('Привет, Медвед!')});
elementSelected[2].nextElementSibling.addEventListener('click', () => {prompt('Введите вводные данные в окно ввода')});

console.log(elementSelected[0].getAttribute('id'));

//функция по изменению текста в документе
function changeText() {
    for (let i = 0; i < elementSelected.length; i++)
    {   
        let pId = elementSelected[i].getAttribute('id');
        if (pId === 'consoleLog')
        {
             elementSelected[i].nextElementSibling.textContent = 'Пример использования команды console.log("Текст сообщения");';
        }
         else if(pId === 'alert')
         {
            elementSelected[i].nextElementSibling.textContent = 'Пример использования команды alert("Текст сообщения");';
         }
         else if(pId === 'prompt')
         {
            elementSelected[i].nextElementSibling.textContent = 'Пример использования команды prompt("Текст сообщения");';
         }
    }
}
changeText();