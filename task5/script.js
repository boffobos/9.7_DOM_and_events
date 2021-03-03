document.getElementById('text').addEventListener('keyup', () => {
    let formInput = document.getElementById('text').value;
    let typed = formInput;
    document.getElementById('duplicateField').textContent = typed;   
});

document.getElementById('btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log(document.getElementById('text').value);
    document.getElementById('text').value = '';
    document.getElementById('duplicateField').textContent = '';
});
