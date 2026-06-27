<template>
  <main>
    <Header />
    <section class="simple-page container">
      <h1>Поступление</h1>
      <p>
        Приём в школу открыт. Оставьте заявку, и мы пригласим вас на экскурсию
        и собеседование.
      </p>

      <form class="admission-form">
        <input type="text" placeholder="Ваше имя" />
        <input type="tel" placeholder="Телефон" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Комментарий"></textarea>
        <button type="submit">Подать заявку</button>
      </form>
    </section>
    <Footer />
  </main>
</template>

<script setup>
import Header from '../components/TheHeader.vue'
import Footer from '../components/TheFooter.vue'
</script>