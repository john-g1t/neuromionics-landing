<template>
  <div class="projects-view">
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">
          Наши проекты
        </h1>
        <p class="hero-subtitle">
          Инновационные IT-решения для медицинской реабилитации и биоуправления
        </p>
      </div>
    </section>

    <section class="featured-project">
      <div class="container">
        <div class="project-badge">
          Флагманский проект
        </div>
        <h2 class="project-main-title">
          Комплекс миографических интерфейсов для нейрореабилитации
        </h2>
        <p class="project-main-description">
          Система биологической обратной связи на основе электромиографии (ЭМГ)
          с элементами AR/VR, геймификации и управления физическими объектами
        </p>

        <div class="project-overview">
          <div class="overview-card">
            <h3>Проблема</h3>
            <ul>
              <li>Более 400 тысяч инсультов ежегодно в России</li>
              <li>Сотни тысяч нуждающихся в двигательной реабилитации</li>
              <li>Низкая доступность высокотехнологичных решений</li>
              <li>Недостаточная вовлечённость пациентов в процесс восстановления</li>
            </ul>
          </div>

          <div class="overview-card highlight">
            <h3>Наше решение</h3>
            <ul>
              <li>Инновационная система биологической обратной связи</li>
              <li>Управление виртуальными объектами и дроном через ЭМГ</li>
              <li>AR-очки с визуализацией мышечной активности</li>
              <li>Геймифицированная среда для повышения мотивации</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="implementations-section">
      <div class="container">
        <h2 class="section-title">
          Три реализации единой платформы
        </h2>

        <div class="implementation-grid">
          <div class="impl-card">
            <div class="impl-number">
              01
            </div>
            <div class="impl-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3>AR/VR визуализация мышечной активности</h3>
            <p>
              Визуализация активности мышечных групп в очках дополненной реальности
              с использованием диаграмм Вороного. Каждая группа мышц отображается
              как отдельная ячейка, цвет которой отражает уровень активации.
            </p>
            <div class="impl-features">
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span>Пространственно-точная проекция на модель тела</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span>Цветовая шкала от покоя до максимального усилия</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span>Мгновенная обратная связь в реальном времени</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span>Подсчёт корреляций и абсолютных значений</span>
              </div>
            </div>
            <div class="impl-tech">
              <strong>Технологии:</strong> Unity, C#, OpenXR, алгоритмы обработки ЭМГ
            </div>
          </div>

          <div class="impl-card">
            <div class="impl-number">
              02
            </div>
            <div class="impl-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                />
              </svg>
            </div>
            <h3>Управление виртуальной рукой</h3>
            <p>
              Система преобразует мышечную активность в движения виртуальной руки
              на экране. Пациент учится активировать нужные мышцы и видит результат
              в реальном времени, что способствует восстановлению точности движений.
            </p>
            <div class="impl-features">
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span>Преобразование ЭМГ-сигналов в команды движения</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span>Взаимодействие с виртуальными объектами</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span>Адаптация к миоэлектрическому протезу</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span>Восстановление нейромоторной связи</span>
              </div>
            </div>
            <div class="impl-tech">
              <strong>Технологии:</strong> Unity3D, физический движок, классификация паттернов
            </div>
          </div>

          <div class="impl-card">
            <div class="impl-number">
              03
            </div>
            <div class="impl-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </div>
            <h3>Управление виртуальным и реальным дроном</h3>
            <p>
              Геймифицированная система управления дроном с помощью мышечной активности.
              Напряжение мышц приводит дрон в движение, совмещая игровой процесс
              с терапевтическим эффектом.
            </p>
            <div class="impl-features">
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span>Управление виртуальным и физическим дроном</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span>Преобразование ЭМГ в команды управления</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span>Тренировка моторного контроля и концентрации</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span>Мотивационная форма восстановления моторики</span>
              </div>
            </div>
            <div class="impl-tech">
              <strong>Технологии:</strong> Python, протоколы управления дронами, real-time обработка
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="technical-section">
      <div class="container">
        <h2 class="section-title">
          Технические характеристики
        </h2>

        <div class="tech-specs-grid">
          <div class="spec-card">
            <h3>Производительность</h3>
            <ul>
              <li><strong>Частота дискретизации:</strong> до 1000 Гц на канал</li>
              <li><strong>Каналов обработки:</strong> от 8 до 20</li>
              <li><strong>Задержка системы:</strong> менее 500 мс</li>
              <li><strong>Точность детекции:</strong> более 90%</li>
            </ul>
          </div>

          <div class="spec-card">
            <h3>Аппаратная часть</h3>
            <ul>
              <li><strong>Размеры:</strong> 250×200×100 мм</li>
              <li><strong>Вес:</strong> менее 3 кг (без аккумулятора)</li>
              <li><strong>Энергопотребление:</strong> до 4.5 Вт</li>
              <li><strong>Интерфейс:</strong> USB 2.0 и выше</li>
            </ul>
          </div>

          <div class="spec-card">
            <h3>Программные требования</h3>
            <ul>
              <li><strong>ОС:</strong> Windows 7+, Ubuntu, RedOS</li>
              <li><strong>ОЗУ:</strong> минимум 4 ГБ, оптимально 8 ГБ</li>
              <li><strong>Процессор:</strong> Intel i3/Ryzen 3 и выше</li>
              <li><strong>Место:</strong> 10 ГБ на SSD</li>
            </ul>
          </div>

          <div class="spec-card">
            <h3>Калибровка и использование</h3>
            <ul>
              <li><strong>Время калибровки:</strong> не более 5 минут</li>
              <li><strong>Длительность сессии:</strong> от 10 минут</li>
              <li><strong>Кабель к пациенту:</strong> не менее 2 метров</li>
              <li><strong>Защита:</strong> сглаженные углы, ударопрочный корпус</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="algorithms-section">
      <div class="container">
        <h2 class="section-title">
          Алгоритмы обработки сигналов
        </h2>

        <div class="algo-grid">
          <div class="algo-card">
            <h3>Сглаживание скользящим средним</h3>
            <p>
              Применяется для уменьшения шума в ЭМГ-сигнале и выделения
              полезной информации о мышечной активности.
            </p>
            <div class="formula-box">
              <code>Sum = Σ|x<sub>i</sub> - x'<sub>i</sub>|</code>
            </div>
            <p class="formula-description">
              где Sum — накопленная сумма, x<sub>i</sub> — продецимированный сигнал,
              x'<sub>i</sub> — сглаженный сигнал
            </p>
          </div>

          <div class="algo-card">
            <h3>Детекция активации мышц</h3>
            <p>
              Обнаружение момента начала мышечной активности с использованием
              пороговых значений и анализа паттернов сигнала.
            </p>
            <ul>
              <li>Вычисление амплитудных характеристик</li>
              <li>Анализ частотного спектра</li>
              <li>Классификация паттернов с помощью ML</li>
            </ul>
          </div>

          <div class="algo-card">
            <h3>Визуализация диаграммой Вороного</h3>
            <p>
              Пространственное представление активности мышц, где каждая
              область соответствует одной мышечной группе.
            </p>
            <ul>
              <li>Построение полигонов для каждой мышцы</li>
              <li>Цветовое кодирование уровня активации</li>
              <li>Обновление в реальном времени</li>
            </ul>
          </div>

          <div class="algo-card">
            <h3>Преобразование в команды управления</h3>
            <p>
              Интерпретация ЭМГ-сигналов в команды для управления виртуальными
              и физическими объектами.
            </p>
            <ul>
              <li>Калибровка под пользователя</li>
              <li>Адаптивные пороги активации</li>
              <li>Фильтрация ложных срабатываний</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="testing-section">
      <div class="container">
        <h2 class="section-title">
          Тестирование и валидация
        </h2>

        <div class="testing-grid">
          <div class="testing-card">
            <h3>Фаза 1: Здоровые испытуемые</h3>
            <div class="testing-details">
              <div class="detail-row">
                <span class="detail-label">Участников:</span>
                <span class="detail-value">не менее 30 человек</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Возраст:</span>
                <span class="detail-value">18-30 лет, оба пола</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Цель:</span>
                <span class="detail-value">получение эталонных данных</span>
              </div>
            </div>
            <p>
              Анализ взаимодействия с интерфейсами, оценка скорости обучения,
              определение базовых паттернов мышечной активности.
            </p>
          </div>

          <div class="testing-card">
            <h3>Фаза 2: Пациенты с патологиями</h3>
            <div class="testing-details">
              <div class="detail-row">
                <span class="detail-label">Группы:</span>
                <span class="detail-value">неврологические и ортопедические патологии</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Возраст:</span>
                <span class="detail-value">различные возрастные группы</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Критерии:</span>
                <span class="detail-value">по результатам фазы 1</span>
              </div>
            </div>
            <p>
              Валидация эффективности системы в реальных условиях,
              адаптация алгоритмов под различные типы нарушений.
            </p>
          </div>
        </div>

        <div class="certification-info">
          <h3>Сертификация и регистрация</h3>
          <div class="cert-steps">
            <div class="cert-step">
              <div class="step-number">
                1
              </div>
              <div class="step-content">
                <h4>Технические испытания</h4>
                <p>По ГОСТ ISO 13485, методика ЛПУ</p>
              </div>
            </div>
            <div class="cert-step">
              <div class="step-number">
                2
              </div>
              <div class="step-content">
                <h4>Клинические испытания</h4>
                <p>В аккредитованных медицинских учреждениях</p>
              </div>
            </div>
            <div class="cert-step">
              <div class="step-number">
                3
              </div>
              <div class="step-content">
                <h4>Регистрация</h4>
                <p>Получение удостоверения Росздравнадзора</p>
              </div>
            </div>
            <div class="cert-step">
              <div class="step-number">
                4
              </div>
              <div class="step-content">
                <h4>Сертификация ПО</h4>
                <p>Медицинское изделие класса риска 1/2а</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="applications-section">
      <div class="container">
        <h2 class="section-title">
          Области применения
        </h2>

        <div class="applications-grid">
          <div class="app-card">
            <h3>Медицинская реабилитация</h3>
            <ul>
              <li>Восстановление после инсульта и травм</li>
              <li>Реабилитация при ДЦП</li>
              <li>Подготовка к использованию протезов</li>
              <li>Стационарная и домашняя реабилитация</li>
            </ul>
          </div>

          <div class="app-card">
            <h3>Научные исследования</h3>
            <ul>
              <li>Изучение биомеханики движений</li>
              <li>Нейрофизиологические исследования</li>
              <li>Разработка интерфейсов человек-машина</li>
              <li>Учебно-лабораторные работы в вузах</li>
            </ul>
          </div>

          <div class="app-card">
            <h3>Спортивная медицина</h3>
            <ul>
              <li>Мониторинг мышечной нагрузки</li>
              <li>Коррекция дисбалансов</li>
              <li>Оптимизация тренировочного процесса</li>
              <li>Профилактика травм</li>
            </ul>
          </div>

          <div class="app-card">
            <h3>Образование</h3>
            <ul>
              <li>Обучение основам ЭМГ</li>
              <li>Практические занятия по биофидбеку</li>
              <li>Демонстрация нейроинтерфейсов</li>
              <li>Курсы по биомедицинской инженерии</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="comparison-section">
      <div class="container">
        <h2 class="section-title">
          Сравнение с аналогами
        </h2>

        <div class="comparison-table-wrapper">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Характеристика</th>
                <th>Delsys Trigno</th>
                <th>Neuroforma</th>
                <th>РОСОМЗ-ЭМГ</th>
                <th class="highlight-col">
                  Наш продукт
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Тип обратной связи</td>
                <td>График/видео</td>
                <td>Геймификация</td>
                <td>Отсутствует</td>
                <td class="highlight-col">
                  <strong>AR + геймификация + управление</strong>
                </td>
              </tr>
              <tr>
                <td>Мобильность</td>
                <td>Средняя</td>
                <td>Стационарная</td>
                <td>Низкая</td>
                <td class="highlight-col">
                  <strong>Высокая (переносная)</strong>
                </td>
              </tr>
              <tr>
                <td>Управление объектами</td>
                <td>Нет</td>
                <td>Нет</td>
                <td>Нет</td>
                <td class="highlight-col">
                  <strong>Да (дрон, виртуал)</strong>
                </td>
              </tr>
              <tr>
                <td>Вовлечённость</td>
                <td>Средняя</td>
                <td>Высокая</td>
                <td>Низкая</td>
                <td class="highlight-col">
                  <strong>Высокая</strong>
                </td>
              </tr>
              <tr>
                <td>Стоимость</td>
                <td>1 000 000+ ₽</td>
                <td>600 000+ ₽</td>
                <td>70 000-100 000 ₽</td>
                <td class="highlight-col">
                  <strong>150 000-200 000 ₽</strong>
                </td>
              </tr>
              <tr>
                <td>Целевой сегмент</td>
                <td>Наука, клиники</td>
                <td>Реабилитация</td>
                <td>Учебные цели</td>
                <td class="highlight-col">
                  <strong>Реабилитация, спорт, обучение</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectsView',
})
</script>

