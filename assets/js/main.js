
import { subscribeToHellfireClub } from './firebase/hellfire-club.js'
import app from './firebase/app.js'


const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtCharacter = document.getElementById('txtCharacter')
const txtLevel = document.getElementById('txtLevel')

const btnSubscribe = document.getElementById('btnSubscribe')


btnSubscribe.addEventListener('click' , async () => {
    const subscription = {
        name: txtName.value, 
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    };

    debugger
    const subscriptionId = await subscribeToHellfireClub(subscription);
    console.log(`Inscrito com sucesso ${subscriptionId}`);
});