function attachEvents() {
    const submitBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const textarea = document.getElementById('messages');
    const inputName = document.querySelector('[name=author]');
    const inputContent = document.querySelector('[name=content]');
    
    submitBtn.addEventListener('click', addMessage);
    refreshBtn.addEventListener('click', displayMessages)

    async function addMessage() {
        const author = inputName.value;
        const content = inputContent.value;
        const response = await fetch('http://localhost:3030/jsonstore/messenger',{
            method: 'post',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({author, content})
        });
        const data = await response.json();
        if (!response.ok) {
            return;
        }
        inputContent.value = '';
        inputName.value = '';
    }

    async function displayMessages() {
        const response = await fetch('http://localhost:3030/jsonstore/messenger');
        const data = await response.json();
        const messages = Object.values(data).map(msg => `${msg.author}: ${msg.content}`);
        textarea.textContent = messages.join('\n');
    }

}

attachEvents();