/**global variables  */

const inquiry_input = document.querySelector(".mood");
const zip_input = document.querySelector(".zip");
const scrn_1 = document.querySelector(".scrn-1");
const scrn_2 = document.querySelector(".scrn-2");
const scrn_3 = document.querySelector(".scrn-3");
const home_btn = document.querySelector(".home");
const inquiry = document.querySelector(".inquiry");
const nav_inner_cont = document.querySelector(".nav-cont");
const unordList = document.querySelector("ul");
const zip_btn = document.getElementById('generate');
const reset_btn = document.getElementById('reset');

const right_arow = document.querySelector('.right');
const left_arrow = document.querySelector('.left');

const add_active = (obj) => obj.classList.add("active");
const remove_active = (obj) => obj.classList.remove("active");
const contain_active = (obj) => obj.classList.contains("active");

/**general use functions */

function rand(num) {
    return Math.floor(Math.random() * num);
}

function date() {
    const date = new Date();
    const date_formatted = date.getDate() + "-" + date.getMonth() + "-" + date.getUTCFullYear();
    let min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let hrs = date.getHours();
    const time = hrs > 12 ? hrs - 12 + ":" + min + "pm" : hrs + ":" + min + "am";
    return `${date_formatted} <br> <small>${time}</small>`;
}

function activate() {
    if (contain_active(scrn_1)) {
        remove_active(scrn_1);
        add_active(scrn_2);
    } else if (contain_active(scrn_2)) {
        remove_active(scrn_2);
        add_active(scrn_3);
    } else if (contain_active(scrn_3)) {
        remove_active(scrn_3);
        add_active(scrn_1);
        /* window.location.reload(); */
        backscrn1();
        adding_list_Items();
    }
}

function zipActivate() {
    if (contain_active(scrn_3)) {
        remove_active(scrn_3);
        add_active(scrn_2);
    }
}

/* Screen Image and Quotes arrays */

const scrn_1_img = ["https://images.unsplash.com/photo-1548678967-f1aec58f6fb2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80", "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80", "https://images.unsplash.com/photo-1631852890791-5817bfe63e60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80", "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80", "https://images.unsplash.com/photo-1612421626854-37aea7ebaab1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80", "https://images.unsplash.com/photo-1624708733684-da7cd4f90982?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80", "https://images.unsplash.com/photo-1610444866671-0b9a3ce7b92c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80", "https://images.unsplash.com/photo-1454982523318-4b6396f39d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", "https://images.unsplash.com/photo-1459370908378-6a6c29000f50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"];
const scrn_2_img = ["https://images.unsplash.com/photo-1613297595539-0d36a37702c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80", "https://images.unsplash.com/photo-1542639492-23184001faed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", "https://images.unsplash.com/photo-1479186479563-2af7090284c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=876&q=80", "https://images.unsplash.com/photo-1527901031195-a21e7b21052c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1033&q=80", "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80", "https://images.unsplash.com/photo-1618473962497-68e8d4e0680e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80", "https://images.unsplash.com/photo-1566342088293-38debd381c63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80", "https://images.unsplash.com/photo-1529735061203-04023364fb01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80", "https://images.unsplash.com/photo-1530333899355-3ca54e178f8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80"];
const general_quotes = ["Change May Not Always Bring Growth, But There Is No Growth Without Change.", "But I know, somehow, that only when it is dark enough can you see the stars.", "Believe You Can And You’re Halfway There.", "Your Patience is your power", "Don’t give up, try one more time because life is all about learning from mistakes", "Instead of worrying about what you cannot control, shift your energy to what you can create.", "Though nobody can go back and make a new beginning... Anyone can start over and make a new ending."];
const summer_image = ["https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=876&q=80", "https://images.unsplash.com/photo-1465429103920-30e481ab35b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", "https://images.unsplash.com/photo-1458932955922-a397fae0b8d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"];
const summer = ["Here comes the sun..", "Nothing but good vibes and blue skies."];
const summer_quotes = summer.concat(general_quotes);
const avrgWeath_image = ["https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80", "https://images.unsplash.com/photo-1575372587186-5012f8886b4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80", "https://images.unsplash.com/photo-1555338803-f392471ef91d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=805&q=80"];
const winter_image = ["https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80", "https://images.unsplash.com/photo-1414124488080-0188dcbb8834?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80", "https://images.unsplash.com/photo-1515073112898-12ecd7997751?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80", "https://images.unsplash.com/photo-1609776113975-7c6e3202a858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=811&q=80"];
const winter = ["In the depth of winter, I finally learned that there was in me an invincible summer.", "It's only cold if your're standing still.Get Moving!...or not Just be Happy", "It's Hot Chocolate weather", "This weather is snow joke :D"];
const winter_quotes = winter.concat(general_quotes);
const inquiry_array = ["What was your day like?", "What's alive for you in this moment?", "What's one thing your looking forward to?", "What's one nice thing you did for yourself lately?", "What have you been listening to?", "What's something that went well lately?", "What's something good that happened to you today?", "What do you wish you did more of today?"];

