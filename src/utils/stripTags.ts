export const stripTags = (str: string) => {
    return new DOMParser().parseFromString(str, "text/html").body.textContent
}