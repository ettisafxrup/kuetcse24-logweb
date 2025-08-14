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
  { name: "SOAD", id: "2407001" },
  { name: "FATEMA", id: "2407002" },
  { name: "MAHIR", id: "2407003" },
  { name: "SARBAJIT", id: "2407004" },
  { name: "NAFIS", id: "2407005" },
  { name: "KASIB", id: "2407006" },
  { name: "NAFIZA", id: "2407007" },
  { name: "BISMOY", id: "2407008" },
  { name: "MUSHFIQUE", id: "2407009" },
  { name: "ARAFAT", id: "2407010" },
  { name: "SHADMAN", id: "2407011" },
  { name: "IRTIZA", id: "2407012" },
  { name: "NABEEL", id: "2407013" },
  { name: "OHONA", id: "2407014" },
  { name: "NAFI", id: "2407015" },
  { name: "SIAM", id: "2407016" },
  { name: "ZULFIQAR", id: "2407017" },
  { name: "FAHEEM", id: "2407018" },
  { name: "FARHAN", id: "2407019" },
  { name: "AKIB", id: "2407020" },
  { name: "AVIK", id: "2407021" },
  { name: "DEEPAN", id: "2407022" },
  { name: "SOUMMO", id: "2407023" },
  { name: "KUASHA", id: "2407024" },
  { name: "ZISHAN", id: "2407025" },
  { name: "TASNIM", id: "2407026" },
  { name: "SUBHE", id: "2407027" },
  { name: "APURBA", id: "2407028" },
  { name: "MUZAHID", id: "2407029" },
  { name: "ASHRAFUL", id: "2407030" },
  { name: "ABHIJIT", id: "2407031" },
  { name: "MUSHFIQ", id: "2407032" },
  { name: "OREO", id: "2407033" },
  { name: "NISHAN", id: "2407034" },
  { name: "SAYHAM", id: "2407035" },
  { name: "SAFY", id: "2407036" },
  { name: "REZWAN", id: "2407037" },
  { name: "NABIL", id: "2407038" },
  { name: "RADOWAN", id: "2407039" },
  { name: "YASIR", id: "2407040" },
  { name: "ATHOY", id: "2407041" },
  { name: "SHAKIL", id: "2407042" },
  { name: "ZOHAYER", id: "2407043" },
  { name: "HASNAIN", id: "2407044" },
  { name: "SHIFAT", id: "2407045" },
  { name: "SAAD", id: "2407046" },
  { name: "SHAHRIA", id: "2407047" },
  { name: "ANSH", id: "2407048" },
  { name: "BUSHRA", id: "2407049" },
  { name: "WAFI", id: "2407050" },
  { name: "NOBONEEL", id: "2407051" },
  { name: "BOSUDHA", id: "2407052" },
  { name: "ARIK", id: "2407053" },
  { name: "DITU", id: "2407054" },
  { name: "BANDHON", id: "2407055" },
  { name: "RAFIN", id: "2407056" },
  { name: "TAHLIL", id: "2407057" },
  { name: "AZMAIN", id: "2407058" },
  { name: "ARAFAT", id: "2407059" },
  { name: "FAHMID", id: "2407060" },
  { name: "ZAWAD", id: "2407061" },
  { name: "ADIB", id: "2407062" },
  { name: "HAMIM", id: "2407063" },
  { name: "SHIMUL", id: "2407064" },
  { name: "ARINDAM", id: "2407065" },
  { name: "SAYEED", id: "2407066" },
  { name: "KAMRUL", id: "2407067" },
  { name: "ASHRAFUL", id: "2407068" },
  { name: "JOYITA", id: "2407069" },
  { name: "RAFI", id: "2407070" },
  { name: "SUHAIL", id: "2407071" },
  { name: "MEHJABIN", id: "2407072" },
  { name: "JUNAID", id: "2407073" },
  { name: "EFTY", id: "2407074" },
  { name: "SHOVO", id: "2407075" },
  { name: "TASDID", id: "2407076" },
  { name: "SAFIN", id: "2407077" },
  { name: "TAMJID", id: "2407078" },
  { name: "SAAD", id: "2407079" },
  { name: "APU", id: "2407080" },
  { name: "FAIZA", id: "2407081" },
  { name: "RAHAT", id: "2407082" },
  { name: "TOROSHA", id: "2407083" },
  { name: "SIAM", id: "2407084" },
  { name: "TURJO", id: "2407085" },
  { name: "PRANTO", id: "2407086" },
  { name: "PRONOY", id: "2407087" },
  { name: "TANZEEM", id: "2407088" },
  { name: "RAKIB", id: "2407089" },
  { name: "RAD", id: "2407090" },
  { name: "MILHAN", id: "2407091" },
  { name: "ATRI", id: "2407092" },
  { name: "RASHEDUL", id: "2407093" },
  { name: "DIBBO", id: "2407094" },
  { name: "AZMAIN", id: "2407095" },
  { name: "MAWA", id: "2407096" },
  { name: "BROTI", id: "2407097" },
  { name: "MAHIR", id: "2407098" },
  { name: "NAJMUL", id: "2407099" },
  { name: "TAHSIN", id: "2407100" },
  { name: "FARHAN", id: "2407101" },
  { name: "MAHI", id: "2407102" },
  { name: "RITU", id: "2407103" },
  { name: "TASNIM", id: "2407104" },
  { name: "AYESHA", id: "2407105" },
  { name: "ADIB", id: "2407106" },
  { name: "MAHIMA", id: "2407107" },
  { name: "SHEMONTY", id: "2407108" },
  { name: "RATUL", id: "2407109" },
  { name: "RUP", id: "2407110" },
  { name: "MASUM", id: "2407111" },
  { name: "HRIDITA", id: "2407112" },
  { name: "DIPTO", id: "2407113" },
  { name: "LUBAN", id: "2407114" },
  { name: "ABDULLAH", id: "2407115" },
  { name: "SHAFIUL", id: "2407116" },
  { name: "ARCHI", id: "2407117" },
  { name: "ANTU", id: "2407118" },
  { name: "SHAMIUL", id: "2407119" },
  { name: "TALHA", id: "2407120" },
  { name: "THOWAI", id: "2407121" },
]

const memberGrid = document.getElementById("memberGrid")

members.forEach((member) => {
  const card = document.createElement("div")
  card.classList.add("member-card")
  card.innerHTML = `
        <h3>${member.name}</h3>
        <p><span style="font-weight: bold; color: deeppink">#</span>${member.id}</p>
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
