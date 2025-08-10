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
  { name: "SOAD", id: "2407001", img: "images/soad.jpg" },
  { name: "FATEMA", id: "2407002", img: "images/fatema.jpg" },
  { name: "MAHIR", id: "2407003", img: "images/mahir.jpg" },
  { name: "SARBAJIT", id: "2407004", img: "images/sarbajit.jpg" },
  { name: "NAFIS", id: "2407005", img: "images/nafis.jpg" },
  { name: "KASIB", id: "2407006", img: "images/kasib.jpg" },
  { name: "NAFIZA", id: "2407007", img: "images/nafiza.jpg" },
  { name: "BISMOY", id: "2407008", img: "images/bismoy.jpg" },
  { name: "MUSHFIQUE", id: "2407009", img: "images/mushfique.jpg" },
  { name: "ARAFAT", id: "2407010", img: "images/arafat.jpg" },
  { name: "SHADMAN", id: "2407011", img: "images/shadman.jpg" },
  { name: "IRTIZA", id: "2407012", img: "images/irtiza.jpg" },
  { name: "NABEEL", id: "2407013", img: "images/nabeel.jpg" },
  { name: "OHONA", id: "2407014", img: "images/ohona.jpg" },
  { name: "NAFI", id: "2407015", img: "images/nafi.jpg" },
  { name: "SIAM", id: "2407016", img: "images/siam.jpg" },
  { name: "ZULFIQAR", id: "2407017", img: "images/zulfiqar.jpg" },
  { name: "FAHEEM", id: "2407018", img: "images/faheem.jpg" },
  { name: "FARHAN", id: "2407019", img: "images/farhan.jpg" },
  { name: "AKIB", id: "2407020", img: "images/akib.jpg" },
  { name: "AVIK", id: "2407021", img: "images/avik.jpg" },
  { name: "DEEPAN", id: "2407022", img: "images/deepan.jpg" },
  { name: "SOUMMO", id: "2407023", img: "images/soummo.jpg" },
  { name: "KUASHA", id: "2407024", img: "images/kuasha.jpg" },
  { name: "ZISHAN", id: "2407025", img: "images/zishan.jpg" },
  { name: "TASNIM", id: "2407026", img: "images/tasnim.jpg" },
  { name: "SUBHE", id: "2407027", img: "images/subhe.jpg" },
  { name: "APURBA", id: "2407028", img: "images/apurba.jpg" },
  { name: "MUZAHID", id: "2407029", img: "images/muzahid.jpg" },
  { name: "ASHRAFUL", id: "2407030", img: "images/ashraful.jpg" },
  { name: "ABHIJIT", id: "2407031", img: "images/abhijit.jpg" },
  { name: "MUSHFIQ", id: "2407032", img: "images/mushfiq.jpg" },
  { name: "OREO", id: "2407033", img: "images/oreo.jpg" },
  { name: "NISHAN", id: "2407034", img: "images/nishan.jpg" },
  { name: "SAYHAM", id: "2407035", img: "images/sayham.jpg" },
  { name: "SAFY", id: "2407036", img: "images/safy.jpg" },
  { name: "REZWAN", id: "2407037", img: "images/rezwan.jpg" },
  { name: "NABIL", id: "2407038", img: "images/nabil.jpg" },
  { name: "RADOWAN", id: "2407039", img: "images/radowan.jpg" },
  { name: "YASIR", id: "2407040", img: "images/yasir.jpg" },
  { name: "ATHOY", id: "2407041", img: "images/athoy.jpg" },
  { name: "SHAKIL", id: "2407042", img: "images/shakil.jpg" },
  { name: "ZOHAYER", id: "2407043", img: "images/zohayer.jpg" },
  { name: "HASNAIN", id: "2407044", img: "images/hasnain.jpg" },
  { name: "SHIFAT", id: "2407045", img: "images/shifat.jpg" },
  { name: "SAAD", id: "2407046", img: "images/saad.jpg" },
  { name: "SHAHRIA", id: "2407047", img: "images/shahria.jpg" },
  { name: "ANSH", id: "2407048", img: "images/ansh.jpg" },
  { name: "BUSHRA", id: "2407049", img: "images/bushra.jpg" },
  { name: "WAFI", id: "2407050", img: "images/wafi.jpg" },
  { name: "NOBONEEL", id: "2407051", img: "images/noboneel.jpg" },
  { name: "BOSUDHA", id: "2407052", img: "images/bosudha.jpg" },
  { name: "ARIK", id: "2407053", img: "images/arik.jpg" },
  { name: "DITU", id: "2407054", img: "images/ditu.jpg" },
  { name: "BANDHON", id: "2407055", img: "images/bandhon.jpg" },
  { name: "RAFIN", id: "2407056", img: "images/rafin.jpg" },
  { name: "TAHLIL", id: "2407057", img: "images/tahlil.jpg" },
  { name: "AZMAIN", id: "2407058", img: "images/azmain.jpg" },
  { name: "ARAFAT", id: "2407059", img: "images/arafat2.jpg" },
  { name: "FAHMID", id: "2407060", img: "images/fahmid.jpg" },
  { name: "ZAWAD", id: "2407061", img: "images/zawad.jpg" },
  { name: "ADIB", id: "2407062", img: "images/adib.jpg" },
  { name: "HAMIM", id: "2407063", img: "images/hamim.jpg" },
  { name: "SHIMUL", id: "2407064", img: "images/shimul.jpg" },
  { name: "ARINDAM", id: "2407065", img: "images/arindam.jpg" },
  { name: "SAYEED", id: "2407066", img: "images/sayeed.jpg" },
  { name: "KAMRUL", id: "2407067", img: "images/kamrul.jpg" },
  { name: "ASHRAFUL", id: "2407068", img: "images/ashraful2.jpg" },
  { name: "JOYITA", id: "2407069", img: "images/joyita.jpg" },
  { name: "RAFI", id: "2407070", img: "images/rafi.jpg" },
  { name: "SUHAIL", id: "2407071", img: "images/suhail.jpg" },
  { name: "THOWAI", id: "2407072", img: "images/thowai.jpg" },
  { name: "MEHJABIN", id: "2407073", img: "images/mehjabin.jpg" },
  { name: "JUNAID", id: "2407074", img: "images/junaid.jpg" },
  { name: "EFTY", id: "2407075", img: "images/efty.jpg" },
  { name: "SHOVO", id: "2407076", img: "images/shovo.jpg" },
  { name: "TASDID", id: "2407077", img: "images/tasdid.jpg" },
  { name: "SAFIN", id: "2407078", img: "images/safin.jpg" },
  { name: "TAMJID", id: "2407079", img: "images/tamjid.jpg" },
  { name: "SAAD", id: "2407080", img: "images/saad2.jpg" },
  { name: "APU", id: "2407081", img: "images/apu.jpg" },
  { name: "FAIZA", id: "2407082", img: "images/faiza.jpg" },
  { name: "RAHAT", id: "2407083", img: "images/rahat.jpg" },
  { name: "TOROSHA", id: "2407084", img: "images/torosha.jpg" },
  { name: "SIAM", id: "2407085", img: "images/siam2.jpg" },
  { name: "TURJO", id: "2407086", img: "images/turjo.jpg" },
  { name: "PRANTO", id: "2407087", img: "images/pranto.jpg" },
  { name: "PRONOY", id: "2407088", img: "images/pronoy.jpg" },
  { name: "TANZEEM", id: "2407089", img: "images/tanzeem.jpg" },
  { name: "RAKIB", id: "2407090", img: "images/rakib.jpg" },
  { name: "RAD", id: "2407091", img: "images/rad.jpg" },
  { name: "MILHAN", id: "2407092", img: "images/milhan.jpg" },
  { name: "ATRI", id: "2407093", img: "images/atri.jpg" },
  { name: "RASHEDUL", id: "2407094", img: "images/rashedul.jpg" },
  { name: "DIBBO", id: "2407095", img: "images/dibbo.jpg" },
  { name: "AZMAIN", id: "2407096", img: "images/azmain2.jpg" },
  { name: "MAWA", id: "2407097", img: "images/mawa.jpg" },
  { name: "BROTI", id: "2407098", img: "images/broti.jpg" },
  { name: "MAHIR", id: "2407099", img: "images/mahir2.jpg" },
  { name: "NAJMUL", id: "2407100", img: "images/najmul.jpg" },
  { name: "TAHSIN", id: "2407101", img: "images/tahsin.jpg" },
  { name: "FARHAN", id: "2407102", img: "images/farhan2.jpg" },
  { name: "MAHI", id: "2407103", img: "images/mahi.jpg" },
  { name: "RITU", id: "2407104", img: "images/ritu.jpg" },
  { name: "TASNIM", id: "2407105", img: "images/tasnim2.jpg" },
  { name: "AYESHA", id: "2407106", img: "images/ayesha.jpg" },
  { name: "ADIB", id: "2407107", img: "images/adib2.jpg" },
  { name: "MAHIMA", id: "2407108", img: "images/mahima.jpg" },
  { name: "SHEMONTY", id: "2407109", img: "images/shemonty.jpg" },
  { name: "RATUL", id: "2407110", img: "images/ratul.jpg" },
  { name: "RUP", id: "2407111", img: "images/rup.jpg" },
  { name: "MASUM", id: "2407112", img: "images/masum.jpg" },
  { name: "HRIDITA", id: "2407113", img: "images/hridita.jpg" },
  { name: "DIPTO", id: "2407114", img: "images/dipto.jpg" },
  { name: "LUBAN", id: "2407115", img: "images/luban.jpg" },
  { name: "ABDULLAH", id: "2407116", img: "images/abdullah.jpg" },
  { name: "SHAFIUL", id: "2407117", img: "images/shafiul.jpg" },
  { name: "ARCHI", id: "2407118", img: "images/archi.jpg" },
  { name: "ANTU", id: "2407119", img: "images/antu.jpg" },
  { name: "SHAMIUL", id: "2407120", img: "images/shamiul.jpg" },
  { name: "TALHA", id: "2407121", img: "images/talha.jpg" },
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
