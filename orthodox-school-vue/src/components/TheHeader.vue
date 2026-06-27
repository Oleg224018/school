<script setup>
import logo from '../assets/images/logo.jpg'
</script>

<template>
  <div class="header-bg">
    <header class="header">
      <RouterLink to="/" class="logo">
        <img :src="logo" alt="Логотип школы" class="logo-image" />

        <div class="logo-title">
  Свято-Екатерининская
  <br>
  православная школа
</div>
      </RouterLink>

      <nav class="nav">
        <RouterLink to="/about">О школе</RouterLink>
        <RouterLink to="/education">Образование</RouterLink>
        <RouterLink to="/parenting">Воспитание</RouterLink>
        <RouterLink to="/news">Новости</RouterLink>
        <RouterLink to="/parents">Родителям</RouterLink>
        <RouterLink to="/contacts">Контакты</RouterLink>
      </nav>

      <RouterLink to="/admission" class="admission-btn">
        Поступление
      </RouterLink>
    </header>
  </div>
</template>