// Typing Animation
const mottoText = "We’re already logged in. SUIT UP. It's SHOWTIME🔥"
let mottoIndex = 0
const mottoElement = document.getElementById("typedMotto")

function typeMotto() {
  if (mottoIndex < mottoText.length) {
    mottoElement.textContent += mottoText.charAt(mottoIndex)
    mottoIndex++
    setTimeout(typeMotto, 40)
  }
}
window.onload = typeMotto

// Example member data (replace with actual)
const members = [
  { name: "John Doe", role: "President", img: "images/member1.jpg" },
  { name: "Jane Smith", role: "Vice President", img: "images/member2.jpg" },
  // ... Add all 121 members here
]

const memberGrid = document.getElementById("memberGrid")

members.forEach((member) => {
  const card = document.createElement("div")
  card.classList.add("member-card")
  card.innerHTML = `
        <img src="${member.img}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.role}</p>
    `
  memberGrid.appendChild(card)
})

// Fade-in on Scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-card")
      }
    })
  },
  { threshold: 1 }
)

document.querySelectorAll(".member-card").forEach((card) => {
  observer.observe(card)
})
