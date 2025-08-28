// For toutch heart increament one by one 
document.querySelectorAll('.heart-touch').forEach(function(event){
    event.addEventListener('click',function (){
    let heartTouchOld=parseInt(document.getElementById('heart-touch-old').innerText);
    heartTouchOld++;
    document.getElementById('heart-touch-old').innerText = heartTouchOld;
    });
});

// copy number when press copy button on the card 

document.querySelectorAll('.copy-btn').forEach(function(btn){
    btn.addEventListener('click',function(){
    let card = btn.closest('.left-main-grid');
    let number = card.querySelector('.card-header-2').innerText;
    navigator.clipboard.writeText(number);
    });
});
document.querySelectorAll('.copy-btn').forEach(function(event){
    event.addEventListener('click',function(){
    let copyOld=parseInt(document.getElementById('copy-btn-navbar').innerText);
    copyOld++;
    let callTo=event.closest('.left-main-grid');
    let number = callTo.querySelector('.card-header-2').innerText;
    alert(`Number copied:${number}`)
    document.getElementById('copy-btn-navbar').innerText =copyOld;
    });
});

// calling function starts hare

document.querySelectorAll('.card-call-btn').forEach(function(btn){
    btn.addEventListener('click',function(){
        let starAvailable=parseInt(document.getElementById('star-available').innerText);
        if(starAvailable>=20){
            let callTo=btn.closest('.left-main-grid');
            let title=callTo.querySelector('.card-header-title').innerText;
            let number = callTo.querySelector('.card-header-2').innerText;
            let newStar=starAvailable-20;
            document.getElementById('star-available').innerText=newStar;
            alert(`📞Calling ${title}:${number},,,`);

            let now = new Date();
            let time= now.toLocaleTimeString();
            let historyDiv = document.createElement("div");
            historyDiv.classList.add("history-items");
            historyDiv.innerHTML=`
                <div class="history-items-divs">
                    <p>${title}</p>
                    <h4>${number}</h4>
                </div>
                <div class="history-items-divs">
                    <h3>${time}</h3>
                </div>
            `;
            document.getElementById('history-items').appendChild(historyDiv);
        }
        else{
            alert("Insufficient coins. You need at least 20 coins to call.")
        }
    });     
});
document.getElementById("clear-history").addEventListener("click", function(){
  const historyContainer = document.getElementById("history-items");
  historyContainer.innerHTML = "";
});



