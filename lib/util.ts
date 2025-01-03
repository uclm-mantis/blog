// client side functions

export const slug2anchor = (slug: string): string => {
    return slug.replace(/[^a-zA-Z0-9-_\.]+/g, "").replace(/^\d/, "_")
}
