const changecolorbutton = document.getElementById("change-color-btn");
const changeshapebutton = document.getElementById("change-shape-btn");
const colors = ['blue', 'green', 'brown', 'pink', 'grey','yellow'];
const getRandomNumber = ( max) => {
    return Math.floor((Math.random() * 10)) % max
}
changecolorbutton.addEventListener('click', () => {
    const index = getRandomNumber(colors.length);
    document.getElementById('container').style.backgroundColor = colors[index];


})
let flag = true;
const changeshape=()=>{

    const container = document.getElementById('container')
    const newDiv = document.createElement('div');
    if (flag == true)
    newDiv.classList.add('red-square');
    else
    newDiv.classList.add('red-triangle');
    flag=!flag
    container.innerHTML = ''
    container.appendChild(newDiv)

}


changeshapebutton.addEventListener('click', changeshape)
 changeshape()