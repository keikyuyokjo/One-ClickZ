document.getElementById('scamButton').addEventListener('click', function() {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = '警告: あなたは詐欺に遭遇しました！個人情報を入力しないでください。';
    messageDiv.classList.remove('hidden');
});
