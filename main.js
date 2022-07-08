const TelegramBot = require('node-telegram-bot-api')
require('dotenv').config()
const TOKEN=process.env.TOKEN 
const bot = new TelegramBot(TOKEN, {polling: true});

let user={}

let state=0
let state2=0 
let state3=0 
let state4=0 
let state5=0 

bot.on('message',(message)=>{
    
    const userId=870527054
    const chatId=message.chat.id 
    const name=message.from.first_name
    const username=message.from.username
    let keyboards={
        resize_keyboard:true,
        keyboard:[
            ['Sherik Kerak','Ish joyi kerak'],
            ['Xodim kerak','Ustoz kerak'],
            ['Shogird kerak']
        ]

    }
    
    
    if(message.text=='/start'){
    
    
        bot.sendMessage(chatId,`<b> Assalomu alaykum ${name}\nUstozShogird kanalining rasmiy botiga xush kelibsiz</b>!

/help yordam buyrugi orqali nimalarga qodir ekanligimni  bilib \noling!
        `,{
            parse_mode:'HTML',
            reply_markup:keyboards
        })
    }
   else if(message.text=='/help'){

        bot.sendMessage(chatId,`UzGeeks faollari tomonidan tuzilgan Ustoz-Shogird kanali. 

  Bu yerda Programmalash bo'yicha
#Ustoz,  
#Shogird,
#oquvKursi,
#Sherik,  
#Xodim va 
#IshJoyi 
topishingiz mumkin. 
        
E'lon berish: @UstozShogirdBot
        
Admin @UstozShogirdAdminBot`)
        
    }
    else if(message.text=='Sherik Kerak'){
        bot.sendMessage(chatId,`<b>Sherik topish uchun ariza berish</b>

Hozir sizga bir nechta savollar beriladi. 
Har biriga javob bering. 
Oxirida agar hammasi togri bolsa, HA tugmasini bosing va arizangiz Adminga yuboriladi.`,{parse_mode:'HTML'})
       setTimeout(()=>{
        bot.sendMessage(chatId,'<b> Ism familiyangizni kiriting.</b>',{
            parse_mode:"HTML"
        })
       })
        state=1 
    }
   else if(message.text=='Ish joyi kerak'){
    const chatId=message.chat.id 

    bot.sendMessage(chatId, `<b>Ish joyi topish uchun ariza berish </b>

 Hozir sizga birnecha savollar beriladi. 
 Har biriga javob bering. 
 Oxirida agar hammasi to'g'ri bo'lsa, HA tugmasini bosing va arizangiz Adminga yuboriladi.`,{parse_mode:'HTML'})
   setTimeout(()=>{
    bot.sendMessage(chatId,"<b> Ism, familiyangizni kiriting? </b>",{
        parse_mode:'HTML'
     },1000)
   })
 state2=1 
        
    }
    else if(message.text=='Xodim kerak'){
        bot.sendMessage(chatId, `<b>Xodim topish uchun ariza berish</b>

Hozir sizga birnecha savollar beriladi. 
Har biriga javob bering. 
Oxirida agar hammasi togri bolsa, HA tugmasini bosing va arizangiz Adminga yuboriladi.`,{parse_mode:'HTML'})
      setTimeout(()=>{
       bot.sendMessage(chatId, `<b>🎓 Idora nomi? </b>`,{
        parse_mode:"HTML"
       })
      },1000)
      state3=1 

    }
    else if(message.text=='Ustoz kerak'){
        bot.sendMessage(chatId, `<b>Ustoz topish uchun ariza berish</b>

Hozir sizga birnecha savollar beriladi. 
Har biriga javob bering. 
Oxirida agar hammasi to'g'ri bo'lsa, HA tugmasini bosing va arizangiz Adminga yuboriladi.`,{parse_mode:'HTML'})
    setTimeout(()=>{
        bot.sendMessage(chatId, `<b>Ism, familiyangizni kiriting? </b>`,{parse_mode:'HTML'})
    },1000)
    state4=1 
    }
    else if(message.text=='Shogird kerak'){
        bot.sendMessage(chatId, `<b>Shogird topish uchun ariza berish</b>

Hozir sizga birnecha savollar beriladi. 
Har biriga javob bering. 
Oxirida agar hammasi to'g'ri bo'lsa, HA tugmasini bosing va arizangiz Adminga yuboriladi.`,{parse_mode:'HTML'})
          setTimeout(()=>{
           bot.sendMessage(chatId,"<b> Ism, familiyangizni kiriting? </b>",{
               parse_mode:'HTML'
            },1000)
          })
        state5=1
    }


else if(state==1){
        user.full_name=message.text 
        bot.sendMessage(chatId,`📚 Texnologiya:

Talab qilinadigan texnologiyalarni kiriting?
 Texnologiya nomlarini vergul bilan ajrating. Masalan, 
        
Java, C++, C#`)
      state=2 
    }
else if(state2==1){
    user.full_name=message.text 
   bot.sendMessage(chatId, `🕑 Yosh: 

Yoshingizni kiriting?
Masalan, 19`)
state2=2 
    
}
else if(state3==1){
    user.idora=message.text 
    bot.sendMessage(chatId, `📚 Texnologiya:

Talab qilinadigan texnologiyalarni kiriting?
Texnologiya nomlarini vergul bilan ajrating. Masalan, 
    
Java, C++, C#`)
state3=2 

}
else if(state4==1){
    user.full_name=message.text 
    bot.sendMessage(chatId, `🕑 Yosh: 

Yoshingizni kiriting?
Masalan, 19`)
state4=2  
}
else if(state5==1){
    user.full_name=message.text 
    bot.sendMessage(chatId, `🕑 Yosh: 

Yoshingizni kiriting?
Masalan, 19`)
   state5=2 
}
else if(state5==2){
    user.age=message.text 
    bot.sendMessage(chatId, `📚 Texnologiya:

Talab qilinadigan texnologiyalarni kiriting?
Texnologiya nomlarini vergul bilan ajrating. Masalan, 
    
Java, C++, C#`)
   state5=3 

}
else if(state5==3){
    user.texnalogiya=message.text 
    bot.sendMessage(chatId, `📞 Aloqa: 

Bog'lanish uchun raqamingizni kiriting?
Masalan, +998 90 123 45 67`)
   state5=4 
}
else if(state5==4){
    user.aloqa=message.text 
    bot.sendMessage(chatId, `🌐 Hudud: 

Qaysi hududdansiz?
Viloyat nomi, Toshkent shahar yoki Respublikani kiriting.`)
    state5=5  
}
else if(state5==5){
    user.hudud=message.text 
    bot.sendMessage(chatId, `💰 Narxi:

Tolov qilasizmi yoki Tekinmi?
Kerak bo'lsa, Summani kiriting?`)
state5=6  
}
else if(state5==6){
    user.narx=message.text 
    bot.sendMessage(chatId, `👨🏻‍💻 Kasbi: 

Ishlaysizmi yoki o'qiysizmi?
Masalan, Talaba`)
state5=7 
}
else if(state5==7){
    user.kasb=message.text 
    bot.sendMessage(chatId, `🕰 Murojaat qilish vaqti: 

Qaysi vaqtda murojaat qilish mumkin?
Masalan, 9:00 - 18:00`)
   state5=8 
}
else if(state5==8){
    user.murojaat=message.text 
    bot.sendMessage(chatId, `🔎 Maqsad: 

Maqsadingizni qisqacha yozib bering.`)
    state5=9
}
else if(state5==9){
    user.maqsad=message.text 
    bot.sendMessage(chatId, `Shogird kerak:

🎓 Ustoz: ${user.full_name}
🌐 Yosh:  ${user.age}
📚 Texnologiya: ${user.texnalogiya} 
🇺🇿 Telegram: @${username}
📞 Aloqa:  ${user.aloqa}
🌐 Hudud:  ${user.hudud}
💰 Narxi:  ${user.narx}
👨🏻‍💻 Kasbi:  ${user.kasb}
🕰 Murojaat qilish vaqti: ${user.murojaat}
🔎 Maqsad: ${user.maqsad}
    
 #shogird`)
 state5=10 

 setTimeout(()=>{
    if(state5==10){
        let tasdiq_keyboards={
            resize_keyboard:true,
            one_time_keyboard:true,
            keyboard:[
                ['Ha','Yoq'],
                
            ]
        
        }
        bot.sendMessage(chatId,"Barcha ma'lumotlar togrimi?",{
         reply_markup:tasdiq_keyboards
        })

    }
 },1000)

}


 else if(state==2){
    user.texnalogiya=message.text 

    bot.sendMessage(chatId,`📞 Aloqa: 

 Boglanish uchun raqamingizni kiriting?
 Masalan, +998 90 123 45 67`)
 state=3 
 }
 else if(state2==2){
    user.age=message.text 
    bot.sendMessage(chatId, `📚 Texnologiya:

Talab qilinadigan texnologiyalarni kiriting?
Texnologiya nomlarini vergul bilan ajrating. Masalan, 
    
Java, C++, C#`)
state2=3  
 }
 else if(state==3){
    user.aloqa=message.text 
    bot.sendMessage(chatId,`🌐 Hudud: 

Qaysi hududdansiz?
Viloyat nomi, Toshkent shahar yoki Respublikani kiriting.`)
state=4
 }
 else if(state3==2){
    user.texnalogiya=message.text 
    bot.sendMessage(chatId, `📞 Aloqa: 

 Bog'lanish uchun raqamingizni kiriting?
Masalan, +998 90 123 45 67`)
  state3=3 

 }
 else if(state2==3){
    user.texnalogiya=message.text 
    bot.sendMessage(chatId, `📞 Aloqa: 

Bog'lanish uchun raqamingizni kiriting?
Masalan, +998 90 123 45 67`)
  state2=4 
 }
 else if(state4==2){
    user.age=message.text 
bot.sendMessage(chatId, `📚 Texnologiya:

Talab qilinadigan texnologiyalarni kiriting?
Texnologiya nomlarini vergul bilan ajrating. Masalan, 

Java, C++, C#`)
state4=3
 }
 else if(state3==3){
    user.aloqa=message.text 
    bot.sendMessage(chatId, `🌐 Hudud: 

Qaysi hududdansiz?
Viloyat nomi, Toshkent shahar yoki Respublikani kiriting.`)
state3=4 
 }
 else if(state4==3){
    user.texnalogiya=message.text 
    bot.sendMessage(chatId, `📞 Aloqa: 

Bog'lanish uchun raqamingizni kiriting?
Masalan, +998 90 123 45 67`)
state4=4 
 }
 else if(state==4){
    user.hudud=message.text 
    bot.sendMessage(chatId,`💰 Narxi:

Tolov qilasizmi yoki Tekinmi?
Kerak bo'lsa, Summani kiriting?`)
state=5 
 }
 else if(state2==4){
    user.aloqa=message.text 
    bot.sendMessage(chatId, `🌐 Hudud: 

Qaysi hududdansiz?
Viloyat nomi, Toshkent shahar yoki Respublikani kiriting.`)
  state2=5 
 }
 else if(state3==4){
    user.hudud=message.text 
bot.sendMessage(chatId, `✍️Mas'ul ism sharifi?`)
state3=5 
 }
 else if(state4==4){
   user.aloqa=message.text
   bot.sendMessage(chatId, `🌐 Hudud: 

Qaysi hududdansiz?
Viloyat nomi, Toshkent shahar yoki Respublikani kiriting.`)
state4=5 
   

 }
 else if(state==5){
    user.narx=message.text 
    bot.sendMessage(chatId,`👨🏻‍💻 Kasbi: 

Ishlaysizmi yoki oqiysizmi?
 Masalan, Talaba`)
 state=6
 }
 else if(state2==5){
    user.hudud=message.text 
    bot.sendMessage(chatId, `💰 Narxi:

Tolov qilasizmi yoki Tekinmi?
Kerak bo'lsa, Summani kiriting?`)
state2=6 

 }
 else if(state3==5){
    user.masul=message.text 
    bot.sendMessage(chatId, `🕰 Murojaat qilish vaqti: 

Qaysi vaqtda murojaat qilish mumkin?
Masalan, 9:00 - 18:00`)
   state3=6 
 }
 else if(state4==5){
    user.hudud=message.text 

    bot.sendMessage(chatId, `💰 Narxi:

Tolov qilasizmi yoki Tekinmi?
Kerak bo'lsa, Summani kiriting?`)
state4=6 
 }
 else if(state==6){
    user.kasb=message.text 
    bot.sendMessage(chatId,`🕰 Murojaat qilish vaqti: 

Qaysi vaqtda murojaat qilish mumkin?
Masalan, 9:00 - 18:00`)
  state=7 
 }
 else if(state2==6){
    user.kasb=message.text 
    bot.sendMessage(chatId,`👨🏻‍💻 Kasbi: 

Ishlaysizmi yoki o'qiysizmi?
Masalan, Talaba`)
  state2=7 
 }
 else if(state3==6){
    user.murojaat=message.text 
bot.sendMessage(chatId, `🕰 Ish vaqtini kiriting?`)
state3=7 
 }
 else if(state4==6){
    user.narx=message.text 
    bot.sendMessage(chatId, `👨🏻‍💻 Kasbi: 

Ishlaysizmi yoki o'qiysizmi?
Masalan, Talaba`)
state4=7
 }


 else if(state==7){
    user.vaqt=message.text 
    bot.sendMessage(chatId,`🔎 Maqsad: 

Maqsadingizni qisqacha yozib bering.`)
  state=8 
 }
 else if(state2==7){
    user.narx=message.text 
    bot.sendMessage(chatId, `🕰 Murojaat qilish vaqti: 

Qaysi vaqtda murojaat qilish mumkin?
Masalan, 9:00 - 18:00`)
state2=8
}
else if(state3==7){
    user.ishvaqti=message.text 
    bot.sendMessage(chatId, `💰 Maoshni kiriting?`)
    state3=8 
}
else if(state4==7){
user.kasb=message.text 
bot.sendMessage(chatId, `🕰 Murojaat qilish vaqti: 

Qaysi vaqtda murojaat qilish mumkin?
Masalan, 9:00 - 18:00`)
state4=8 

}
 else if(state2==8){
    user.murojaat=message.text  
    bot.sendMessage(chatId, `🔎 Maqsad: 

Maqsadingizni qisqacha yozib bering.`)
  state2=9

 }
 else if(state==8){
    user.maqsad=message.text 
    bot.sendMessage(chatId, `Sherik kerak:

🏅 Sherik: ${user.full_name}
📚 Texnologiya: ${user.texnalogiya}
🇺🇿 Telegram: @${username}
📞 Aloqa: ${user.aloqa}
🌐 Hudud: ${user.hudud}
💰 Narxi: ${user.narx}
👨🏻‍💻 Kasbi: ${user.kasb}
🕰 Murojaat qilish vaqti: ${user.vaqt}
🔎 Maqsad: ${user.maqsad}
    
#sherik`)

state=9
 setTimeout(()=>{
    if(state==9){
        let tasdiq_keyboards={
            resize_keyboard:true,
            one_time_keyboard:true,
            keyboard:[
                ['Ha','Yoq'],
                
            ]
        
        }
        state=10 
        bot.sendMessage(chatId,"Barcha ma'lumotlar togrimi?",{
         reply_markup:tasdiq_keyboards
        })
    }

 },1000)

 }
 else if(state3==8){
    user.maosh=message.text
    bot.sendMessage(chatId, `‼️ Qo'shimcha ma'lumotlar?`)
    state3=9 

 }
 else if(state4==8){
    user.murojaat=message.text 
    bot.sendMessage(chatId, `🔎 Maqsad: 

Maqsadingizni qisqacha yozib bering.`)
   state4=9 
 }

 
 else if(state2==9){
    user.maqsad=message.text 
    
    
    bot.sendMessage(chatId, `Ish joyi kerak:

👨‍💼 Xodim: ${user.full_name}
🕑 Yosh:  ${user.age}
📚 Texnologiya: ${user.texnalogiya} 
🇺🇿 Telegram: @${username}
📞 Aloqa: ${user.aloqa}
🌐 Hudud: ${user.hudud}
💰 Narxi: ${user.hudud}
👨🏻‍💻 Kasbi: ${user.kasb}
🕰 Murojaat qilish vaqti: ${user.murojaat} 
🔎 Maqsad: ${user.maqsad}
    
    #xodim`)
     state2=10 


setTimeout(()=>{
    if(state2==10){
        let tasdiq_keyboards={
            resize_keyboard:true,
            one_time_keyboard:true,
            keyboard:[
                ['Ha','Yoq'],
                
            ]
        
        }
        bot.sendMessage(chatId,"Barcha ma'lumotlar togrimi?",{
         reply_markup:tasdiq_keyboards
        })
    }

 },1000)


 }
 else if(state3==9){
    user.qoshimchainfo=message.text 
    bot.sendMessage(chatId, `Xodim kerak:

    🏢 Idora: ${user.idora}
    📚 Texnologiya: ${user.texnalogiya}
    🇺🇿 Telegram:  @${username}
     📞 Aloqa: ${user.aloqa}
    🌐 Hudud: ${user.hudud}
    ✍️ Mas'ul: ${user.masul}
    🕰 Murojaat vaqti: ${user.murojaat}
    🕰 Ish vaqti: ${user.ishvaqti}
    💰 Maosh: ${user.maosh}
    ‼️ Qo'shimcha: ${user.qoshimchainfo}
                
    #ishJoyi`)
    state3=10 

      setTimeout(()=>{
         if(state3==10){

            let tasdiq_keyboards={
                resize_keyboard:true,
                one_time_keyboard:true,
                keyboard:[
                    ['Ha','Yoq'],
                    
                ]
            
            }
            bot.sendMessage(chatId,"Barcha ma'lumotlar togrimi?",{
             reply_markup:tasdiq_keyboards
            })

           
            
         }
      },1000)
 }
 else if(state4==9){
    user.maqsad=message.text 
    bot.sendMessage(chatId, `Ustoz kerak:

🎓 Shogird: ${user.full_name}
🌐 Yosh:  ${user.age}
📚 Texnologiya: ${user.texnalogiya}
🇺🇿 Telegram: @${username}
📞 Aloqa: ${user.aloqa}
🌐 Hudud: ${user.hudud}
💰 Narxi: ${user.narx}
👨🏻‍💻 Kasbi: ${user.kasb}
🕰 Murojaat qilish vaqti: ${user.murojaat}
🔎 Maqsad: ${user.maqsad}
    
#shogird`)
    state4=10  

    setTimeout(()=>{
     if(state4==10){
        let tasdiq_keyboards={
            resize_keyboard:true,
            one_time_keyboard:true,
            keyboard:[
                ['Ha','Yoq'],
                
            ]
        
        }
        bot.sendMessage(chatId,"Barcha ma'lumotlar togrimi?",{
         reply_markup:tasdiq_keyboards
        })
        

     }
    },1000)
 }

/// state uchun 
 else if(message.text=='Ha'){
 bot.sendMessage(chatId, `📪 So'rovingiz tekshirish uchun adminga jo'natildi!
 E'lon 24-48 soat ichida kanalda chiqariladi.`,{
    reply_markup:keyboards
 })


 
 }
 else if(message.text=='Yoq'){
    console.log('yoq keldi')

   bot.sendMessage(chatId, 'Malumotlaringiz qabul qilinmadi')
    setTimeout(()=>{
      bot.sendMessage(chatId, `/start so'zini bosing. E'lon berish qaytadan boshlanadi️`)
    },100)


    

    
    

    
 }
 /// state uchun  
})