<style scoped>
.projects-view {
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 0 80px;
  text-align: center;
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 20px;
  opacity: 0.95;
  max-width: 700px;
  margin: 0 auto;
}

/* Featured Project */
.featured-project {
  padding: 80px 0;
  background: #f8f9fa;
}

.project-badge {
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
}

.project-main-title {
  font-size: 36px;
  color: #1a1a1a;
  margin-bottom: 20px;
  line-height: 1.3;
}

.project-main-description {
  font-size: 18px;
  color: #4a5568;
  margin-bottom: 50px;
  line-height: 1.7;
  max-width: 900px;
}

.project-overview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.overview-card {
  background: white;
  padding: 35px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  color: #a1a1a1;
}

.overview-card.highlight {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.overview-card h3 {
  font-size: 24px;
  margin-bottom: 20px;
}

.overview-card ul {
  list-style: none;
  padding: 0;
}

.overview-card ul li {
  padding: 10px 0;
  padding-left: 30px;
  position: relative;
  line-height: 1.6;
}

.overview-card ul li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #667eea;
}

.overview-card.highlight ul li::before {
  color: white;
}

/* Implementations Section */
.implementations-section {
  padding: 80px 0;
}

.section-title {
  font-size: 36px;
  text-align: center;
  margin-bottom: 60px;
  color: #1a1a1a;
}