/**screen 1 and 2 Set background image and inquiry */

function backscrn1() {
    inquiry.innerHTML = `<h2 class="inquiry"> ${inquiry_array[rand(inquiry_array.length)]}</h2>`;
    scrn_1.style.backgroundImage = `url(${scrn_1_img[rand(scrn_1_img.length)]})`;
    scrn_2.style.backgroundImage = `url(${scrn_2_img[rand(scrn_2_img.length)]})`;
};

backscrn1();


/******* eventlistener for Users' input ******/
inquiry_input.addEventListener('keydown', function (e) {
    const key_Code = e.key || e.code;
    if (key_Code === 'Enter') {
        e.preventDefault();
        activate();
        post_mood_date(inquiry_input.value);
        inquiry_input.value = '';
    }
});

zip_btn.addEventListener("click", () => {
    activate();
    post_zip_api(zip_input.value);
    zip_input.value = '';
});
reset_btn.addEventListener("click", () => {
    window.localStorage.clear();
    window.location.reload();
});

/*----------------- Client side for the server -----------------*/

/**Posting date and mood data to sever */
function post_mood_date(value) {
    postRequest('/add', {
        dateZ: date(),
        moodZ: value
    })
}

/**Posting Zip, API, temp and weather description data to server */
const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = ",us&units=metric&appid=137c8f5b483278dda0453b53a324eae6";

function post_zip_api(value) {
    /**Posting Zip, API to the server */
    postRequest('/addZip', {
            zipZ: value,
            apiZ: baseURL + value + apiKey
        })
        /**fetch the weather api */
        .then(data => screen3_Weather(data.apiP))
        /**Posting weather data to the server */
        .then(data =>
            postRequest('/addWeather', {
                tempZ: data.main.temp,
                descripZ: data.weather[0].description,
                locationZ: data.name
            }))
        .then(data => entryHolder('/all'))
        .then(data => updateStorage('/all'))
        .catch(error => {
            console.log("Posting weather data to the server error" + error.message);
            errorFunc(error);
        });
};
/*** screen 3 layout and GET weather data ***/
const screen3_Weather = async (weatherURL) => {
    scrn_3.innerHTML = "";
    const response = await fetch(weatherURL);
    if (response.status !== 200) {
        throw new Error("City not Found")
    }
    const data = await response.json();
    console.log(data);
    return data;

}

const entryHolder = async (url) => {
    scrn_3.innerHTML = '';
    const response = await fetch(url);

    const data = await response.json();
    const scrn_3_innerCont = document.createElement('div');
    scrn_3_innerCont.classList.add("inner-cont");
    scrn_3_innerCont.setAttribute('id', "entryHolder")

    if (data.tempP < 13) {
        scrn_3.style.backgroundImage = `url(${winter_image[rand(winter_image.length)]})`;
        scrn_3_innerCont.innerHTML = `<div id="date">${data.dateP}</div>
            <div id="content">"${winter_quotes[rand(winter_quotes.length)]}"</div>
                   <div id="temp">It's ${data.tempP} °C  with ${data.descripP}, bundle up and stay warm luv !!</div>
                    <button class = "home" type="submit" onclick="activate()" > Home </button>`;

    } else if (data.tempP >= 13 && data.tempP < 25) {
        scrn_3.style.backgroundImage = `url(${avrgWeath_image[rand(avrgWeath_image.length)]})`;
        scrn_3_innerCont.innerHTML = `<div id="date">${data.dateP}</div>
            <div id="content">"${general_quotes[rand(general_quotes.length)]}"</div>
            <div id="temp">It's ${data.tempP} °C with ${data.descripP} , have a great day!</div>
                    <button class = "home" type="submit" onclick="activate()" > Home </button>`

    } else if (data.tempP >= 25) {
        scrn_3.style.backgroundImage = `url(${summer_image[rand(summer_image.length)]})`;
        scrn_3_innerCont.innerHTML = `<div id="date">${data.dateP}</div>
            <div id="content">"${summer_quotes[rand(summer_quotes.length)]}"</div>
            <div id="temp">Stay hydrated hun, It's ${data.tempP} °C with ${data.descripP}!</div>
                    <button class = "home" type="submit" onclick="activate()">Home</button>`
    }
    scrn_3.appendChild(scrn_3_innerCont);
    return data;
}

