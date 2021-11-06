export default function sort(data) {
    const result = data.slice().sort((a,b) => {
        if (a.health > b.health) return -1
        if (a.health === b.health) return 0
        if (a.health < b.health) return 1
    })
    return result
}