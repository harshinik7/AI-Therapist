



document.addEventListener('DOMContentLoaded', function() {
    const messages = document.getElementById('messages');
    const userInput = document.getElementById('user-input');
    const countdown = document.getElementById('countdown');
    const timerSpan = document.getElementById('timer');
    let timerInterval;

    userInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const userMessage = userInput.value;
            const aiResponse = generateAIResponse(userMessage);
            addMessage(userMessage, 'user');
            addMessage(aiResponse, 'ai');
            userInput.value = '';

            if (userMessage.includes('angry')) {
                startCountdown();
            }
        }
    });

    function startCountdown() {
        console.log('Starting countdown...');
        countdown.style.display = 'block';
        let timeLeft = 10;
    
        timerInterval = setInterval(function() {
            console.log('Time left:', timeLeft);
            if (timeLeft > 0) {
                timeLeft--;
                timerSpan.textContent = timeLeft;
            } else {
                clearInterval(timerInterval);
                countdown.style.display = 'none';
            }
        }, 1000);
    }
    

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.innerHTML = text;
        messages.appendChild(messageDiv);
        messages.scrollTop = messages.scrollHeight;
    }

    // Rest of the generateAIResponse function remains the same
    function generateAIResponse(userMessage) {
        let aiResponse = '';

        if (userMessage.includes('sad')) {
            aiResponse = 'I\'m here to cheer you up! How about lifting your spirits with some options:';
            aiResponse += '<br>1. Listen to some uplifting music. Here are a couple of songs:';
            aiResponse += '<br>   - "Happy" by Pharrell Williams - <a href="https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH?si=19eafaf876244b2c">Listen</a>';
            aiResponse += '<br>   - "Don\'t Worry, Be Happy" by Bobby McFerrin - <a href="https://open.spotify.com/track/5YbgcwHjQhdT1BYQ4rxWlD?si=46baffc95fc444ef">Listen</a>';
            aiResponse += '<br>2. Take a break and enjoy some funny cat pictures. Check these out:';
            aiResponse += '<br>   - <a href="https://i.pinimg.com/564x/b5/88/ea/b588ea3208b8660f15ea112ef4846792.jpg">Cat Picture 1</a>';
            aiResponse += '<br>   - <a href="https://i.pinimg.com/564x/f2/af/6a/f2af6a2d69700f21c71b2e8e983313ec.jpg">Cat Picture 2</a>';
        } else if (userMessage.includes('angry')) {
            aiResponse = 'Take a deep breath and relax. You can count to ten to cool down.';
            startCountdown()
        } else if (userMessage.includes('anxious')) {
            aiResponse = 'Try some deep breathing exercises to calm your anxiety. Inhale deeply for 4 seconds, hold for 4 seconds, and exhale slowly for 6 seconds.';
        } else if (userMessage.includes('suicidal')) {
            aiResponse = 'I\'m really sorry to hear that. Please reach out to a helpline immediately.';
            aiResponse += '<br><a href="tel:02227546669">Indian Suicide Helpline</a>';
        } else if (userMessage.includes('song')) {
            aiResponse = 'Sure! Here are a few song suggestions:';
            aiResponse += '<br><a href="https://open.spotify.com/track/68HocO7fx9z0MgDU0ZPHro?si=a7e6b80e62274bb7">Every Summertime</a>';
            aiResponse += '<br><a href="https://open.spotify.com/track/3QyoC6OvQUmpQwQZ18iaTs?si=c7a53d2e65e2444f">Overdrive</a>';
            aiResponse += '<br><a href="https://open.spotify.com/track/1BxfuPKGuaTgP7aM0Bbdwr?si=19a860e50e914b3c">Cruel Summer</a>';
        } else if (userMessage.includes('funny')) {
            aiResponse = 'Feeling down? How about some <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjmf1CaiwMUr3lapUNCf3vZa04P3amEAtTRKiElnXv06YKSyrg">funny cat pictures</a> to brighten your day!';
        } else {
            aiResponse = 'I\'m here to chat and help.';
        }

        return aiResponse;
    }
});
