<script setup>
import Header from '../components/TheHeader.vue'
import Footer from '../components/TheFooter.vue'
</script>

<template>
  <main>
    <Header />

    <section class="history-full container">
      <h1>История школы</h1>

      <p>
        Наша школа была основана в 2005 году по благословению митрополита
        и при поддержке прихода.
      </p>

      <p>
        В 2010 году был открыт новый учебный корпус. Школа стала развиваться,
        расширять образовательные программы и принимать новых учеников.
      </p>

      <p>
        В 2020 году школа продолжила развитие проектов, духовно-нравственного
        воспитания и современных образовательных направлений.
      </p>

      <RouterLink to="/about" class="outline-btn">
        Назад к школе
      </RouterLink>
    </section>

    <Footer />
  </main>
</template>