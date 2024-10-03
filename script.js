//  buutton access

let btn = document.querySelector('#btn');
let content = document.querySelector('#content');
let voice = document.querySelector('#voice');

//for speak

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate =1
    text_speak.pitch=1
    text_speak.volume=1
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day= new Date();
    let hours = day.getHours();
    if (hours>=0 && hours <=12){
        speak("Good Morning sir,I'm your virtual assistance created by Nitin Patel.")
    }
    else if(hours>=12 && hours < 16){
        speak("Good Afternoon sir,I'm your virtual assistance created by Nitin Patel.")
    }
    else{
        speak("Good Evening sir,I'm your virtual assistance created by Nitin Patel.")
    }
}
window.addEventListener('load', ()=>{
  wishMe()
})

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition = new speechRecognition()
recognition.onresult = (event)=>{
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase());
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display ="none"
    voice.style.display ="block"
})
 
function takeCommand(message){
    btn.style.display ="flex"
    voice.style.display ="none"
    if (message.includes("hello")||message.includes("hey")){
        speak("hello sir, how can i help you..?")
    }
    
    else if(message.includes("who are you")){
        speak("hello sir,i'm your virtual assistance created by nitin patel. how can i help you..?")

    }
    else if(message.includes("how are you")){
        speak("i am fine, what about you..?")

    }
    else if(message.includes("motherchod")||message.includes("bhosdhi ke")||message.includes("bahanchod")){
        speak("please use professional words , otherwise i'm not obey your any order")

    }
    else if (message.includes("who is prakriti")){
        speak("prakriti is your life partner be remember this thing")
    }

    else if (message.includes("who is ankit")){
        speak("ankit is your best freind")
    }
    else if (message.includes("who is reema")){
        speak("reema is your sister")
    }
    else if (message.includes("who is goldi")){
        speak("goldi is your sister")
    }
    else if (message.includes("who is bandana")){
        speak("bandana is your sister")
    }
    else if (message.includes("who is gajala")){
        speak("gajala is your sister")
    }
    else if (message.includes("who is pawan")){
        speak("pawan is one of the brother")
    }
    else if (message.includes("who is nivi")){
        speak("nivi is the smallest girl in the universe")
    }
    else if (message.includes("what is name of your father")){
        speak("my father name is amar singh kannaujia.")
    }
    else if (message.includes("what is name of your mother")){
        speak("my mother name is dhandevi")
    }
    
    else if (message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com/","_blank")
    }
    else if (message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com/","_blank")
    }
    else if (message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com/","_blank")
    }
    else if (message.includes("open linkedin")){
        speak("opening linkedin")
        window.open("https://www.linkedin.com/","_blank")
    }
    else if (message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator:// ")
    }
    else if (message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.open("whatsapp:// ")
    }
    else if (message.includes("open snapchat")){
        speak("opening snapchat")
        window.open("snapchat:// ")
    }
    else if (message.includes("open ola")){
        speak("opening ola")
        window.open("ola:// ")
    }
    else if (message.includes("open rapido")){
        speak("opening rapido")
        window.open("rapido:// ")
    }
    else if (message.includes("open hotstar")){
        speak("opening hotstar")
        window.open("hotstar:// ")
    }
    else if (message.includes("open payzapp")){
        speak("opening payzapp")
        window.open("payzapp:// ")
    }
    else if (message.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if (message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    
    else if (message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.com","_blank")
    }
    else{
        speak(`this is what i found on internet ${message}`)
        window.open(`https://www.google.com/search?q=${message}`)
    }
}