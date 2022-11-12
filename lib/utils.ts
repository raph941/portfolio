import readingTime from 'reading-time'

export const getReadTime = (text: string) => {
    if (!text) return ''
    const stats = readingTime(text)
    return Number(stats.minutes).toFixed(0)
}
