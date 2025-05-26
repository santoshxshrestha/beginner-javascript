document.body.style.backgroundColor = "black"
document.body.style.color = "white"

const nav = document.createElement("nav");
const ul = document.createElement('ul');
ul.style.display = 'flex'
ul.style.gap = '290px'
ul.style.height = '5vhvh'
ul.style.fontSize  = '30px'

const navItem = [
    {text : "Home",},
    {text : "About",},
    {text : "Contact",},
    {text : "project",},
];

navItem.forEach(item => {
    const li = document.createElement('li');
    const a  = document.createElement('a');
    a.textContent = item.text;

    li.appendChild(a)
    ul.appendChild(li);
});

nav.appendChild(ul);
document.body.appendChild(nav);
