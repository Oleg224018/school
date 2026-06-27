<script setup>
import logo from '../assets/images/logo.jpg'
</script>

<template>
  <section class="footer-section">
    <footer class="footer">

      <div class="footer-logo">
        <img :src="logo" alt="Логотип школы" class="footer-logo-image" />

        <div>
          <div class="logo-title">
            ПРАВОСЛАВНАЯ<br />
            ШКОЛА
          </div>

          <div class="logo-subtitle">
            Вера. Знания. Добро.
          </div>
        </div>
      </div>

      <div class="footer-nav">
        <h4>Навигация</h4>

        <RouterLink to="/about">О школе</RouterLink>
        <RouterLink to="/education">Образование</RouterLink>
        <RouterLink to="/parenting">Воспитание</RouterLink>
        <RouterLink to="/news">Новости</RouterLink>
        <RouterLink to="/parents">Родителям</RouterLink>
        <RouterLink to="/contacts">Контакты</RouterLink>
      </div>

      <div>
        <h4>Контакты</h4>

        <p>	Адрес: Владимирская область, Судогодский район, г. Судогда, ул. Красная, д. 25, индекс: 601352</p>
        <p>8(49235)2-10-29; 8(920)933-35-20</p>
        <p>morohin@yandex.ru</p>

        <div class="socials">
          <a href="https://vk.com/public179712062?ysclid=mq7wpyr9af833205664" target="_blank">vk</a>
        </div>
      </div>

    </footer>
  </section>
</template>