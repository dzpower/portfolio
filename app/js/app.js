import $ from "jquery";
const typewriterText = [
	"Nuxt.js",
	"JavaScript",
	"Vue.js",
	"GIT",
	"CSS3",
	"SASS",
	"SCSS",
	"WordPress",
	"HTML5"
]

const writerElement = document.querySelector("#writer")
let textIter = 0

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

async function deleteEffect() {
	let word = typewriterText[textIter].split("")
	while (word.length > 0) {
		word.pop()
		writerElement.textContent = word.join("")
		await sleep(100)
	}
}

async function typeEffect() {
	const word = typewriterText[textIter].split("")
	while (word.length > 0) {
		writerElement.textContent += word.shift()
		await sleep(100)
	}
}

async function typingEffect() {
	await typeEffect()
	await sleep(1000)
	await deleteEffect()
	textIter = (textIter + 1) % typewriterText.length
	typingEffect()
}












typingEffect()

