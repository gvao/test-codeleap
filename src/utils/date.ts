export function getDiffDates(dateStart: Date, dateEnd = new Date()) {
    const datePost = dateStart.getTime()
    const now = dateEnd.getTime()

    const diff = datePost - now

    const date = new Date(diff)
    const int = new Intl.RelativeTimeFormat("pt-BR", {
        style: "short",
        localeMatcher: "lookup",
        numeric: "auto",
    })

    const seconds = Math.round(diff / 1000)
    const minutes = Math.round(seconds / 60)
    const hours = Math.round(minutes / 60)
    const days = Math.round(hours / 24)

    let typeSuggestion: 'seconds' | 'minutes' | 'hours' | 'days';
    let data = {
        seconds,
        minutes,
        hours,
        days,
    }

    if (seconds >= -60) {
        typeSuggestion = 'seconds'
        return int.format(data[typeSuggestion], typeSuggestion)
    }
    else if (minutes >= -60) {
        typeSuggestion = 'minutes'
        return int.format(data[typeSuggestion], typeSuggestion)
    }
    else if (hours >= -24) {
        typeSuggestion = 'hours'
        return int.format(data[typeSuggestion], typeSuggestion)
    }

    typeSuggestion = 'days'
    return int.format(data[typeSuggestion], typeSuggestion)
}