function errorFunc(error) {
    scrn_3.innerHTML = '';
    const scrn_3_innerCont = document.createElement('div');
    scrn_3_innerCont.classList.add("inner-cont");
    scrn_3_innerCont.setAttribute('id', "entryHolder")
    scrn_3_innerCont.innerHTML = `<div id="content">Something isn't quiet right ! <br> Please check and re-enter Zip code</div>
        <p>${error}</p>
        <button class = "Back" type="submit" onclick="zipActivate()">Back</button>`
    scrn_3.style.backgroundImage = `linear-gradient(to top, #d299c2 0%, #fef9d7 100%)`;
    scrn_3.appendChild(scrn_3_innerCont);
}

/***  setting Root and Updating Local Storage  ***/

const locaStorageItems = JSON.parse(localStorage.getItem('root'));

let root = localStorage.getItem('root') !== null ? locaStorageItems : [];

const updateStorage = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    root.push(data);
    updateLocalStorage();
}

function updateLocalStorage() {
    localStorage.setItem('root', JSON.stringify(root));
    /* window.localStorage.clear(); */
}

/********Screen 1 Adding History List ******** */

let positive = 7;
let negative = 0;
let gap = 7;
let thresh = 7;
let list_items;

/** Unhide UL and Add list Items Dynamically **/
function adding_list_Items() {
    unordList.innerHTML = "";
    if (root.length > 0) {
        nav_inner_cont.classList.remove('hide')
        root.forEach(log => {
            unordList.innerHTML +=
                `<li class="active">${log.dateP}
            <span>memo : ${log.moodP} <br>,I was in ${log.locationP} and it was ${log.tempP}°C with ${log.descripP}.
            </span>
        </li>`
        });
        list_items = document.querySelectorAll('li');
        rotateList(list_items, right_arow, left_arrow);
        arrow_events(list_items, right_arow, left_arrow);
    }
}

adding_list_Items();

function rotateList(array, right, left) {
    if (list_items !== undefined) {
        if (array.length > thresh) {
            right.classList.remove("hide");
            left.classList.remove("hide");
            array.forEach(item => {
                remove_active(item);
            });
            for (let i = negative; i < positive; i++) {
                add_active(array[i]);
            };
        }
    }
}

function responsive_scrn() {
    /* let array = [thresh, positive, negative, gap]; */
    if (window.innerWidth <= 950 && window.innerWidth > 890) {
        thresh = 6;
        negative = 0;
        positive = 6
        gap = 6;
    } else if (window.innerWidth <= 890 && window.innerWidth > 850) {
        negative = 0;
        positive = 5
        thresh = 5
        gap = 5;
    } else if (window.innerWidth <= 850 && window.innerWidth > 725) {
        negative = 0;
        positive = 4
        thresh = 4
        gap = 4;
    } else if (window.innerWidth <= 725 && window.innerWidth > 600) {
        negative = 0;
        positive = 3
        thresh = 3
        gap = 3;
    } else if (window.innerWidth <= 600 && window.innerWidth > 444) {
        thresh = 2;
        negative = 0;
        positive = 2
        gap = 2;
    } else if (window.innerWidth <= 444) {
        thresh = 1;
        negative = 0;
        positive = 1
        gap = 1;
    } else {
        negative = 0;
        positive = 7;
        gap = 7;
    }
    rotateList(list_items, right_arow, left_arrow);
    right_arow.removeAttribute("disabled");
    right_arow.classList.remove('faded');
    left_arrow.setAttribute("disabled", true);
    left_arrow.classList.add('faded');
    /*  console.log("resposive_function :responsive "+ negative+ "positive " + positive) */
}


window.addEventListener('load', () => {
    responsive_scrn();
    /* console.log("ONLOAD :responsive " +"negative " + negative+ "positive " + positive); */
})
window.addEventListener('resize', (_e) => {
    responsive_scrn();
    console.log("RESIZE: ");
    /* console.log("RESIZE: " + window.innerWidth +"negative " + negative+ "positive " + positive); */
})

function arrow_events(a, r, l) {
    r.addEventListener('click', () => {
        if (positive === a.length) {
            r.setAttribute("disabled", true);
            r.classList.add('faded');
            console.log("right_arow Event triggered");
        } else if ((positive - negative === gap) && positive < a.length) {
            positive++;
            negative++;
            rotateList(a, r, l);
            console.log("right_arow Event triggered 22")
        }
        l.removeAttribute("disabled");
        l.classList.remove('faded');
        /* console.log("right_arow Event triggered :: positive " + positive +"/"+ "negative " + negative); */
    });

    l.addEventListener('click', () => {
        if (negative === 0) {
            l.setAttribute("disabled", true);
            l.classList.add('faded');
        } else if ((positive - negative === gap) && negative >= 1) {
            positive--;
            negative--;
            rotateList(a, r, l);
        }
        r.removeAttribute("disabled");
        r.classList.remove('faded');
        /*  console.log("left_arow Event triggered :: positive" + positive +"/"+ "negative" + negative); */
    });
}

/******* POST Request ****** */

const postRequest = async (url, data) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            'content-type': 'Application/JSON'
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log(response.status);
    }
}