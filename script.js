document.getElementById("form")?.addEventListener("submit",function(e){
e.preventDefault();

let title=document.getElementById("title").value.toLowerCase();
let domain=document.getElementById("domain").value;
let goal=document.getElementById("goal").value;

let monetization, pricing, companies=[];

/* DYNAMIC LOGIC */

if(title.includes("ai")||domain==="AI"){
monetization="AI SaaS + API + Freelance";
pricing="₹499 / ₹999 / ₹1999";

let aiCompanies=["Google","OpenAI","Meta","Amazon","Microsoft","NVIDIA","IBM","Tesla","Adobe","Oracle","Intel","Salesforce","DeepMind","Accenture","Infosys","TCS","Wipro","Capgemini","HuggingFace","Stability AI"];

companies = aiCompanies.sort(()=>0.5-Math.random()).slice(0,20);
}

else if(title.includes("web")||domain==="Web"){
monetization="Freelancing + Websites + Ads";
pricing="₹199 / ₹499 / ₹999";

let webCompanies=["TCS","Infosys","Wipro","Accenture","Capgemini","Google","Amazon","Flipkart","Zomato","Swiggy","Paytm","Razorpay","Zoho","Freshworks","Shopify","Upwork","Fiverr","Dribbble","Behance","Freelancer"];

companies = webCompanies.sort(()=>0.5-Math.random()).slice(0,20);
}

else{
monetization="Apps + Ads + Subscription";
pricing="₹99 / ₹299 / ₹699";

let appCompanies=["Google Play","Apple","Zomato","Swiggy","Uber","Ola","Paytm","PhonePe","Byju's","Unacademy","Meesho","Flipkart","Amazon","Dream11","CRED","Nykaa","Boat","Lenskart","Zepto","Dunzo"];

companies = appCompanies.sort(()=>0.5-Math.random()).slice(0,20);
}

localStorage.setItem("title",title);
localStorage.setItem("monetization",monetization);
localStorage.setItem("pricing",pricing);
localStorage.setItem("goal",goal);
localStorage.setItem("companies",JSON.stringify(companies));

window.location.href="dashboard.html";
});