.implementations-section .section-title {
  color: #e5e5e5;
}

.algorithms-section .section-title {
  color: #e5e5e5;
}

.applications-section .section-title {
  color: #e5e5e5;
}

.implementation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.impl-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
  position: relative;
  transition: all 0.3s ease;
}

.impl-card:hover {
  border-color: #667eea;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.15);
  transform: translateY(-5px);
}

.impl-number {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 64px;
  font-weight: 700;
  color: #f0f0f0;
  line-height: 1;
}

.impl-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
}

.impl-icon svg {
  width: 36px;
  height: 36px;
  color: white;
}

.impl-card h3 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #1a1a1a;
}

.impl-card > p {
  font-size: 15px;
  line-height: 1.7;
  color: #4a5568;
  margin-bottom: 25px;
}

.impl-features {
  margin-bottom: 25px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.6;
  color: #4a5568;
}

.feature-icon {
  color: #667eea;
  font-weight: 700;
  flex-shrink: 0;
}

.impl-tech {
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
  font-size: 14px;
  color: #718096;
}

.impl-tech strong {
  color: #4a5568;
}

/* Technical Specs */
.technical-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.tech-specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.spec-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
}

.spec-icon {
  font-size: 36px;
  margin-bottom: 15px;
}

.spec-card h3 {
  font-size: 20px;
  margin-bottom: 20px;
  color: #1a1a1a;
}

