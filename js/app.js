function alterarStatus(id) {
    const game = document.getElementById(`game-${id}`);
    const img = game.querySelector('.dashboard__item__img');
    const button = game.querySelector('.dashboard__item__button');
    const estahAlugado = img.classList.contains('dashboard__item__img--rented');
    
    img.classList.toggle('dashboard__item__img--rented');
    button.classList.toggle('dashboard__item__button--return');

    button.textContent = estahAlugado ? 'Alugar' : 'Devolver';
}