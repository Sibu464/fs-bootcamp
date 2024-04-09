function talk(){
    var know={
        "Hello":"Hey there😅",
        "Who are you?":"My name is Jarvis",
        "What can I do for you?":"I am here to help you. Please tell me",
        "Goodbye":"See you later",
        "How old are you?":"I 342 years",
        "Your followers?":"I have 1000 followers on Twitter",
        "Tell a joke!":"Why did the scarecrow win an award? Because he was outstanding in his field.",
        "Which programming language do you use?":"I mainly use JavaScript, but I also work with Python and Java",

        "What's your favorite color?":"My favorite color is blue",
        "Okay":"Alright then",
        "Bye":"Get lost",
    }
    var user= document.getElementById("userBox").value;
    document.getElementById('chatLog').innerHTML=user+"<br>";
    if(user in know){
        document.getElementById('chatLog').innerHTML=know[user]+"<br>"
    }else{
        document.getElementById("chatLog").innerHTML="Nonsense<br>"
    }
}