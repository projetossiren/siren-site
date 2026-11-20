export function initDetail(): void {
    const title = document.body.dataset.title;
    if (title) document.title = `${title} | SIREN`;
}
