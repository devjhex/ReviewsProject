const items = [
    {
    img:'./images/Susan.jpg',
    name: 'susan smith',
    job: 'web developer',
    text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    img:'./images/Anna.jpg',
    name: 'anna johnson',
    job: 'web designer',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    img:'./images/Sam.jpg',
    name: 'Sam jones',
    job: 'intern',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  }
]

/* Elements */
let img = document.querySelector(".review__img");
let name = document.querySelector(".review__name");
let job = document.getElementById("Rwork");
let text = document.getElementById("Rtext");

/* Buttons */
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let random = document.getElementById('random');

let count = 0;

next.addEventListener("click", function(){
   count++;
   if (count>items.length-1) {
    count = 0;
   }
   change();
});

previous.addEventListener("click", function(){
    count--;
    if (count<0) {
        count = items.length-1;
       }
   change();
});

random.addEventListener("click", function(){
    let number = ran();
    count=number;
    change();
});

function change (){
    let item = items[count];
    img.src = item.img;
    name.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
}

function ran(){
    return Math.floor(Math.random()*items.length);
}