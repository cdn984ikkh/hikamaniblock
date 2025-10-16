// ==========================================================
// ⚠️ 以下のYOUR_WEBHOOK_URLを、Discordで取得したURLに置き換えてください
// ==========================================================
const WEBHOOK_URL = "https://discord.com/api/webhooks/1428234881561002045/32y44N7pa_9xGU1NMPV-73lnIzKPRrNyxAANMwGjbRp176wfKkYwnWHbSD1CE4pnxIWM";
// ==========================================================


// --- 1. Lボタン (L-Button) でモーダルを表示する機能 -------------------------
document.addEventListener('DOMContentLoaded', () => {
    const lButton = document.getElementById('lButton');
    const modal = document.getElementById('cModal');
    const closeButton = document.querySelector('.close-button');

    // Lボタンをクリックしたらモーダルを表示
    lButton.onclick = function() {
        modal.style.display = "block";
    }

    // ×ボタンをクリックしたらモーダルを非表示
    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    // モーダルの外側をクリックしたら非表示
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // --- 2. Discordに値を送信する機能 ------------------------------------
    const sendButton = document.getElementById('sendToDiscordButton');
    const inputA = document.getElementById('inputA');
    const inputB = document.getElementById('inputB');

    sendButton.onclick = function() {
        const valueA = inputA.value;
        const valueB = inputB.value;

        // 送信するメッセージの整形
        const messageContent = `**入力された値の通知**\n\n**A:** ${valueA}\n**B:** ${valueB}`;
        
        sendToDiscord(messageContent);
    }
});


/**
 * Discord Webhookを使用してメッセージを送信する関数
 * @param {string} content - 送信するメッセージ内容
 */
async function sendToDiscord(content) {
    if (WEBHOOK_URL === "https://discord.com/api/webhooks/1428234881561002045/32y44N7pa_9xGU1NMPV-73lnIzKPRrNyxAANMwGjbRp176wfKkYwnWHbSD1CE4pnxIWM") {
        alert("⚠️ Webhook URLを設定してください！");
        console.error("Webhook URLが設定されていません。");
        return;
    }
    
    const data = {
        // DiscordのMarkdown記法を使用して、太字や改行を反映
        "content": content, 
        "username": "Webサイトからの入力",
    };

    try {
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert("✅ Discordにメッセージを送信しました！");
        } else {
            alert(`❌ Discordへの送信に失敗しました。ステータスコード: ${response.status}`);
            console.error("Discord Webhookエラー:", response.status, await response.text());
        }
    } catch (error) {
        alert("❌ 通信エラーが発生しました。");
        console.error("Fetchエラー:", error);
    }
}