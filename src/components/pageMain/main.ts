import { galleryBlock } from '../pageGallery/gallery';
import { aside } from '../aside/aside';
import phone from '../../../assets/phone.svg';
import share from '../../../assets/share.svg';
import download from '../../../assets/download.svg';

export const mainPage = (): string => `
  <div class="page__main main-page">
    <div class="main-page__sections">
      <div class="main-page__animation"></div>
      <section class="main-page__start">
        <div class="main-page__start-wrap">
          <h1 class="main-page__h1 main-title">EasyCharts</h1>
          <h2 class="main-page__h2">Графики/диаграммы онлайн</h2>
          <button class="main-page__button info-page__button create-chart-button">Cоздать график</button>
          <div class="main-page__images">
            <div class="img-block">
              <img class="main-page__img" src=${phone} alt="phone">
              <p class="img-block__text1"><b>Создайте онлайн, бесплатно</b> и без регистрации</p>
            </div>
            <div class="img-block">
              <img class="main-page__img" src=${share} alt="share">
              <p class="img-block__text2"><b>Делитесь</b> ссылками на ваши графики</p>
            </div>
            <div class="img-block">
              <img class="main-page__img" src=${download} alt="download">
              <p class="img-block__text3"><b>Скачивайте графики</b>
                PNG / JPG / GIF / SVG
              </p>
            </div>
          </div>
        </div>
        ${aside()}
      </section>
      <section class="main-page__gallery">
        <h2 class="main-page__gallery-h2">Галерея графиков/диаграмм</h2>
        ${galleryBlock()}
      </section>
      <section class="main-page__example" id="main-logic-container"></section>
      <section class="main-page__text">
        <p class="main-page__text-p"><b>EasyCharts</b> - сайт для построения графиков/диаграмм онлайн.
          Выберите вид диаграммы
          (линейная, круговая, столбчатая, полосовая, линии, области), заполните данные таблицы
          графика, и диаграмма готова! Диаграмму можно скачать в удобном вам формате или получить
          ссылку на страницу вашего графика. Вы можете также использовать онлайн-конструктор графиков
          на нашем сайте, чтобы скачать график (png/jpeg/и др.) и вставить его в excel, word и другие
          программы на вашем компьютере. Построить диаграмму онлайн очень просто! Читайте подробнее о том,
          как создать диаграмму онлайн здесь. Также вы можете посмотреть примеры диаграмм, чтобы на их основе
          создать необходимый вам график.
        </p>
      </section>
    </div>
  </div>
`;

