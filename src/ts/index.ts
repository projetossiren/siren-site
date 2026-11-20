interface IMember {
    name: string;
    contact: string;
}

const inner = document.querySelector("#who-we-are .inner") as HTMLElement | null;

if (!inner) {
    throw new Error("Container do carrossel de membros nao encontrado.");
}

const memberRing = inner;

const members: IMember[] = [
    
]

function updateMemberRing(): void {
    const quantity = members.length;
    const mobile = window.innerWidth <= 600;
    const maximumCardWidth = mobile ? 104 : 130;
    const minimumCardWidth = mobile ? 58 : 72;
    const densityFactor = quantity <= 6
        ? 1
        : Math.max(minimumCardWidth / maximumCardWidth, Math.sqrt(6 / quantity));
    const cardWidth = maximumCardWidth * densityFactor;
    const cardHeight = cardWidth * 1.38;
    const spacing = cardWidth + (mobile ? 8 : 14);
    const requiredRadius = spacing / (2 * Math.tan(Math.PI / quantity));
    const radius = Math.max(mobile ? 150 : 220, requiredRadius);

    memberRing.style.setProperty("--quantity", quantity.toString());
    memberRing.style.setProperty("--w", `${cardWidth}px`);
    memberRing.style.setProperty("--h", `${cardHeight}px`);
    memberRing.style.setProperty("--translateZ", `${radius}px`);
}

inner.innerHTML = members.map((member, index) => `
    <div class="member-card card" style="--index: ${index};">
        <div class="member-image">
            <img src="/src/assets/images/${member.name}.png" alt="Foto de ${member.name}">
        </div>

        <div class="member-info">
            <h3>${member.name}</h3>
            <p>${member.contact}</p>
        </div>
    </div>
`).join("");

updateMemberRing();
window.addEventListener("resize", updateMemberRing);