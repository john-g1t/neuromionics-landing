<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <!-- Company Info -->
          <div class="footer-column">
            <div class="footer-logo">
              <div class="logo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <span class="logo-text">Нейромионика</span>
            </div>
            <p class="company-description">
              Разрабатываем передовые IT-решения для медицинской реабилитации
              и биоуправления. Делаем технологии доступными.
            </p>
          </div>

          <!-- Navigation -->
          <div class="footer-column">
            <h3 class="footer-title">
              Навигация
            </h3>
            <ul class="footer-links">
              <li>
                <router-link to="/about">
                  О компании
                </router-link>
              </li>
              <li>
                <router-link to="/projects">
                  Проекты
                </router-link>
              </li>
              <li>
                <router-link to="/services">
                  Услуги
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div class="footer-column">
            <h3 class="footer-title">
              Услуги
            </h3>
            <ul class="footer-links">
              <li><a href="#" onclick="return false;">Разработка ПАК</a></li>
              <li><a href="#" onclick="return false;">AR/VR решения</a></li>
              <li><a href="#" onclick="return false;">Машинное обучение</a></li>
              <li><a href="#" onclick="return false;">Веб-платформы</a></li>
              <li><a href="#" onclick="return false;">Инжиниринг</a></li>
              <li><a href="#" onclick="return false;">Техподдержка</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="footer-column">
            <h3 class="footer-title">
              Контакты
            </h3>
            <ul class="contact-list">
              <li class="contact-item">
                <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>г. Воронеж, Россия</span>
              </li>
              <li class="contact-item">
                <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:neyromionica@mail.ru">neyromionica@mail.ru</a>
              </li>
              <li class="contact-item">
                <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:89103483764">8 (910) 348-37-64</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <div class="footer-bottom-left">
            <p class="copyright">
              © {{ currentYear }} Нейромионика. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  width: 100%;
  margin-top: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Footer Main */
.footer-main {
  background: #1a202c;
  color: #e2e8f0;
  padding: 60px 0 40px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 50px;
  margin-bottom: 40px;
}

.footer-column {
  display: flex;
  flex-direction: column;
}

/* Logo & Company Info */
.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-icon svg {
  width: 24px;
  height: 24px;
  color: white;
}

.logo-text {
  font-size: 20px;
  font-weight: 700;
  color: white;
}

.company-description {
  font-size: 14px;
  line-height: 1.7;
  color: #a0aec0;
  margin-bottom: 25px;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 40px;
  height: 40px;
  background: #2d3748;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a0aec0;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: translateY(-3px);
}

.social-link svg {
  width: 20px;
  height: 20px;
}

/* Footer Titles */
.footer-title {
  font-size: 16px;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Footer Links */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: #a0aec0;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.3s ease;
  display: inline-block;
}

.footer-links a:hover {
  color: #667eea;
  transform: translateX(3px);
}

/* Contact List */
.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-item {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 14px;
  color: #a0aec0;
}

.contact-icon {
  width: 20px;
  height: 20px;
  color: #667eea;
  flex-shrink: 0;
  margin-top: 2px;
}

.contact-item a {
  color: #a0aec0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: #667eea;
}

/* Footer Bottom */
.footer-bottom {
  background: #171923;
  padding: 25px 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-bottom-left {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.copyright {
  font-size: 14px;
  color: #718096;
  margin: 0;
}

.footer-legal {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.footer-legal a {
  font-size: 13px;
  color: #a0aec0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-legal a:hover {
  color: #667eea;
}

.separator {
  color: #4a5568;
  font-size: 13px;
}

/* Footer Badges */
.footer-badges {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.badge {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #2d3748;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 12px;
  color: #a0aec0;
}

.badge svg {
  width: 16px;
  height: 16px;
  color: #667eea;
}

/* Scroll to Top Button */
.scroll-top-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
  z-index: 1000;
}

.scroll-top-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.scroll-top-btn svg {
  width: 24px;
  height: 24px;
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .footer-main {
    padding: 40px 0 30px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .footer-bottom-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .footer-bottom-right {
    width: 100%;
  }

  .footer-badges {
    justify-content: flex-start;
  }

  .scroll-top-btn {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
  }
}

@media (max-width: 480px) {
  .social-links {
    flex-wrap: wrap;
  }

  .footer-legal {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .separator {
    display: none;
  }

  .footer-badges {
    width: 100%;
  }

  .badge {
    flex: 1;
    justify-content: center;
  }
}
</style>
