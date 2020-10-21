const time  = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focuss = document.getElementById('focus');
const showDayNight = true;

    function showTime() {
        let today =new Date();
        let hour = today.getHours();
        let min = today.getMinutes();
        let sec = today.getSeconds();

            const dayNight = hour >= 18 ? 'Night' : 'Day';

            hour = hour % 24 || 24;

            time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showDayNight ? dayNight : ''}`;

            setTimeout (showTime, 1000);
    }

    function addZero(n) {
        return (parseInt(n, 10) < 10 ? '0':'') + n;
    }

    function setBackgroundAndGreeting () {
        const hour  = new Date ().getHours();
    
        if (hour < 12){
            document.body.style.backgroundImage = "url('assets/morning.jpg')";
            greeting.textContent = 'Good Morning';
        } else if (hour < 18){
            document.body.style.backgroundImage = "url('assets/afternoon.jpg')";
            greeting.textContent = 'Good Afternoon';
        } else {
            document.body.style.backgroundImage = "url('assets/night.jpg')";
            greeting.textContent = 'Good Evening';
            document.body.style.color = '#ffffff';
        }
    }

    function getName(){
        if(!localStorage.getItem('name')){
            name.textContent = '[Enter Name]';
        } else{
            name.textContent = localStorage.getItem('name');
        }
    }

    function setName(e){
        if(e.type === 'keypress' && e.keyCode === 13) {
                localStorage.setItem('name', e.target.innerText);
                name.blur();
            }
        } 
    
    function getFocus(){
        if(!localStorage.getItem('focus')){
           focuss.textContent = '[Enter Focus]';
        } else{
            focuss.textContent = localStorage.getItem('focus');
        }
    }

    function setFocus(e){
        if(e.type === 'keypress' && e.keyCode === 13) {
                localStorage.setItem('focus', e.target.innerText);
                focuss.blur();
            }
        }
   
    name.addEventListener('keypress', setName);
    name.addEventListener('blur', setName);
    focuss.addEventListener('keypress', setFocus);
    focuss.addEventListener('blur', setFocus);

    showTime();
    setBackgroundAndGreeting();
    getName();
    getFocus();
