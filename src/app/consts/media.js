import proxy from "../proxies/media"

const media = {
    discord: {
        id: "1409600936392790168",
        tag: "sam.dev",
    },
    stackOverflow: {
        id: "19758208",
        name: "Sam",
    },
    github: "Ola-sam12",
    figma: "elias_dev",
    replit: "EliasDev",
    codewars: "EliasDevis",
    devTo: "eliasdevis",
    cssBattle: "elias_dev",
    codepen: "elias_dev",
    dribble: "Elias_dev",
    email: "samwithgodandcode@gmail.com",
    whatsapp: "2347051948890",

}

export default new Proxy(media, proxy);

