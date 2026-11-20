export async function renderNavbar(currentPage: string): Promise<void> {
    const target = document.querySelector<HTMLElement>('[data-navbar]');
    if (!target) return;

    const response = await fetch('/pages/components/navbar.html');
    if (!response.ok) throw new Error(`Nao foi possivel carregar a navbar: ${response.status}`);
    target.innerHTML = await response.text();

    target.querySelector<HTMLAnchorElement>(`[data-page-link="${currentPage}"]`)?.setAttribute('aria-current', 'page');

    const toggle = target.querySelector<HTMLButtonElement>('.menu-toggle');
    const menu = target.querySelector<HTMLElement>('.nav-links');
    toggle?.addEventListener('click', () => {
        const isOpen = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!isOpen));
        menu?.classList.toggle('is-open', !isOpen);
    });
}