.spec-card ul {
  list-style: none;
  padding: 0;
}

.spec-card ul li {
  padding: 8px 0;
  font-size: 14px;
  line-height: 1.6;
  color: #4a5568;
  border-bottom: 1px solid #f0f0f0;
}

.spec-card ul li:last-child {
  border-bottom: none;
}

.spec-card ul li strong {
  color: #1a1a1a;
  font-weight: 600;
}

/* Algorithms Section */
.algorithms-section {
  padding: 80px 0;
}

.algo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.algo-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  border-left: 4px solid #667eea;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
}

.algo-card h3 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #1a1a1a;
}

.algo-card p {
  font-size: 15px;
  line-height: 1.7;
  color: #4a5568;
  margin-bottom: 15px;
}

.formula-box {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin: 15px 0;
  text-align: center;
}

.formula-box code {
  font-family: 'Courier New', monospace;
  font-size: 16px;
  color: #667eea;
  font-weight: 600;
}

.formula-description {
  font-size: 13px;
  color: #718096;
  font-style: italic;
}

.algo-card ul {
  list-style: none;
  padding: 0;
}

.algo-card ul li {
  padding: 6px 0;
  padding-left: 20px;
  position: relative;
  font-size: 14px;
  color: #4a5568;
}

.algo-card ul li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: 700;
}

