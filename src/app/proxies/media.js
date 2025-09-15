import websites from "../consts/websites"


export default {
    get(target, name) {
        if (name === "emailRaw")
            return target.email

        if (name === "whatsappRaw") // 👈 NEW
            return `+${target.whatsapp}`

        if (name === "discord")
            return `https://${websites.discord}${target.discord.id}`
        if (name === "discordTag")
            return target.discord.tag

        return `${name === "email" ? "" : "https://"}${websites[name] ?? ""}${target[name]}`
    }
}
