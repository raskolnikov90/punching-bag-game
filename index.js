const grid = document.querySelector('.grid')
let playerPosition = 124
let bagPosition = 144
let numclicks = 0
let walking
for(let i = 0; i < 280; i++){
	const square = document.createElement('div')
	grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))


function drawPlayer() {
	squares[playerPosition].innerHTML = ' <img src="images/ryustand.gif" width="110" height="210"> '
	walking = false
	console.log(playerPosition)
}


function drawBag() {
	squares[bagPosition].innerHTML = ' <img class="bag" src="images/bag.png" width="120" height="200"> '
	console.log(bagPosition)
}

function movePlayer(e){
		if(walking == false) {
			setTimeout(drawPlayer, 320)
		}
		switch(e.key){
			case 'ArrowLeft':
				squares[playerPosition].innerHTML = ''
				if(playerPosition !== 120){
					playerPosition -= 1
				}
				break
			case 'ArrowRight':
				squares[playerPosition].innerHTML = ''
				if(playerPosition +1 !== 154){
					playerPosition += 1
					break
				}
		}
		squares[playerPosition].innerHTML = '<img src="images/ryu-walk.gif" width="160" height="210">'	
		walking = true
		drawBag()

}

function bagpunched(){	
	if (playerPosition >= bagPosition - 7 || playerPosition == bagPosition + 7) {
		squares[bagPosition].innerHTML = ''
		if(bagPosition !== 154){
			bagPosition += 2
		}
		squares[bagPosition].innerHTML = ' <img class="bag" src="images/punched.png" width="120" height="200"> '
		setTimeout(drawBag, 300)
	}
}

function punchkick(){
	window.onclick =  numclicks +=1
	if (numclicks == 2) {
		squares[playerPosition].innerHTML = '<img src="images/ryukick.gif" width="200" height="220">'
		bagpunched()
		setTimeout(drawPlayer, 180) 
		numclicks = 0
	}
	if (numclicks == 1) {
		squares[playerPosition].innerHTML = '<img src="images/ryupunch.gif" width="180" height="210">'
		bagpunched()
		setTimeout(drawPlayer, 300)
	}


}



document.addEventListener('keydown', movePlayer)
document.addEventListener('keyup', drawPlayer)
document.addEventListener('click', punchkick)

drawBag()
drawPlayer()