/* Testing Section */
.testing-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.testing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.testing-card {
  background: white;
  padding: 35px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
}

.testing-card h3 {
  font-size: 22px;
  margin-bottom: 25px;
  color: #1a1a1a;
}

.testing-details {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 14px;
}

.detail-label {
  color: #718096;
  font-weight: 600;
}

.detail-value {
  color: #1a1a1a;
  text-align: right;
}

.testing-card > p {
  font-size: 15px;
  line-height: 1.7;
  color: #4a5568;
}

.certification-info {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
}

.certification-info h3 {
  font-size: 26px;
  margin-bottom: 35px;
  color: #1a1a1a;
  text-align: center;
}

.cert-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
}

.cert-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.step-number {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
}

.step-content h4 {
  font-size: 16px;
  margin-bottom: 8px;
  color: #1a1a1a;
}

.step-content p {
  font-size: 13px;
  color: #718096;
  line-height: 1.5;
}

/* Applications Section */
.applications-section {
  padding: 80px 0;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
}

.app-card {
  background: white;
  padding: 35px;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
}

.app-card:hover {
  border-color: #667eea;
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.1);
}

.app-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.app-card h3 {
  font-size: 20px;
  margin-bottom: 20px;
  color: #1a1a1a;
}

.app-card ul {
  list-style: none;
  padding: 0;
}

.app-card ul li {
  padding: 8px 0;
  padding-left: 25px;
  position: relative;
  font-size: 14px;
  line-height: 1.6;
  color: #4a5568;
}

.app-card ul li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: 700;
}

/* Comparison Section */
.comparison-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.comparison-table-wrapper {
  overflow-x: auto;
}

.comparison-table {
  width: 100%;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
}

.comparison-table thead {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.comparison-table th {
  padding: 20px;
  text-align: left;
  font-weight: 600;
  font-size: 15px;
}

.comparison-table td {
  padding: 18px 20px;
  border-bottom: 1px solid #e2e8f0;
  font-size: 14px;
  color: #4a5568;
}

.comparison-table tr:last-child td {
  border-bottom: none;
}

.highlight-col {
  background: #f0f4ff;
  color: #4a5568
}

.comparison-table tbody tr:hover {
  background: #f8f9fa;
}

/* Roadmap Section */
.roadmap-section {
  padding: 80px 0;
}

.roadmap {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.roadmap-item {
  background: white;
  padding: 35px;
  border-radius: 12px;
  border-top: 4px solid #667eea;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
}

.roadmap-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(102, 126, 234, 0.15);
}

.roadmap-year {
  font-size: 14px;
  color: #667eea;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
}

.roadmap-content h3 {
  font-size: 22px;
  margin-bottom: 12px;
  color: #1a1a1a;
}

.roadmap-content p {
  font-size: 15px;
  color: #4a5568;
  margin-bottom: 15px;
  line-height: 1.6;
}

.roadmap-goal {
  background: #f0f4ff;
  color: #667eea;
  padding: 10px 15px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }

  .project-main-title {
    font-size: 28px;
  }

  .project-overview {
    grid-template-columns: 1fr;
  }

  .implementation-grid {
    grid-template-columns: 1fr;
  }

  .tech-specs-grid,
  .algo-grid,
  .testing-grid,
  .applications-grid {
    grid-template-columns: 1fr;
  }

  .comparison-table {
    font-size: 12px;
  }

  .comparison-table th,
  .comparison-table td {
    padding: 12px 10px;
  }

  .roadmap {
    grid-template-columns: 1fr;
  }

  .cert-steps {
    grid-template-columns: 1fr;
  }
}
</style>
