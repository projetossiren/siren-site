export async function renderFooter(): Promise<void> {
    const target = document.querySelector<HTMLElement>('[data-footer]');
    if (!target) return;

    const response = await fetch('/pages/components/footer.html');
    if (!response.ok) throw new Error(`Nao foi possivel carregar o footer: ${response.status}`);
    target.innerHTML = await response.text();
}
