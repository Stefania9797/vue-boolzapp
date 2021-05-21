var root = new Vue(
    {
        el: '#root',
        data: {
            activeContact:0,
            newMsg:"",
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'avatar_1.jpg',
                    visible: true,
                    accesso:"15:50",
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'avatar_2.jpg',
                    visible: true,
                    accesso:"16:35",
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'avatar_3.jpg',
                    visible: true,
                    accesso:"16:17",
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: 'avatar_4.jpg',
                    visible: true,
                    accesso:"15:50",
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],
        },
        methods:{
            ChangeActiveContact(index){
                this.activeContact=index
            },
            addNewMsg(){
                //creo nuovo oggetto messaggio
                let newMsgObj = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: this.newMsg,
                    status: 'sent'
                };
                //lo inserico tra i messaggi
                let ActiveChat = this.contacts[this.activeContact].messages;
                ActiveChat.push(newMsgObj)
                this.newMsg = '';
                //Risposta automatica
                setTimeout(function(){
                    let pcResponseObj={
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        text: "ok",
                        status: 'received'
                    }
                    ActiveChat.push(pcResponseObj)
                },1000)
            }
        },
    })