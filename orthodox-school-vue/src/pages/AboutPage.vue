<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import Header from '../components/TheHeader.vue'
import Footer from '../components/TheFooter.vue'

import img1 from '../assets/images/about-1.jpg'
import img2 from '../assets/images/about-2.jpg'
import img3 from '../assets/images/about-3.jpg'
import img4 from '../assets/images/about-4.jpg'
import img5 from '../assets/images/about-5.jpg'

import history1 from '../assets/images/church.jpg'
import history2 from '../assets/images/history-2.jpg'
import history3 from '../assets/images/history-3.jpg'
import todayImg from '../assets/images/hero.jpg'
import priestImg from '../assets/images/visit.jpg'

import {
  BookOpen,
  Heart,
  Users,
  GraduationCap,
  ShieldCheck,
  Church,
  School,
  UserRound,
  Landmark,
  Cross
} from 'lucide-vue-next'

const heroImages = [img1, img2, img3, img4, img5]

const currentImage = ref(0)

let interval

onMounted(() => {
  interval = setInterval(() => {
    currentImage.value = (currentImage.value + 1) % heroImages.length
  }, 2500)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <main>
    <Header />

    <section class="about-hero">
  <div class="about-hero-content">
    <div class="breadcrumbs">
      <RouterLink to="/">Главная</RouterLink>
      <span>›</span>
      <span>О школе</span>
    </div>

    <h1>О нашей школе</h1>

    <p>
      Православная школа — это место, где сочетаются вера, традиции
      и современное образование. Мы помогаем детям расти духовно,
      развиваться интеллектуально и становиться достойными гражданами
      своей страны и верными чадами Церкви Христовой.
    </p>
  </div>

  <div class="about-hero-image">
    <transition name="fade" mode="out-in">
      <img
        :key="currentImage"
        :src="heroImages[currentImage]"
        alt="О школе"
      />
    </transition>
  </div>
</section>

    <section class="mission-section container">
      <div class="mission-text">
        <h2>Наша миссия</h2>
        <div class="gold-line"></div>
        <p>
          Мы воспитываем в детях любовь к Богу, ближнему и Отечеству,
          даём прочные знания и помогаем раскрыть таланты каждого ученика.
        </p>
      </div>

      <div class="mission-cards">
        <div class="mission-card">
          <BookOpen />
          <h3>Вера</h3>
          <p>Формируем православное мировоззрение, основанное на Евангельских заповедях.</p>
        </div>

        <div class="mission-card">
          <BookOpen />
          <h3>Знания</h3>
          <p>Даём качественное образование, соответствующее современным стандартам.</p>
        </div>

        <div class="mission-card">
          <Heart />
          <h3>Добро</h3>
          <p>Воспитываем милосердие, честность, трудолюбие и ответственность.</p>
        </div>

        <div class="mission-card">
          <Users />
          <h3>Общность</h3>
          <p>Создаём тёплую атмосферу дружбы, взаимопомощи и уважения.</p>
        </div>
      </div>
    </section>

<section class="history-section container">
  <div class="history-text">
    <h2>История школы</h2>
    <div class="gold-line"></div>

    <p>
      Наша школа была основана в 2005 году по благословению митрополита
      и при поддержке прихода. С тех пор мы бережно храним православные
      традиции и развиваем образовательные программы.
    </p>

    <RouterLink to="/history" class="outline-btn">
      НАША ИСТОРИЯ
    </RouterLink>
  </div>

  <div class="history-timeline">
    <div class="history-images">
      <img :src="history1" alt="История школы 2014" />
      <img :src="history2" alt="История школы 2015" />
      <img :src="history3" alt="История школы 2016" />
    </div>

    <div class="timeline-line">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="timeline-years">
      <div>
        <strong>2014</strong>
        <p>Основание школы</p>
      </div>

      <div>
        <strong>2015</strong>
        <p>Свято‑Екатерининскому приходу переданы помещения в бывшем здании Приходского училища</p>
      </div>

      <div>
        <strong>2016</strong>
        <p>Три класса переезжают в отремонтированное старинное здание </p>
      </div>
    </div>
  </div>
</section>

    <section class="today-section container">
      <div class="today-overlay">
        <h2>Наша школа сегодня</h2>
        <div class="gold-line"></div>

        <div class="today-stats">
          <div>
            <strong>450+</strong>
            <Users />
            <p>учеников</p>
          </div>

          <div>
            <strong>30+</strong>
            <UserRound />
            <p>опытных педагогов</p>
          </div>

          <div>
            <strong>20</strong>
            <BookOpen />
            <p>учебных кабинетов</p>
          </div>

          <div>
            <strong>10+</strong>
            <Landmark />
            <p>кружков и секций</p>
          </div>

          <div>
            <strong>1</strong>
            <Church />
            <p>духовник школы</p>
          </div>
        </div>
      </div>

      <img :src="todayImg" alt="Ученики" />
    </section>

    <section class="values-section container">
      <h2>Ценности нашей школы</h2>
      <div class="gold-line"></div>

      <div class="values-grid">
        <div class="value-card">
          <div class="orthodox-cross">☦</div>
          <h3>Православие</h3>
          <p>В центре нашей жизни — вера в Бога и следование Евангельским истинам.</p>
        </div>

        <div class="value-card">
          <Users />
          <h3>Семья</h3>
          <p>Мы ценим тесное сотрудничество школы и семьи в воспитании детей.</p>
        </div>

        <div class="value-card">
          <GraduationCap />
          <h3>Образование</h3>
          <p>Стремимся к высокому уровню знаний и постоянному развитию учеников.</p>
        </div>

        <div class="value-card">
          <Heart />
          <h3>Служение</h3>
          <p>Воспитываем желание помогать ближним и приносить пользу обществу.</p>
        </div>

        <div class="value-card">
          <ShieldCheck />
          <h3>Патриотизм</h3>
          <p>Любим свою Родину и учимся быть ответственными её гражданами.</p>
        </div>
      </div>
    </section>

    <section class="visit-section container">
      <img :src="priestImg" alt="Приходите к нам в гости" />

      <div>
        <h2>Приходите к нам в гости!</h2>
        <p>
          Мы будем рады показать нашу школу, ответить на ваши вопросы
          и познакомить с педагогами и учениками.
        </p>

       <RouterLink to="/admission" class="cta-btn">
  Записаться на экскурсию
</RouterLink>
      </div>
    </section>

    <Footer />
  </main>
</template>