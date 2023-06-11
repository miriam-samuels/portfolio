let quotes = []
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA995DPzXp06f0BHAbR20GvlDYvP0Qbu1s",
    authDomain: "mide-osunyomi.firebaseapp.com",
    projectId: "mide-osunyomi",
    storageBucket: "mide-osunyomi.appspot.com",
    messagingSenderId: "878344488141",
    appId: "1:878344488141:web:8f9e8dfeae48fbce4b5584"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const row = document.getElementById('blogRow')

function getData() {
    db.collection("quotes").get()
        .then((snapshot) => {
            quotes = snapshot.docs.map(doc => {
                return {
                    quotes: doc.data().quote
                }
            })
            console.log(quotes)
            // quotes = doc
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}


function addNode(head, desc, author, date) {
    const col = document.createElement('div')
    const card = document.createElement('div')
    const cardBody = document.createElement('div')
    const cardFooter = document.createElement('div')
    const cardAuthor = document.createElement('div')
    const cardDate = document.createElement('div')
    const cardTitle = document.createElement('h3')
    const cardDesc = document.createElement('p')
    const cAuthor = document.createElement('span')
    const icon = document.createElement('span')


    col.className = 'col-md-4'
    card.className = "card card-blog"
    cardBody.className = 'card-body'
    cardTitle.className = "card-title"
    cardDesc.className = "card-description"
    cardFooter.className = "card-footer"
    cardAuthor.className = "post-author"
    cardDate.className = "post-date"
    icon.className = "ion-ios-clock-outline"
    cAuthor.className = "author"

    row.appendChild(col)
    col.appendChild(card)
    card.appendChild(cardBody)
    card.appendChild(cardFooter)
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardDesc)
    cardFooter.appendChild(cardAuthor)
    cardFooter.appendChild(cardDate)
    cardAuthor.appendChild(cAuthor)
    cardDate.appendChild(icon)

    console.log(desc.slice(0, 10))
    cardTitle.innerText = head
    cardDesc.innerText = desc
    cAuthor.innerText = author
    cardDate.innerText = date

}

function shortListed() {
    quotes.slice(0, 3).map((value) => {
        addNode(value.quotes.head, value.quotes.body, value.quotes.footer.name, value.quotes.footer.time)
    })
}
function fullList() {
    quotes.map((value) => {
        addNode(value.quotes.head, value.quotes.body, value.quotes.footer.name, value.quotes.footer.time)
    })
}

window.addEventListener('load', () => {
    getData()
    if (navigator.onLine) {
        console.log('We\'re online!');
    } else {
        console.log('We\'re offline...');
    }
    setTimeout(() => {
        if (window.location.href == `${window.location.origin}/index.html`) {
            shortListed()
        }
        else {
            fullList()
        }

    }, 2000);
})
setTimeout(() => {
    if (window.location.href == `${window.location.origin}/index.html`) {
        shortListed()
    }
    else {
        fullList()
    }

}, 2000);





