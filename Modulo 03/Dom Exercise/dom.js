
const squareArea    = document.querySelector('.forms.square')
var num             = 0  

function create_form(_form){
    switch(_form){
        case 'square':
            var subSquare       = document.createElement('div')
            var square          = document.createElement('div')
            var textInput       = document.createElement('textarea')
            var moveButton      = document.createElement('div')
            // creatin the name
            square.classList    = `square-div ${num}`
            moveButton.classList = `moveBtn ${num}`
            subSquare.classList = `subSquare ${num}`
            textInput.classList = `textInputSq ${num}`
            // setin the atribute
            square.setAttribute("onmouseover", "move()")
            textInput.setAttribute('placeholder', 'type here...')
            // setin append child
            squareArea.appendChild(square)
            square.appendChild(subSquare)
            square.appendChild(moveButton)
            subSquare.appendChild(textInput)
            num++
        break;
        case 'circle':

        break;
    }
}