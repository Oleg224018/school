<template>
  <main>
    <section class="hero">
      <Header />

      <div class="hero-inner">
        <div class="hero-text">
          <h1>Путь к знаниям через веру, любовь и труд!</h1>
          <div class="line"></div>
          <p>
            Наши ученики - призеры городских, районных, областных и всероссийских конкурсов и олимпиад.
          </p>

          <div class="hero-actions">
            <RouterLink to="/admission" class="primary-btn">
              Узнать больше
            </RouterLink>
            <RouterLink to="/about" class="link-btn">
              О нашей школе <ArrowRight size="20" />
            </RouterLink>
          </div>
        </div>

        <div class="hero-photo">
          <img src="../assets/images/hero.jpg" alt="Ученики православной школы" />
        </div>
      </div>
    </section>

    <section class="features">
  <div class="features-inner container">
      <FeatureCard
        :icon="Church"
        title="Православное воспитание"
        text="Формируем христианские ценности и добродетели"
      />
      <FeatureCard
        :icon="BookOpen"
        title="Качественное образование"
        text="Современные программы и высокий уровень знаний"
      />
      <FeatureCard
        :icon="Heart"
        title="Индивидуальный подход"
        text="Забота о каждом ребёнке и его развитии"
      />
      <FeatureCard
        :icon="Users"
        title="Дружная семья"
        text="Тёплая атмосфера, поддержка и взаимопонимание"
      />
      </div>
    </section>

    <section class="about-section">
      <div class="container about-grid">
        <div>
          <h2>О нашей школе</h2>
          <div class="line"></div>
          <p>
            Православная школа — это место, где сочетаются вера, традиции
            и современное образование. Мы помогаем детям расти духовно,
            интеллектуально и творчески, чтобы они стали достойными гражданами
            своей страны и верными сынами и дочерьми Церкви Христовой.
          </p>
          <RouterLink to="/about" class="outline-btn">Подробнее</RouterLink>
        </div>

        <img class="about-image" src="../assets/images/about.jpg" alt="Здание школы" />
      </div>
    </section>

    <section class="news-section container">
      <div class="section-head">
        <h2>Новости школы</h2>
        <RouterLink to="/news" class="all-news">
          Смотреть все новости <ArrowRight size="20" />
        </RouterLink>
      </div>

      <div class="news-grid">

<NewsCard
  :image="newsClass"
  date="1 июня 2026"
  title="Открытие лагеря"
  text="Наш выездной лагерь принял ребят, готовых к приключениям."
/>

<NewsCard
  :image="newsTrip"
  date="23 апреля 2026"
  title="Поездка в Москву"
  text="Сегодня наши ученики отправились в насыщенную поездку по Москве."
/>

<NewsCard
  :image="newsPascha"
  date="12 апреля  2026"
  title="Праздник Пасхи в нашей школе"
  text="Как прошёл пасхальный утренник и ярмарка."
/>

<NewsCard
  :image="newsArt"
  date=" 3 апреля 2026"
  title="Второй класс побывали в Доме-музее пряника"
  text="На экскурсии ребята узнали не только о традициях русского пряника, но и об истории приготовления шоколада."
/>
</div>
    </section>

    <section class="cta container">
      <Church class="cta-icon" />
      <h2>Приём в школу открыт!</h2>
      <p>
        Мы рады новым ученикам и их родителям. Запишитесь на экскурсию и узнайте больше о нашей школе.
      </p>
      <RouterLink to="/admission" class="primary-btn">
       Подать заявку
       </RouterLink>
    </section>

    <Footer />
  </main>
</template>

<script setup>
import Header from '../components/TheHeader.vue'
import Footer from '../components/TheFooter.vue'
import FeatureCard from '../components/FeatureCard.vue'
import NewsCard from '../components/NewsCard.vue'

import newsPascha from '../assets/images/news-pascha.jpg'
import newsClass from '../assets/images/news-class.jpg'
import newsTrip from '../assets/images/news-trip.jpg'
import newsArt from '../assets/images/news-art.jpg'

import {
  ArrowRight,
  BookOpen,
  Heart,
  Users,
  Church
} from 'lucide-vue-next'
</script>