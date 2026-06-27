<template>
  <main>
    <Header />
    <section class="simple-page container">
      <h1>Новости</h1>
      <div class="news-grid page-news">
        <NewsCard
          image="../assets/images/news-pascha.jpg"
          date="20 мая 2024"
          title="Праздник Пасхи в нашей школе"
          text="Как прошёл пасхальный утренник и ярмарка."
        />
        <NewsCard
          image="../assets/images/news-class.jpg"
          date="15 мая 2024"
          title="Олимпиада по математике"
          text="Наши ученики показали отличные результаты!"
        />
      </div>
    </section>
    <Footer />
  </main>
</template>

<script setup>
import Header from '../components/TheHeader.vue'
import Footer from '../components/TheFooter.vue'
import NewsCard from '../components/NewsCard.vue'
</script>