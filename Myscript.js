const MyTextCase = document.getElementById("textCase");
const buttonId = document.getElementById("ageCase")
const createParag = document.getElementById("paraId")
const CreateParadiv = document.getElementById("CreateParadiv")
const nameCases = document.getElementById("nameCase")
const yourNames = document.getElementById("yourName")
const blocApps = document.getElementById("blocApp")
const profiledescriptions = document.getElementById("profiledescription")
const TitleIdUserss = document.getElementById("TitleIdUse")
const openModals = document.getElementById("openModal")
const restarts = document.getElementById("restart")


dateOver10 = () => {
    if (MyTextCase.value >= 10) {
        (
            createParag.textContent = `${medium.p4}`)
    }
    else ("rien")
}

dateOver15 = () => {
    if (MyTextCase.value >= 15) {
        (createParag.textContent = `${medium.p5}`)
    } else ("rien")
}

dateOver16 = () => {
    if (MyTextCase.value >= 16) {
        (createParag.textContent = `${medium.p6}`)
    } else ("rien")
}

dateOver17a = () => {
    if (MyTextCase.value >= 17) {
        (createParag.textContent = `${medium.p5a}`)
    } else ("rien")
}

dateOver17b = () => {
    if (MyTextCase.value == 19) {
        (createParag.textContent = `${medium.p5b}`)
    } else ("rien")
}

dateOver20 = () => {
    if (MyTextCase.value >= 20) {
        (createParag.textContent = `${medium.p7}`)
    } else ("rien")
}

dateOver22 = () => {
    if (MyTextCase.value >= 22) {
        (createParag.textContent = `${medium.p8}`)
    } else ("rien")
}

dateOver24 = () => {
    if (MyTextCase.value >= 24) {
        (createParag.textContent = `${medium.p9}`)
    } else ("rien")

}

dateOver26 = () => {
    if (MyTextCase.value >= 26) {
        (createParag.textContent = `${medium.p9}`)

    } else ("rien")

}



Array = () => {
    [

        medium = {

            p1: `Tu es unique et intelligent. Il se peut que un évenement à venir t'attend. Les ${nameCases.value} sont généralement généreuse!`,

            p2: `Généralement, les ${nameCases.value} sont tres prudent et viennent toujours en aide aux personnes qui les entourent.`,

            p3: `Tu répresente quelqu'un de très sympa et génial. Les profils de ton genre sont toujours patients 😇 et les méilleurs les attendent.${nameCases.value},😇 tu as de la chance !`,

            p4: `${nameCases.value}, tu es une personne charismatique et généreuse. Ton profil réflète quelqu'un de sérieux dans ce qu'il fait. Comme tu es né en ${2022 - MyTextCase.value}😃, il se peut qu'en ${2022 + 1} un évenement heureux puisse t'arriver  .`,

            p5: `${nameCases.value}, tu es né en ${2022 - MyTextCase.value}, à ${MyTextCase.value} ans tu es parvenu à faire toutes ces grandes choses que tu viens de réaliser, tu es une personne chanceuse ${nameCases.value} cette nouvelle année qui va commencer.`,

            p5a: `${nameCases.value}, tu es né en ${2022 - MyTextCase.value}, à ${MyTextCase.value} ans, l'age que tu as, tu as dévéloppé des grandes compétences dans ce que tu fais. Tu es une personne chanceuse ${nameCases.value} et au courant de cette nouvelle année qui va commencer, tu va rencontrer des personnes importantes dans ta vie.`,

            p5b: `Les personnes né en ${2022 - MyTextCase.value} comme toi ${nameCases.value}, son très positives et sévère. ${nameCases.value}; tu as un parcours difficile et malgré les nombreuses difficultés que tu as traversées, tu va t'en sortir dans cette nouvelle année 💆! Tu as feté tes ${MyTextCase.value} ans cette année.`,

            p6: `${nameCases.value}, Les personnes de ton profil ${nameCases.value}, son généralement hospitalière! Et c'est un plus.. Tu es né en ${2022 - MyTextCase.value} et cette année, tu fetes tes ${MyTextCase.value} ans d'anniversaire 🎉. Saches que les meilleures choses t'attendent en 2023..😇 `,

            p7: `Les personnes né en ${2022 - MyTextCase.value}, comme toi ${nameCases.value}, sont en grande partie intelligente et intègre🙂. ${nameCases.value}, sache que tu as un parcours signifiant et malgré les difficultés que tu traverses, tu va assurer pour cette nouvelle année qui va commencer.`,

            p8: `${nameCases.value}, ton profil indique combien de fois tu es une personne courageuse qui aime travailler! C'est pour cela que les gens autour de toi t'apprécie.. Tu es né en ${2022 - MyTextCase.value} tu fetes tes ${MyTextCase.value} ans d'anniversaire cette année! 🎉, et les meilleures choses t'attendent en 2023..😇 `,

            p9: `Les personnes qui portent le nom de "${nameCases.value}", son généralement logique, intelligente et créatives! 🙂  Tous le monde les apprécie. ${nameCases.value}, Tu es né en ${2022 - MyTextCase.value} et cette année, tu fetes tes ${MyTextCase.value} ans d'anniversaire 🎉. Toutes les bonnes choses t'attendent en 2023.. `,

        }]

    if (MyTextCase.value <= 5) {

        createParag.textContent = `${nameCases.value}, tu es né ${2022 - MyTextCase.value} ce que tu as ${MyTextCase.value} ans. ${medium.p1} `;
    } else {
        (
            createParag.textContent = `${nameCases.value}, tu es né en ${2022 - MyTextCase.value} tu as ${MyTextCase.value} ans. ${medium.p2}`)
    }

    if (MyTextCase.value >= 6) {

        createParag.textContent = `${medium.p3}`;
    }

    deleTespaceAge = () => {
        if (MyTextCase.value.trim() != '') {

            dateOver10()
            dateOver15()
            dateOver16()
            dateOver17a()
            dateOver17b()
            dateOver20()
            dateOver22()
            dateOver24()

        }
        MyTextCase.value = "";
    }

    deleTespaceAge()

deleTespaceName = () => {
        if (nameCases.value.trim() != '') {
            deleTespaceAge()
        }
        nameCases.value = "";

    }

    deleTespaceName()


}


buttonId.addEventListener('click', function (e) {

    e.preventDefault()
    TitleIdUser.style.display = "none"  
    TitleIdUserss.style.display = "block"
    TitleIdUserss.textContent = `Ton profil ${nameCases.value} 🖐`;
    nameCases.style.display = "none"
    MyTextCase.style.display = "none"
    buttonId.style.display = "none"
    createParag.style.padding = "20px"
    createParag.style.justifyContent = "center"
    createParag.style.marginBottom = "80px"
    restarts.style.display = "block"
    restarts.style.marginBottom = "45px"
    Array()
 
})

