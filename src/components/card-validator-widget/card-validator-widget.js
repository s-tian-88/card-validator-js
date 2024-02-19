import { cardNumberValidator, cardPaymentSystemValidator } from './utils';
import './card-validator-widget.css';

export default class CardValidatorWidget {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('Container is not HTMLElement');
    }

    this.container = container;
  }

  start() {
    this.createWidget();

    document.querySelector('.input-field').addEventListener('input', this.inputOnChange);
  }

  createWidget() {
    this.container.innerHTML = `
    <div class="widget">
      <div class="title"><label class="label" for="card_number">Card number validator</label></div>
      <div class="cards">
        <ul class="cards-list">
          <li class="cards-list-item">
            <div class="card mir"></div>
          </li>
          <li class="cards-list-item">
            <div class="card visa"></div>
          </li>
          <li class="cards-list-item">
            <div class="card master-card"></div>
          </li>
          <li class="cards-list-item">
            <div class="card american-express"></div>
          </li>
          <li class="cards-list-item">
            <div class="card union-pay"></div>
          </li>
        </ul>
      </div>
      <form class="form-inline">
        <div class="form-group">
          <input class="input-field" type="text" placeholder="Card number..." id="card_number">
        </div>
      </form>
    </div>
    `;
  }

  inputOnChange(e) {
    e.preventDefault();
    const cardNumber = e.target.value;

    if (this._timeout) {
      clearTimeout(this._timeout);
    }

    this._timeout = setTimeout(() => {
      if (cardNumberValidator(cardNumber)) {
        e.target.classList.add('correct');
        const cards = document.querySelectorAll('.card');
        const cardClass = cardPaymentSystemValidator(cardNumber);

        for (const c of cards) {
          if (!(c.classList.contains(cardClass))) {
            c.classList.add('disable');
          }
        }
      } else {
        for (const c of document.querySelectorAll('.card')) {
          c.classList.remove('disable');
          e.target.classList.remove('correct');
        }
      }
    }, 300);
  }
}
