import { renderFooter } from './components/footer.js';
import { renderNavbar } from './components/navbar.js';
import { initDetail } from './pages/detail.js';
import { initFerramentas } from './pages/ferramentas.js';
import { initHome } from './pages/home.js';
import { initProjetos } from './pages/projetos.js';
import { initPublicacoes } from './pages/publicacoes.js';
import { initSobre } from './pages/sobre.js';

const page = document.body.dataset.page ?? 'detail';
const initializers: Record<string, () => void> = {
    home: initHome,
    projetos: initProjetos,
    ferramentas: initFerramentas,
    publicacoes: initPublicacoes,
    sobre: initSobre,
    detail: initDetail
};

async function bootstrap(): Promise<void> {
    await Promise.all([renderNavbar(page), renderFooter()]);
    (initializers[page] ?? initDetail)();
}

void bootstrap();