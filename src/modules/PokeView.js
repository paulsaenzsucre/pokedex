import heartIcon from '../assets/heart-icon.svg';

class PokeView {
  #presenter;

  #ui;

  #likes;

  constructor(presenter) {
    this.#presenter = presenter;
    this.#ui = this.#createDOMElements();
    this.updateLikes();
  }

  get ui() {
    return this.#ui;
  }

  updateLikes = async () => {
    const l = await this.#presenter.getLikes();
    this.#likes.innerText = `${l} likes`;
  }

  #createDOMElements = () => {
    const pokeCard = document.createElement('div');
    pokeCard.setAttribute('class', 'poke-card');
    let div = document.createElement('div');
    div.setAttribute('class', 'poke-show');

    let img = document.createElement('img');
    img.setAttribute('class', 'poke-img');
    img.setAttribute('loading', 'lazy');
    img.src = this.#presenter.imgLink;
    div.appendChild(img);

    let p = document.createElement('p');
    p.setAttribute('class', 'poke-id');
    p.innerText = this.#presenter.id;
    div.appendChild(p);

    p = document.createElement('p');
    p.setAttribute('class', 'poke-gen');
    p.innerText = this.#presenter.gen;
    div.appendChild(p);
    pokeCard.appendChild(div);

    // Pokemon details
    div = document.createElement('div');
    div.setAttribute('class', 'poke-dets');
    let div2 = document.createElement('div');
    div2.setAttribute('class', 'poke-data');

    p = document.createElement('p');
    p.setAttribute('class', 'poke-name');
    p.innerText = this.#presenter.name;
    div2.appendChild(p);

    p = document.createElement('p');
    p.setAttribute('class', 'poke-types');
    p.innerText = this.#presenter.types;
    div2.appendChild(p);
    div.appendChild(div2);
    pokeCard.appendChild(div);

    div2 = document.createElement('div');
    div2.setAttribute('class', 'poke-likes');
    const iconCont = document.createElement('div');
    iconCont.setAttribute('class', 'heart-icon-cont');

    img = document.createElement('img');
    img.setAttribute('class', 'like-icon');
    img.src = heartIcon;
    iconCont.appendChild(img);
    div2.appendChild(iconCont);

    this.#likes = document.createElement('p');
    this.#likes.setAttribute('class', 'likes-count');
    this.#likes.innerText = '0 likes';
    div2.appendChild(this.#likes);
    div.appendChild(div2);
    pokeCard.appendChild(div);

    // Buttons
    div = document.createElement('div');
    div.setAttribute('class', 'poke-btns');
    let btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'com-btn poke-btn');
    let span = document.createElement('span');
    span.innerText = 'COMMENTS';
    btn.appendChild(span);
    btn.addEventListener('click', this.#presenter.openComments);
    div.appendChild(btn);

    btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'res-btn poke-btn');
    span = document.createElement('span');
    span.innerText = 'RESERVATIONS';
    btn.appendChild(span);
    btn.addEventListener('click', this.#presenter.openReservations);
    div.appendChild(btn);
    pokeCard.appendChild(div);

    return pokeCard;
  }
}
export default PokeView;