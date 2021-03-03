let linkToChange = document.body.querySelector('a');
linkToChange.addEventListener('click', function(event) {
        event.preventDefault();
        let input = prompt('Введите текст, на который изменится текст ссылки');
        if(input !== '' && input !== null){
        this.textContent = input;
        } else{
            this.textContent = this.textContent;
        }
    });